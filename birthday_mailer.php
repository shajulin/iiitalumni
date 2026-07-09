<?php
/**
 * Main script to automate birthday wishes for all alumni tables.
 * Can be run via cron job or Windows Task Scheduler.
 */

// Start execution timer
$startTime = microtime(true);

require_once __DIR__ . '/database.php';
require_once __DIR__ . '/mailer.php';

// Global execution stats
$stats = [
    'tablesFound' => 0,
    'tablesProcessed' => 0,
    'recordsChecked' => 0,
    'birthdaysToday' => 0,
    'emailsSent' => 0,
    'alreadySent' => 0,
    'failed' => 0
];

// Error log file path
$logFile = __DIR__ . '/error_log.txt';

/**
 * Log a message to the error log file.
 */
function logError($message) {
    global $logFile;
    error_log(date('[Y-m-d H:i:s] ') . $message . PHP_EOL, 3, $logFile);
}

/**
 * Automatically get all tables starting with 'alumni_' from the database.
 * Explicitly ignores non-alumni tables or specific log tables if they happen to match.
 * 
 * @param PDO $pdo
 * @return array
 */
function getAlumniTables($pdo) {
    $tables = [];
    try {
        $stmt = $pdo->query("SHOW TABLES LIKE 'alumni_%'");
        $excludeTables = ['alumni_profiles', 'alumni_logs']; // Exclude tables that are not batch tables
        
        while ($row = $stmt->fetch(PDO::FETCH_NUM)) {
            $tableName = $row[0];
            if (!in_array($tableName, $excludeTables)) {
                 $tables[] = $tableName;
            }
        }
    } catch (PDOException $e) {
        logError("Failed to fetch alumni tables: " . $e->getMessage());
    }
    return $tables;
}

/**
 * Find users whose birthday is today in a specific table.
 * Handles different column names like 'personal_email' or 'first_name' dynamically.
 * 
 * @param PDO $pdo
 * @param string $tableName
 * @return array
 */
function findBirthdayUsers($pdo, $tableName) {
    $users = [];
    try {
        // Select all columns because different tables have different column names
        // e.g., 'email' vs 'personal_email' or 'name' vs 'first_name'
        $sql = "SELECT * FROM `$tableName` 
                WHERE MONTH(dob) = MONTH(CURDATE()) 
                AND DAY(dob) = DAY(CURDATE())";
        
        $stmt = $pdo->query($sql);
        $rows = $stmt->fetchAll();
        
        foreach ($rows as $row) {
            // Detect the correct email column
            $email = '';
            if (!empty($row['email'])) {
                $email = $row['email'];
            } elseif (!empty($row['personal_email'])) {
                $email = $row['personal_email'];
            }
            
            // Detect the correct name column
            $name = '';
            if (!empty($row['name'])) {
                $name = $row['name'];
            } elseif (!empty($row['first_name'])) {
                $name = $row['first_name'];
                if (!empty($row['last_name'])) {
                    $name .= ' ' . $row['last_name'];
                }
            }
            
            // Only add if an email was found
            if (!empty($email)) {
                $users[] = [
                    'id' => $row['id'],
                    'name' => trim($name),
                    'email' => trim($email),
                    'dob' => $row['dob']
                ];
            }
        }
    } catch (PDOException $e) {
        logError("Error querying birthdays in table {$tableName}: " . $e->getMessage());
    }
    return $users;
}

/**
 * Check if a birthday wish was already sent to this user this year.
 * 
 * @param PDO $pdo
 * @param int $alumniId
 * @param string $tableName
 * @return bool
 */
function alreadySent($pdo, $alumniId, $tableName) {
    try {
        $sql = "SELECT id FROM birthday_wishes_log 
                WHERE alumni_id = :alumni_id 
                AND table_name = :table_name 
                AND YEAR(sent_date) = YEAR(CURDATE())
                AND status = 'sent'"; 
                
        $stmt = $pdo->prepare($sql);
        $stmt->execute([
            ':alumni_id' => $alumniId,
            ':table_name' => $tableName
        ]);
        
        return $stmt->rowCount() > 0;
    } catch (PDOException $e) {
        logError("Error checking alreadySent for ID {$alumniId} in {$tableName}: " . $e->getMessage());
        return true; // Safe fallback: assume sent if error occurs to prevent spam
    }
}

/**
 * Send the birthday email.
 * 
 * @param array $user
 * @return bool True if sent, false otherwise.
 */
