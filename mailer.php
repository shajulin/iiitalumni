<?php
/**
 * Mailer configuration using PHPMailer.
 * Make sure you have PHPMailer installed via Composer or included manually.
 * Example: require 'vendor/autoload.php';
 */

use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\Exception;

// If using Composer:
// require_once __DIR__ . '/vendor/autoload.php';

// If manually including PHPMailer (adjust paths as needed):
// require_once __DIR__ . '/PHPMailer/src/Exception.php';
// require_once __DIR__ . '/PHPMailer/src/PHPMailer.php';
// require_once __DIR__ . '/PHPMailer/src/SMTP.php';

/**
 * Configure and return a PHPMailer instance.
 *
 * @return PHPMailer
 */
function getMailerInstance() {
    $mail = new PHPMailer(true);

    try {
        // Server settings
        $mail->SMTPDebug = 0;                      // Enable verbose debug output (0 for off, 2 for client/server)
        $mail->isSMTP();                           // Send using SMTP
        $mail->Host       = 'smtp.gmail.com';      // Set the SMTP server to send through
        $mail->SMTPAuth   = true;                  // Enable SMTP authentication
        $mail->Username   = 'your_email@gmail.com';// SMTP username
        $mail->Password   = 'your_app_password';   // SMTP password (use App Passwords for Gmail)
        $mail->SMTPSecure = PHPMailer::ENCRYPTION_STARTTLS; // Enable TLS encryption
        $mail->Port       = 587;                   // TCP port to connect to

        // Default Sender
        $mail->setFrom('your_email@gmail.com', 'Alumni Portal Admin');
        
        $mail->isHTML(true); // Set email format to HTML

        return $mail;
    } catch (Exception $e) {
        error_log(date('[Y-m-d H:i:s] ') . "Mailer Setup Failed: {$mail->ErrorInfo}" . PHP_EOL, 3, __DIR__ . '/error_log.txt');
        throw new Exception("Mailer setup failed: " . $e->getMessage());
    }
}
