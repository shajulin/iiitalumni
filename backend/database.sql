-- phpMyAdmin SQL Dump
-- Database: `alumni_portal_db`

CREATE DATABASE IF NOT EXISTS `alumni_portal_db` DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci;
USE `alumni_portal_db`;

-- --------------------------------------------------------

--
-- Table structure for table `users`
--

CREATE TABLE IF NOT EXISTS `users` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `full_name` varchar(100) NOT NULL,
  `email` varchar(100) NOT NULL UNIQUE,
  `password_hash` varchar(255) NOT NULL,
  `role` enum('alumni','student','recruiter','admin') NOT NULL DEFAULT 'alumni',
  `created_at` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Table structure for table `alumni_profiles`
--

CREATE TABLE IF NOT EXISTS `alumni_profiles` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `user_id` int(11) NOT NULL,
  `batch` varchar(10) NOT NULL,
  `roll_number` varchar(50) NOT NULL,
  `profile_completed` tinyint(1) NOT NULL DEFAULT 0,
  PRIMARY KEY (`id`),
  FOREIGN KEY (`user_id`) REFERENCES `users`(`id`) ON DELETE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------
-- NEW TABLES FOR THE 7 DATASETS
-- --------------------------------------------------------

CREATE TABLE IF NOT EXISTS `alumni_2016_batch` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `timestamp` varchar(255),
  `username` varchar(255),
  `first_name` varchar(100),
  `last_name` varchar(100),
  `dob` varchar(50),
  `roll_no` varchar(50),
  `mailing_address` text,
  `city` varchar(100),
  `state` varchar(100),
  `country` varchar(100),
  `pincode` varchar(20),
  `gender` varchar(20),
  `whatsapp_no` varchar(50),
  `personal_email` varchar(255),
  `permanent_address` text,
  `present_status` varchar(100),
  `organization` varchar(255),
  `remarks` text,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

CREATE TABLE IF NOT EXISTS `alumni_2017_batch` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `timestamp` varchar(255),
  `username` varchar(255),
  `first_name` varchar(100),
  `last_name` varchar(100),
  `dob` varchar(50),
  `roll_no` varchar(50),
  `mailing_address` text,
  `city` varchar(100),
  `state` varchar(100),
  `country` varchar(100),
  `pincode` varchar(20),
  `gender` varchar(20),
  `whatsapp_no` varchar(50),
  `personal_email` varchar(255),
  `present_status` varchar(100),
  `organization` varchar(255),
  `remarks` text,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

CREATE TABLE IF NOT EXISTS `alumni_2019_admission` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `timestamp` varchar(255),
  `username` varchar(255),
  `first_name` varchar(100),
  `last_name` varchar(100),
  `dob` varchar(50),
  `roll_no` varchar(50),
  `city` varchar(100),
  `state` varchar(100),
  `country` varchar(100),
  `pincode` varchar(20),
  `gender` varchar(20),
  `whatsapp_no` varchar(50),
  `personal_email` varchar(255),
  `present_status` varchar(100),
  `organization` varchar(255),
  `remarks` text,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

CREATE TABLE IF NOT EXISTS `alumni_2020_admission` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `timestamp` varchar(255),
  `username` varchar(255),
  `first_name` varchar(100),
  `last_name` varchar(100),
  `dob` varchar(50),
  `roll_no` varchar(50),
  `city` varchar(100),
  `state` varchar(100),
  `country` varchar(100),
  `pincode` varchar(20),
  `gender` varchar(20),
  `whatsapp_no` varchar(50),
  `personal_email` varchar(255),
  `present_status` varchar(100),
  `organization` varchar(255),
  `remarks` text,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

CREATE TABLE IF NOT EXISTS `alumni_2021_admission` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `timestamp` varchar(255),
  `username` varchar(255),
  `first_name` varchar(100),
  `last_name` varchar(100),
  `dob` varchar(50),
  `roll_no` varchar(50),
  `city` varchar(100),
  `state` varchar(100),
  `country` varchar(100),
  `pincode` varchar(20),
  `gender` varchar(20),
  `whatsapp_no` varchar(50),
  `personal_email` varchar(255),
  `present_status` varchar(100),
  `organization` varchar(255),
  `remarks` text,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

CREATE TABLE IF NOT EXISTS `alumni_higher_studies` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `student_name` varchar(255),
  `roll_no` varchar(50),
  `program` varchar(255),
  `university` varchar(255),
  `country` varchar(100),
  `admission_year` varchar(20),
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

CREATE TABLE IF NOT EXISTS `alumni_details_2024` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `timestamp` varchar(255),
  `student_name` varchar(255),
  `batch` varchar(50),
  `mobile_no` varchar(50),
  `whatsapp_no` varchar(50),
  `email` varchar(255),
  `communication_address` text,
  `permanent_address` text,
  `occupation` varchar(255),
  `country_of_employment` varchar(100),
  `nationality` varchar(100),
  `pay_level` varchar(100),
  `is_govt_job` varchar(10),
  `willingness_to_contribute` text,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;
