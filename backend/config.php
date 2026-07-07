<?php
/**
 * config.php
 * Configuration file for the Alumni Portal Birthday Wisher System.
 * Stores Database credentials, Table constants, and Gmail SMTP settings.
 */

// --- DATABASE CONFIGURATION ---
define('DB_HOST', 'localhost');
define('DB_NAME', 'alumni_portal_db');
define('DB_USER', 'root');
define('DB_PASS', '');

// --- TABLE & COLUMN CONFIGURATION ---
define('TABLE_ALUMNI', 'alumni_details_2024');
define('COL_ID', 'id');
define('COL_NAME', 'student_name'); // Correct column name in database
define('COL_EMAIL', 'email');       // Correct column name in database
define('COL_DOB', 'dob');           // Date of birth column (YYYY-MM-DD format)

// --- SMTP GMAIL CONFIGURATION ---
define('SMTP_HOST', 'smtp.gmail.com');
define('SMTP_PORT', 587); // Port for STARTTLS
define('SMTP_USER', 'hariramakrishnan@iiitkottayam.ac.in');
define('SMTP_PASS', 'rbxczghxvxfehmgh');
define('SMTP_FROM_EMAIL', 'hariramakrishnan@iiitkottayam.ac.in');
define('SMTP_FROM_NAME', 'Alumni Association Portal');

// --- EMAIL OPEN TRACKING URL ---
//
// WHY LOCALHOST DOESN'T WORK:
// When an email is opened in Gmail (mobile/web), the Google Image Proxy
// fetches the tracking pixel from this URL. Google's proxy is on the internet,
// so it CANNOT reach http://localhost or 127.0.0.1 — those only work on your
// own machine. You MUST use a publicly accessible URL for tracking to work.
//
// FOR LOCAL DEVELOPMENT (using ngrok):
//   1. Download ngrok from https://ngrok.com/download
//   2. Run: ngrok http 80
//   3. Copy the https URL shown (e.g., https://abc123.ngrok-free.app)
//   4. Paste it below replacing the ngrok URL
//   5. Make sure XAMPP Apache is running on port 80
//
// FOR PRODUCTION:
//   Replace with your actual server domain, e.g.:
//   https://yourdomain.com/alumni-portal/backend/track_open.php
//
// STEP: Set USE_NGROK = true when using ngrok, false for production domain.
define('USE_NGROK', true);

// ── Set your ngrok URL here (update every time you restart ngrok) ──────────
define('NGROK_URL', 'https://YOUR-NGROK-URL.ngrok-free.app');

// ── Your production server URL (use this when deployed) ──────────────────────
define('PRODUCTION_URL', 'http://localhost/alumni-portal/backend/track_open.php');

// ── Final tracking URL (auto-selects based on USE_NGROK flag above) ──────────
define('TRACKING_BASE_URL', USE_NGROK
    ? NGROK_URL . '/alumni-portal/backend/track_open.php'
    : PRODUCTION_URL
);
?>
