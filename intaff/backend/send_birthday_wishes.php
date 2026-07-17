<?php
/**
 * send_birthday_wishes.php
 * ─────────────────────────────────────────────────────────────────────────────
 * Scans ALL alumni tables for today's birthdays and sends HTML email wishes.
 * Supports a CLI argument to simulate any date: php send_birthday_wishes.php 2026-07-08
 * Logs every success/failure to tracking.log.
 */

require_once __DIR__ . '/config.php';
require_once __DIR__ . '/vendor/autoload.php';

use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\Exception;

// ── Logging helper ────────────────────────────────────────────────────────────
$log_file = __DIR__ . '/tracking.log';
function log_msg(string $msg): void {
    global $log_file;
    $line = '[' . date('Y-m-d H:i:s') . '] ' . $msg . "\n";
    echo $line;
    file_put_contents($log_file, $line, FILE_APPEND | LOCK_EX);
}

// ── Test-date argument: php send_birthday_wishes.php 2026-07-08 ───────────────
$test_date = null;
if (isset($argv[1]) && preg_match('/^\d{4}-\d{2}-\d{2}$/', $argv[1])) {
    $test_date = $argv[1];
}

// The month and day we compare birthdays against
$compare_month = $test_date ? date('m', strtotime($test_date)) : date('m');
$compare_day   = $test_date ? date('d', strtotime($test_date)) : date('d');

$run_label = $test_date ? "TEST MODE (simulating {$test_date})" : "LIVE (today = " . date('Y-m-d') . ")";

log_msg("=== Birthday Wisher Started | {$run_label} ===");

// ── Database connection ───────────────────────────────────────────────────────
$conn = new mysqli(DB_HOST, DB_USER, DB_PASS, DB_NAME);
if ($conn->connect_error) {
    log_msg("FATAL: DB connection failed: " . $conn->connect_error);
    exit(1);
}

// ── DYNAMICALLY DETECT ALL ALUMNI TABLES AND THEIR COLUMNS ────────────────────
// 1. Automatically detect every alumni table from the current database
$tables = [];
$res_tables = $conn->query("SHOW TABLES LIKE 'alumni\_%'"); // Using \_ to strictly match 'alumni_' prefix
if ($res_tables) {
    while ($row = $res_tables->fetch_array(MYSQLI_NUM)) {
        $table_name = $row[0];
        
        // 2. For every detected table, automatically detect the column names
        $res_cols = $conn->query("SHOW COLUMNS FROM `{$table_name}`");
        if (!$res_cols) {
            log_msg("  WARN: Could not fetch columns for {$table_name}");
            continue;
        }
        
        $cols = [];
        while ($col_row = $res_cols->fetch_assoc()) {
            $cols[] = $col_row['Field'];
        }
        
        // Check for basic required columns: id and dob
        if (!in_array('id', $cols) || !in_array('dob', $cols)) {
            // 3. Skip any table that does not contain the required columns instead of crashing
            log_msg("  SKIP: Table {$table_name} missing 'id' or 'dob' column");
            continue; 
        }
        
        // Detect name column
        $name_col = null;
        $possible_name_cols = ['first_name', 'student_name', 'name'];
        foreach ($possible_name_cols as $pc) {
            if (in_array($pc, $cols)) {
                $name_col = $pc;
                break;
            }
        }
        
        // Detect email column
        $email_col = null;
        $possible_email_cols = ['personal_email', 'email'];
        foreach ($possible_email_cols as $pc) {
            if (in_array($pc, $cols)) {
                $email_col = $pc;
                break;
            }
        }
        
        // Add to tables array if all required columns are found
        if ($name_col && $email_col) {
            $tables[] = [$table_name, $name_col, $email_col];
        } else {
            log_msg("  SKIP: Table {$table_name} missing name or email column");
        }
    }
} else {
    log_msg("FATAL: Failed to query tables: " . $conn->error);
    exit(1);
}

