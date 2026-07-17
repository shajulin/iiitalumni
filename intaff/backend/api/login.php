<?php
// Output buffer to prevent headers already sent issues
ob_start();

// CORS Headers
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Methods: GET, POST, OPTIONS");
header("Access-Control-Allow-Headers: Content-Type");
header('Content-Type: application/json');

include_once '../db_connect.php';

// Handle preflight OPTIONS request
if ($_SERVER['REQUEST_METHOD'] === 'OPTIONS') {
    http_response_code(200);
    ob_end_clean();
    exit;
}

if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
    ob_end_clean();
    echo json_encode(["status" => "error", "message" => "Invalid request method"]);
    exit;
}

$data = json_decode(file_get_contents("php://input"));

if(!empty($data->email) && !empty($data->password)) {
    $email    = trim($data->email);
    $password = $data->password;

    try {
        // Fetch user + batch info via JOIN with alumni_profiles
        $query = "
            SELECT
                u.id,
                u.full_name,
                u.email,
                u.password_hash,
                u.role,
                ap.batch,
                ap.roll_number
            FROM users u
            LEFT JOIN alumni_profiles ap ON ap.user_id = u.id
            WHERE u.email = :email
            LIMIT 1
        ";
        $stmt = $conn->prepare($query);
        $stmt->execute([':email' => $email]);

        if($stmt->rowCount() > 0) {
            $row = $stmt->fetch();

            if(password_verify($password, $row['password_hash'])) {

                // Map batch → batch_specific table name
                $batch_table_map = [
                    '2016'           => 'alumni_2016_batch',
                    '2017'           => 'alumni_2017_batch',
                    '2019'           => 'alumni_2019_admission',
                    '2020'           => 'alumni_2020_admission',
                    '2021'           => 'alumni_2021_admission',
                    'higher_studies' => 'alumni_higher_studies',
                    'details_2024'   => 'alumni_details_2024',
                ];

                $batch      = $row['batch'] ?? null;
                $batchTable = isset($batch, $batch_table_map[$batch])
                    ? $batch_table_map[$batch]
                    : null;

                $userData = [
                    "id"          => $row['id'],
                    "full_name"   => $row['full_name'],
                    "email"       => $row['email'],
                    "role"        => $row['role'],
                    "batch"       => $batch,
                    "roll_number" => $row['roll_number'] ?? null,
                    "batch_table" => $batchTable,   // ← tells frontend which dataset table
                ];

                ob_end_clean();
                echo json_encode([
                    "status"  => "success",
                    "message" => "Login successful",
                    "user"    => $userData
                ]);
            } else {
                ob_end_clean();
                echo json_encode(["status" => "error", "message" => "Invalid password"]);
            }
        } else {
            ob_end_clean();
            echo json_encode(["status" => "error", "message" => "User not found"]);
        }
    } catch(PDOException $e) {
        ob_end_clean();
        echo json_encode(["status" => "error", "message" => "Database error: " . $e->getMessage()]);
    }
} else {
    ob_end_clean();
    echo json_encode(["status" => "error", "message" => "Incomplete credentials"]);
}
?>
