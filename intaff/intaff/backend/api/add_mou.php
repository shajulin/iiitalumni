<?php
header("Access-Control-Allow-Origin: http://localhost:5173");
header("Content-Type: application/json; charset=UTF-8");
header("Access-Control-Allow-Methods: POST, OPTIONS");
header("Access-Control-Allow-Headers: Content-Type, Access-Control-Allow-Headers, Authorization, X-Requested-With");

// Handle preflight OPTIONS request
if ($_SERVER['REQUEST_METHOD'] === 'OPTIONS') {
    http_response_code(200);
    exit;
}

// Only allow POST
if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
    http_response_code(405);
    echo json_encode(["error" => "Method not allowed. Use POST."]);
    exit;
}

require_once '../config/db.php';

$data = json_decode(file_get_contents("php://input"));

// Validate required fields
if (empty($data->organization) || empty($data->location)) {
    http_response_code(400);
    echo json_encode(["error" => "Both 'organization' and 'location' fields are required."]);
    exit;
}

// Sanitize inputs
$organization = trim($data->organization);
$location     = trim($data->location);

if ($organization === '' || $location === '') {
    http_response_code(400);
    echo json_encode(["error" => "Fields must not be blank or whitespace-only."]);
    exit;
}

try {
    $stmt = $pdo->prepare(
        "INSERT INTO mous (organization, location) VALUES (:organization, :location)"
    );

    $stmt->bindParam(':organization', $organization);
    $stmt->bindParam(':location',     $location);

    if ($stmt->execute()) {
        $newId = $pdo->lastInsertId();
        http_response_code(201);
        echo json_encode([
            "message" => "MoU added successfully.",
            "id"      => (int) $newId
        ]);
    } else {
        http_response_code(503);
        echo json_encode(["error" => "Failed to insert MoU. Please try again."]);
    }
} catch (PDOException $e) {
    http_response_code(500);
    echo json_encode(["error" => "Database error: " . $e->getMessage()]);
}
