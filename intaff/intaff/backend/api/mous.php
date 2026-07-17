<?php
header("Access-Control-Allow-Origin: *");
header("Content-Type: application/json; charset=UTF-8");
header("Access-Control-Allow-Methods: GET");
header("Access-Control-Allow-Headers: Content-Type, Access-Control-Allow-Headers, Authorization, X-Requested-With");

$mous = [
    ["id" => 1, "organization" => "Technische Universität München", "location" => "Germany"],
    ["id" => 2, "organization" => "Universidad de La Frontera", "location" => "Chile"],
    ["id" => 3, "organization" => "Brunswick University", "location" => "Canada"],
    ["id" => 4, "organization" => "Univ. of Agder", "location" => "Norway"],
    ["id" => 5, "organization" => "Johannes Gutenberg", "location" => "Germany"],
    ["id" => 6, "organization" => "DADB - German Academy of Digital Education", "location" => "Germany"],
    ["id" => 7, "organization" => "BOSE Information Technology", "location" => "Germany"],
    ["id" => 8, "organization" => "DareToStart.org", "location" => "Germany"],
    ["id" => 9, "organization" => "Build, Austria", "location" => "Austria"],
    ["id" => 10, "organization" => "Aster Digital Health Incubator", "location" => "India and Arab Countries"],
    ["id" => 11, "organization" => "i-ADAM Japan", "location" => "Japan"],
    ["id" => 12, "organization" => "UnternehmerTUM", "location" => "Germany"],
    ["id" => 13, "organization" => "Optellent Inc", "location" => "San Jose, USA"]
];

http_response_code(200);
echo json_encode($mous);
