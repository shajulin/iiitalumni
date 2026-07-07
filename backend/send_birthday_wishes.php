<?php
/**
 * send_birthday_wishes.php
 * Standalone CLI script to query database, find matching birthdays,
 * log the wishes, embed tracking pixels, and email them using PHPMailer.
 */

// Import database and configuration
require_once __DIR__ . '/config.php';

// Import PHPMailer classes from Composer autoloader
require_once __DIR__ . '/vendor/autoload.php';

use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\Exception;

// Initialize Database Connection using mysqli
$conn = new mysqli(DB_HOST, DB_USER, DB_PASS, DB_NAME);

if ($conn->connect_error) {
    die("Database Connection failed: " . $conn->connect_error . "\n");
}

echo "=== Birthday Wisher Execution: " . date('Y-m-d H:i:s') . " ===\n";

// Query alumni whose birthday (Month and Day) matches today's date
// Handles dob in YYYY-MM-DD format (string or date)
$query = "SELECT a." . COL_ID . ", a." . COL_NAME . ", a." . COL_EMAIL . ", a." . COL_DOB . "
          FROM " . TABLE_ALUMNI . " a
          LEFT JOIN birthday_wishes_log l
            ON l.alumni_id = a." . COL_ID . "
            AND l.sent_date = CURRENT_DATE()
            AND l.status = 'sent'
          WHERE a." . COL_EMAIL . " IS NOT NULL
            AND a." . COL_EMAIL . " != ''
            AND a." . COL_DOB . " IS NOT NULL
            AND a." . COL_DOB . " != ''
            AND DATE_FORMAT(a." . COL_DOB . ", '%m-%d') = DATE_FORMAT(NOW(), '%m-%d')
            AND l.id IS NULL";

$result = $conn->query($query);

if (!$result) {
    die("Query failed: " . $conn->error . "\n");
}

$count = $result->num_rows;
echo "Found {$count} alumni celebrating their birthday today.\n";

