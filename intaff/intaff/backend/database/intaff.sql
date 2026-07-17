CREATE DATABASE IF NOT EXISTS intaff;
USE intaff;

CREATE TABLE mous (
  id INT AUTO_INCREMENT PRIMARY KEY,
  organization VARCHAR(255) NOT NULL,
  location VARCHAR(150) NOT NULL,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE collaborators (
  id INT AUTO_INCREMENT PRIMARY KEY,
  name VARCHAR(255) NOT NULL,
  organization VARCHAR(255) NOT NULL,
  country VARCHAR(100) NOT NULL,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE team_members (
  id INT AUTO_INCREMENT PRIMARY KEY,
  name VARCHAR(150) NOT NULL,
  role VARCHAR(150) NOT NULL,
  photo_url VARCHAR(255),
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE registrations (
  id INT AUTO_INCREMENT PRIMARY KEY,
  full_name VARCHAR(150) NOT NULL,
  email VARCHAR(150) NOT NULL,
  phone VARCHAR(20),
  institution VARCHAR(200),
  country VARCHAR(100),
  purpose ENUM('Internship','Collaboration','MoU','Research','Other') DEFAULT 'Other',
  message TEXT,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE contact_messages (
  id INT AUTO_INCREMENT PRIMARY KEY,
  name VARCHAR(150) NOT NULL,
  email VARCHAR(150) NOT NULL,
  message TEXT NOT NULL,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Seed MoUs
INSERT INTO mous (organization, location) VALUES
('Technische Universität München', 'Germany'),
('Universidad de La Frontera', 'Chile'),
('Brunswick University', 'Canada'),
('Univ. of Agder', 'Norway'),
('Johannes Gutenberg', 'Germany'),
('DADB - German Academy of Digital Education', 'Germany'),
('BOSE Information Technology', 'Germany'),
('DareToStart.org', 'Germany'),
('Build, Austria', 'Austria'),
('Aster Digital Health Incubator', 'India and Arab Countries'),
('i-ADAM Japan', 'Japan'),
('UnternehmerTUM', 'Germany'),
('Optellent Inc', 'San Jose, USA');

-- Seed Collaborators
INSERT INTO collaborators (name, organization, country) VALUES
('Dr. Manuel Fernandez Delgado', 'University of Santiago', 'Spain'),
('Dr. Kasi Periyasamy', 'University of Wisconsin', 'USA'),
('Dr. Deepak Padmanabhan', 'Queen''s University', 'UK'),
('Dr. Valentina Emilia Balas', 'Aurel Vlaicu University of Arad', 'Romania'),
('Dr. Rajkumar Buyya', 'University of Melbourne', 'Australia'),
('Prof. Michael Gerndt', 'Technische Universität München', 'Germany'),
('Dr. Omer Rana', 'Cardiff University', 'UK'),
('Dr. E. Silambarasan', 'University of Santiago', 'Spain'),
('Dr. Selvi C', 'University of Wisconsin', 'USA'),
('Dr. Venkatesh S', 'Queen''s University', 'UK');

-- Seed Team Members
INSERT INTO team_members (name, role, photo_url) VALUES
('Dr. Shajulin Benedict', 'Associate Professor (Team Lead)', NULL),
('Dr. Rajesh G', 'Asst. Professor', NULL),
('Dr. E. Silambarasan', 'Asst. Professor', NULL),
('Dr. Selvi C', 'Asst. Professor', NULL),
('Dr. Venkatesh S', 'Asst. Professor', NULL),
('Sasi Kiran Reddy', 'BTech, Batch 2021', NULL),
('Charan', 'BTech, Batch 2021', NULL),
('Tanya', 'BTech, Batch 2022', NULL);
