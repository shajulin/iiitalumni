<?php
header("Access-Control-Allow-Origin: *");
header("Content-Type: application/json; charset=UTF-8");
header("Access-Control-Allow-Methods: GET, POST, OPTIONS");
header("Access-Control-Allow-Headers: Content-Type, Access-Control-Allow-Headers, Authorization, X-Requested-With");

if ($_SERVER['REQUEST_METHOD'] === 'OPTIONS') {
    http_response_code(200);
    exit;
}


if ($_SERVER['REQUEST_METHOD'] === 'GET') {
    // Return static contact info
    $contactInfo = [
        "phone" => ["0091-482-2202155", "2100"],
        "whatsapp" => "+91 9443543746",
        "email" => "international-affairs@iiitkottayam.ac.in",
        "address" => "Indian Institute of Information Technology Kottayam, Valavoor P.O, Pala, Kottayam, Kerala 686635",
        "working_hours" => "Mon – Fri: 9am – 5pm",
        "map_embed_url" => "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3932.183701297587!2d76.71617417502758!3d9.749552190342617!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3b07cbd738d067ed%3A0xc39f9dd5a46e9690!2sIndian%20Institute%20of%20Information%20Technology%20(IIIT)%20Kottayam!5e0!3m2!1sen!2sin!4v1715000000000!5m2!1sen!2sin"
    ];
    http_response_code(200);
    echo json_encode($contactInfo);
    exit;
}

if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    require_once '../config/db.php';
    $data = json_decode(file_get_contents("php://input"));
    
    if (
        !empty($data->name) &&
        !empty($data->email) &&
        !empty($data->message)
    ) {
        try {
            $stmt = $pdo->prepare("INSERT INTO contact_messages (name, email, message) VALUES (:name, :email, :message)");
            
            $stmt->bindParam(':name', $data->name);
            $stmt->bindParam(':email', $data->email);
            $stmt->bindParam(':message', $data->message);
            
            if ($stmt->execute()) {
                http_response_code(201);
                echo json_encode(["message" => "Message sent successfully."]);
            } else {
                http_response_code(503);
                echo json_encode(["error" => "Unable to send message."]);
            }
        } catch (PDOException $e) {
            http_response_code(500);
            echo json_encode(["error" => "Database error: " . $e->getMessage()]);
        }
    } else {
        http_response_code(400);
        echo json_encode(["error" => "Incomplete data. Name, email, and message are required."]);
    }
}