if ($count > 0) {
    while ($alumni = $result->fetch_assoc()) {
        $alumni_id = $alumni[COL_ID];
        $name = $alumni[COL_NAME];
        $email = $alumni[COL_EMAIL];
        
        echo "Processing: {$name} ({$email})...\n";

        // 1. Pre-log the wish in the database to get the unique Log ID for tracking
        $log_stmt = $conn->prepare("INSERT INTO birthday_wishes_log (alumni_id, sent_date, status, email_sent_to, is_read) VALUES (?, CURRENT_DATE(), 'pending', ?, 0)");
        $log_stmt->bind_param("is", $alumni_id, $email);
        $log_stmt->execute();
        $log_id = $conn->insert_id;
        $log_stmt->close();

        // Generate tracking pixel URL (must be publicly accessible for Gmail proxy to reach it)
        $tracking_url = TRACKING_BASE_URL . "?log_id=" . $log_id;
        echo "   Tracking URL: {$tracking_url}\n";

        // Create the HTML Email body with modern, responsive styling and tracking pixel
        $email_body = "
        <!DOCTYPE html>
        <html>
        <head>
            <meta charset='utf-8'>
            <meta name='viewport' content='width=device-width, initial-scale=1.0'>
            <title>Happy Birthday!</title>
            <style>
                body {
                    font-family: 'Outfit', 'Inter', 'Helvetica Neue', Helvetica, Arial, sans-serif;
                    background-color: #f7f9fc;
                    margin: 0;
                    padding: 0;
                    -webkit-font-smoothing: antialiased;
                }
                .email-container {
                    max-width: 600px;
                    margin: 40px auto;
                    background: #ffffff;
                    border-radius: 20px;
                    overflow: hidden;
                    box-shadow: 0 10px 30px rgba(0,0,0,0.05);
                    border: 1px solid #eef2f5;
                }
                .header-banner {
                    background: linear-gradient(135deg, #6366f1 0%, #a855f7 100%);
                    padding: 50px 30px;
                    text-align: center;
                    color: #ffffff;
                }
                .header-banner h1 {
                    margin: 0;
                    font-size: 32px;
                    font-weight: 700;
                    letter-spacing: -0.5px;
                }
                .header-banner p {
                    margin: 10px 0 0 0;
                    font-size: 16px;
                    opacity: 0.9;
                }
                .content-body {
                    padding: 40px 30px;
                    color: #334155;
                    line-height: 1.8;
                }
                .content-body h2 {
                    font-size: 22px;
                    color: #1e293b;
                    margin-top: 0;
                }
                .wish-text {
                    font-size: 16px;
                    margin-bottom: 30px;
                }
                .card-deco {
                    background: #f8fafc;
                    border-left: 4px solid #6366f1;
                    padding: 20px;
                    border-radius: 0 12px 12px 0;
                    margin: 25px 0;
                    font-style: italic;
                    color: #475569;
                }
                .footer {
                    background-color: #f8fafc;
                    padding: 25px 30px;
                    text-align: center;
                    font-size: 12px;
                    color: #94a3b8;
                    border-top: 1px solid #f1f5f9;
                }
                .footer a {
                    color: #6366f1;
                    text-decoration: none;
                }
            </style>
        </head>
        <body>
            <div class='email-container'>
                <div class='header-banner'>
                    <h1>Happy Birthday! 🎂</h1>
                    <p>Wishing you a wonderful year ahead from your Alma Mater</p>
                </div>
                <div class='content-body'>
                    <h2>Dear {$name},</h2>
                    <p class='wish-text'>On behalf of the entire college community and the Alumni Association, we would like to wish you a very happy and joyous birthday!</p>
                    
                    <div class='card-deco'>
                        \"May this year bring you closer to your dreams, fill your heart with joy, and bless you with health, success, and prosperity in all your future endeavors.\"
                    </div>
                    
                    <p class='wish-text'>We are incredibly proud of your journey, and we look forward to staying connected with you. Feel free to visit the portal and share your achievements with us.</p>
                    <p>Best Regards,<br><strong>Alumni Relations Team</strong></p>
                </div>
                <div class='footer'>
                    <p>Sent with ❤️ from the Alumni Association Portal.</p>
                    <p>&copy; " . date('Y') . " Alumni Association. All rights reserved.</p>
                </div>
            </div>
            <!-- Open Tracking Pixel: Must NOT use display:none - Gmail proxy won't load hidden images -->
            <img src='{$tracking_url}' width='1' height='1' border='0' alt='' style='height:1px!important;width:1px!important;border-width:0!important;margin-top:0!important;margin-bottom:0!important;margin-right:0!important;margin-left:0!important;padding-top:0!important;padding-bottom:0!important;padding-right:0!important;padding-left:0!important;' />
        </body>
        </html>";

        // Initialize PHPMailer
        $mail = new PHPMailer(true);

        try {
            // SMTP Settings
            $mail->SMTPDebug  = 0; // Disable verbose debug output in production
            $mail->isSMTP();
            $mail->Host       = SMTP_HOST;
            $mail->SMTPAuth   = true;
            $mail->Username   = SMTP_USER;
            $mail->Password   = SMTP_PASS;
            if (SMTP_PORT == 465) {
                $mail->SMTPSecure = PHPMailer::ENCRYPTION_SMTPS; // SSL for port 465
            } else {
                $mail->SMTPSecure = PHPMailer::ENCRYPTION_STARTTLS; // STARTTLS for port 587
            }
            $mail->Port       = SMTP_PORT;

            // Recipients
            $mail->setFrom(SMTP_FROM_EMAIL, SMTP_FROM_NAME);
            $mail->addAddress($email, $name);

            // Content
            $mail->isHTML(true);
            $mail->Subject = 'Warmest Birthday Wishes from your Alumni Association!';
            $mail->Body    = $email_body;
            $mail->AltBody = "Dear {$name},\n\nHappy Birthday! Wishing you a wonderful year ahead.\n\nBest Regards,\nAlumni Association Team";

            // Send
            $mail->send();
            
            // 2. Update status to 'sent' on success
            $conn->query("UPDATE birthday_wishes_log SET status = 'sent' WHERE id = " . $log_id);
            echo "-> Email sent successfully to {$email}\n";

        } catch (Exception $e) {
            // 3. Update status to 'failed' on failure
            $error_msg = $conn->real_escape_string($mail->ErrorInfo);
            $conn->query("UPDATE birthday_wishes_log SET status = 'failed' WHERE id = " . $log_id);
            echo "-> Failed to send email to {$email}. PHPMailer Error: {$mail->ErrorInfo}\n";
        }
    }
} else {
    echo "No birthdays today.\n";
}

$conn->close();
echo "=== Execution Finished ===\n";
?>