function sendBirthdayMail($user) {
    try {
        // We get a fresh mailer instance for each email to clear previous recipients
        $mail = getMailerInstance(); 
        
        $mail->addAddress($user['email'], $user['name']);
        
        $mail->Subject = "Happy Birthday {$user['name']}!";
        
        // Basic HTML template
        $mail->Body    = "
            <div style='font-family: Arial, sans-serif; padding: 20px;'>
                <h2>Happy Birthday, {$user['name']}!</h2>
                <p>Wishing you a fantastic birthday and a wonderful year ahead.</p>
                <p>Best Regards,<br>Your Alumni Association</p>
            </div>
        ";
        $mail->AltBody = "Happy Birthday, {$user['name']}! Wishing you a fantastic birthday and a wonderful year ahead. - Your Alumni Association";
        
        $mail->send();
        return true;
    } catch (Exception $e) {
        logError("Failed to send email to {$user['email']} (ID: {$user['id']}): " . $e->getMessage());
        return false;
    }
}

/**
 * Log the birthday wish success or failure.
 * 
 * @param PDO $pdo
 * @param int $alumniId
 * @param string $tableName
 * @param string $email
 * @param string $status
 */
function insertBirthdayLog($pdo, $alumniId, $tableName, $email, $status) {
    try {
        $sql = "INSERT INTO birthday_wishes_log (alumni_id, table_name, sent_date, status, email_sent_to, is_read) 
                VALUES (:alumni_id, :table_name, CURDATE(), :status, :email, 0)";
        
        $stmt = $pdo->prepare($sql);
        $stmt->execute([
            ':alumni_id' => $alumniId,
            ':table_name' => $tableName,
            ':status' => $status,
            ':email' => $email
        ]);
    } catch (PDOException $e) {
        logError("Failed to insert log for ID {$alumniId} in {$tableName}: " . $e->getMessage());
    }
}

/**
 * Process a single alumni table for birthday wishes.
 * 
 * @param PDO $pdo
 * @param string $tableName
 */
function processTable($pdo, $tableName) {
    global $stats;
    
    try {
        // Total records checked stat (optional but requested)
        try {
            $countStmt = $pdo->query("SELECT COUNT(*) FROM `$tableName`");
            $stats['recordsChecked'] += $countStmt->fetchColumn();
        } catch (PDOException $e) {
            // Ignore if count fails
        }

        $users = findBirthdayUsers($pdo, $tableName);
        $stats['birthdaysToday'] += count($users);

        foreach ($users as $user) {
            // Check if already sent
            if (alreadySent($pdo, $user['id'], $tableName)) {
                $stats['alreadySent']++;
                continue; // Skip to next user
            }

            // Attempt to send email
            if (sendBirthdayMail($user)) {
                // Success
                insertBirthdayLog($pdo, $user['id'], $tableName, $user['email'], 'sent');
                $stats['emailsSent']++;
            } else {
                // Failed
                insertBirthdayLog($pdo, $user['id'], $tableName, $user['email'], 'failed');
                $stats['failed']++;
            }
        }
        
        $stats['tablesProcessed']++;
    } catch (Exception $e) {
        logError("Error processing table {$tableName}: " . $e->getMessage());
    }
}

// ==========================================
// MAIN EXECUTION FLOW
// ==========================================
try {
    $pdo = getDatabaseConnection();
    
    // 1. Get all tables
    $tables = getAlumniTables($pdo);
    $stats['tablesFound'] = count($tables);

    // 2. Process each table
    foreach ($tables as $table) {
        // Never stop if one table fails. processTable has its own try-catch.
        processTable($pdo, $table);
    }

} catch (Exception $e) {
    logError("Critical failure in main execution: " . $e->getMessage());
    echo "A critical error occurred. Please check the error log.\n";
}

// 3. Generate Report
$endTime = microtime(true);
$executionTime = number_format($endTime - $startTime, 2);

$report = "
====================================
Birthday Wish Execution Report
====================================
Tables Found: {$stats['tablesFound']}
Tables Processed: {$stats['tablesProcessed']}
Records Checked: {$stats['recordsChecked']}
Today's Birthdays: {$stats['birthdaysToday']}
Emails Sent: {$stats['emailsSent']}
Already Sent: {$stats['alreadySent']}
Failed: {$stats['failed']}
Execution Time: {$executionTime} seconds
====================================
";

// Output report
echo $report;

// Store execution report in a log file
file_put_contents(__DIR__ . '/execution_report_' . date('Y_m_d') . '.txt', trim($report) . PHP_EOL, FILE_APPEND);

?>
