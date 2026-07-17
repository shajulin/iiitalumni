<?php
header("Access-Control-Allow-Origin: *");
header("Content-Type: application/json; charset=UTF-8");
header("Access-Control-Allow-Methods: GET");
header("Access-Control-Allow-Headers: Content-Type, Access-Control-Allow-Headers, Authorization, X-Requested-With");

$base_url = "https://international.iiitkottayam.ac.in/";

$team = [
    ["id" => 1, "name" => "Dr. Shajulin Benedict", "role" => "Associate Professor (Team Lead)", "photo_url" => $base_url . "assets/images/shajulin_sir.jpg"],
    ["id" => 2, "name" => "Dr. Rajesh G", "role" => "Asst. Professor", "photo_url" => $base_url . "assets/images/rajesh_sir.jpg"],
    ["id" => 3, "name" => "Dr. E. Silambarasan", "role" => "Asst. Professor", "photo_url" => $base_url . "assets/images/silambrasan_sir.jpg"],
    ["id" => 4, "name" => "Dr. Selvi C", "role" => "Asst. Professor", "photo_url" => $base_url . "assets/images/selvi_mam.jpg"],
    ["id" => 5, "name" => "Dr. Venkatesh S", "role" => "Asst. Professor", "photo_url" => $base_url . "assets/images/venkatesh_sir.jpg"],
    ["id" => 6, "name" => "Sasi Kiran Reddy", "role" => "BTech, Batch 2021", "photo_url" => $base_url . "assets/images/sasi.png"],
    ["id" => 7, "name" => "Charan", "role" => "BTech, Batch 2021", "photo_url" => $base_url . "assets/images/charan.jpg"],
    ["id" => 8, "name" => "Tanya", "role" => "BTech, Batch 2022", "photo_url" => $base_url . "assets/images/Tanya.jpg"],
    ["id" => 9, "name" => "Vishnu Narayanan", "role" => "BTech, Batch 2022", "photo_url" => $base_url . "assets/images/vishnu_narayanan.jpg"],
    ["id" => 10, "name" => "Prathamesh", "role" => "BTech, Batch 2022", "photo_url" => $base_url . "assets/images/Prathamesh.jpg"],
    ["id" => 11, "name" => "Anju Yajjala", "role" => "BTech, Batch 2023", "photo_url" => $base_url . "assets/images/Anju_Yajjala.jpg"],
    ["id" => 12, "name" => "Monish Alavalapati", "role" => "BTech, Batch 2023", "photo_url" => $base_url . "assets/images/Monish_Alavalapati.jpg"],
    ["id" => 13, "name" => "Purandhar Reddy", "role" => "BTech, Batch 2023", "photo_url" => $base_url . "assets/images/Purandhar_Reddy.jpg"],
    ["id" => 14, "name" => "Alex Gijo", "role" => "BTech, Batch 2023", "photo_url" => $base_url . "assets/images/Alex_Gijo.jpg"],
    ["id" => 15, "name" => "Ashwin S", "role" => "BTech, Batch 2023", "photo_url" => $base_url . "assets/images/Ashwin_S.jpg"]
];

http_response_code(200);
echo json_encode($team);
