<?php
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
