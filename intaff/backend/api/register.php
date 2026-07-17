<?php
<<<<<<< HEAD
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

// -------------------------
// Batch → Table Mapping
// -------------------------
$batch_table_map = [
    '2016'         => 'alumni_2016_batch',
    '2017'         => 'alumni_2017_batch',
    '2019'         => 'alumni_2019_admission',
    '2020'         => 'alumni_2020_admission',
    '2021'         => 'alumni_2021_admission',
    'higher_studies' => 'alumni_higher_studies',
    'details_2024' => 'alumni_details_2024',
];

if(
    !empty($data->fullName) &&
    !empty($data->email) &&
    !empty($data->password) &&
    !empty($data->batch) &&
    !empty($data->rollNumber)
) {
    $fullName   = trim($data->fullName);
    $email      = trim($data->email);
    $password   = password_hash($data->password, PASSWORD_BCRYPT);
    $role       = 'alumni';
    $batch      = trim($data->batch);
    $rollNumber = trim($data->rollNumber);

    // Validate batch value
    if (!array_key_exists($batch, $batch_table_map)) {
        ob_end_clean();
        echo json_encode(["status" => "error", "message" => "Invalid batch selected: $batch"]);
        exit;
    }

    $batchTable = $batch_table_map[$batch];

    try {
        // Check if email exists in users table
        $check_stmt = $conn->prepare("SELECT id FROM users WHERE email = :email");
        $check_stmt->execute([':email' => $email]);
        if($check_stmt->rowCount() > 0) {
            ob_end_clean();
            echo json_encode(["status" => "error", "message" => "Email already registered"]);
            exit;
        }

        $conn->beginTransaction();

        // 1. Insert into users table
        $query = "INSERT INTO users (full_name, email, password_hash, role) VALUES (:full_name, :email, :password_hash, :role)";
        $stmt = $conn->prepare($query);
        $stmt->execute([
            ':full_name'    => $fullName,
            ':email'        => $email,
            ':password_hash'=> $password,
            ':role'         => $role
        ]);
        $user_id = $conn->lastInsertId();

        // 2. Insert into alumni_profiles table (general lookup table)
        $profile_query = "INSERT INTO alumni_profiles (user_id, batch, roll_number) VALUES (:user_id, :batch, :roll_number)";
        $profile_stmt = $conn->prepare($profile_query);
        $profile_stmt->execute([
            ':user_id'     => $user_id,
            ':batch'       => $batch,
            ':roll_number' => $rollNumber
        ]);

        // 3. Insert into the batch-specific table
        // Split full name into first and last name
        $nameParts = explode(' ', $fullName, 2);
        $firstName = $nameParts[0];
        $lastName  = isset($nameParts[1]) ? $nameParts[1] : '';

        if ($batchTable === 'alumni_higher_studies') {
            // higher_studies has different columns
            $batch_stmt = $conn->prepare(
                "INSERT INTO alumni_higher_studies (student_name, roll_no, program, university, country, admission_year)
                 VALUES (:student_name, :roll_no, :program, :university, :country, :admission_year)"
            );
            $batch_stmt->execute([
                ':student_name'  => $fullName,
                ':roll_no'       => $rollNumber,
                ':program'       => '',
                ':university'    => '',
                ':country'       => '',
                ':admission_year'=> '',
            ]);

        } elseif ($batchTable === 'alumni_details_2024') {
            // details_2024 has different columns
            $batch_stmt = $conn->prepare(
                "INSERT INTO alumni_details_2024 (timestamp, student_name, batch, mobile_no, whatsapp_no, email, communication_address, permanent_address, occupation, country_of_employment, nationality, pay_level, is_govt_job, willingness_to_contribute)
                 VALUES (:timestamp, :student_name, :batch, :mobile_no, :whatsapp_no, :email, :comm_addr, :perm_addr, :occupation, :country, :nationality, :pay_level, :is_govt_job, :willingness)"
            );
            $batch_stmt->execute([
                ':timestamp'   => date('Y-m-d H:i:s'),
                ':student_name'=> $fullName,
                ':batch'       => $batch,
                ':mobile_no'   => '',
                ':whatsapp_no' => '',
                ':email'       => $email,
                ':comm_addr'   => '',
                ':perm_addr'   => '',
                ':occupation'  => '',
                ':country'     => '',
                ':nationality' => '',
                ':pay_level'   => '',
                ':is_govt_job' => '',
                ':willingness' => '',
            ]);

        } elseif ($batchTable === 'alumni_2016_batch') {
            // 2016 batch has permanent_address extra column
            $batch_stmt = $conn->prepare(
                "INSERT INTO alumni_2016_batch (timestamp, username, first_name, last_name, dob, roll_no, mailing_address, city, state, country, pincode, gender, whatsapp_no, personal_email, permanent_address, present_status, organization, remarks)
                 VALUES (:timestamp, :username, :first_name, :last_name, :dob, :roll_no, :mailing_address, :city, :state, :country, :pincode, :gender, :whatsapp_no, :personal_email, :permanent_address, :present_status, :organization, :remarks)"
            );
            $batch_stmt->execute([
                ':timestamp'        => date('Y-m-d H:i:s'),
                ':username'         => $email,
                ':first_name'       => $firstName,
                ':last_name'        => $lastName,
                ':dob'              => '',
                ':roll_no'          => $rollNumber,
                ':mailing_address'  => '',
                ':city'             => '',
                ':state'            => '',
                ':country'          => '',
                ':pincode'          => '',
                ':gender'           => '',
                ':whatsapp_no'      => '',
                ':personal_email'   => $email,
                ':permanent_address'=> '',
                ':present_status'   => '',
                ':organization'     => '',
                ':remarks'          => '',
            ]);

        } else {
            // 2017, 2019, 2020, 2021 admission tables (same structure, no permanent_address)
            $batch_stmt = $conn->prepare(
                "INSERT INTO $batchTable (timestamp, username, first_name, last_name, dob, roll_no, mailing_address, city, state, country, pincode, gender, whatsapp_no, personal_email, present_status, organization, remarks)
                 VALUES (:timestamp, :username, :first_name, :last_name, :dob, :roll_no, :mailing_address, :city, :state, :country, :pincode, :gender, :whatsapp_no, :personal_email, :present_status, :organization, :remarks)"
            );
            $batch_stmt->execute([
                ':timestamp'       => date('Y-m-d H:i:s'),
                ':username'        => $email,
                ':first_name'      => $firstName,
                ':last_name'       => $lastName,
                ':dob'             => '',
                ':roll_no'         => $rollNumber,
                ':mailing_address' => '',
                ':city'            => '',
                ':state'           => '',
                ':country'         => '',
                ':pincode'         => '',
                ':gender'          => '',
                ':whatsapp_no'     => '',
                ':personal_email'  => $email,
                ':present_status'  => '',
                ':organization'    => '',
                ':remarks'         => '',
            ]);
        }

        $conn->commit();
        ob_end_clean();
        echo json_encode([
            "status"  => "success",
            "message" => "Registration successful! Data saved to $batchTable table.",
            "batch"   => $batch,
            "table"   => $batchTable
        ]);

    } catch(PDOException $e) {
        $conn->rollBack();
        ob_end_clean();
        echo json_encode(["status" => "error", "message" => "Database error: " . $e->getMessage()]);
    }
} else {
    ob_end_clean();
    echo json_encode(["status" => "error", "message" => "Incomplete data. Please fill all required fields."]);
}
?>
=======
header("Access-Control-Allow-Origin: *");
header("Content-Type: application/json; charset=UTF-8");
header("Access-Control-Allow-Methods: POST, OPTIONS");
header("Access-Control-Allow-Headers: Content-Type, Access-Control-Allow-Headers, Authorization, X-Requested-With");

