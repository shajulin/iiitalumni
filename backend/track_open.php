<?php
/**
 * track_open.php
 * Web endpoint to track email opens using a transparent 1x1 GIF.
 * Logs every request to tracking.log for full debugging.
 * Updates birthday_wishes_log when the tracking pixel is loaded by the email client.
 */

// ── Prevent any output buffering or caching ──────────────────────────────────
ob_start();

// Disable caching on all clients
header("Cache-Control: no-store, no-cache, must-revalidate, max-age=0");
header("Cache-Control: post-check=0, pre-check=0", false);
header("Pragma: no-cache");
header("Expires: Thu, 01 Jan 1970 00:00:00 GMT");

// ── Collect request metadata for logging ─────────────────────────────────────
$log_id    = isset($_GET['log_id']) ? intval($_GET['log_id']) : 0;
$timestamp = date('Y-m-d H:i:s');
$ip        = $_SERVER['REMOTE_ADDR']          ?? 'Unknown IP';
$ua        = $_SERVER['HTTP_USER_AGENT']       ?? 'Unknown User-Agent';
$referrer  = $_SERVER['HTTP_REFERER']          ?? 'No referrer';
$log_file  = __DIR__ . '/tracking.log';

// ── Write log entry regardless of DB success ─────────────────────────────────
$log_entry = "[{$timestamp}] log_id={$log_id} | IP={$ip} | UA={$ua} | Ref={$referrer}\n";
file_put_contents($log_file, $log_entry, FILE_APPEND | LOCK_EX);

// ── Process DB update if valid log_id was provided ───────────────────────────
if ($log_id > 0) {
    require_once __DIR__ . '/config.php';

    $conn = new mysqli(DB_HOST, DB_USER, DB_PASS, DB_NAME);

    if ($conn->connect_error) {
        // Log DB connection failure
        $err_entry = "[{$timestamp}] DB_CONNECT_ERROR: " . $conn->connect_error . "\n";
        file_put_contents($log_file, $err_entry, FILE_APPEND | LOCK_EX);
    } else {
        // Update is_read only if not already marked as read
        $stmt = $conn->prepare(
            "UPDATE birthday_wishes_log SET is_read = 1, read_at = NOW() WHERE id = ? AND is_read = 0"
        );
        $stmt->bind_param("i", $log_id);
        $stmt->execute();
        $affected = $stmt->affected_rows;
        $stmt->close();
        $conn->close();

        // Log DB update result
        if ($affected > 0) {
            $db_entry = "[{$timestamp}] DB_UPDATE: SUCCESS - log_id={$log_id} marked as READ.\n";
        } else {
            $db_entry = "[{$timestamp}] DB_UPDATE: No rows updated for log_id={$log_id} (already read or not found).\n";
        }
        file_put_contents($log_file, $db_entry, FILE_APPEND | LOCK_EX);
    }
} else {
    // Log missing or invalid log_id
    $warn_entry = "[{$timestamp}] WARNING: Invalid or missing log_id in request.\n";
    file_put_contents($log_file, $warn_entry, FILE_APPEND | LOCK_EX);
}

// ── Serve 1x1 transparent GIF ────────────────────────────────────────────────
ob_end_clean();
header("Content-Type: image/gif");
header("Content-Length: 43");
echo base64_decode("R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7");
exit;
?>
