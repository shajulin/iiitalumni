<?php
// Suppress PHP warnings/notices from breaking JSON output
error_reporting(E_ALL);
ini_set('display_errors', '0');

// Start output buffering to prevent "headers already sent" issues
ob_start();

// ---- CORS Headers (must be sent before ANY other output) ----
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Methods: GET, POST, OPTIONS");
header("Access-Control-Allow-Headers: Content-Type");
header('Content-Type: application/json');

$method = $_SERVER['REQUEST_METHOD'];

// ---- Handle OPTIONS (preflight) request FIRST, before DB connect ----
if ($method === 'OPTIONS') {
    http_response_code(200);
    ob_end_clean();
    exit();
}

// ---- Now connect to DB ----
include '../db_connect.php';

$dataset = isset($_GET['dataset']) ? $_GET['dataset'] : '';

$valid_datasets = [
    '2016' => 'alumni_2016_batch',
    '2017' => 'alumni_2017_batch',
    '2019' => 'alumni_2019_admission',
    '2020' => 'alumni_2020_admission',
    '2021' => 'alumni_2021_admission',
    'higher_studies' => 'alumni_higher_studies',
    'details_2024' => 'alumni_details_2024'
];

if (!array_key_exists($dataset, $valid_datasets)) {
    ob_end_clean();
    echo json_encode(["status" => "error", "message" => "Invalid dataset specified"]);
    exit();
}

$table = $valid_datasets[$dataset];

if ($method === 'GET') {
    try {
        $stmt = $conn->prepare("SELECT * FROM $table ORDER BY id ASC");
        $stmt->execute();
        $data = $stmt->fetchAll(PDO::FETCH_ASSOC);
        ob_end_clean();
        echo json_encode(["status" => "success", "data" => $data]);
    } catch (PDOException $e) {
        ob_end_clean();
        echo json_encode(["status" => "error", "message" => $e->getMessage()]);
    }
} elseif ($method === 'POST') {
    $input = json_decode(file_get_contents('php://input'), true);

    if (!$input) {
        ob_end_clean();
        echo json_encode(["status" => "error", "message" => "Invalid input data"]);
        exit();
    }

    $columns = implode(", ", array_keys($input));
    $placeholders = implode(", ", array_fill(0, count($input), "?"));
    $values = array_values($input);

    $sql = "INSERT INTO $table ($columns) VALUES ($placeholders)";

    try {
        $stmt = $conn->prepare($sql);
        if ($stmt->execute($values)) {
            ob_end_clean();
            echo json_encode(["status" => "success", "message" => "Data inserted successfully", "id" => $conn->lastInsertId()]);
        } else {
            ob_end_clean();
            echo json_encode(["status" => "error", "message" => "Execute failed"]);
        }
    } catch (PDOException $e) {
        ob_end_clean();
        echo json_encode(["status" => "error", "message" => "Prepare failed: " . $e->getMessage()]);
    }
} else {
    ob_end_clean();
    echo json_encode(["status" => "error", "message" => "Method not allowed"]);
}
?>