if ($_SERVER['REQUEST_METHOD'] === 'OPTIONS') {
    http_response_code(200);
    exit;
}

require_once '../config/db.php';

$data = json_decode(file_get_contents("php://input"));

if (
    !empty($data->full_name) &&
    !empty($data->email)
) {
    try {
        $stmt = $pdo->prepare("INSERT INTO registrations (full_name, email, phone, institution, country, purpose, message) VALUES (:full_name, :email, :phone, :institution, :country, :purpose, :message)");
        
        $stmt->bindParam(':full_name', $data->full_name);
        $stmt->bindParam(':email', $data->email);
        $stmt->bindValue(':phone', $data->phone ?? null);
        $stmt->bindValue(':institution', $data->institution ?? null);
        $stmt->bindValue(':country', $data->country ?? null);
        $stmt->bindValue(':purpose', $data->purpose ?? 'Other');
        $stmt->bindValue(':message', $data->message ?? null);
        
        if ($stmt->execute()) {
            http_response_code(201);
            echo json_encode(["message" => "Registration successful."]);
        } else {
            http_response_code(503);
            echo json_encode(["error" => "Unable to register."]);
        }
    } catch (PDOException $e) {
        http_response_code(500);
        echo json_encode(["error" => "Database error: " . $e->getMessage()]);
    }
} else {
    http_response_code(400);
    echo json_encode(["error" => "Incomplete data. Full name and email are required."]);
}
>>>>>>> beefaed (Initial commit - intaff project)
