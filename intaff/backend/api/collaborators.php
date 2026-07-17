<?php
header("Access-Control-Allow-Origin: *");
header("Content-Type: application/json; charset=UTF-8");
header("Access-Control-Allow-Methods: GET");
header("Access-Control-Allow-Headers: Content-Type, Access-Control-Allow-Headers, Authorization, X-Requested-With");

$collaborators = [
    ["id" => 1, "name" => "Dr. Manuel Fernandez Delgado", "organization" => "University of Santiago", "country" => "Spain"],
    ["id" => 2, "name" => "Dr. Kasi Periyasamy", "organization" => "University of Wisconsin", "country" => "USA"],
    ["id" => 3, "name" => "Dr. Deepak Padmanabhan", "organization" => "Queen's University", "country" => "UK"],
    ["id" => 4, "name" => "Dr. Valentina Emilia Balas", "organization" => "Aurel Vlaicu University of Arad", "country" => "Romania"],
    ["id" => 5, "name" => "Dr. Rajkumar Buyya", "organization" => "University of Melbourne", "country" => "Australia"],
    ["id" => 6, "name" => "Prof. Michael Gerndt", "organization" => "Technische Universität München", "country" => "Germany"],
    ["id" => 7, "name" => "Dr. Omer Rana", "organization" => "Cardiff University", "country" => "UK"],
    ["id" => 8, "name" => "Dr. E. Silambarasan", "organization" => "University of Santiago", "country" => "Spain"],
    ["id" => 9, "name" => "Dr. Selvi C", "organization" => "University of Wisconsin", "country" => "USA"],
    ["id" => 10, "name" => "Dr. Venkatesh S", "organization" => "Queen's University", "country" => "UK"]
];

$country = isset($_GET['country']) ? $_GET['country'] : '';

if ($country && $country !== 'All') {
    $filtered = array_filter($collaborators, function($c) use ($country) {
        return $c['country'] === $country;
    });
    $collaborators = array_values($filtered);
}

http_response_code(200);
echo json_encode($collaborators);
