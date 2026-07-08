<?php
/**
 * track_open.php
 * Called when a recipient opens the birthday email (via tracking pixel).
 * Updates birthday_wishes_log: is_read=1, read_at=NOW() if it is currently 0.
 * Logs every request to tracking.log.
 */
ob_start();

// Kill all caching so every open triggers the script
header("Cache-Control: no-store, no-cache, must-revalidate, max-age=0");
header("Cache-Control: post-check=0, pre-check=0", false);
header("Pragma: no-cache");
header("Expires: Thu, 01 Jan 1970 00:00:00 GMT");

$log_id    = isset($_GET['log_id']) ? (int)$_GET['log_id'] : 0;
$timestamp = date('Y-m-d H:i:s');
$ip        = $_SERVER['REMOTE_ADDR']    ?? 'Unknown';
$ua        = $_SERVER['HTTP_USER_AGENT'] ?? 'Unknown UA';
$log_file  = __DIR__ . '/tracking.log';

// Always write a request log line
file_put_contents($log_file,
    "[{$timestamp}] HIT log_id={$log_id} | IP={$ip} | UA={$ua}\n",
    FILE_APPEND | LOCK_EX
);

if ($log_id > 0) {
    require_once __DIR__ . '/config.php';
    $conn = new mysqli(DB_HOST, DB_USER, DB_PASS, DB_NAME);

    if ($conn->connect_error) {
        file_put_contents($log_file,
            "[{$timestamp}] DB_ERROR: " . $conn->connect_error . "\n",
            FILE_APPEND | LOCK_EX
        );
    } else {
        $stmt = $conn->prepare(
            "UPDATE birthday_wishes_log SET is_read=1, read_at=NOW() WHERE id=? AND is_read=0"
        );
        $stmt->bind_param("i", $log_id);
        $stmt->execute();
        $affected = $stmt->affected_rows;
        $stmt->close();
        $conn->close();

        $result_msg = $affected > 0
            ? "DB_UPDATE: SUCCESS — log_id={$log_id} marked READ"
            : "DB_UPDATE: No change — already read or not found";
        file_put_contents($log_file,
            "[{$timestamp}] {$result_msg}\n",
            FILE_APPEND | LOCK_EX
        );
    }
} else {
    file_put_contents($log_file,
        "[{$timestamp}] WARN: Invalid/missing log_id\n",
        FILE_APPEND | LOCK_EX
    );
}

// Return 1x1 transparent GIF
ob_end_clean();
header("Content-Type: image/gif");
header("Content-Length: 43");
echo base64_decode("R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7");
exit;
?>
