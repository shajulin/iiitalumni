<?php
/**
 * Database connection configuration using PDO.
 */

// Database credentials
define('DB_HOST', 'localhost');
define('DB_NAME', 'alumni_portal_db');
define('DB_USER', 'root'); // Change this to your DB username
define('DB_PASS', '');     // Change this to your DB password

/**
 * Get a PDO database connection instance.
 *
 * @return PDO
 * @throws PDOException
 */
function getDatabaseConnection() {
    static $pdo = null;

    if ($pdo === null) {
        $dsn = "mysql:host=" . DB_HOST . ";dbname=" . DB_NAME . ";charset=utf8mb4";
        $options = [
            PDO::ATTR_ERRMODE            => PDO::ERRMODE_EXCEPTION, // Throw exceptions on errors
            PDO::ATTR_DEFAULT_FETCH_MODE => PDO::FETCH_ASSOC,       // Fetch associative arrays by default
            PDO::ATTR_EMULATE_PREPARES   => false,                  // Use real prepared statements
        ];

        try {
            $pdo = new PDO($dsn, DB_USER, DB_PASS, $options);
        } catch (\PDOException $e) {
            // Log database connection error
            error_log(date('[Y-m-d H:i:s] ') . "Database Connection Failed: " . $e->getMessage() . PHP_EOL, 3, __DIR__ . '/error_log.txt');
            throw new \PDOException($e->getMessage(), (int)$e->getCode());
        }
    }

    return $pdo;
}