$total_found  = 0;
$total_sent   = 0;
$total_failed = 0;

foreach ($tables as [$table, $name_col, $email_col]) {
    
    // 1. Query for today's birthdays in this table
    $sql = "
        SELECT id, {$name_col} AS name, {$email_col} AS email, dob
        FROM `{$table}`
        WHERE {$email_col} IS NOT NULL AND TRIM({$email_col}) != ''
          AND dob IS NOT NULL AND TRIM(dob) != ''
          AND MONTH(STR_TO_DATE(dob, '%Y-%m-%d')) = ? 
          AND DAY(STR_TO_DATE(dob, '%Y-%m-%d')) = ?
    ";
    
    // Note: If dob is stored in formats other than YYYY-MM-DD, the STR_TO_DATE above might fail.
    // If it's a mix, a more robust way is needed, or ensuring consistent data format. 
    // Assuming YYYY-MM-DD or similar standard format that MONTH()/DAY() can parse if it's a DATE type.
    // If it's varchar 'YYYY-MM-DD', MySQL often implicitly converts for MONTH() if it resembles a date.
    // Let's use string manipulation as fallback since we saw DATE_FORMAT work previously.
    $sql = "
        SELECT id, {$name_col} AS name, {$email_col} AS email, dob
        FROM `{$table}`
        WHERE {$email_col} IS NOT NULL AND TRIM({$email_col}) != ''
          AND dob IS NOT NULL AND TRIM(dob) != ''
          AND (
                (MONTH(dob) = ? AND DAY(dob) = ?) OR 
                (DATE_FORMAT(dob, '%m') = LPAD(?, 2, '0') AND DATE_FORMAT(dob, '%d') = LPAD(?, 2, '0'))
              )
    ";

    $stmt = $conn->prepare($sql);
    if (!$stmt) {
        log_msg("  WARN: Could not prepare query for {$table}: " . $conn->error);
        continue;
    }
    
    $stmt->bind_param("iiii", $compare_month, $compare_day, $compare_month, $compare_day);
    $stmt->execute();
    $result = $stmt->get_result();
    
    while ($alumni = $result->fetch_assoc()) {
        $total_found++;
        $alumni_id = (int)$alumni['id'];
        $name      = trim($alumni['name'] ?? 'Alumni');
        $email     = trim($alumni['email']);

        // 2. Check for duplicates today
        $check_sql = "
            SELECT id FROM birthday_wishes_log
            WHERE alumni_id = ? AND table_name = ? AND sent_date = CURDATE() AND status = 'sent'
        ";
        $check_stmt = $conn->prepare($check_sql);
        $check_stmt->bind_param("is", $alumni_id, $table);
        $check_stmt->execute();
        $check_res = $check_stmt->get_result();
        
        if ($check_res->num_rows > 0) {
            log_msg("  SKIP: Already sent today to {$name} (id={$alumni_id}, table={$table})");
            $check_stmt->close();
            continue;
        }
        $check_stmt->close();

        log_msg("  Processing: {$name} <{$email}> (id={$alumni_id}, table={$table})");

        // 3. Pre-insert log row (pending)
        $ins = $conn->prepare("
            INSERT INTO birthday_wishes_log
                (alumni_id, table_name, sent_date, status, email_sent_to, is_read)
            VALUES (?, ?, CURDATE(), 'pending', ?, 0)
        ");
        $ins->bind_param("iss", $alumni_id, $table, $email);
        $ins->execute();
        $log_id = (int)$conn->insert_id;
        $ins->close();

        // Build tracking pixel URL
        $tracking_url = TRACKING_BASE_URL . "?log_id={$log_id}";

        // Build HTML email
        $year = date('Y');
        $email_body = <<<HTML
        <!DOCTYPE html>
        <html lang="en">
        <head>
          <meta charset="utf-8">
          <meta name="viewport" content="width=device-width, initial-scale=1.0">
          <title>Happy Birthday!</title>
        </head>
        <body style="margin:0; padding:0; background:#f0f4ff; font-family:'Segoe UI',Arial,sans-serif;">
          <div style="max-width:600px; margin:30px auto; background:#fff; border-radius:16px; overflow:hidden; box-shadow:0 4px 24px rgba(99,102,241,.12);">
            <div style="background:linear-gradient(135deg,#6366f1,#a855f7); padding:48px 32px; text-align:center; color:#fff;">
              <h1 style="margin:0 0 8px; font-size:34px; font-weight:800; letter-spacing:-0.5px;">Happy Birthday! 🎂</h1>
              <p style="margin:0; font-size:16px; opacity:.9;">Warmest wishes from your Alma Mater</p>
            </div>
            <div style="padding:36px 32px; color:#334155; line-height:1.8;">
              <h2 style="margin:0 0 16px; font-size:22px; color:#1e293b;">Dear {$name},</h2>
              <p>On behalf of the entire Alumni Association and the college community, we wish you a very <strong>Happy Birthday</strong>! 🎉</p>
              <div style="border-left:4px solid #6366f1; background:#f8fafc; padding:16px 20px; margin:24px 0; font-style:italic; color:#475569; border-radius:0 10px 10px 0;">
                "May this special day mark the beginning of a year filled with joy, good health, great achievements, and endless possibilities."
              </div>
              <p>We are proud of everything you have accomplished and excited for everything that lies ahead. Stay connected with us through the Alumni Portal and keep inspiring!</p>
              <p>With warm regards,<br><strong>Alumni Relations Team</strong><br><em>IIIT Kottayam</em></p>
            </div>
            <div style="background:#f8fafc; padding:20px 32px; text-align:center; font-size:12px; color:#94a3b8; border-top:1px solid #e2e8f0;">
              <p>Sent with ❤️ by the Alumni Association Portal &copy; {$year}</p>
            </div>
          </div>
          <img src="{$tracking_url}" width="1" height="1" border="0" alt="" style="height:1px!important;width:1px!important;border-width:0!important;margin:0!important;padding:0!important;" />
        </body>
        </html>
        HTML;

        // 4. Send Email
        $mail = new PHPMailer(true);
        try {
            $mail->SMTPDebug  = 0;
            $mail->isSMTP();
            $mail->Host       = SMTP_HOST;
            $mail->SMTPAuth   = true;
            $mail->Username   = SMTP_USER;
            $mail->Password   = SMTP_PASS;
            $mail->SMTPSecure = (SMTP_PORT == 465) ? PHPMailer::ENCRYPTION_SMTPS : PHPMailer::ENCRYPTION_STARTTLS;
            $mail->Port       = SMTP_PORT;
            $mail->CharSet    = 'UTF-8';

            $mail->setFrom(SMTP_FROM_EMAIL, SMTP_FROM_NAME);
            $mail->addAddress($email, $name);
            $mail->isHTML(true);
            $mail->Subject = "Happy Birthday, {$name}! 🎉";
            $mail->Body    = $email_body;
            $mail->AltBody = "Dear {$name},\n\nHappy Birthday! Wishing you a wonderful year.\n\nBest Regards,\nAlumni Association Team";

            $mail->send();

            // Mark as sent
            $conn->query("UPDATE birthday_wishes_log SET status='sent' WHERE id={$log_id}");
            log_msg("  ✓ Sent to {$email}");
            $total_sent++;

        } catch (Exception $e) {
            $err = $conn->real_escape_string($mail->ErrorInfo);
            $conn->query("UPDATE birthday_wishes_log SET status='failed' WHERE id={$log_id}");
            log_msg("  ✗ FAILED to send to {$email}. Error: {$err}");
            $total_failed++;
        }
    }
    $stmt->close();
}

$conn->close();
log_msg("=== Done | Found: {$total_found} | Sent: {$total_sent} | Failed: {$total_failed} ===");
?>
