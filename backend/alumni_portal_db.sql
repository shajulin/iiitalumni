-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Jul 16, 2026 at 08:03 AM
-- Server version: 10.4.32-MariaDB
-- PHP Version: 8.1.25

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `alumni_portal_db`
--

-- --------------------------------------------------------

--
-- Table structure for table `alumni_2016_batch`
--

CREATE TABLE `alumni_2016_batch` (
  `id` int(11) NOT NULL,
  `timestamp` varchar(255) DEFAULT NULL,
  `username` varchar(255) DEFAULT NULL,
  `first_name` varchar(100) DEFAULT NULL,
  `last_name` varchar(100) DEFAULT NULL,
  `dob` varchar(50) DEFAULT NULL,
  `roll_no` varchar(50) DEFAULT NULL,
  `mailing_address` text DEFAULT NULL,
  `city` varchar(100) DEFAULT NULL,
  `state` varchar(100) DEFAULT NULL,
  `country` varchar(100) DEFAULT NULL,
  `pincode` varchar(20) DEFAULT NULL,
  `gender` varchar(20) DEFAULT NULL,
  `whatsapp_no` varchar(50) DEFAULT NULL,
  `personal_email` varchar(255) DEFAULT NULL,
  `permanent_address` text DEFAULT NULL,
  `present_status` varchar(100) DEFAULT NULL,
  `organization` varchar(255) DEFAULT NULL,
  `remarks` text DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `alumni_2016_batch`
--

INSERT INTO `alumni_2016_batch` (`id`, `timestamp`, `username`, `first_name`, `last_name`, `dob`, `roll_no`, `mailing_address`, `city`, `state`, `country`, `pincode`, `gender`, `whatsapp_no`, `personal_email`, `permanent_address`, `present_status`, `organization`, `remarks`) VALUES
(1, '2020/11/02 4:21:45 PM GMT+5:30', NULL, 'nmbnm', 'nmnbm', 'nbmbnm', NULL, 'mnnbm', 'nbmbnm', NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(2, '2020/11/05 12:27:02 PM GMT+5:30', 'maddiralla16@iiitkottayam.ac.in', 'Vinay Kumar', 'Maddiralla', '1999-06-29', '2016BCS0020', '7-1365, Indira Malreddy Nagar, Near Beedi Colony, Madanapalle Road', 'Kalikiri, Chittoor(Dist)', 'Andhra Pradesh', 'India', '517234', 'Male', '7702783840', 'vinaymaddirala477@gmail.com', '7-1365, Indira Malreddy Nagar, Near Beedi Colony, Madanapalle Road, Kalikiri - 517234, Chittoor (Dist), Andhra Pradesh, India.', 'Higher Studies', 'Cranfield University, UK', NULL),
(3, '2020/11/05 12:27:23 PM GMT+5:30', 'sai16@iiitkottayam.ac.in', 'Sai Surya Kiran', 'Pokala', '1998-09-09', '2016BCS0026', 'P. Rama chandra rao, 3-43, Ramalayam street, Yellamilli, Gandepalli Mandal, East Godavari District, Andhra Pradesh, India', 'Yellamilli', 'Andhra Pradesh', 'India', '533437', 'Male', '7382649155', 'saisuryapokala6@gmail.com', 'P. Rama chandra rao 3-43, Ramalayam street, Yellamilli, Gandepalli Mandal, East Godavari District, Andhra Pradesh, India  533437', 'Higher Studies', NULL, NULL),
(4, '2020/11/05 12:27:45 PM GMT+5:30', 'gayathri16@iiitkottayam.ac.in', 'Pamula', 'Gayathri', '1998-09-04', '2016BCS0024', '11-47, Pidur Road, K.R.Puram, Manubolu,Nellore(Dt), Andhra Pradesh, PIN:524405', 'Nellore', 'Andhra Pradesh', 'India', '524405', 'Female', '9494200545', 'gayipamula@gmail.com', '11-47, \nPidur Road, K.R.Puram,\nManubolu, \nS.P.S.R.Nellore, \nAndhra Pradesh\nPIN:524405', 'Other', NULL, NULL),
(5, '2020/11/05 12:27:46 PM GMT+5:30', 'koppeti16@iiitkottayam.ac.in', 'Koppeti Daniel', 'Kamal Raj', '1999-04-22', '2016BCS0019', '26-13-425 , Teacher\'s Colony , B.V.Nagar', 'Nellore', 'Andhra Pradesh', 'India', '524004', 'Male', '9949200820', 'daniel.raj2299@gmail.com', '26-13-425 , Teacher\'s Colony , B.V.Nagar , Nellore , 524004', 'Employed', 'Tata Consultancy Services Ltd.', 'Nothing'),
(6, '2020/11/05 12:30:05 PM GMT+5:30', 'thalari16@iiitkottayam.ac.in', 'Ravindra', 'Thalari', '1999-02-05', '2016BCS0029', '7-36 Vemulakurthi ibrahimpatnam Jagitial Telangana 505450', 'Jagitial', 'Telangana', 'India', '505450', 'Male', '9640771354', 'ravindrat586@gmail.com', '7-36 Vemulakurthi ibrahimpatnam Jagitial Telangana 505450', 'Other', NULL, NULL),
(7, '2020/11/05 12:34:31 PM GMT+5:30', 'vanshikha16@iiitkottayam.ac.in', 'A Vanshikha', 'Jain', '1999-04-18', '2016BCS0001', '9-2-110, Park Street,  Sullurupeta,  Nellore,  Andhra Pradesh - 524121', 'Sullurupeta', 'Andhra Pradesh', 'India', '524121', 'Female', '9207397745', 'Vanshika.jain1804@gmail.com', '9/67, Park Street, Sullurupeta,  Nellore,  Andhra Pradesh - 524121', 'Employed', 'Tata Consultancy Services Limited', 'None'),
(8, '2020/11/05 2:36:01 PM GMT+5:30', 'venkatsainallapati@gmail.com', 'Nallapati', 'Lakshmi vara venkata sai', '1998-12-29', '2016BCS0023', 'venkatsainallapati@gmail.com', 'Anaparthy', 'Andhra pradesh', 'India', '533342', 'Male', '9963634577', 'venkatsainallapati@gmail.com', '6-186, seshagiri rao peta, anaparthy, east godavari district, andhra pradesh. 533342', 'Employed', NULL, NULL),
(9, '2020/11/05 4:31:17 PM GMT+5:30', 'dhulipalla16@iiitkottayam.ac.in', 'Sahil Teja', 'Dhulipalla', '1998-11-06', '2016BCS0012', '22-17-2/13, Woodnagar, Chirala, Prakasam(dt), Andhra Pradesh, 523155', 'Chirala', 'Andhra Pradesh', 'India', '523155', 'Male', '7286856029', 'teja.sahil@gmail.com', '22-17-2/13, Woodnagar, Chirala, Prakasam (dt), Andhrapradesh. Pin 523155', 'Employed', 'Imanage', 'None'),
(10, '2020/11/05 7:44:03 PM GMT+5:30', 'mannem16@iiitkottayam.ac.in', 'Mannem', 'Srinivas', '1999-07-24', '2016BCS0021', '5-1-74b/3a, Jonnaigunta street 2nd line, kavali, SPSR Nellore district, Andhrapradesh-524201', 'Nellore', 'ANDHRA PRADESH', 'India', '524201', 'Male', '9603552539', 'm.srinivas365@gmail.com', '5-1-74b/3a, Jonnaigunta street 2nd line, kavali, SPSR Nellore district, Andhrapradesh-524201', 'Employed', 'Litmus7', NULL),
(11, '2020/11/05 7:59:37 PM GMT+5:30', 'banothu16@iiitkottayam.ac.in', 'Uttam', 'Naik', '1997-06-27', '2015BCS0007', 'bujjibabu0027@gmail.com', 'Suryapet', 'Telangana', 'India', '508246', 'Male', '8790253020', 'bujjibabu0027@gmail.com', '12-143, Hemlathanda, mellachervu, Suryapet district, Telangana state, pin:508246', 'Other', NULL, NULL),
(12, '2020/11/06 12:13:58 PM GMT+5:30', 'akash16@iiitkottayam.ac.in', 'Akash', 'Pundir', '1998-11-11', '2016BCS0004', 'akpundir31981@gmail.com', 'South West Delhi', 'Delhi', 'India', '110043', 'Male', '7999455204', 'akpundir31981@gmail.com', '1669 Dharampura Kamla park , Najafgarh New Delhi - 110043', 'Other', NULL, NULL),
(13, '2020/11/06 12:21:49 PM GMT+5:30', 'arjun16@iiitkottayam.ac.in', 'Arjun', 'M', '1997-12-29', '2016BCS0008', 'Mepparambath House, Karthika, Kadalundi (PIN:673302), Kozhikode,Kerala', 'Kozhikode', 'Kerala', 'India', '673302', 'Male', '9895656660', 'arjun.krishna.291297@gmail.com', 'Mepparambath House, Karthika, Kadalundi, Kozhikode PIN:673302', 'Other', NULL, NULL),
(14, '2020/11/06 12:48:31 PM GMT+5:30', 'amrutham16@iiitkottayam.ac.in', 'ABHINAV', 'AMRUTHAM', '1998-07-18', '2016BCS0006', '2-6-62, jangaon, kurmavada, telangana, 506167', 'Jangaon', 'Telangana', 'India', '506167', 'Male', '8919616974', 'abhi98a@gmail.com', '2-6-62, jangaon, kurmavada, Telangana, 506167', 'Higher Studies', NULL, NULL),
(15, '2020/11/06 1:34:51 PM GMT+5:30', 'kamble16@iiitkottayam.ac.in', 'Charudatt', 'Kamble', '1998-10-01', '2016BCS0016', 'Panchashil society, balaji nagar, near Mugle Hospital. Tal: Omerga Dist: Usmanabad.', 'Usmanabad', 'Maharashtra', 'India', '413606', 'Male', '9421380973', 'charudattkamble5433@gmail.com', 'Panchashil society, balaji nagar, near Mugle Hospital. Tal: Omerga Dist: Usmanabad. 413606', 'Higher Studies', NULL, NULL),
(16, '2020/11/06 6:25:11 PM GMT+5:30', 'gugulothueshwarsai@gmail.com', 'Eshwar', 'Sai', '1998-12-30', '2016BCS0014', 'Flat no:-3 , Shri sai ganesh nilayam , shri Venkateshwara Township , Jangoan cross roads , Opp HP petrol bunk', 'Suryapet', 'Telangana', 'India', '508213', 'Male', '9493939095', 'Pumaeshwarsai@gmail.com', 'H.No:-18-992 , shivaji Nagar, Near shivani school, Miryalaguda, Nalgonda Dist, Telangana, pin code :-508207.', 'Other', NULL, NULL),
(17, '2020/11/06 6:48:54 PM GMT+5:30', 'kelavath16@iiitkottayam.ac.in', 'Kelavath', 'Jaisingh', '1998-08-10', '2016BCS0017', 'Gurram gattu thanda (village), Marpally (mandal), Vikarabad (district), Telangana (state), pincode: 501202', 'Hyderabad', 'Telangana', 'India', '501202', 'Male', '9010470959', 'kelavathjaisingh@gmail.com', 'Gurram gattu thanda (village), Marpally (mandal), Vikarabad (district), Telangana (state), pincode: 501202', 'Other', NULL, 'I need fee receipts, Bonafide and fee structure of 3rd and 4th year through post'),
(18, '2020/11/06 7:25:27 PM GMT+5:30', 'sandii68298@gmail.com', 'Sandeep kumar', 'Yedla', '1999-06-06', '2016BCS0031', 'Railway Quarters 793, Gopala reddy road, red circle, opposite road to Forest dept. office, Krishna district', 'Vijaywada', 'Andhra pradesh', 'Indian', '520010', 'Male', '8919134330', 'sandii68298@gmail.com', 'H-no 6-50/16 Tarapuri colony Near dhubai building, Nagaram, Medchal district', 'Higher Studies', 'Null', NULL),
(19, '2020/11/06 8:39:24 PM GMT+5:30', 'maurya16@iiitkottayam.ac.in', 'Siddharth', 'Maurya', '1998-11-07', '2016BCS0022', '192, Kribhco Township, Hazira Road, Surat', 'Surat', 'Gujarat', 'India', '394515', 'Male', '9978416971', 'savvysiddharth@gmail.com', '192, Kribhco Township, Hazira Road, Surat, Gujarat Pin: 394515', 'Other', 'None', 'None'),
(20, '2020/11/07 10:20:01 AM GMT+5:30', 'madhav16@iiitkottayam.ac.in', 'Sai Madhav', 'Jonnada', '1999-05-09', '2016BCS0015', '#103-5-236/1, Plot Number - 46, Ramadevi Gardens, Rajavolu', 'Rajahmundry', 'Andhra Pradesh', 'India', '533124', 'Male', '9494959665', 'j.saimadhav@gmail.com', '#103-5-236/1, Plot Number - 46, Ramadevi Gardens, Rajavolu, Rajahmundry Rural, Andhra Pradesh - 533124', 'Employed', 'SAP Labs Pvt Ltd', 'Just to clear this, in all records of the institute, my name is JONNADA SAI MADHAV, so as you asked for first name and last name, the order could come as SAI MADHAV JONNADA, but I request you to maintain it as JONNADA SAI MADHAV.'),
(21, '2020/11/08 12:09:22 PM GMT+5:30', 'abhieshekumar@gmail.com', 'Abhishek', 'Kumar', '1997-08-10', '2016BCS0002', '17-A, Raghunandan Vihar, Kakori Modh, Mohan Road, Lucknow. (Landmark :  Dr Shakuntala Misra National Rehabilitation University) 226101', 'Lucknow', 'Uttar Pradesh', 'India', '226101', 'Male', '7607538333', 'abhieshekumar@gmail.com', '17-A, Raghunandan Vihar, Kakori Modh, Mohan Road, Lucknow. (Landmark :  Dr Shakuntala Misra National Rehabilitation University) 226101', 'Other', NULL, NULL),
(22, '2020/11/09 12:56:15 AM GMT+5:30', 'ankit16@iiitkottayam.ac.in', 'Ankit', 'Verma', '1998-06-11', '2016BCS0007', 'C-335, Rajajipuram, Lucknow, U.P., India', 'Lucknow', 'Uttar Pradesh', 'India', '226017', 'Male', '9452335982', 'gameboyankit2011@gmail.com', 'C-335, Rajajipuram, Lucknow, U.P., India - 226017', 'Employed', 'TCS', NULL),
(23, '2020/11/09 12:06:43 PM GMT+5:30', 'avula16@iiitkottayam.ac.in', 'Avula', 'Praveen', '1999-02-09', '2016BCS0009', 'A Praveen,  h.no: 1/2134, Weavers Colony,Near Park, Yemmiganur, Kurnool(dist),Andhra Pradesh', 'Yemmiganur', 'Andhra Pradesh', 'India', '518360', 'Male', '9493050584', 'praveenavula19@gmail.com', 'A Praveen,  h.no: 1/2134, Weavers Colony,Near Park, Yemmiganur, Kurnool(dist),Andhra Pradesh  , 518360', 'Higher Studies', NULL, NULL),
(24, '2020/11/10 3:23:02 AM GMT+5:30', 'sameer16@iiitkottayam.ac.in', 'Sameer', 'Satyadarshi', '1998-01-18', '2016BCS0027', 'B1-510, Type- 3, Fifth Floor, CPWD Central Govt. Residential Complex, Devnagar, Karol Bagh, New Delhi-110005', 'New Delhi', 'Delhi', 'India', '110005', 'Male', '9871181306', 'sameerkdarshi@gmail.com', 'B1-510, Type- 3, Fifth Floor, CPWD Central Govt. Residential Complex, Devnagar, Karol Bagh, New Delhi-110005', 'Other', NULL, NULL),
(25, '2020/11/11 12:02:28 PM GMT+5:30', 'chatala16@iiitkottayam.ac.in', 'Akhileswarakumar', 'Chatala', '1998-07-18', '2016bcs0010', '#4,sree Krishna nilayam, sapthagiri layout,first cross, munnekolala, marthalli, Banglore,Karnataka 560037', 'Bangalore', 'Karnataka', 'India', '560037', 'Male', '7013539636', 'Chetala.akhileswara@gmail.com', '#4, Main Street,near ysr statue, Mallavarappadu, tangutur mandl, prakasam dict, Andhra Pradesh 523272', 'Employed', 'SAPLABS', NULL),
(26, '2020/11/12 3:30:28 PM GMT+5:30', 'vishnu16@iiitkottayam.ac.in', 'Vishnu', 'S', '1999-03-26', '2016BCS0030', '\'Vyshnavam\' HO, Parambath Jn., Karuvissery P/O, Kunduparamb, Calicut', 'Calicut', 'Kerala', 'India', '673010', 'Male', '8086797869', 'vishnu1999sreenivas@gmail.com', '\'Vyshnavam\' HO, Parambath Jn., Karuvissery P/O, Kunduparamb, Calicut. PIN - 673010', 'Employed', 'Litmus7 Systems Consulting Pvt. Ltd.', NULL),
(27, '2020/11/12 3:58:06 PM GMT+5:30', 'amritha16@iiitkottayam.ac.in', 'Amritha', 'Haridasan', '1998-01-18', '2016BCS0005', '\'Devamritham\', Green Gardens, Kallikkad, Thirunnellayi(PO)', 'Palakkad', 'Kerala', 'India', '678004', 'Female', '9605774158', 'amrithaharidasan18@gmail.com', '\'Devamritham\', Green Gardens, Kallikkad, Thirunnellayi(PO), Palakkad, Kerala, India, PIN - 678004', 'Employed', 'Litmus7 Systems Consulting', '-'),
(28, '2020/11/12 8:55:04 PM GMT+5:30', 'philip16@iiitkottayam.ac.in', 'Philip', 'Kochutharayil', '1998-09-27', '2016BCS0018', 'Principal\'s Quarter, Shreesthal English School, Nadi Road', 'Siddhpur', 'Gujarat', 'India', '384151', 'Male', '7283835428', 'pshaji99@gmail.com', 'Principal\'s Quarter, Shreesthal English School, Nadi Road, Siddhpur, N.Gujarat', 'Other', NULL, NULL),
(29, '2020/11/14 11:23:17 AM GMT+5:30', 'deti16@iiitkottayam.ac.in', 'Prudvi', 'Deti', '1998-08-24', '2016BCS0011', 'H.No: 2-6-344/1, New colony (Nowgoan Basti), Kaghaznagar, 504296. Landmark: Near RajivNagar board', 'Kaghaznagar', 'Telangana', 'India', '504296', 'Male', '9063269770', 'deti.prudvi@gmail.com', 'H.NO: 4-11, Chinthaguda, Kaghaznagar, 504296', 'Higher Studies', NULL, NULL),
(30, '2020/11/15 10:03:08 AM GMT+5:30', 'omsai16@iiitkottayam.ac.in', 'Sahukari', 'Om sai chowdary', '1999-07-10', '2016BCS0025', 'H.no 11-6-110/1 f.no 504 sri Krishna towers, cheruku thota colony,saroor nagar,ranga reddy,telengana-500035', 'Hyderabad', 'Telengana', 'India', '500035', 'Male', '9393723980', 'Omsai.sahukari@gmail.com', 'H.no 11-6-110/1 f.no 504,sri krishna towers, cheruku thota colony,saroor nagar,ranga reddy,Telengana-500035', 'Other', NULL, NULL),
(31, '2026-07-16 07:27:24', 'hari123@gmail.com', 'Hari', '', '', '19cos225', '', '', '', '', '', '', '', 'hari123@gmail.com', '', '', '', ''),
(32, '2026-07-16T11:01', 'selava', 'selva', 'selava', '2026-07-16', '19cos225', NULL, 'madurai', 'tamilnadu', 'india', '621456', 'Male', '5645646854', 'harihari81352@gmail.com', NULL, 'Self-Employed', NULL, NULL);

-- --------------------------------------------------------

--
-- Table structure for table `alumni_2017_batch`
--

CREATE TABLE `alumni_2017_batch` (
  `id` int(11) NOT NULL,
  `timestamp` varchar(255) DEFAULT NULL,
  `username` varchar(255) DEFAULT NULL,
  `first_name` varchar(100) DEFAULT NULL,
  `last_name` varchar(100) DEFAULT NULL,
  `dob` varchar(50) DEFAULT NULL,
  `roll_no` varchar(50) DEFAULT NULL,
  `mailing_address` text DEFAULT NULL,
  `city` varchar(100) DEFAULT NULL,
  `state` varchar(100) DEFAULT NULL,
  `country` varchar(100) DEFAULT NULL,
  `pincode` varchar(20) DEFAULT NULL,
  `gender` varchar(20) DEFAULT NULL,
  `whatsapp_no` varchar(50) DEFAULT NULL,
  `personal_email` varchar(255) DEFAULT NULL,
  `present_status` varchar(100) DEFAULT NULL,
  `organization` varchar(255) DEFAULT NULL,
  `remarks` text DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `alumni_2017_batch`
--

INSERT INTO `alumni_2017_batch` (`id`, `timestamp`, `username`, `first_name`, `last_name`, `dob`, `roll_no`, `mailing_address`, `city`, `state`, `country`, `pincode`, `gender`, `whatsapp_no`, `personal_email`, `present_status`, `organization`, `remarks`) VALUES
(1, '2021/09/03 10:41:28 AM GMT+5:30', 'gunjan2017@iiitkottayam.ac.in', 'GUNJAN', 'BAGDE', '2000-03-04', '2017BCS0024', '96A,Vaishali Nagar, khat road , Bhandara, Maharashtra (441904)', 'Bhandara', 'Maharashtra', 'India', '441904', 'Male', '7276229571', 'gunjan806@gmail.com', 'Employed', 'Tanla Platforms Limited', NULL),
(2, '2021/09/03 10:42:18 AM GMT+5:30', 'adityakumarnayak2017@iiitkottayam.ac.in', 'Aditya Kumar', 'Nayak', '1998-06-20', '2017BCS0004', 'AT/PO- Sakosingha, Dist-Angul, State-Odisha,VIA-P.T.C.', 'Angul', 'Odisha', 'India', '759123', 'Male', '7978161231', 'adiku7852@gmail.com', 'Other', NULL, NULL),
(3, '2021/09/03 10:43:04 AM GMT+5:30', 'deepeshsharma2017@iiitkottayam.ac.in', 'deepesh', 'sharma', '1999-10-23', '2017BCS0015', '12,vinayak vihar, luniyawas, goner road, jaipur, rajasthan, 303012', 'Jaipur', 'Rajasthan', 'India', '303012', 'Male', '9214072757', 'wdeepeshsharma@gmail.com', 'Employed', 'Ericsson', NULL),
(4, '2021/09/03 10:43:14 AM GMT+5:30', 'neeharichinnu2017@iiitkottayam.ac.in', 'Dharavathu Neehari', 'Naik', '1999-11-10', '2017BCS0017', 'neeharichinnu2017@iiitkottayam.ac.in', 'Vijayawada', 'Andhra pradesh', 'India', '520008', 'Female', '918500808283', 'neeharinaik10@gmail.com', 'Employed', 'Deliotte', NULL),
(5, '2021/09/03 10:43:48 AM GMT+5:30', 'someshkumar2017@iiitkottayam.ac.in', 'Somesh', 'Kumar', '1998-10-20', '2017BCS0058', '2/115 nawabganj, Kanpur, near RBRD School', 'Kanpur', 'Uttar Pradesh', 'India', '208002', 'Male', '6394710954', '2010somkumar@gmail.com', 'Other', NULL, NULL),
(6, '2021/09/03 10:44:58 AM GMT+5:30', 'ayushray2017@iiitkottayam.ac.in', 'Ayush', 'Rai', '1999-06-06', '2017BCS0013', 'A-87, Omicron 1A, Greater Noida, Uttar Pradesh, Pincode:- 201310', 'Greater Noida', 'Uttar Pradesh', 'India', '201310', 'Male', '9411286401', 'ayushrai6699@gmail.com', 'Employed', 'Cognizant Technology Solutions', 'When we will recieve these documents?? Like expected date.'),
(7, '2021/09/03 10:46:26 AM GMT+5:30', 'sameer2017@iiitkottayam.ac.in', 'Sameer Ahmed', 'S J', '2000-04-18', '2017BCS0050', '1-239/72, A5, Ward No 17, Nehru Nagar, Karumalai Koodal, Mettur Dam - 636402', 'Mettur', 'Tamil Nadu', 'India', '636402', 'Male', '8838699423', 'awwsamsj@gmail.com', 'Employed', 'Cognizant Technology Solutions', NULL),
(8, '2021/09/03 10:48:11 AM GMT+5:30', 'rajpurohit2017@iiitkottayam.ac.in', 'Arvind', 'Rajpurohit', '1998-11-04', '2017BCS0011', 'House No -49,House Name- Ram Kutiya,Street No-2,Thakur Virendra Nagar, Mandore,Jodhpur', 'Jodhpur', 'RAJASTHAN', 'India', '342304', 'Male', '7690913984', 'rajpurohit011.a@gmail.com', 'Other', NULL, 'Please send ASAP. I need Urgently.'),
(9, '2021/09/03 10:53:31 AM GMT+5:30', 'sandeepvangapandu2017@iiitkottayam.ac.in', 'Sandeep', 'Vangapandu', '2000-08-05', '2017BCS0064', '9-7-14, near six taps, sivajipalem, Visakhapatnam, 530017', 'Visakhapatnam', 'Andhra Pradesh', 'India', '530017', 'Male', '7902548464', 'sandeepvangapandu05@gmail.com', 'Employed', 'Accenture', NULL),
(10, '2021/09/03 10:54:34 AM GMT+5:30', 'kartikaini2017@iiitkottayam.ac.in', 'karthikayini', 'A', '1999-07-12', '2017BCS0029', '6-3-16H1A, aachi nagar ,nilakottai dindigul dist,624208,tamilnadu', 'NILAKKOTTAI', 'Tamil Nadu', 'india', '624208', 'Female', '7010851043', 'alagumalai204@gmail.com', 'Other', NULL, NULL),
(11, '2021/09/03 10:58:31 AM GMT+5:30', 'suryapal2017@iiitkottayam.ac.in', 'Suryapal', 'Singh asolia rao', '1999-11-18', '2017bcs0061', 'Hilite cliffdale-38 , jail road , Calicut , kerala', 'Calicut', 'Kerala', 'India', '673004', 'Male', '8075490691', 'surya.sigh@gmail.com', 'Employed', NULL, NULL),
(12, '2021/09/03 10:59:08 AM GMT+5:30', 'neeraj2017@iiitkottayam.ac.in', 'Neeraj', 'S', '1999-08-18', '2017BCS0041', '545/7, Behind Pattalamman Koyil, Thadangam, Dharmapuri', 'Dharmapuri', 'Tamil Nadu', 'India', '636705', 'Male', '9072519857', 'neerajthefuture7@gmail.com', 'Employed', 'Cognizant Technological Solutions', 'None'),
(13, '2021/09/03 11:02:09 AM GMT+5:30', 'shubhamkvs2017@iiitkottayam.ac.in', 'Shubham', 'Mishra', '1998-07-01', '2017BCS0056', 'A/1 Hospital Colony in front of gm bunglow, Dhanpuri', 'Shahdol', 'Madhya Pradesh', 'India', '484114', 'Male', '8319817902', 'smishra.ce@gmail.com', 'Employed', 'Infosys', NULL),
(14, '2021/09/03 11:11:22 AM GMT+5:30', 'anurag2017@iiitkottayam.ac.in', 'Anurag', 'Reddy', '2000-01-11', '46', 'Flat No: 209 A Block Sai Tirumala Towers, beside SN Reddy gardens, champapet, Hyderabad, Telangana - 500079', 'Hyderabad', 'Telangana', 'India', '500079', 'Male', '7594067299', 'reddyanurag11@gmail.com', 'Higher Studies', NULL, NULL),
(15, '2021/09/03 11:15:19 AM GMT+5:30', 'harshareddy2017@iiitkottayam.ac.in', 'HARSHA VARDHAN REDDY', 'JANGAMREDDY', '1998-07-31', '2017BCS0027', '2-98, Sanagalaguduru (V), Putluru (M),Ananthapur(Dist), Andhrapradesh', 'Ananthapur', 'Andhra Pradesh', 'India', '515411', 'Male', '8129770805', 'harshajangamreddy1@gmail.com', 'Other', NULL, NULL),
(16, '2021/09/03 11:18:34 AM GMT+5:30', 'tumunshaily2017@iiitkottayam.ac.in', 'Tumun', 'Shaily', '1999-09-23', '2017BCS0062', 'A206, salarpuria symphony ,  chikka Thoguru, Service Rd, Pragathi Nagar, Bengaluru, Karnataka 560100', 'Bangalore', 'Karnataka', 'India', '560100', 'Male', '8588989212', 'tumunshaily@gmail.com', 'Employed', 'iManage', NULL),
(17, '2021/09/03 11:18:51 AM GMT+5:30', 'arindamsengar@gmail.com', 'Arindam', 'Sengar', '1999-09-13', '2017BCS0010', 'C-23, Swaraj Enclave, Behind Borkheda Police Station, Near MR Park, Borkheda', 'Kota', 'Rajasthan', 'India', '324001', 'Male', '9610611443', 'arindamsengar@gmail.com', 'Employed', 'Newgen Software Technologies Limited', NULL),
(18, '2021/09/03 11:21:42 AM GMT+5:30', 'shivakrishna207@iiitkottayam.ac.in', 'SHIVAKRISHNA', 'GONDU', '1998-06-09', '2017BCS0021', 'Plot no:-62, SatyaSai Society, Dattawadi , Wadi(post),', 'Nagpur', 'Maharashtra', 'India', '440023', 'Male', '917798822375', 'Shivakrishna20raman@gmail.com', 'Employed', 'Deloitte USI', 'No'),
(19, '2021/09/03 11:35:29 AM GMT+5:30', 'vedantsandeep2017@iiitkottayam.ac.in', 'Vedant', 'Joshi', '1999-12-21', '2017BCS0065', 'D-203, Cosmos, Valley of flowers, Thakur Village, Kandivali East', 'Mumbai', 'Maharashtra', 'India', '400101', 'Male', '8879891562', 'vedrocks15@gmail.com', 'Employed', 'Vedantu', NULL),
(20, '2021/09/03 11:37:07 AM GMT+5:30', 'keerthikonjety7@gmail.com', 'Keerthi Sreenivas', 'Konjety', '1999-08-07', '2017BCS0031', 'Flat 401, Encons Acent Apartments, Sarojini Naidu nagar, Guttala Begumpet, Kakateeya Hills, Madhapur, Hyderabad.', 'Hyderabad', 'Telangana', 'India', '500081', 'Female', '15855030528', 'keerthikonjety7@gmail.com', 'Higher Studies', 'University of Rochester', NULL),
(21, '2021/09/03 11:43:08 AM GMT+5:30', 'aadithya2017@iiitkottayam.ac.in', 'Aadithya', 'Raj', '1999-07-02', '2017BCS0001', '364, Shri Lakshmi Nilayam, Valluvar Nagar-south, Indunagar P.O', 'Ooty', 'Tamil Nadu', 'India', '643005', 'Male', '9489308289', 'aadithya0207@gmail.com', 'Other', NULL, NULL),
(22, '2021/09/03 11:46:21 AM GMT+5:30', 'rahulbadami2017@iiitkottayam.ac.in', 'S Rahul', 'Badami', '1998-03-31', '2017BCS0051', 'Badami Mansion(Above HDFC Bank), 89 Main Road Parsudih, Jamshedpur, 831002, Jharkhand.', 'Jamshedpur', 'Jharkhand', 'India', '831002', 'Male', '9031824664', 'srahulbadami@gmail.com', 'Employed', 'Amazon', NULL),
(23, '2021/09/03 12:00:45 PM GMT+5:30', 'gauravkanwat2017@iiitkottayam.ac.in', 'Gaurav', 'Kanwat', '1999-10-19', '2017BCS0020', 'C - 25 B, Shankar Vihar, Gator, Malviya Nagar', 'Jaipur', 'Rajasthan', 'India', '302017', 'Male', '9079898419', 'gauravkanwat99@gmail.com', 'Other', NULL, NULL),
(24, '2021/09/03 12:28:44 PM GMT+5:30', 'viswakarmaabhishek2017@iiitkottayam.ac.in', 'Abhishek', 'Vishwakarma', '2000-02-10', '2017BCS0002', 'JC 7/3 Air Force Station Tezpur, District Sonitpur', 'Tezpur', 'Assam', 'India', '784104', 'Male', '9834740903', 'vishwakarmaabhishek31@gmail.com', 'Employed', 'FlyFin AI', NULL),
(25, '2021/09/03 12:51:20 PM GMT+5:30', 'vij37vibhor2017@iiitkottayam.ac.in', 'Vibhor', 'Vij', '1998-08-15', '2017BCS0066', '1757-1758, 3rd floor, Multani Mohalla, Rani Bagh, North-West Delhi, Delhi 110034', 'New Delhi', 'Delhi', 'India', '110034', 'Male', '9999843475', 'vij37vibhor@gmail.com', 'Employed', 'Cognizant', NULL),
(26, '2021/09/03 2:33:09 PM GMT+5:30', 'saimanoj2017@iiitkottayam.ac.in', 'Sai Manoj', 'Konidana', '2000-07-01', '2017BCS0030', 'Flat-C, ground floor, sai sadan apartments, 11-13-459/1,road no.14, alakapuri colony.', 'Hyderabad', 'Telangana', 'India', '500035', 'Male', '7702282785', 'saimanoj1525@gmail.com', 'Employed', 'Cognizant', '.'),
(27, '2021/09/03 5:35:31 PM GMT+5:30', 'vishnukhanthb2017@iiitkottayam.ac.in', 'Vishnu', 'Khanth', '1999-09-30', '2017BCS0068', '23/2, Kaveri Nagar, Suramangalam, Junction, Salem, Tamil nadu - 636005.', 'Salem', 'Tamil Nadu', 'India', '636005', 'Male', '9080380154', 'vishnukhanthb@gmail.com', 'Higher Studies', 'IIITDM Kancheepuram', 'Can u give Migration certificate also ? IIITDM Kancheepuram is asking migration certificate also'),
(28, '2021/09/03 5:50:45 PM GMT+5:30', 'shubhamkhamitkar99@gmail.com', 'SHUBHAM', 'KHAMITKAR', '1999-11-05', '2017BCS0057', 'A/P Karadkhed, Tq- Degloor, Dist- Nanded Pincode:- 431718', 'Nanded', 'Maharashtra', 'India', '431718', 'Male', '8208648990', 'shubhamkhamitkar99@gmail.com', 'Employed', 'Accenture', NULL),
(29, '2021/09/03 6:28:54 PM GMT+5:30', 'srilakshmiajith2017@iiitkottayam.ac.in', 'Srilakshmi', 'Ajith', '1999-05-07', '2017BCS0059', 'Flat No : 401, Krystal Ruby Apartments, Ashoka Road, Kaloor, Kochi, Kerala - 682017', 'Kochi', 'Kerala', 'India', '682017', 'Female', '9895559801', 'sla221sla@gmail.com', 'Employed', 'Goldman Sachs', NULL),
(30, '2021/09/03 7:51:48 PM GMT+5:30', 'laxmanmadipadige2017@iiitkottayam.ac.in', 'Madipadige', 'Laxman', '2000-03-10', '2017BCS0036', '1-5-218, General Bazar, Secunderabad', 'Hyderabad', 'Telangana', 'India', '500003', 'Male', '8977888808', 'laxmanmadipadige12@gmail.com', 'Other', NULL, NULL),
(31, '2021/09/03 8:08:27 PM GMT+5:30', 'sagarbhatia2017@iiitkottayam.ac.in', 'Sagar', 'Bhatia', '1998-11-09', '2017BCS0052', 'Qtr no 97 type 2, BSF Campus, opposite Vidhya Dham Mandir, Airport Road , Indore , MP pincode: 452005', 'Indore', 'Madhya Pradesh', 'India', '452005', 'Male', '6264334983', 'sagarbhatiahar210@gmail.com', 'Other', 'nothing....', 'no'),
(32, '2021/09/03 8:34:30 PM GMT+5:30', 'utkarshtrivedi56@gmail.com', 'Utkarsh', 'Trivedi', '1998-02-10', '2017BCS0063', 'Qtr no. RE- RB-III-7B, railway colony, behind railway hospital, katni , mp 483501', 'Katni', 'Madhya Pradesh', 'India', '483501', 'Male', '8357848168', 'utkarshtrivedi56@gmail.com', 'Employed', 'Juspay', NULL),
(33, '2021/09/03 10:23:34 PM GMT+5:30', 'banavath.jyothika2017@iiitkottayam.ac.in', 'Banavath', 'Jyothika', '2000-03-31', '2017BCS0014', 'banavath.jyothika2017@iiitkottayam.ac.in', 'Visakhapatnam', 'Andhra Pradesh', 'India', '530046', 'Female', '6281899305', 'banavath.jyothika31@gmail.com', 'Other', NULL, NULL),
(34, '2021/09/04 12:14:37 AM GMT+5:30', 'udaybhargav2017@iiitkottayam.ac.in', 'Mekala Uday', 'Bhargav', '1999-11-23', '2017BCS0040', 'Meka Uday Bhargav, H.no. 6-22-708, Rajeev nagar colony, Merubhavan, Dubba, Nizamabad, Telangana, India. 503002.', 'Nizamabad', 'Telangana', 'India', '503002', 'Male', '9010904338', 'udaybhargav23@gmail.com', 'Employed', 'Techigai private limited.', 'Nothing.'),
(35, '2021/09/04 8:44:23 AM GMT+5:30', 'adhyan2017@iiitkottayam.ac.in', 'Adhyan', '.', '1998-11-10', '2017BCS0003', 'C/o Sushil Kumar Das, New Mithila Colony, Nasriganj, Patna - 18, BIHAR', 'Patna', 'Bihar', 'India', '800018', 'Male', '9934624534', 'coolady56@gmail.com', 'Employed', 'Cognizant Technology Solutions', 'Please send 10th and 12th marksheets certificates that were submitted at the time of submission alongwith Semester wise marksheet and consolidated marksheet'),
(36, '2021/09/04 10:23:26 AM GMT+5:30', 'ashishgusain2017@iiitkottayam.ac.in', 'Ashish', 'Gusain', '1999-01-27', '12', 'Padampur Sukhro., Near Junior High School, 142a, Pauri Garhwal, 246149, Kotdwara, Uttarakhand', 'Kotdwara', 'Uttarakhand', 'India', '246149', 'Male', '7300935558', 'ashishgusain12345@gmail.com', 'Employed', 'Deloitte USI', NULL),
(37, '2021/09/04 10:45:22 AM GMT+5:30', 'jaineeldharia2017@iiitkottayam.ac.in', 'Jaineel Fenal', 'Dharia', '2000-02-05', '2017BCS0026', 'HNO 1-7-74 TO 79 FNO 102/B DEVAKI CHAMBERS SD RD, SECUNDERABAD, HYDERABAD. PIN : 500003, TELANGANA, INDIA.', 'Hyderabad', 'Telangana', 'India', '500003', 'Male', '9573526326', 'jaineeldharia123@gmail.com', 'Higher Studies', 'Masters of Applied Computing at University of Windsor, Canada', NULL),
(38, '2021/09/04 12:35:16 PM GMT+5:30', 'tingusingh2017@iiitkottayam.ac.in', 'Rahul Kumar', 'Singh', '2000-07-02', '2017BCS0045', '11/7 PRAGYA NAGAR, SUNDERPUR CHAURAHA', 'VARANASI', 'Uttar pradesh', 'India', '221005', 'Male', '8077801276', 'rahul9695542690@gmail.com', 'Employed', 'Cognizant', 'Please whatsapp or mail the tracking id of my parsal'),
(39, '2021/09/04 12:40:46 PM GMT+5:30', 'Santoshsharma2017@iiitkottayam.ac.in', 'Santosh', 'Sharma', '1999-07-01', '2017BCS0054', '628S 177/35/1 Shakti nagar Indira nagar Lucknow(226016) near kukrail bridge', 'Lucknow', 'UTTAR PRADESH', 'India', '226016', 'Male', '914 045 5010', 'sharmasantosh3161@gmail.com', 'Employed', 'Sunera Technologies, Inc. (SuneraTech)', NULL),
(40, '2021/09/04 3:18:49 PM GMT+5:30', 'srivastavaanuj2017@iiitkottayam.ac.in', 'Anuj', 'Srivastava', '1997-09-11', '2017BCS0009', 'LIG 146/2, Tikait Rai Colony, Rajajipuram, Lucknow, Uttar Pradesh, 226017', 'Lucknow', 'Uttar Pradesh', 'India', '226017', 'Male', '9415996800', 'srivastavaarjun0011@gmail.com', 'Employed', 'Deloitte', NULL),
(41, '2021/09/04 6:09:35 PM GMT+5:30', 'lovekumar2017@iiitkottayam.ac.in', 'Love', 'Kumar', '1998-09-28', '2017BCS0035', 'Vill. + P.O. - Bithan, (near bari thakurvari), samastipur, Bihar, 848207', 'samastipur', 'Bihar', 'India', '848207', 'Male', '8825349259', 'lovekumar8884@gmail.com', 'Employed', 'Altudo', NULL),
(42, '2021/09/04 7:34:01 PM GMT+5:30', 'anshumangaurav2017@iiitkottayam.ac.in', 'Anshuman', 'Gaurav', '1998-01-05', '2017BCS0007', 'House no. 68/B, zone 3, block A, Birsanagar', 'EAST SINGHBHUM', 'Jharkhand', 'India', '831019', 'Male', '9471315301', 'anshumangaurav100@gmail.com', 'Employed', 'TCS', NULL),
(43, '2021/09/04 10:48:53 PM GMT+5:30', 'vishalkanakamani2017@iiitkottayam.ac.in', 'Vishal', 'Kanakamamidi', '1999-12-20', '2017BCS0067', 'C-302, Railway Officer\'s Colony, Carter Road, Bandra (West) ,Mumbai-400050', 'Mumbai', 'Maharashtra', 'India', '400050', 'Male', '8381033123', 'vishalkanakamani2017@iiitkottayam.ac.in', 'Employed', 'Tradelab Technologies', NULL),
(44, '2021/09/04 11:45:34 PM GMT+5:30', 'shivakumar2017@iiitkottayam.ac.in', 'Shiva Kumar', 'Marepally', '1999-04-16', '2017BCS0038', 'Flat No.201, 2nd Floor, Zenas School Lane, Opp Metro Pillar A-600, Near Ratnadeep, Opp. Pooja Residency, MatruSri Nagar, Miyapur', 'Hyderabad', 'Telangana', 'India', '500049', 'Male', '7981574381', 'marepallyshiva777@gmail.com', 'Higher Studies', '---', '---'),
(45, '2021/09/05 12:23:01 AM GMT+5:30', 'sharmagarvit2017@iiitkottayam.ac.in', 'Garvit', 'Sharma', '1998-02-08', '2017BCS0019', '75-A New Basti Kalyanpur Khurd Kanpur,UP,208017', 'Kanpur', 'Uttar Pradesh', 'India', '208017', 'Male', '8004405512', 'sharmagarvit108@gmail.com', 'Employed', NULL, 'My issued books are in my room BAC117'),
(46, '2021/09/05 7:20:03 PM GMT+5:30', 'salimkhan2017@iiitkottayam.ac.in', 'PATTAN', 'SALIMKHAN', '1998-06-06', '2017BCS0043', 'salimkhan2017@iiitkottayam.ac.in', 'Unagatla', 'Andhra Pradesh', 'India', '534342', 'Male', '9505687861', 'pattansalimkhan55@gmail.com', 'Other', NULL, NULL),
(47, '2021/09/06 9:39:45 AM GMT+5:30', 'anshumanmishra2017@iiitkottayam.ac.in', 'Anshuman', 'Mishra', '1999-03-06', '2017BCS0008', 'L-505, Pramukh Vihar-5, Naroli Road, Silvassa - 396230', 'Silvassa', 'Dadra and Nagar Haveli (UT)', 'India', '396230', 'Male', '7990343405', 'anshumanmishra159@gmail.com', 'Employed', 'Tata Consultancy Services', NULL),
(48, '2021/09/06 10:10:00 AM GMT+5:30', 'kshitijpal2017@iiitkottayam.ac.in', 'Kshitij', 'Pal', '1998-07-15', '2017BCS0033', '192-Mansi Vihar, Sector-23, Sanjay Nagar, Ghaziabad, Uttar Pradesh', 'Ghaziabad', 'Uttar Pradesh', 'India', '201002', 'Male', '9971717068', 'kshitijpal192@gmail.com', 'Employed', 'Capgemini', NULL),
(49, '2021/09/06 10:38:20 AM GMT+5:30', 'rohithseby2017@iiitkottayam.ac.in', 'Rohith', 'Seby', '2000-02-27', '2017BCS0049', '301, Confident Gemini Apartments, Thoppinmoola Junction, Aranattukara PO 680618', 'Thrissur', 'Kerala', 'India', '680618', 'Male', '9656130109', 'rohithseby17@gmail.com', 'Other', 'Nil', 'Nil'),
(50, '2021/09/06 11:32:24 AM GMT+5:30', 'joelmathew289@gmail.com', 'Joel', 'Mathew Philip', '1999-09-28', '2017BCS0028', '31 / 1179 A-1, Sra 143, Sahakarana Road, Ponnurunni, Vyttila, Kochi', 'Kochi', 'Kerala', 'India', '682019', 'Male', '9037948162', 'joelmathew2809@gmail.com', 'Employed', 'Deloitte', 'Nothing'),
(51, '2021/09/06 12:59:16 PM GMT+5:30', 'manojkumarkota2017@iiitkottayam.ac.in', 'Kota manoj', 'Kumar', '1998-01-21', '2017BCS0032', '12-2-234/7, durga bhavani nilayam, kln raju street, rajula colony, Jangareddygudem, west godavari district Andhra pradesh, 534447', 'JANGAREDDYGUDEM', 'Andhra Pradesh', 'India', '534447', 'Male', '7997141487', 'manojkumarkota777@gmail.com', 'Other', NULL, NULL),
(52, '2021/09/06 2:38:52 PM GMT+5:30', 'rithikagorinka2017@iiitkottayam.ac.in', 'Gorinka', 'Rithika', '2000-05-09', '2017BCS0022', 'Gorinka Rithika, D/O: Gorinka Anil Kumar, H.no : 24C-11-81, Tilak Colony, R.R.Peta, Eluru, West Godavari, PIN Code: 534002', 'Eluru', 'Andhra Pradesh', 'India', '534002', 'Female', '8309485944', 'gorinkarithika@gmail.com', 'Other', NULL, NULL),
(53, '2021/09/06 7:05:16 PM GMT+5:30', 'bhargavi2017@iiitkottayam.ac.in', 'Mattaparti', 'Satya Bhargavi', '1999-07-27', '2017BCS0039', '2-2-1109/LIG-21, Bathukammakunta, Shivam Road, Nallakunta, (Near Hyderabadi Biryani),', 'Hyderabad', 'Telangana', 'India', '500013', 'Female', '8919299478', 'satyabhargavi2707@gmail.com', 'Employed', NULL, NULL),
(54, '2021/09/06 7:33:58 PM GMT+5:30', 'gunish2017@iiitkottayam.ac.in', 'Gunish', '.', '1999-06-05', '2017BCS0023', 'H. No. 1049/65 Jawahar Nagar Palwal Haryana', 'Palwal', 'Haryana', 'India', '121102', 'Male', '9818166609', 'talk.gunish@gmail.com', 'Other', NULL, NULL),
(55, '2021/09/06 10:15:04 PM GMT+5:30', 'rishavjaiswal2017@iiitkottayam.ac.in', 'Rishav', 'Jaiswal', '1998-02-15', '2017BCS0047', '14 Bhairav Dutta Lane, Kaushalya Appartment, Block A, Second Floor, Nandi Bagan, Salkia, Howrah - 711106', 'Howrah', 'West Bengal', 'India', '711106', 'Male', '8583883599', 'rishavlucky1998@gmail.com', 'Employed', NULL, NULL),
(56, '2021/09/07 5:47:26 AM GMT+5:30', 'mahfuzhasannoori2017@iiitkottayam.ac.in', 'Mahfuz', 'Hasan', '1998-04-20', '2017BCS0037', 'Village - Molnapur , PO- Mohammadpur via mirgang ,PS-Siwan mufassil,Siwan,Bihar,PINCODE - 841438', 'Siwan', 'Bihar', 'India', '841438', 'Male', '8789386256', 'mahfuzhasan0498@gmail.com', 'Employed', 'Thinkgrid Labs', '1. Please do not close the college email address.\n2. Before sending the Hard copy of degree , please make sure to include the documents which were provided at the time of admission.\n3.Thank you'),
(57, '2021/09/07 5:47:52 PM GMT+5:30', 'sudhanshu2017@iiitkottayam.ac.in', 'Sudhanshu', 'V', '1999-01-26', '2017BCS0060', 'Sandeep kiryana near pond,julana road,farmana chungi,Meham(124112),Rohtak, Haryana', 'Rohtak', 'Haryana', 'India', '124112', 'Male', '9350990335', 'mrsudhanshu28@gmail.com', 'Employed', 'SunTec', NULL),
(58, '2021/09/09 5:39:40 PM GMT+5:30', 'sangeetha2017@iiitkottayam.ac.in', 'sangeetha', 'suresh', '1998-07-21', '2017BCS0053', 'No.19, 6th main, chamundeshwari layout, near doddabommasandra lake, bangalore 560097', 'bengaluru', 'karnataka', 'India', '560097', 'Female', '8277066854', 's.sangeethaj21@gmail.com', 'Higher Studies', 'Washington University St. Louis', '-'),
(59, '2021/09/10 9:25:19 AM GMT+5:30', 'anandankit2017@iiitkottayam.ac.in', 'Ankit', 'Anand', '1998-07-23', '2017BCS0006', 'Brindawan colony, road no 2, near kidzee school, phulwari sharif, patna - 801507', 'Patna', 'Bihar', 'India', '801507', 'Male', '7907837332', 'anandankitfine@gmail.com', 'Employed', 'Deloitte USI', NULL),
(60, '2026-07-16 07:31:22', 'hari12345@gmail.com', 'Hari', '', '', '19cos225', '', '', '', '', '', '', '', 'hari12345@gmail.com', '', '', ''),
(61, '2026-07-16T11:14', 'harirama', 'harirama', 'harirama', '2026-07-16', '19cos225', NULL, 'madurai', 'tamilnadu', 'india', '625852', 'Male', '5645646854', 'harihari81352@gmail.com', 'Self-Employed', NULL, NULL);

-- --------------------------------------------------------

--
-- Table structure for table `alumni_2019_admission`
--

CREATE TABLE `alumni_2019_admission` (
  `id` int(11) NOT NULL,
  `timestamp` varchar(255) DEFAULT NULL,
  `username` varchar(255) DEFAULT NULL,
  `first_name` varchar(100) DEFAULT NULL,
  `last_name` varchar(100) DEFAULT NULL,
  `dob` varchar(50) DEFAULT NULL,
  `roll_no` varchar(50) DEFAULT NULL,
  `city` varchar(100) DEFAULT NULL,
  `state` varchar(100) DEFAULT NULL,
  `country` varchar(100) DEFAULT NULL,
  `pincode` varchar(20) DEFAULT NULL,
  `gender` varchar(20) DEFAULT NULL,
  `whatsapp_no` varchar(50) DEFAULT NULL,
  `personal_email` varchar(255) DEFAULT NULL,
  `present_status` varchar(100) DEFAULT NULL,
  `organization` varchar(255) DEFAULT NULL,
  `remarks` text DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `alumni_2019_admission`
--

INSERT INTO `alumni_2019_admission` (`id`, `timestamp`, `username`, `first_name`, `last_name`, `dob`, `roll_no`, `city`, `state`, `country`, `pincode`, `gender`, `whatsapp_no`, `personal_email`, `present_status`, `organization`, `remarks`) VALUES
(1, '2023/05/10 12:58:11 PM GMT+5:30', 'ansari@iiitkottayam.ac.in', 'Modassir', 'Ansari', '2000-11-22', '2019BCS0105', 'Kota', 'Rajasthan', 'India', '324005', 'Male', '9521317838', 'Send2modassir@gmail.com', 'Employed', 'Harman International', NULL),
(2, '2023/05/10 12:59:31 PM GMT+5:30', 'vishnu2019@iiitkottayam.ac.in', 'Vishnu', 'S', '2000-05-20', '2019BCS0068', 'Payyanur', 'Kerala', 'India', '670307', 'Male', '9633194957', 'vishnu.satheesh178@gmail.com', 'Employed', NULL, NULL),
(3, '2023/05/10 1:06:43 PM GMT+5:30', 'lakshin2019@iiitkottayam.ac.in', 'Lakshin', 'Kumar', '2001-11-01', '2019BCS0026', 'Chennai', 'Tamil Nadu', 'India', '600100', 'Male', '9080385059', 'lakshin.kumar.lk@gmail.com', 'Higher Education', NULL, NULL),
(4, '2023/05/10 1:06:48 PM GMT+5:30', 'indireddythrishalreddy@gmail.com', 'Thrishalreddy', 'Indireddy', '2001-10-02', '2019BCS0090', 'Kadapa', 'Andhra pradesh', 'India', '516293', 'Male', '+91 9390244978', 'indireddythrishalreddy@gmail.com', 'Higher Education', 'SUNY BINGHAMTON', NULL),
(5, '2023/05/10 1:07:07 PM GMT+5:30', 'dhanush2019@iiitkottayam.ac.in', 'Dhanush', 'Binu', '2002-01-12', '2019BCS0049', 'Pittsburgh', 'Pennsylvania', 'USA', '15106', 'Male', '7306431223', 'binudhanush0@gmail.com', 'Higher Education', 'University of Pittsburgh', NULL),
(6, '2023/05/10 1:07:22 PM GMT+5:30', 'nevin2019@iiitkottayam.ac.in', 'Nevin', 'Selby', '2001-11-08', '2019BCS0046', 'Mumbai', 'Maharashtra', 'India', '400051', 'Male', '9769068282', 'nvnsly@gmail.com', 'Higher Education', NULL, NULL),
(7, '2023/05/10 1:11:28 PM GMT+5:30', 'saisuhas2019@iiitkottayam.ac.in', 'Sai Suhas', 'Paruchuri', '2002-06-29', '2019BCS0097', 'VIJAYAWADA', 'ANDHRA PRADESH', 'INDIA', '521225', 'Male', '9390018169', 'saisuhasparuchuri@gmail.com', 'Higher Education', 'STATE UNIVERSITY OF NEW YORK AT BINGHAMTON', 'My phone number and email may change therefore, please find my father\'s phone number below\n9010171209 (Vijaya Saradhi Paruchuri)'),
(8, '2023/05/10 1:12:27 PM GMT+5:30', 'ashwinnair2019@iiitkottayam.ac.in', 'Ashwin', 'Nair', '2000-03-09', '2019BCS0007', 'Bhilai', 'Chhattisgarh', 'India', '490020', 'Male', '9131522185', 'ashwinonline2000@gmail.com', 'Employed', 'Media.net', NULL),
(9, '2023/05/10 1:17:52 PM GMT+5:30', 'sunny2019@iiitkottayam.ac.in', 'Kumar', 'Sunny', '2000-04-05', '2019BCS0050', 'Purnia', 'Bihar', 'India', '854304', 'Male', '9122146762', 'itsmesunny542@gmail.com', 'Employed', 'Beehyv Software Solutions Private Limited', NULL),
(10, '2023/05/10 1:32:25 PM GMT+5:30', 'rithishgajjala@gmail.com', 'Rithish Kumar Reddy', 'Gajjala', '2001-06-02', '2019BCS0108', 'Hyderabad South East', 'Telangana', 'India', '500039', 'Male', '919000692365', 'rithishgajjala@gmail.com', 'Higher Education', 'Binghamton University SUNY', NULL),
(11, '2023/05/10 1:34:26 PM GMT+5:30', 'sai2019@iiitkottayam.ac.in', 'Sai Nruthik Sri Harsha', 'Kuruva', '2001-10-19', '2019BCS0088', 'Hyderabad', 'Telangana', 'India', '500037', 'Male', '9160300234', 'sainruthik@gmail.com', 'Higher Education', 'Arizona State University', NULL),
(12, '2023/05/10 1:39:03 PM GMT+5:30', 'raghuvamshi2019@iiitkottayam.ac.in', 'RAGHUVAMSHI', 'K', '2001-12-10', '2019BCS0094', 'Hyderabad', 'Telangana', 'Indian', '500059', 'Male', '9390373900', 'raghuvamshi9492@gmail.com', 'Higher Education', 'Nil', 'Nil'),
(13, '2023/05/10 1:39:13 PM GMT+5:30', 'yellantinithish2019@iiitkottayam.ac.in', 'Nithish Chowdary', 'Yellanti', '2000-10-02', '2019BCS0055', 'Hosur', 'Tamilnadu', 'India', '635109', 'Male', '9515245162', 'nithishchowdary7@gmail.com', 'Employed', 'Real Variable', 'Yellanti Nithish Chowdary'),
(14, '2023/05/10 1:40:34 PM GMT+5:30', 'adityamutharia2019@iiitkottayam.ac.in', 'Aditya', 'Mutharia', '2001-01-25', '2019BCS0061', 'Gurugram', 'Haryana', 'India', '122009', 'Male', '8800825143', 'aditya.mutharia@gmail.com', 'Employed', 'Tekion Corp', 'N.A'),
(15, '2023/05/10 1:41:02 PM GMT+5:30', 'rupeshdhangi2019@iiitkottayam.ac.in', 'Rupesh', 'Dangi', '2002-02-11', '2019BCS0122', 'Rajgarh', 'Madhya Pradesh', 'India', '465689', 'Male', '9754264099', 'rdangi9754@gmail.com', 'Employed', 'CDOT', NULL),
(16, '2023/05/10 1:59:17 PM GMT+5:30', 'lokeshrai2019@iiitkottayam.ac.in', 'Lokesh', 'Rai', '2000-09-13', '2019BCS0120', 'Varanasi', 'Uttar Pradesh', 'India', '221005', 'Male', '9793145898', 'lokeshrai.personal@gmail.com', 'Employed', 'Amazon', NULL),
(17, '2023/05/10 2:08:41 PM GMT+5:30', 'Luckmanshaik2019@iiitkottayam.ac.in', 'Luckman Lal Miya Bahadur', 'Shaik', '2002-06-08', '2019BCS0079', 'Nidadavolu', 'Andhra Pradesh', 'India', '534301', 'Male', '9347453389', 'Luckmanshaik@gmail.com', 'Employed', 'Reliance Jio', NULL),
(18, '2023/05/10 2:09:47 PM GMT+5:30', 'alwin2019@iiitkottayam.ac.in', 'Alwin', 'Sebastian', '2001-07-29', '2019BCS0042', 'Faridabad', 'Haryana', 'India', '121006', 'Male', '7838253445', 'alwinseb01@gmail.com', 'Employed', 'Tekion Corp', NULL),
(19, '2023/05/10 2:12:22 PM GMT+5:30', 'pramodh2019@iiitkottayam.ac.in', 'PRAMODH REDDY', 'POKALA', '2002-06-09', '2019BCS0086', 'NELLORE', 'Amdhra Pradesh', 'India', '524137', 'Male', '91533399991', 'pramodh9172@gmail.com', 'Employed', 'BEEHYV SOFTWARE SOLUTIONS', NULL),
(20, '2023/05/10 2:15:01 PM GMT+5:30', 'kathyayani2019@iiitkottayam.ac.in', 'Kathyayani', 'Bolgam', '2002-08-05', '2019BCS0032', 'Hyderabad', 'Telangana', 'India', '500035', 'Female', '9037661760', 'kathyublgm@gmail.com', 'Employed', 'IBM', 'None'),
(21, '2023/05/10 2:16:14 PM GMT+5:30', 'mahesh2019@iiitkottayam.ac.in', 'Mahesh', 'Vanam', '2002-03-15', '2019BCS0030', 'Nalgonda', 'Telangana', 'India', '508250', 'Male', '8978277061', 'maheshvanamrms@gmail.com', 'Employed', 'Publicis Sapient', NULL),
(22, '2023/05/10 2:19:47 PM GMT+5:30', 'swani2019@iiitkottayam.ac.in', 'Swani', 'Didde', '2002-02-12', '2019BCS0056', 'Visakhapatnam', 'Andhra Pradesh', 'India', '530003', 'Female', '8688774846', 'swanididde@gmail.com', 'Higher Education', 'University of Colorado, Boulder', 'None'),
(23, '2023/05/10 2:23:11 PM GMT+5:30', 'alaka2019@iiitkottayam.ac.in', 'Alaka', 'Jayan', '2001-09-25', '2019BCS0044', 'Kodungallur', 'Kerala', 'India', '680685', 'Female', '918138878575', 'alaka2001@gmail.com', 'Employed', 'Zscaler', NULL),
(24, '2023/05/10 2:28:51 PM GMT+5:30', 'joshi.hrishabh@gmail.com', 'Hrishabh`', 'Joshi', '1999-11-08', '2019BCS0066', 'Delhi', 'Delhi', 'India', '110084', 'Male', '9599928563', 'joshi.hrishabh@gmail.com', 'Employed', 'Epifi (Fi Money)', NULL),
(25, '2023/05/10 2:31:00 PM GMT+5:30', 'vaisakh2019@iiitkottayam.ac.in', 'Vaisakh', 'NP', '2001-06-11', '2019BCS0053', 'New Delhi', 'Delhi', 'India', '110065', 'Male', '9990031470', 'vaisakhnp524@gmail.com', 'Employed', NULL, NULL),
(26, '2023/05/10 3:27:55 PM GMT+5:30', 'shubham2019@iiitkottayam.ac.in', 'Shubham', 'Pandey', '2002-07-24', '2019BCS0083', 'Navi Mumbai', 'Maharashtra', 'India', '400709', 'Male', '9324852872', 'shubhampandeyhaihum@gmail.com', 'Employed', 'Jio', NULL),
(27, '2023/05/10 3:54:58 PM GMT+5:30', 'partha.myofficial@gmail.com', 'Partha Pratim', 'Biswas', '2001-01-01', '2019BCS0071', 'Berhampore', 'West Bengal', 'India', '742101', 'Male', '918944970150', 'partha.myofficial@gmail.com', 'Other', 'Self Employment', NULL),
(28, '2023/05/10 4:03:47 PM GMT+5:30', 'aditya2019@iiitkottayam.ac.in', 'Aditya', 'Taparia', '2002-01-11', '2019BCS0001', 'Surat', 'Gujarat', 'India', '395007', 'Male', '916353757151', 'adityataparia110102@gmail.com', 'Higher Education', NULL, NULL),
(29, '2023/05/10 4:15:16 PM GMT+5:30', 'nagarvardhan2019@iiitkottayam.ac.in', 'Nagireddygari', 'Nagavardhan Reddy', '2001-08-01', '2019BCS0047', 'Anantapur', 'Andhra Pradesh', 'India', '515445', 'Male', '8688141471', 'nagannvr03@gmail.com', 'Other', NULL, NULL),
(30, '2023/05/10 4:24:59 PM GMT+5:30', 'vedantiprudhvi2019@iiitkottayam.ac.in', 'Prudhvi Reddy', 'Venati', '2002-07-16', '2019BCS0006', 'Sullurpeta, Nellore', 'Andhra Pradesh', 'India', '524121', 'Male', '919494615565', 'prudhvireddyvenati@gmail.com', 'Employed', NULL, NULL),
(31, '2023/05/10 4:33:21 PM GMT+5:30', 'cyril2019@iiitkottayam.ac.in', 'CYRIL', 'KUNJUMON', '1999-11-02', '2019BCS0002', 'New Delhi', 'Delhi', 'India', '110064', 'Male', '8800616469', 'cyrilkunjumon8800@gmail.com', 'Employed', NULL, NULL),
(32, '2023/05/10 5:41:36 PM GMT+5:30', 'jashan2019@iiitkottayam.ac.in', 'Jashan', 'Puri', '2001-07-07', '2019BCS0021', 'Mohali', 'Punjab', 'India', '140308', 'Male', '8847574452', 'jashanpuri7701@gmail.com', 'Employed', NULL, NULL),
(33, '2023/05/10 5:57:02 PM GMT+5:30', 'abhijithbabu2019@iiitkottayam.ac.in', 'Abhijith S', 'Babu', '2001-05-01', '2019BCS0012', 'Kochi', 'Kerala', 'India', '682019', 'Male', '9633145670', 'abhijithsbabu183@gmail.com', 'Other', 'SAP', NULL),
(34, '2023/05/10 6:41:38 PM GMT+5:30', 'bhanukrishna2019@iiitkottayam.ac.in', 'Bhanu Krishna Prasad', 'Vipparla', '2001-10-22', '2019BCS0051', 'Guntur', 'Andhra Pradesh', 'India', '522034', 'Male', '9347619384', 'bhanukrishnaprasad3333@gmail.com', 'Employed', 'MAQ Software', NULL),
(35, '2023/05/10 6:47:41 PM GMT+5:30', 'vishnuvardhan2019@iiitkottayam.ac.in', 'Bhanu vishnu vardhan reddy', 'Beri', '2002-01-11', '2019BCS0057', 'ONGOLE', 'Andhra Pradesh', 'India', '523002', 'Male', '8008077785', 'bhanuvishnu2002@gmail.com', 'Employed', 'IBM', 'NO'),
(36, '2023/05/10 6:50:11 PM GMT+5:30', 'pallavolujaswanth2019@iiitkottayam.ac.in', 'Jaswanth', 'Pallavolu', '2002-01-24', '2019BCS0102', 'Kavali', 'andhra pradesh', 'India', '524201', 'Male', '7989387074', 'jaswanthp456@gmail.com', 'Employed', 'IBM ISL, kochi', NULL),
(37, '2023/05/10 7:41:15 PM GMT+5:30', 'aman2019@iiitkottayam.ac.in', 'Aman', 'Verma', '1999-03-08', '2019BCS0041', 'Jaipur', 'Rajasthan', 'India', '302012', 'Male', '8561946812', 'av1831.av@gmail.com', 'Other', 'none', 'none'),
(38, '2023/05/10 8:18:41 PM GMT+5:30', 'faizhasan2019@iiitkottayam.ac.in', 'Syed Faiz', 'Hasan', '2000-12-22', '2019BCS0076', 'Kanpur', 'Uttar Pradesh', 'India', '208001', 'Male', '9452746670', '123fhasan789@gmail.com', 'Employed', 'Enumerate.ai', NULL),
(39, '2023/05/10 8:40:27 PM GMT+5:30', 'Piyushbansal210@gmail.com', 'Piyush', 'bansal', '2001-09-05', '2019BCS0081', 'Mohali', 'Punjab', 'India', '140604', 'Male', '919321090000', 'Piyushbansal210@gmail.com', 'Employed', 'Solarwinds', 'Add more chicken days'),
(40, '2023/05/10 8:43:15 PM GMT+5:30', 'uharshgpt2912@gmail.com', 'Harsh', 'Gupta', '2000-12-29', '2019BCS0118', 'Firozabad', 'Uttar Pradesh', 'India', '283203', 'Male', '9084622944', 'uharshgpt2912@gmail.com', 'Other', NULL, 'Kindly improve your placement drive for the betterment of College Reach/Image.'),
(41, '2023/05/10 9:28:02 PM GMT+5:30', 'prasanna2019@iiitkottayam.ac.in', 'Prasanna', 'Devadiga', '2002-02-28', '2019BCS0089', 'Mumbai', 'Maharashra', 'India', '400066', 'Male', '9607781923', 'devadigaprasanna28@gmail.com', 'Employed', 'TIFIN', NULL),
(42, '2023/05/10 9:31:47 PM GMT+5:30', 'anshukumar2019@iiitkottayam.ac.in', 'Anshu', 'Kumar', '2002-02-18', '2019BCS0020', 'Bangalore', 'Karnataka', 'India', '560066', 'Male', '8541935371', 'anshukumar1882000@gmail.com', 'Employed', 'TCS Research', NULL),
(43, '2023/05/10 10:07:57 PM GMT+5:30', 'shivamkumar2019@iiitkottayam.ac.in', 'Shivam', 'Kumar Chaudhary', '2000-12-09', '2019BCS0034', 'Samastipur', 'Bihar', 'India', '848117', 'Male', '9693168703', 'shivam314kr@gmail.com', 'Employed', 'Techolution (Data Engineer)', 'Thank you IIITK for everything🙌'),
(44, '2023/05/11 10:33:33 AM GMT+5:30', 'vishnu_n2019@iiitkottayam.ac.in', 'Vishnu Narayanan', 'A', '2000-05-29', '2019BCS0014', 'Kollam', 'Kerala', 'India', '691602', 'Male', '9400843858', 'vishnuncr7@gmail.com', 'Higher Education', NULL, NULL),
(45, '2023/05/11 10:36:37 AM GMT+5:30', 'amansahu2019@iiitkottayam.ac.in', 'Aman', 'Sahu', '2000-03-22', '2019BCS0092', 'Bhopal', 'Madhya Pradesh', 'India', '464651', 'Male', '918602263732', 'aman.sahu.as96@gmail.com', 'Employed', 'Solar labs', NULL),
(46, '2023/05/11 10:38:50 AM GMT+5:30', 'priyanshu2019@iiitkottayam.ac.in', 'Priyanshu', 'Gupta', '2001-09-13', '2019BCS0035', 'Chhapra', 'Bihar', 'India', '841301', 'Male', '8407016547', 'priyanshugupta1309@gmail.com', 'Employed', 'Techolution', NULL),
(47, '2023/05/11 10:40:11 AM GMT+5:30', 'anchita2019@iiitkottayam.ac.in', 'Anchita', 'Arora', '2001-06-23', '2019BCS0005', 'LUDHIANA', 'Punjab', 'India', '141010', 'Female', '9915278738', 'hannahanchita@gmail.com', 'Other', NULL, NULL),
(48, '2023/05/11 10:58:37 AM GMT+5:30', 'shashank2019@iiitkottayam.ac.in', 'Shashank', 'Singh', '2001-04-07', '2019BCS0025', 'Durg', 'Chattisgarh', 'India', '491001', 'Male', '916260444869', 'shashanktheboss777@gmail.com', 'Employed', 'Loyalty Juggernaut', '??'),
(49, '2023/05/11 11:04:29 AM GMT+5:30', 'chandrima2019@iiitkottayam.ac.in', 'Chandrima', 'Meloth Jayaram', '2001-10-01', '2019BCS0011', 'Kochi', 'Kerala', 'India', '682001', 'Female', '8330861242', 'chandrima.mj@gmail.com', 'Employed', 'Loyalty Juggernaut', NULL),
(50, '2023/05/11 11:08:21 AM GMT+5:30', 'akhilsai2019@iiitkottayam.ac.in', 'Akhil', 'Bande', '2001-05-28', '2019BCS0048', 'Bangalore', 'Karnataka', 'India', '560076', 'Male', '7337068684', 'akhilsaibande@gmail.com', 'Employed', NULL, NULL),
(51, '2023/05/11 11:29:24 AM GMT+5:30', 'satwika2019@iiitkottayam.ac.in', 'Satwika', 'Penugonda', '2001-10-21', '2019BCS0070', 'Repalle', 'Andhra Pradesh', 'India', '522268', 'Female', '8790709763', 'penugonda.satwika@gmail.com', 'Employed', 'Publicis Sapient', NULL),
(52, '2023/05/11 1:50:31 PM GMT+5:30', 'kranthiraju2019@iiitkottayam.ac.in', 'Sugnan Kranthi Raju', 'Vajrapu', '2002-04-22', '2019BCS0116', 'Rajahmundry', 'Andhra Pradesh', 'India', '533102', 'Male', '7386223087', 'vajrapusugnankranthiraju@gmail.com', 'Employed', 'IBM', NULL),
(53, '2023/05/11 2:45:26 PM GMT+5:30', 'somsagar2019@iiitkottayam.ac.in', 'Som', 'Sagar', '2000-03-06', '2019BCS0004', 'Thodupuzha', 'Kerala', 'India', '685585', 'Male', '917306438410', 'somsagar2010@gmail.com', 'Higher Education', NULL, NULL),
(54, '2023/05/11 2:53:04 PM GMT+5:30', 'saikowsik2019@iiitkottayam.ac.in', 'Venkata Sai Kowsik', 'Vellaturi', '2002-08-11', '2019BCS0018', 'Ongole', 'Andhra Pradesh', 'India', '523002', 'Male', '917287042678', 'saikowsik11@gmail.com', 'Employed', 'MAQ Software', NULL),
(55, '2023/05/11 3:51:33 PM GMT+5:30', 'kovvadaharsha2019@iiitkottayam.ac.in', 'HARSHA VARDHAN', 'KOVVADA', '2002-07-24', '2019BCS0110', 'Vizianagaram', 'Andhra pradesh', 'India', '535004', 'Male', '9121980330', 'harshakovvada777@gmail.com', 'Employed', 'Zycus infotech', NULL),
(56, '2023/05/11 4:05:07 PM GMT+5:30', 'yashwanth2019@iiitkottayam.ac.in', 'YASHWANTH', 'DESHABOINA', '2000-03-26', '2019BCS0040', 'HANAMKONDA', 'TELANGANA', 'INDIA', '506001', 'Male', '8341541541', 'ydeshaboina@gmail.com', 'Higher Education', NULL, '-nil-'),
(57, '2023/05/12 3:26:50 AM GMT+5:30', 'charles2019@iiitkottayam.ac.in', 'Charles', 'V J', '2001-01-25', '2019BCS0015', 'Kakkassery', 'Kerala', 'India', '680511', 'Male', '8858836808', 'vjcharles251@gmail.com', 'Higher Education', 'Indian Institute of Management, Calcutta', NULL),
(58, '2023/05/12 3:02:54 PM GMT+5:30', 'anoop2019@iiitkottayam.ac.in', 'Anoop', 'Raju', '2000-06-03', '2019BCS0077', 'Adoor', 'Kerala', 'India', '691523', 'Male', '8921222748', 'anoopraju31@gmail.com', 'Other', NULL, NULL),
(59, '2023/05/13 12:55:31 PM GMT+5:30', 'aryan2019@iiitkottayam.ac.in', 'Aryan', 'Yadav', '2001-12-11', '2019BCS0103', 'Mumbai', 'Maharashtra', 'India', '401107', 'Male', '8268560413', 'yadavaryan782@gmail.com', 'Employed', 'Devfolio', 'None'),
(60, '2023/05/13 9:42:47 PM GMT+5:30', 'ringriangsuiyang2019@iiitkottayam.ac.in', 'Ringriangsuiyang', 'Pamei', '2000-11-29', '2019BCS0023', 'Peren', 'Nagaland', 'India', '797110', 'Male', '9366449639', 'ringriangsuiyangpamei2000@gmail.com', 'Other', NULL, NULL),
(61, '2023/05/13 10:49:40 PM GMT+5:30', 'suryapavan2019@iiitkottayam.ac.in', 'Gamidi', 'SuryaPavan', '2001-08-21', '2019BCS0078', 'Vanapalli', 'Andhra Pradesh', 'India', '533228', 'Male', '8886143166', 'suryapavangamidi@gmail.com', 'Employed', NULL, NULL),
(62, '2023/05/14 9:27:57 AM GMT+5:30', 'jaswanth2019@iiitkottayam.ac.in', 'Chadipiralla', 'Jaswanth Reddy', '2002-04-14', '2019BCS0099', 'Kadapa', 'Ap', 'India', '516002', 'Male', '9346291511', 'jaswanthreddy1419@gmail.com', 'Employed', 'Royal Enfield', NULL),
(63, '2023/05/14 10:30:32 PM GMT+5:30', 'tholikiran2019@iiitkottam.ac.in', 'Kancharla', 'Tholi Kiran', '2001-06-04', '2019BCS0063', 'Ghaziabad', 'Uttar pradesh', 'India', '201014', 'Male', '7303857004', 'savethemoney2146@gmail.com', 'Employed', 'Drona Hq', NULL),
(64, '2023/05/14 10:54:16 PM GMT+5:30', 'sricharan2019@iiitkottayam.ac.in', 'Tamalampudi sri charan', 'Reddy', '2001-12-20', '2019BCS0096', 'Kakinada', 'Andhra pradesh', 'India', '533004', 'Male', '7672089464', 'charanreddy037@gmail.com', 'Employed', 'South indian bank', 'No remarks'),
(65, '2023/05/15 9:25:26 AM GMT+5:30', 'tejashwin2019@iiitkottayam.ac.in', 'Sai Tejashwin', 'Eswarapu', '2002-01-07', '2019BCS0106', 'Visakhapatnam', 'Andhra Pradesh', 'India', '530020', 'Male', '8688179209', 'esaitejashwin@gmail.com', 'Employed', 'Jio Platforms Limited', 'None'),
(66, '2023/05/15 2:39:40 PM GMT+5:30', 'rishavanand2019@iiitkottayam.ac.in', 'Rishabh', 'Anand', '2001-06-08', '2019BCS0010', 'East delhi', 'Delhi', 'India', '110096', 'Male', '8076066296', 'rishabha649@gmail.com', 'Employed', NULL, NULL),
(67, '2023/05/15 10:24:11 PM GMT+5:30', 'nimit2019@iiitkottayam.ac.in', 'Nimit', 'Gaur', '2001-10-19', '2019BCS0043', 'Ganganagar', 'Rajasthan', 'India', '335001', 'Male', '9079866863', 'nimitgaur1910@gmail.com', 'Employed', NULL, NULL),
(68, '2023/05/15 10:25:42 PM GMT+5:30', 'abhimanyu2019@iiitkottayam.ac.in', 'Abhimanyu', 'Kumbhar', '2000-02-02', '2019BCS0019', 'Boisar', 'Maharashtra', 'India', '401501', 'Male', '9767609879', 'abhimanyukumbharc@gmail.com', 'Employed', 'Inkle', NULL),
(69, '2023/05/15 10:46:46 PM GMT+5:30', 'nikhil2019@iiitkottayam.ac.in', 'Nikhil', 'Jana', '2000-03-09', '2019BCS0117', 'Allagadda', 'Andhra Pradesh', 'India', '518543', 'Male', '919550800010', 'nikhiljana09@gmail.com', 'Other', NULL, NULL),
(70, '2023/05/15 11:15:38 PM GMT+5:30', 'tanishq2019@iiitkottayam.ac.in', 'Tanishq', 'Jain', '2000-07-22', '2019BCS0027', 'Gwalior', 'Madhya Pradesh', 'India', '474011', 'Male', '6260695795', 'jaintanishq720@gmail.com', 'Employed', 'Jio', NULL),
(71, '2023/05/16 6:11:52 AM GMT+5:30', 'amrutha2019@iiitkottayam.ac.in', 'Amrutha', 'Polu', '2001-10-19', '2019BCS0101', 'Nellore', 'Andhrapradesh', 'India', '524002', 'Female', '8309362999', 'amruthapolu19@gmail.com', 'Other', NULL, NULL),
(72, '2023/05/17 10:37:46 AM GMT+5:30', 'jeet2019@iiitkottayam.ac.in', 'Jeet', 'Shah', '2001-03-20', '2019BCS0022', 'Surat', 'Gujarat', 'India', '395007', 'Male', '8488890900', 'shahjeet867@gmail.com', 'Higher Education', 'University of Colorado Boulder', 'Pursuing masters in data science'),
(73, '2023/05/17 3:00:56 PM GMT+5:30', 'suryaashish2019@iiitkottayam.ac.in', 'Surya', 'Ashish', '2001-05-21', '2019BCS0080', 'Rajahmundry', 'Andhra Pradesh', 'India', '533103', 'Male', '9550117728', 'ashishsurya126@gmail.com', 'Other', NULL, NULL),
(74, '2023/11/18 12:38:09 PM GMT+5:30', 'srivatsan2019@iiitkottayam.ac.in', 'Srivatsan', 'H', '2001-04-17', '2019BCS0028', 'Chennai', 'Tamil Nadu', 'India', '600077', 'Male', '9123593338', 'srivatsanharish4@gmail.com', 'Employed', 'Royal Enfield', NULL),
(75, '2023/11/18 12:42:30 PM GMT+5:30', 'kovvadaharsha2019@iiitkottayam.ac.in', 'Harsha vardhan', 'Kovvada', '2002-07-24', '2019BCS0110', 'Vizianagaram', 'Andhra pradesh', 'India', '535004', 'Male', '9121980330', 'harshakovvada777@gmail.com', 'Employed', NULL, NULL),
(76, '2023/11/18 12:43:46 PM GMT+5:30', 'nithin2019@iiitkottayam.ac.in', 'Nithin', 'Annabathula', '2002-11-06', NULL, 'Rajahmundry', 'Andhra Pradesh', 'INDIA', '533101', 'Male', '9390222360', 'anithin1234@gmail.com', 'Employed', NULL, NULL),
(77, '2023/11/18 12:44:15 PM GMT+5:30', 'pranairaj2019@iiitkottayam.ac.in', 'Pranai Raj', 'Kaligithi', '2001-07-25', '2019BCS0115', 'Vijayawada', 'Andhra Pradesh', 'India', '520011', 'Male', '6303796947', 'kaligithipranai@gmail.com', 'Employed', 'South Indian Bank', 'No'),
(78, '2023/11/18 12:55:50 PM GMT+5:30', 'agirishettykishore2019@iiitkottayam.ac.in', 'Kishore', 'Agirishetty', '2000-12-13', '2019BCS0111', 'Hyderabad', 'Telangana', 'India', '509321', 'Male', '7729827528', 'kishoressk5292@gmail.com', 'Other', NULL, NULL),
(79, '2023/11/18 1:10:19 PM GMT+5:30', 'parlapallihemanth2019@iiitkottayam.ac.in', 'Parlapalli', 'Hemanth Kumar Reddy', '2002-05-27', '2019BCS0060', 'Tirupati', 'Andhra Pradesh', 'India', '517502', 'Male', '8688144537', 'vedanarayana27@gmail.com', 'Employed', 'Hindustan Aeronautics Limited', 'No'),
(80, '2023/11/18 1:12:30 PM GMT+5:30', 'mudavathsai2019@iiitkottayam.ac.in', 'Mudavath', 'Sai Teja', '2001-07-29', '2019BCS0112', 'HYDERABAD', 'TELANGANA', 'INDIA', '501501', 'Male', '919390347013', 'saitejachinna76776@gmail.com', 'Other', NULL, NULL),
(81, '2023/11/18 2:48:14 PM GMT+5:30', 'hisana2019@iiitkottayam.ac.in', 'Hisana Mohammed', 'Basheer', '2000-03-17', '2019BCS0073', 'Kochi', 'Kerala', 'India', '680566', 'Female', '8330052334', 'kai736575@gmail.com', 'Employed', 'Freelance', NULL),
(82, '2023/11/18 10:51:26 PM GMT+5:30', 'ganeswara2019@iiitkottayam.ac.in', 'Kottana', 'Gnaneswara rao', '2001-02-05', '2019BCS0119', 'Visakhapatnam', 'Andhra Pradesh', 'India', '531030', 'Male', '7981480010', 'kottanagnanesh@gmail.com', 'Employed', 'Reflections infosystems', NULL),
(83, '2023/11/19 2:58:10 AM GMT+5:30', 'shriganesh2019@iiitkottayam.ac.in', 'Shriganesh', 'bhide', '2002-02-26', '2019BCS0037', 'Mumbai', 'Maharashtra', 'India', '400083', 'Male', '8104273384', 'shribhide28@gmail.com', 'Employed', 'MAQ Software', NULL),
(84, '2023/11/19 6:06:16 AM GMT+5:30', 'soham2019@iiitkottayam.ac.in', 'Soham', 'Shinde', '2000-10-04', '2019BCS0054', 'Mumbai', 'Maharashtra', 'India', '400053', 'Male', '919819035520', 'sohamshinde04@gmail.com', 'Higher Education', 'University of Texas at Dallas', NULL),
(85, '2023/11/19 10:01:48 AM GMT+5:30', 'abhishekh2019@iiitkottayam.ac.in', 'Abhishek', 'H Patil', '2001-09-10', '2019BCS0107', 'Bangalore', 'Karnataka', 'India', '560010', 'Male', '9400119476', 'hpatilabhi10@gmail.com', 'Employed', NULL, NULL),
(86, '2023/11/20 10:13:01 PM GMT+5:30', 'varshith2019@iiitkottayam.ac.in', 'Sri Rama Varshith', 'Potharlanka', '2001-12-29', '2019BCS0003', 'Vijayawada', 'Andra Pradesh', 'India', '520010', 'Male', '+1 9452748219', 'srirama2729@gmail.com', 'Higher Education', 'The University of Texas at Dallas', NULL),
(87, '2023/11/20 11:32:51 PM GMT+5:30', 'dheenadhayalan2019@iiitkottayam.ac.in', 'Dheenadhayalan', 'Ramadoss', '2002-06-03', '2019BCS0038', 'Thanjavur', 'Tamil Nadu', 'India', '613006', 'Male', '9360898639', 'dheenadhayalanr19@gmail.com', 'Employed', 'Rightbot Technologies, Bangalore', NULL),
(88, '2023/11/21 12:13:25 PM GMT+5:30', 'rohith2019@iiitkottayam.ac.in', 'Margani', 'Rohith', '2000-11-24', '2019BCS0065', 'Visakhapatnam', 'Andhra Pradesh', 'India', '530046', 'Male', '9121063810', 'marganirohith2000@gmail.com', 'Employed', 'Jio', 'nothing'),
(89, '2023/11/22 12:50:08 PM GMT+5:30', 'jeetesh2019@iiitkottayam.ac.in', 'Jeetesh', 'Gavande', '2000-11-30', '2019BCS0031', 'Banglore', 'Karnataka', 'India', '560066', 'Male', '7049287190', 'jeeteshgavande30@gmail.com', 'Employed', 'Aquera', NULL),
(90, '2023/11/28 12:33:03 PM GMT+5:30', 'hemanth2019@iiitkottayam.ac.in', 'Hemanth', 'Bharadwaj', '2002-07-04', '2019BCS0029', 'Srikakulam', 'ANDHRA PRADESH', 'India', '532148', 'Male', '8074109300', 'hemanthbharadwaj56@gmail.com', 'Employed', 'SOUTH INDIAN BANK', NULL),
(91, '2023/11/30 12:24:03 PM GMT+5:30', 'vedavrath2019@iiitkottayam.ac.in', 'Vedavrath', 'Pathi', '2000-05-10', '2019BCS0058', 'Hyderabad', 'Telangana', 'India', '500100', 'Male', '7013196238', 'Pathi.vedavrath@gmail.com', 'Employed', 'Minfy Technologies', NULL);

-- --------------------------------------------------------

--
-- Table structure for table `alumni_2020_admission`
--

CREATE TABLE `alumni_2020_admission` (
  `id` int(11) NOT NULL,
  `timestamp` varchar(255) DEFAULT NULL,
  `username` varchar(255) DEFAULT NULL,
  `first_name` varchar(100) DEFAULT NULL,
  `last_name` varchar(100) DEFAULT NULL,
  `dob` varchar(50) DEFAULT NULL,
  `roll_no` varchar(50) DEFAULT NULL,
  `city` varchar(100) DEFAULT NULL,
  `state` varchar(100) DEFAULT NULL,
  `country` varchar(100) DEFAULT NULL,
  `pincode` varchar(20) DEFAULT NULL,
  `gender` varchar(20) DEFAULT NULL,
  `whatsapp_no` varchar(50) DEFAULT NULL,
  `personal_email` varchar(255) DEFAULT NULL,
  `present_status` varchar(100) DEFAULT NULL,
  `organization` varchar(255) DEFAULT NULL,
  `remarks` text DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `alumni_2020_admission`
--

INSERT INTO `alumni_2020_admission` (`id`, `timestamp`, `username`, `first_name`, `last_name`, `dob`, `roll_no`, `city`, `state`, `country`, `pincode`, `gender`, `whatsapp_no`, `personal_email`, `present_status`, `organization`, `remarks`) VALUES
(1, '2025/02/13 3:19:55 PM GMT+5:30', 'kailas20bcs61@iiitkottayam.ac.in', 'Aditya', 'Wath', '2000-12-06', '2020BCS0061', 'Washim', 'Maharashtra', 'India', '444505', 'Male', '7620960119', 'akwmayur@gmail.com', 'Employed', 'Techolution', NULL),
(2, '2025/02/13 3:20:05 PM GMT+5:30', 'pranjalprasoon20bcs41@iiitkottayam.ac.in', 'Pranjal', 'Prasoon', '2002-11-30', '2020BCS0041', 'Jaipur', 'Rajasthan', 'India', '302021', 'Male', '9660924735', 'thegreatishukunar100@gmail.com', 'Other', NULL, NULL),
(3, '2025/02/13 3:20:16 PM GMT+5:30', 'rahulbarnwal20bec3@iiitkottayam.ac.in', 'Rahul', 'Barnwal', '2001-07-09', '2020BEC0003', 'Dhanbad', 'Jharkhand', 'India', '826001', 'Male', '9123125993', 'rbarnwal4056@gmail.com', 'Employed', 'Dhruva Space Pvt Ltd', NULL),
(4, '2025/02/13 3:20:18 PM GMT+5:30', 'appusdevis20bcs2@iiitkottayam.ac.in', 'Appus', 'Devis K', '2001-04-15', '2020BCS0002', 'Thrissur', 'Kerala', 'India', '680541', 'Male', '8943385096', 'devisappus@gmail.com', 'Employed', 'Tiger Analytics', NULL),
(5, '2025/02/13 3:20:18 PM GMT+5:30', 'krishnasashank20bcs26@iiitkottayam.ac.in', 'Krishna Sashank', 'Allimpalli', '2002-11-02', '2020BCS0026', 'Visakhapatnam', 'Andhra Pradesh', 'India', '530022', 'Male', '8074189474', 'aksashank.ind@gmail.com', 'Employed', 'Tiger Analytics', NULL),
(6, '2025/02/13 3:20:33 PM GMT+5:30', 'yogesh20bcs76@iiitkottayam.ac.in', 'Yogesh', 'Raj', '2001-02-05', '2020BCS0076', 'Sitamarhi', 'Bihar', 'India', '843317', 'Male', '9123194784', 'suri.yogesh2372@gmail.com', 'Employed', 'MANAPPURAM FINANCE LTD', 'NA'),
(7, '2025/02/13 3:20:56 PM GMT+5:30', 'adimuthanikatt@gmail.com', 'Adhithya', 'Sankar', '2002-04-22', '2020BCS0037', 'Malappuram', 'Kerala', 'India', '676509', 'Male', '8086555849', 'adimuthanikatt@gmail.com', 'Employed', NULL, NULL),
(8, '2025/02/13 3:21:35 PM GMT+5:30', 'lokesh20bcs147@iiitkottayam.ac.in', 'Lokesh', 'Lingam', '2002-08-01', '2020bcs0147', 'Vijayawada', 'Andhra pradesh', 'India', '520012', 'Male', '9494415699', 'lokeshlingam4@gmail.com', 'Other', NULL, NULL),
(9, '2025/02/13 3:22:04 PM GMT+5:30', 'aamerchant9@gmail.com', 'Abdullah', 'Merchant', '2003-01-05', '2020BCS0021', 'Mumbai', 'Maharashtra', 'India', '400102', 'Male', '8369985093', 'aamerchant9@gmail.com', 'Employed', NULL, NULL),
(10, '2025/02/13 3:22:14 PM GMT+5:30', 'abhinav.kalvacherla@gmail.coma', 'Abhinav', 'Kalvacherla', '2003-08-05', '2020BEC0037', 'Hyderabad', 'Telangana', 'India', '500038', 'Male', '8179259307', 'abhinav.kalvacherla@gmail.com', 'Employed', 'PGAGI', NULL),
(11, '2025/02/13 3:23:29 PM GMT+5:30', 'omprashant20bcs130@iiitkottayam.ac.in', 'Om', 'Ghumare', '2002-05-04', '2020BCS0130', 'Nashik', 'Maharashtra', 'India', '422012', 'Male', '7774926881', 'omghumare02@gmail.com', 'Employed', 'Infosys ltd.', NULL),
(12, '2025/02/13 3:25:32 PM GMT+5:30', 'kiritigangeneni@gmail.com', 'Gangineni', 'Kireeti', '2002-04-27', '2020bec0009', 'Khammam', 'Telangana', 'India', '507003', 'Male', '9014000818', 'kiritigangeneni@gmail.com', 'Other', NULL, 'Na'),
(13, '2025/02/13 3:26:02 PM GMT+5:30', 'christosojan20bcs69@iiitkottayam.ac.in', 'Christo', 'Sojan', '2002-06-25', '2020BCS0069', 'Kochi', 'Kerala', 'India', '682021', 'Male', '919497875587', 'christosojan100@gmail.com', 'Other', NULL, NULL),
(14, '2025/02/13 3:26:29 PM GMT+5:30', 'surlaadithyanaidu66@gmail.com', 'Adithya naidu', 'Surla', '2003-07-23', '2020BCS0105', 'Visakhapatnam', 'Andhra Pradesh', 'India', '531116', 'Male', '9398696654', 'surlaadithyanaidu66@gmail.com', 'Higher Education', NULL, NULL),
(15, '2025/02/13 3:28:11 PM GMT+5:30', 'sandeep20bcs167@iiitkottayam.ac.in', 'Sandeep', 'Muthyala', '2003-06-23', '2020BCS0167', 'vizianagaram', 'Andhra Pradesh', 'India', '535579', 'Male', '9392825426', 'sandeepmuthyala1552279m@gmail.com', 'Other', 'None', 'Nope'),
(16, '2025/02/13 3:28:41 PM GMT+5:30', 'bindalsarthak03@gmail.com', 'Sarthak', 'Bindal', '2002-06-03', '2020BCS0055', 'Bangalore', 'Karnataka', 'India', '560102', 'Male', '8848204217', 'bindalsarthak03@gmail.com', 'Employed', 'Workspan', NULL),
(17, '2025/02/13 3:29:21 PM GMT+5:30', 'ravankumar20bcs150@iiitkottayam.ac.in', 'Sravan Kumar', 'Kancharla', '2002-11-12', '2020BCS0150', 'Khammam', 'Telangana', 'India', '507003', 'Male', '7793998142', 'kancharlashravankumar40@gmail.com', 'Higher Education', NULL, 'Convocation should be conducted within  6 months of completion of exams, because I cannot attend now. Sorry.'),
(18, '2025/02/13 3:33:04 PM GMT+5:30', 'roshinnishad20bcs19@iiitkottayam.ac.in', 'Roshin', 'Nishad', '2002-06-18', '2020BCS0019', 'Kochi', 'Kerala', 'India', '682019', 'Male', '8086023082', 'roshin006@gmail.com', 'Employed', 'Tata Consultancy Services (TCS)', NULL),
(19, '2025/02/13 3:33:32 PM GMT+5:30', 'adityagarg20bcs86@iiitkottayam.ac.in', 'Aditya', 'Garg', '2002-08-24', '2020BCS0086', 'Bhiwadi', 'Rajasthan', 'India', '301019', 'Male', '8949467472', 'garg.official24@gmail.com', 'Higher Education', NULL, NULL),
(20, '2025/02/13 3:34:21 PM GMT+5:30', 'saikiran20bcs81@iiitkottayam.ac.in', 'SAI KIRAN', 'SADU', '2002-08-13', '2020BCS0081', 'Ongole', 'Andhra Pradesh', 'India', '523226', 'Male', '9392327641', 'sadhusaikiran08@gmail.com', 'Employed', 'NYSH SOFTWARE SOLUTIONS, HYDERABAD', NULL),
(21, '2025/02/13 3:36:29 PM GMT+5:30', 'zishanahmad20bcs78@iiitkottayam.ac.in', 'Zishan', 'Ahmad', '2002-03-29', '2020BCS0078', 'Barun', 'Bihar', 'India', '824112', 'Male', '8405861132', 'zishan.barun@gmail.com', 'Employed', 'Tiger Analytics', 'N/A'),
(22, '2025/02/13 3:44:53 PM GMT+5:30', 'kottesaandeep20bcs89@iiitkottayam.ac.in', 'Saandeep', 'Kotte', '2002-10-26', '2020BCS0089', 'Rajahmundry', 'Andhra Pradesh', 'India', '533101', 'Male', '9182005235', 'saandeepkotte5@gmail.com', 'Employed', 'Zycus Infotech', NULL),
(23, '2025/02/13 3:55:31 PM GMT+5:30', 'roshanrai20bcs122@iiitkottayam.ac.in', 'Saket', 'Rai', '2002-03-09', '2020BCS0122', 'Bhopal', 'Madhya Pradesh', 'India', '462022', 'Male', '6260205467', 'saketroshanrai@gmail.com', 'Employed', 'Springworks', 'Alumni meetup can be a great plan going forward not just for alumni to meet again but for the culture we will establish as well.'),
(24, '2025/02/13 3:59:58 PM GMT+5:30', 'adityatyagi20bcs126@iiitkottayam.ac.in', 'Aditya', 'Tyagi', '2002-01-17', '2020BCS0126', 'Muzaffarnagar', 'Uttar Pradesh', 'India', '251001', 'Male', '8077292673', 'adityatyagi354@gmail.com', 'Employed', 'Unacademy', NULL),
(25, '2025/02/13 4:08:07 PM GMT+5:30', 'ak7739511@gmail.com', 'Abhishek', 'Kumar', '2000-03-17', '2020BCS0128', 'Siwan', 'Bihar', 'India', '841439', 'Male', '8292111577', 'ak7739511@gmail.com', 'Other', 'NA', 'NA'),
(26, '2025/02/13 4:09:00 PM GMT+5:30', 'vipulkhandke20bcs5@iiitkottayam.ac.in', 'Vipul', 'Khandke', '2001-10-24', '2020BCS0005', 'Hyderabad', 'Telangana', 'India', '500008', 'Male', '6309115550', 'vipulkhandke24@gmail.com', 'Higher Education', NULL, NULL),
(27, '2025/02/13 4:09:45 PM GMT+5:30', 'sairamnaik20bcs64@iiitkottayam.ac.in', 'Maloth', 'Sairamnaik', '2003-01-27', '2020BCS0064', 'Hyderabad', 'Telangana', 'India', '507123', 'Male', '9177003361', 'sairammaloth2003@gmail.com', 'Higher Education', 'NA', 'NA'),
(28, '2025/02/13 4:09:51 PM GMT+5:30', 'madhukasa07@gmail.com', 'Kasa', 'Madhu', '2001-10-03', '2020bcs0129', 'Hyderabad', 'Telangana', 'India', '508221', 'Male', '9392486624', 'kasamadhu79@gmail.com', 'Other', 'Unemployed', NULL),
(29, '2025/02/13 4:13:03 PM GMT+5:30', 'prashantchoudhary20bcs71@iiitkottayam.ac.in', 'Prashant', 'Choudhary', '2002-08-06', '2020BCS0071', 'Muzaffarnagar', 'Uttar Pradesh', 'India', '251001', 'Male', '7017536879', 'prashantjakhar6802@gmail.com', 'Employed', 'IBM', NULL),
(30, '2025/02/13 4:16:44 PM GMT+5:30', 'kulurusudheerreddy02@gmail.com', 'Sudheer Reddy', 'Kuluru', '2002-12-10', '2020BCS0110', 'Anantapur', 'Andhra Pradesh', 'India', '515001', 'Male', '6301519622', 'kulurusudheerreddy02@gmail.com', 'Employed', 'Infosys', NULL),
(31, '2025/02/13 4:23:42 PM GMT+5:30', 'govind20bec15@iiitkottayam.ac.in', 'Govind', 'Nair V', '2002-06-22', '2020BEC0015', 'Thiruvananthapuram', 'Kerala', 'India', '695587', 'Male', '9778070628', 'govind.nair.v@gmail.com', 'Employed', 'Maximl Labs', NULL),
(32, '2025/02/13 4:29:09 PM GMT+5:30', 'vasugupta20bcs91@iiitkottayam.ac.in', 'Vasu', 'Gupta', '2002-01-25', '2020BCS0091', 'Ludhiana', 'Punjab', 'India', '141012', 'Male', '9915040662', 'vasug0188@gmail.com', 'Higher Education', NULL, NULL),
(33, '2025/02/13 4:30:00 PM GMT+5:30', 'ravinithishkumar2001@gmail.com', 'Nithish Kumar', 'Ravi', '2001-08-30', '2020BCS0048', 'Chennai', 'Tamil Nadu', 'India', '600077', 'Male', '9025196622', 'ravinithishkumar2001@gmail.com', 'Other', NULL, NULL),
(34, '2025/02/13 4:35:22 PM GMT+5:30', 'lakshmi20bcs125@iiitkottayam.ac.in', 'Lakshmi Narayana', 'Malineni', '2002-08-23', '2020BCS0125', 'Hyderabad', 'Telangana', 'India', '500003', 'Male', '9553721960', 'lakshminarayanamalineni1@gmail.com', 'Employed', 'Digiquanta', 'NA'),
(35, '2025/02/13 4:40:16 PM GMT+5:30', 'vatsalsinha20bcs12@iiitkottayam.ac.in', 'Vatsal', 'Sinha', '2000-11-05', '2020BCS0012', 'New Delhi', 'Delhi', 'India', '110001', 'Male', '8527582567', 'ankit.vatsal11@gmail.com', 'Higher Education', NULL, NULL),
(36, '2025/02/13 4:42:24 PM GMT+5:30', 'ishaanmahesh20bcs54@iiitkottayam.ac.in', 'Ishaan', 'Mahesh', '2002-07-23', '2020BCS0054', 'Faridabad', 'Haryana', 'India', '121004', 'Male', '8766380714', 'ishaanmahesh9315@gmail.com', 'Employed', 'Cyware Labs', NULL),
(37, '2025/02/13 4:49:35 PM GMT+5:30', 'pujari.umesh@shipsy.io', 'Umesh', 'Pujari', '2002-11-01', '2020bec0014', 'Visakhapatnam', 'Andhra Pradesh', 'India', '530045', 'Male', '9121411866', 'umesh.pujari2002@gmail.com', 'Employed', 'Shipsy', NULL),
(38, '2025/02/13 5:37:29 PM GMT+5:30', 'dommatimanikanta20bcs30@iiitkottayam.ac.in', 'Manikanta', 'Dommati', '2002-11-13', '2020BCS0030', 'Hyderabad', 'Telangana', 'India', '506001', 'Male', '8500997555', 'dommatimanikanta@gmail.com', 'Employed', 'Liger Mobility', NULL),
(39, '2025/02/13 5:47:20 PM GMT+5:30', 'shubhamanand20bcs93@iiitkottayam.ac.in', 'Shubham', 'Anand', '2002-03-27', '2020BCS0093', 'Prayagraj', 'Uttar Pradesh', 'India', '211004', 'Male', '9415876136', 'shubhamanand27302@gmail.com', 'Employed', 'OpenCV University', NULL),
(40, '2025/02/13 6:16:48 PM GMT+5:30', 'arundhathyk20bec10@iiitkottayam.ac.in', 'Arundhathy', 'K', '2002-09-17', '2020BEC0010', 'Kozhikode', 'Kerala', 'India', '673007', 'Female', '9567632553', 'arundhathyk2002@gmail.com', 'Other', NULL, NULL),
(41, '2025/02/13 6:34:12 PM GMT+5:30', 'ajaynagar20bcs115@iiitkottayam.ac.in', 'Ajay', 'Nagar', '2002-12-03', '2020BCS0115', 'Guna', 'Madhya Pradesh', 'India', '473105', 'Male', '7224041656', 'ajaykumar9691260366@gmail.com', 'Employed', 'TCS', NULL),
(42, '2025/02/13 6:34:42 PM GMT+5:30', 'harshaareddy20bcs80@iiitkottayam.ac.in', 'Harshaa Reddy', 'Godlaveeti', '2002-09-23', '2020BCS0080', 'New York City', 'New York', 'United States', '10003', 'Male', '12014691205', 'harshaargnyc@gmail.com', 'Higher Education', 'New York University - Courant Institute of Mathematical Sciences', NULL),
(43, '2025/02/13 6:55:07 PM GMT+5:30', 'vishakhp20bec11@iiitkottayam.ac.in', 'Vishakh', 'P', '2003-02-01', '2020BEC0011', 'Palakkad', 'Kerala', 'India', '678632', 'Male', '9447100619', 'pvishakh123@gmail.com', 'Employed', 'Manappuram finance limited', NULL),
(44, '2025/02/13 7:20:22 PM GMT+5:30', 'advaithanil20bcs45@iiitkottayam.ac.in', 'Advaith', 'Anil', '2002-04-11', '2020BCS0045', 'Kalavoor', 'Kerala', 'India', '688522', 'Male', '7994477927', 'advaithanil24@gmail.com', 'Other', NULL, NULL),
(45, '2025/02/13 7:35:44 PM GMT+5:30', 'daranithin20bcs63@iiitkottayam.ac.in', 'Dara', 'Nithin', '2003-04-28', '2020BCS0063', 'Vijayawada', 'Andhra Pradesh', 'India', '520007', 'Male', '9550542835', 'daranithin2003@gmail.com', 'Higher Education', NULL, NULL),
(46, '2025/02/13 7:42:46 PM GMT+5:30', 'manasgupta20bcs154@iiitkottayam.ac.in', 'Manas', 'Gupta', '2002-09-01', '2020BCS0154', 'Ghaziabad', 'Uttar Pradesh', 'India', '201002', 'Male', '9650169109', 'manasgpta@gmail.com', 'Employed', 'Infosys Ltd.', NULL),
(47, '2025/02/13 8:07:44 PM GMT+5:30', 'divyanshpanwar20bcs67@iiitkottayam.ac.in', 'Divyansh', 'Panwar', '2002-06-04', '2020BCS0067', 'Jodhpur', 'Rajasthan', 'India', '342110', 'Male', '6378080121', 'divyanshpanwar895@gmail.com', 'Employed', 'Zycus', 'No'),
(48, '2025/02/13 8:19:13 PM GMT+5:30', 'divyanthsatya20bcs141@iiitkottayam.ac.in', 'Divyanth', 'Satya', '2003-01-08', '2020BCS0141', 'Hyderabad', 'Teleangana', 'India', '500008', 'Male', '7013918815', 'uppuluridivyanth@gmail.com', 'Higher Education', NULL, NULL),
(49, '2025/02/13 8:42:59 PM GMT+5:30', 'vikash1549@gmail.com', 'Vikash', 'Kumar', '2002-02-21', '2020BCS0090', 'Motihari', 'Bihar', 'India', '845401', 'Male', '7004690051', 'vikash1549@gmail.com', 'Employed', 'Own Business', NULL),
(50, '2025/02/13 8:45:19 PM GMT+5:30', 'kavyasravani20bcs47@iiitkottayam.ac.in', 'Kavya Sravani', 'Inteti', '2003-03-21', '2020BCS0047', 'VIJAYAWADA', 'Andhra Pradesh', 'India', '520013', 'Female', '8328632776', 'kavyasravani151@gmail.com', 'Employed', 'Urbane deep pockets', NULL),
(51, '2025/02/13 8:52:23 PM GMT+5:30', 'Bhanuprakash20bcs11@iiitkottayam.ac.in', 'Eenadula', 'Bhanuprakash', '2002-08-19', '2020BCS0011', 'Guntur', 'Andhra Pradesh', 'India', '522529', 'Male', '9515409973', 'bhanuprakasheenadula@gmail.com', 'Higher Education', NULL, NULL),
(52, '2025/02/13 8:55:09 PM GMT+5:30', 'kavya20bcs157@iiitkottayam.ac.in', 'S', 'Kavyanjali', '2002-04-29', '2020BCS0157', 'Hyderabad', 'Telangana', 'India', '500030', 'Female', '9100484080', 'sultankavyanjali2002@gmail.com', 'Other', NULL, NULL),
(53, '2025/02/13 9:04:58 PM GMT+5:30', 'shashank.srivastav25sks@gmail.com', 'Shashank', 'Srivastava', '2003-03-15', '2020BCS0015', 'Lucknow', 'Uttar Pradesh', 'India', '226028', 'Male', '9793422020', 'shashank.srivastava25sks@gmail.com', 'Employed', 'Cyware Labs', NULL),
(54, '2025/02/13 9:31:50 PM GMT+5:30', 'vivekreddy20bcs46@iiitkottayam.ac.in', 'Vivek Reddy', 'Sangam', '2002-08-31', '2020BCS0046', 'Hyderabad', 'Telangana', 'India', '500035', 'Male', '9441918146', 'vivekreddysangam@gmail.com', 'Employed', 'IBM', 'No'),
(55, '2025/02/13 9:32:46 PM GMT+5:30', 'udaykiran20bcs103@iiitkottayam.ac.in', 'Valluru', 'Uday Kiran', '2003-06-02', '2020BCS0103', 'Visakhapatnam', 'Andhra Pradesh', 'India', '530048', 'Male', '9704271846', 'udayvalluru2003@gmail.com', 'Employed', 'UST Global', NULL),
(56, '2025/02/13 9:41:50 PM GMT+5:30', 'akankshasingh20bcs60@iiitkottayam.ac.in', 'Akanksha', 'Singh', '2002-07-17', '2020BCS0060', 'Chapra, Saran', 'Bihar', 'India', '841301', 'Female', '7320954983', 'akanksha.sngh660@gmail.com', 'Employed', 'Shipsy', NULL),
(57, '2025/02/13 10:06:23 PM GMT+5:30', 'dadinikhil20bec35@iiitkottayam.ac.in', 'NIKHIL', 'DADI', '2002-02-06', '2020BEC0035', 'VISAKHAPATNAM', 'Andhra Pradesh', 'India', '530051', 'Male', '9014651597', 'dnikhil087@gmail.com', 'Other', NULL, NULL),
(58, '2025/02/13 10:11:13 PM GMT+5:30', 'vemulatharun20bcs66@iiitkottayam.ac.in', 'Tharun', 'Vemula', '2003-12-02', '2020BCS0066', 'Hyderabad', 'Telangana', 'India', '500092', 'Male', '6301930763', 'tharunvind@gmail.com', 'Employed', 'IBM', 'Its all good. Thanks'),
(59, '2025/02/13 10:30:21 PM GMT+5:30', 'justine20bcs148@iiitkottayam.ac.in', 'Jain Maria', 'Justine', '2002-01-09', '2020BCS0148', 'Malappuram', 'Kerala', 'India', '676123', 'Female', '8138043646', 'jainmaria8580@gmail.com', 'Employed', NULL, NULL),
(60, '2025/02/13 10:38:31 PM GMT+5:30', 'sumanth20bcs10@iiitkottayam.ac.in', 'Sumanth', 'Kotikalapudi', '2002-12-10', '2020BCS0010', 'Pune', 'Maharashtra', 'India', '411041', 'Male', '7218101202', 'kotikalapudisumanth@gmail.com', 'Other', 'BrokenEdge Studios', NULL),
(61, '2025/02/14 12:04:34 AM GMT+5:30', 'ankitgupta20bec32@iiitkottayam.ac.in', 'Ankit', 'Gupta', '2000-03-02', '2020bec0032', 'Vasai Virar', 'Maharashtra', 'India', '401209', 'Male', '9004200912', 'ankitgupta9322@gmail.com', 'Employed', 'Tata consultancy services', NULL),
(62, '2025/02/14 3:41:44 AM GMT+5:30', 'nishithrokade20bcs84@iiitkottayam.ac.in', 'Nishith', 'Rokade', '2001-05-15', '2020BCS0084', 'Mumbai', 'Maharashtra', 'India', '400083', 'Male', '9320153384', 'nishithrokade@gmail.com', 'Higher Education', 'IIT Bombay', 'Currently pursuing my MTech from IIT Bombay'),
(63, '2025/02/14 6:34:02 AM GMT+5:30', 'ibrahimahmed20bcs18@iiitkottayam.ac.in', 'Ibrahim', 'Khan', '2003-09-05', '2020BCS0018', 'Hyderabad', 'Telangana', 'India', '500005', 'Male', '6303319410', 'ibrahimak6454@gmail.com', 'Employed', 'Adani Defence and aerospace', NULL),
(64, '2025/02/14 9:17:21 AM GMT+5:30', 'aadirathsingh20bec18@iiitkottayam.ac.in', 'Aadirath', 'Singh', '2002-06-10', '2020bec0018', 'Hardoi', 'UP', 'India', '241001', 'Male', '7357638116', 'aadirathsingh10@gmail.com', 'Higher Education', NULL, NULL),
(65, '2025/02/14 9:55:34 AM GMT+5:30', 'balu20bcs170@iiitkottayam.ac.in', 'Balu', 'Chandramandra', '2003-08-23', '2020BCS0170', 'Eluru', 'Andhra Pradesh', 'India', '534112', 'Male', '8179623879', 'balujohnwesly@gmail.com', 'Other', NULL, NULL),
(66, '2025/02/14 10:18:47 AM GMT+5:30', 'suvalal20bcs169@iiitkottayam.ac.in', 'Kaustubh', 'Desale', '2002-05-17', '2020BCS0169', 'Dhule', 'Maharashtra', 'India', '424301', 'Male', '8805605223', 'desalekaustubh7@gmail.com', 'Other', NULL, NULL),
(67, '2025/02/14 10:19:48 AM GMT+5:30', 'saimahidhar20bcs116@iiitkottayam.ac.in', 'Sai', 'Mah', '2002-07-13', '2020bcs0116', 'Kochi', 'Kerala', 'India', '682037', 'Male', '8179334613', 'mahidharreddy2024@gmail.com', 'Employed', 'IBM', NULL),
(68, '2025/02/14 12:09:56 PM GMT+5:30', 'anagha20bcs1@iiitkottayam.ac.in', 'Anagha', 'N', '2002-09-19', '2020BCS0001', 'Thrissur', 'Kerala', 'India', '680581', 'Female', '7306019398', 'anagha.amrutham02@gmail.com', 'Employed', 'HPE', NULL),
(69, '2025/02/14 12:28:00 PM GMT+5:30', 'saiprathap20BCS113@iiitkottayam.ac.in', 'Sai', 'Prathap', '2002-06-29', '2020BCS0113', 'Kadiri', 'Andhra Pradesh', 'India', '515591', 'Male', '9390410980', 'Pottipatisaiprathap1234@gmail.com', 'Other', NULL, NULL),
(70, '2025/02/14 12:32:48 PM GMT+5:30', 'joelraj20bcs56@iiitkottayam.ac.in', 'Joel', 'Raj', '2003-06-08', '2020BCS0056', 'Tirupati', 'Andhra Pradesh', 'India', '517644', 'Male', '9515365787', 'joelraj2580@gmail.com', 'Other', NULL, NULL),
(71, '2025/02/14 12:48:37 PM GMT+5:30', 'ashutoshrai20bcs20@iiitkottayam.ac.in', 'Ashutosh', 'Rai', '2002-07-24', '2020BCS0020', 'Banglore', 'Karnataka', 'India', '560062', 'Male', '9880789924', 'ashutoshrai.2k2@gmail.com', 'Higher Education', 'NIT Silchar', NULL),
(72, '2025/02/14 1:08:12 PM GMT+5:30', 'sankaran20bec13@iiitkottayam.ac.in', 'SANKARAN', 'T P', '2001-01-25', '2020BEC0013', 'Chalakudy', 'Kerala', 'India', '680307', 'Male', '7307260476', 'sankarantp03@gmail.com', 'Employed', 'Manappuram Finance Limited', NULL),
(73, '2025/02/14 1:11:14 PM GMT+5:30', 'sumanth20bcs159@iiitkottayam.ac.in', 'Teja Sumanth', 'Jinka', '2002-08-11', '2020BCS0159', 'Nandyal', 'ANDHRA PRADESH', 'India', '518112', 'Male', '8186937228', 'tejasumanthjinka11@gmail.com', 'Other', 'Unemployed', NULL),
(74, '2025/02/14 1:52:46 PM GMT+5:30', 'aarthi20bcs107@iiitkottayam.ac.in', 'Aarthi Reddy', 'Thappeta', '2002-12-02', '2020BCS0107', 'Anantapur', 'Andhra pradesh', 'India', '515411', 'Female', '9398501524', 'aarthireddy0211@gmail.com', 'Employed', 'o9solutions', NULL),
(75, '2025/02/14 2:21:20 PM GMT+5:30', 'gotamgorabh20bcs173@iiitkottayam.ac.in', 'Gotam', 'Gorabh', '2002-06-23', '2020BCS0173', 'Araria', 'Bihar', 'India', '854336', 'Male', '7632950978', 'gautamy672@gmail.com', 'Employed', 'Tether Operation Limited', NULL),
(76, '2025/02/14 3:06:59 PM GMT+5:30', 'karthikamadhu20bec33@iiitkottayam.ac.in', 'Karthika', 'Madhu', '2001-11-30', '2020BEC0033', 'Bangalore', 'Karnataka', 'India', '560093', 'Female', '9515827629', 'karthikamadhu27@gmail.com', 'Employed', 'Mobiveil Technologies(Global Logic)', NULL),
(77, '2025/02/14 3:13:38 PM GMT+5:30', 'prajjwaljogdand@gmail.com', 'Prajjwal', 'Jogdand', '2002-06-23', '2020BCS0039', 'Pune', 'Maharastra', 'India', '412105', 'Male', '9370324791', 'prajjwaljogdand@gmail.com', 'Employed', 'dzap.io', NULL),
(78, '2025/02/14 5:38:02 PM GMT+5:30', 'sukreeth20bcs155@iiitkottayam.ac.in', 'Sukreeth', 'Vandrangi', '2001-10-18', '2020BCS0155', 'Vizianagaram', 'Andhra Pradesh', 'India', '535002', 'Male', '8328338483', 'sukreeth2001@gmail.com', 'Employed', 'Ideyalabs', NULL),
(79, '2025/02/14 7:39:13 PM GMT+5:30', 'sandeepg20bcs189@iiitkottayam.ac.in', 'Sandeep', 'G', '2001-07-25', '2020BCS0189', 'bidar', 'Karnataka', 'India', '585403', 'Male', '6366125952', 'sandeepgudme789@gmail.com', 'Employed', '5g infotech', 'no'),
(80, '2025/02/14 9:54:17 PM GMT+5:30', 'tanujjoshi20bcs100@iiitkottayam.ac.in', 'Tanuj', 'Joshi', '2002-04-27', '2020BCS0100', 'Tanakpur', 'UTTARAKHAND', 'India', '262309', 'Male', '6395840599', 'tjrock628@gmail.com', 'Other', NULL, NULL),
(81, '2025/02/15 12:07:55 PM GMT+5:30', 'rishabh20bec12@iiitkottayam.ac.in', 'Rishabh', 'Srivastava', '2002-09-24', '2020BEC0012', 'Bangalore', 'Karnataka', 'India', '560048', 'Male', '9321455871', 'srivastavarishabh179@gmail.com', 'Employed', 'Maximl', NULL),
(82, '2025/02/15 1:39:37 PM GMT+5:30', 'saikarthikeya20bec2@iiitkottayam.ac.in', 'Mudigonda', 'Sai Karthikeya', '2002-08-12', '2020BEC0002', 'Mangalagiri', 'Andhra Pradesh', 'India', '522503', 'Male', '9059265511', 'saikarthikeya.m8@gmail.com', 'Other', NULL, NULL),
(83, '2025/02/15 2:00:58 PM GMT+5:30', 'nagireddy20bec31@iiitkottayam.ac.in', 'Nagi Reddy', 'Desam', '2002-05-05', '2020BEC0031', 'Guntur', 'Andhra Pradesh', 'India', '522007', 'Male', '9014010159', 'nagir2222@gmail.com', 'Employed', 'Manappuram Finance Limited', 'Nill'),
(84, '2025/02/15 3:09:11 PM GMT+5:30', 'srihithprudhivi20bcs9@iiitkottayam.ac.in', 'Srihith', 'Prudhivi', '2003-01-11', '2020BCS0009', 'Bangalore', 'Karnataka', 'India', '560103', 'Male', '6302426512', 'srihithprudhivi2003@gmail.com', 'Employed', 'Zenduty', NULL),
(85, '2025/02/15 5:59:02 PM GMT+5:30', 'sankalpsodagum7@gmail.com', 'sankalp', 'sodagum', '2003-03-07', '2020BCS0014', 'Hyderabad', 'Telangana', 'India', '500016', 'Male', '6305129054', 'sankalpsodagum7@gmail.com', 'Employed', 'IBM', NULL),
(86, '2025/02/15 7:17:48 PM GMT+5:30', 'maruthi20bcs0127@iiitkottayam.ac.in', 'Chaluvadi', 'Maruthi phanendra', '2002-12-25', '2020BCS0127', 'Ongole', 'Andhra Pradesh', 'India', '523001', 'Male', '6303338642', 'maruthiphanendhra@gmail.com', 'Employed', NULL, NULL),
(87, '2025/02/16 12:45:43 PM GMT+5:30', 'vignesh20bcs70@iiitkottayam.ac.in', 'Vignesh', 'S', '2002-01-21', '2020BCS0070', 'Kollam', 'Kerala', 'India', '691021', 'Male', '7025753981', 'vigneshsureshcc3@gmail.com', 'Higher Education', 'Indian Institute of Technology Hyderabad', NULL),
(88, '2025/02/16 1:15:34 PM GMT+5:30', 'sriharsha20bcs68@iiitkottayam.ac.in', 'Sri Harsha', 'Thatha', '2002-09-13', '2020BCS0068', 'Nellore', 'Andhra Pradesh', 'India', '524346', 'Male', '7893717105', 'thathasriharsha1718@gmail.com', 'Employed', 'CIMB AI Labs', NULL),
(89, '2025/02/16 7:45:07 PM GMT+5:30', 'abhijitmishra20bcs94@iiitkottayam.ac.in', 'Abhijit', 'Mishra', '2003-08-25', '2020BCS0094', 'Lucknow', 'Uttar Pradesh', 'India', '226025', 'Male', '9307466827', 'abhijit25mishra@gmail.com', 'Employed', 'Jio platforms', 'None'),
(90, '2025/02/17 12:08:22 AM GMT+5:30', 'seshamraviteja20bcs176@iiitkottayam.ac.in', 'Raviteja', 'Sesham', '2003-03-15', '2020BCS0176', 'Kadapa', 'Andhra Pradesh', 'India', '516193', 'Male', '7702198210', 'seshamraviteja5@gmail.com', 'Higher Education', NULL, NULL),
(91, '2025/02/17 12:19:50 AM GMT+5:30', 'pavankumar20bcs85@iiitkottayam.ac.in', 'Pavan Kumar', 'Sabavath', '2003-08-02', '2020BCS0085', 'Hyderabad', 'Telangana', 'India', '503165', 'Male', '9392400959', 'sabavathpavan205@gmail.com', 'Employed', 'Adani', 'NA'),
(92, '2025/02/17 4:45:09 AM GMT+5:30', 'shravakzombade38@gmail.com', 'Shravak', 'Zombade', '2001-09-02', '2020BCS0136', 'Aurangabad', 'Maharashtra', 'India', '431001', 'Male', '8788481009', 'shravakzombade38@gmail.com', 'Other', NULL, NULL),
(93, '2025/02/17 7:23:48 PM GMT+5:30', 'syamsivadas20bcs24@iiitkottayam.ac.in', 'syam', 'sivadas', '2001-05-23', '2020BCS0024', 'Kottayam', 'Kerala', 'India', '686635', 'Male', '9778299248', 'syamsivadas32@gmail.com', 'Employed', 'Royal Enfield', NULL),
(94, '2025/02/17 8:18:13 PM GMT+5:30', 'vamsisai20bec26@iiitkottayam.ac.in', 'Vedhavamsisai', 'vasamsetti', '2000-11-14', '2020BEC0026', 'Vizianagaram', 'Andhrapradesh', 'India', '535002', 'Male', '7674802045', 'vedhavamsisai2000@gmail.com', 'Employed', 'Voltas', 'No'),
(95, '2025/02/18 12:00:22 AM GMT+5:30', 'rohithmangesh20bcs108@iiitkottayam.ac.in', 'SRI ROHITH MANGESH', 'ADDANKI', '2002-10-08', '2020BCS0108', 'BHIMAVARAM', 'ANDHRA PRADESH', 'INDIA', '534201', 'Male', '8309751446', 'rohithmangesh@gmail.com', 'Other', 'THE CHOCOLATE BOWL', NULL),
(96, '2025/02/18 1:07:28 PM GMT+5:30', 'banothbaburao20bcs146@iiitkottayam.ac.in', 'Banoth', 'Baburao', '2003-08-25', '2020BCS0146', 'Mahabubabad', 'Telangana', 'India', '506104', 'Male', '9550471276', 'baburaobanoth3447@gmail.com', 'Other', NULL, NULL),
(97, '2025/02/18 3:41:33 PM GMT+5:30', 'gurramvarshini20bec28@iiitkottayam.ac.in', 'Varshini', 'Gurram', '2003-07-26', '2020BEC0028', 'Nellore', 'Andhra pradesh', 'India', '524001', 'Female', '8688152899', 'gurramvarshini26@gmail.com', 'Employed', 'CIMB AI LABS', NULL),
(98, '2025/02/18 4:03:15 PM GMT+5:30', 'sravani20bec6@iiitkottayam.ac.in', 'Boggavarapu', 'Sravani', '2002-06-29', '2020BEC0006', 'Darsi', 'AndhraPradesh', 'India', '523247', 'Female', '7981974299', 'sravaniboggavarapu77@gmail.com', 'Other', NULL, NULL),
(99, '2025/02/18 5:23:40 PM GMT+5:30', 'gourinair20bec7@iiitkottayam.ac.in', 'Gouri', 'Nair', '2002-12-12', '2020BEC0007', 'Trivandrum', 'Kerala', 'India', '695587', 'Female', '8606922585', 'ngouri53@gmail.com', 'Other', NULL, NULL),
(100, '2025/02/19 12:15:09 AM GMT+5:30', 'baranidaranm20bcs40@iiitkottayam.ac.in', 'Baranidaran', 'M', '2002-06-08', '2020BCS0040', 'Salem', 'Tamil Nadu', 'India', '637101', 'Male', '9600456751', 'mbdbarani@gmail.com', 'Employed', 'Zoho Corporation', NULL),
(101, '2025/02/19 9:14:24 AM GMT+5:30', 'joelmtom20bcs31@iiitkottayam.ac.in', 'Joel', 'Tom', '2000-10-23', '2020BCS0031', 'Aluva', 'Kerala', 'India', '683580', 'Male', '9072612805', 'joelqwerty007@gmail.com', 'Higher Education', NULL, NULL),
(102, '2025/02/19 9:22:37 AM GMT+5:30', 'karthikeya20bcs121@iiitkottayam.ac.in', 'KARTHIKEYA REDDY', 'ARIVEETI', '2003-06-02', '2020BCS0121', 'CHENNAI', 'TAMIL NADU', 'INDIA', '600041', 'Male', '9908783203', 'karthikeya9503@gmail.com', 'Employed', NULL, NULL),
(103, '2025/02/19 9:38:54 AM GMT+5:30', 'hamidshaikh20bcs165@iiitkottayam.ac.in', 'Basit', 'Shaikh', '2002-03-11', '2020BCS0165', 'Mumbai', 'Maharashtra', 'India', '401107', 'Male', '9136893383', 'shaikhbasithamid50@gmail.com', 'Employed', 'Tata Consultancy Services', NULL),
(104, '2025/02/19 2:40:48 PM GMT+5:30', 'prasanthkumar20bcs171@iiitkottayam.ac.in', 'PRASANTH KUMAR', 'DASARI', '2003-06-24', '2020BCS0171', 'Undi', 'Andhra Pradesh', 'India', '534199', 'Male', '9346278558', 'dasariprasanthkumar24@gmail.com', 'Other', 'N/A', 'No remarks'),
(105, '2025/02/19 7:10:11 PM GMT+5:30', 'leotomjose@gmail.com', 'Leo', 'Tom', '2001-02-09', '2020BCS0023', 'Cochin', 'Kerala', 'India', '682030', 'Male', '9500025928', 'leotomjose@gmail.com', 'Employed', 'TCS', NULL),
(106, '2025/02/19 9:25:55 PM GMT+5:30', 'siddharthbandaru20bcs75@iiitkottayam.ac.in', 'Dhanish Siddharth', 'Bandaru', '2002-10-13', '2020BCS0075', 'Bangalore', 'Karnataka', 'India', '560037', 'Male', '9008268157', 'dansid1310@gmail.com', 'Employed', 'Acceldata Technology Private Limited', NULL),
(107, '2025/02/20 12:46:00 AM GMT+5:30', 'ankurmandal20bcs34@iiitkottayam.ac.in', 'Ankur Kumar', 'Mandal', '2001-11-28', '2020BCS0034', 'Visakhapatnam', 'Andhra Pradesh', 'India', '530032', 'Male', '9182024792', 'ankurpersonal2211@gmail.com', 'Employed', 'Manappuram Finance', NULL),
(108, '2025/02/20 12:54:58 AM GMT+5:30', 'bvshashankreddy@gmail.com', 'Venkata Shashank Reddy', 'Burri', '2002-03-15', '2020BCS0033', 'Hyderabad', 'Telangana', 'India', '500018', 'Male', '9030926917', 'bvshashankreddy@gmail.com', 'Higher Education', NULL, NULL),
(109, '2025/02/20 3:26:57 PM GMT+5:30', 'adithyadevm20bec23@iiitkottayam.ac.in', 'Adithyadev', 'Mattada', '2002-01-02', '2020BEC0023', 'Kozhikode', 'Kerala', 'India', '673017', 'Male', '7559888295', 'adithyadev.mattada@gmail.com', 'Employed', 'CDAC', 'Designation: Project Engineer'),
(110, '2025/02/20 4:22:09 PM GMT+5:30', 'likith20bcs161@iiitkottayam.ac.in', 'Likith', 'Dabilpuram', '2002-03-18', '2020bcs0161', 'Hyderabad', 'Telangana', 'India', '500010', 'Male', '9502514432', 'likithdabilpuram@gmail.com', 'Higher Education', NULL, NULL),
(111, '2025/02/20 4:29:05 PM GMT+5:30', 'sofiasagar20bcs132@iiitkottayam.ac.in', 'Kavali Sofia', 'Sagar', '2001-06-11', '2020BCS132', 'Hyderabad', 'Telangana', 'India', '500047', 'Female', '7671878003', 'sofiasagar@gmail.com', 'Higher Education', 'IIT Hyderabad', 'Direct PhD in AI'),
(112, '2025/02/20 9:55:29 PM GMT+5:30', 'harshgupta609@gmail.com', 'Harsh', 'Gupta', '2002-04-15', '2020BCS0187', 'Lucknow', 'Uttar pradesh', 'India', '226021', 'Male', '9305054757', 'harshgupta609@gmail.com', 'Employed', 'TCS', NULL),
(113, '2025/02/20 10:12:45 PM GMT+5:30', 'pavankalyan20bcs123@iiitkottayam.ac.in', 'PAVAN KALYAN', 'PALLA', '2003-03-06', '2020BCS0123', 'Kadapa', 'Andhra Pradesh', 'India', '516003', 'Male', '6302614138', 'pallapavankalyan607@gmail.com', 'Employed', 'Adani Group', NULL),
(114, '2025/02/20 10:51:16 PM GMT+5:30', 'sagar20bcs156@iiitkottayam.ac.in', 'Sagar', 'Raj', '2002-09-06', '2020BCS0156', 'Biharsharif', 'Bihar', 'India', '803104', 'Male', '8058399338', 'raj.sagar.bsf@gmail.com', 'Employed', 'Digiquanta', NULL),
(115, '2025/02/20 11:08:31 PM GMT+5:30', 'corekaaddress@gmail.com', 'Venkata Rupesh', 'Padarthi', '2003-09-01', '2020BCS0143', 'Gudur', 'Andhra Pradesh', 'India', '524101', 'Male', '9492960789', 'corekaaddress@gmail.com', 'Employed', NULL, NULL),
(116, '2025/02/21 4:47:04 PM GMT+5:30', 'tagoresubbbarai20bcs42@iiitkottayam.ac.in', 'Tagore subbarai', 'Bhushi', '2003-08-01', '2020BCS0042', 'Guntur', 'Andhrapradesh', 'India', '522234', 'Male', '9381087990', 'tagorebhushi@gmail.com', 'Employed', 'SalesCaptain', NULL),
(117, '2025/02/22 7:01:13 AM GMT+5:30', 'sanjayshitale20bcs82@iiitkottayam.ac.in', 'Aditya', 'Shitale', '2002-10-16', '2020BCS0082', 'Nanded', 'Maharashtra', 'India', '431602', 'Male', '9021629698', 'adityashitale4@gmail.com', 'Employed', 'Bounteous×Accolite', NULL),
(118, '2025/02/22 9:42:10 AM GMT+5:30', 'irishksajan20bcs4@iiitkottayam.ac.in', 'Irish', 'K Sajan', '2001-12-12', '2020BCS0004', 'Kottayam', 'Kerala', 'India', '686502', 'Male', '9778238364', 'irishksajan18@gmail.com', 'Employed', 'Tiger Analytics', NULL),
(119, '2025/02/22 1:29:55 PM GMT+5:30', 'santhosh20bec20@iiitkottayam.ac.in', 'Muni Santhosh', 'Anjuru', '2002-08-24', '2020BEC0020', 'Bangalore', 'Karnataka', 'India', '560016', 'Male', '7386550380', 'santhu240802@gmail.com', 'Employed', 'CDAC', 'None'),
(120, '2025/02/22 1:30:59 PM GMT+5:30', 'racharlaraviteja20bcs72@iiitkottayam.ac.in', 'Raviteja', 'Racharla', '2003-10-28', '2020BCS0072', 'Hyderabad', 'Telangana', 'India', '500055', 'Male', '8978202890', 'itsraviteja.r@gmail.com', 'Employed', 'Flipkart', 'None'),
(121, '2025/02/22 1:31:55 PM GMT+5:30', 'bala2k03@gmail.com', 'Bala Murali', 'Angati', '2003-02-08', '2020BCS0096', 'Visakhapatnam', 'Andhra Pradesh', 'India', '530027', 'Male', '6302644451', 'bala2k03@gmail.com', 'Employed', 'MuSigma', NULL),
(122, '2025/02/22 1:33:31 PM GMT+5:30', 'kashyapchandra002@gmail.com', 'Kashyap', 'Chandra', '2002-08-25', '2020BCS0062', 'Bangalore', 'Karnataka', 'India', '560093', 'Male', '8008688908', 'kashyapchandra002@gmail.com', 'Employed', 'Commvault', NULL),
(123, '2025/02/22 2:04:33 PM GMT+5:30', 'hemadriveera20bcs88@iiitkottayam.ac.in', 'Hemadri', 'Pragada', '2003-06-05', '2020BCS0088', 'Hyderabad', 'Telengana', 'India', '500084', 'Male', '9014504345', 'pragadahemadri@gmail.com', 'Employed', 'Beehyv', NULL),
(124, '2025/02/22 2:04:48 PM GMT+5:30', 'sivakartheekneti@gmail.com', 'Siva kartheek', 'Neti', '2003-08-09', '2020bcs0099', 'Hyderabad', 'Telangana', 'India', '500084', 'Male', '9398644549', 'Sivakartheekneti@gmail.com', 'Employed', 'Innovacx', 'None'),
(125, '2025/02/22 2:05:52 PM GMT+5:30', 'varun20bcs131@iiitkottayam.ac.in', 'Varun', 'Srikakulam', '2003-04-07', '2020BCS0131', 'Proddatur', 'Andhra Pradesh', 'India', '516360', 'Male', '7981266886', 'srikakulamvarun2003@gmail.com', 'Employed', 'TCS', NULL),
(126, '2025/02/22 2:06:23 PM GMT+5:30', 'veeranagendra20bcs65@iiitkottayam.ac.in', 'Nagendra', 'Chappidi', '2003-07-19', '2020BCS0065', 'HYDERABAD', 'TELANGANA', 'India', '500045', 'Male', '9652501957', 'ch.nagendra2003@gmail.com', 'Other', NULL, NULL),
(127, '2025/02/22 2:08:28 PM GMT+5:30', 'emil20bcs0186@iiitkottayam.ac.in', 'Shilpa Emil', 'Manoj', '2001-12-27', '2020BCS0186', 'Thiruvalla', 'Kerala', 'India', '689101', 'Female', '8281103200', 'shilpaemil2001@gmail.com', 'Employed', 'IBM', NULL),
(128, '2025/02/22 2:15:49 PM GMT+5:30', 'fathima20bec22@iiitkottayam.ac.in', 'Fathima Hanan', 'Parakkot', '2001-04-22', '2020bec0022', 'Kozhikode', 'Kerala', 'India', '676102', 'Female', '8139888072', 'hananhere9@gmail.com', 'Higher Education', 'IIT Hyderabad', NULL),
(129, '2025/02/22 2:17:36 PM GMT+5:30', 'anoushkasudhir20bcs52@iiitkottayam.ac.in', 'Anoushka', 'Sudhir', '2002-11-20', '2020BCS0052', 'Bangalore', 'Karnataka', 'India', '560066', 'Female', '8347203320', 'anoushkasudhir202@gmail.com', 'Employed', 'Dice Tech', NULL),
(130, '2025/02/22 2:21:35 PM GMT+5:30', 'karthikeyan.a20bec1@iiitkottayam.ac.in', 'Karthikeyan', 'A', '2003-02-16', '2020bec0001', 'Chennai', 'Tamil Nadu', 'India', '600097', 'Male', '9176404848', 'mrkarthik0016@gmail.com', 'Higher Education', 'Nil', 'Nil'),
(131, '2025/02/22 2:23:42 PM GMT+5:30', 'vanshjagyas@gmail.com', 'Vansh', 'Jagyasi', '2002-10-23', '2020BCS0179', 'Chennai', 'Tamilnadu', 'India', '603130', 'Male', '9552277038', 'vanshjagyas@gmail.com', 'Employed', 'Adani Connex', NULL),
(132, '2025/02/22 2:29:06 PM GMT+5:30', 'karthiks20bec34@iiitkottayam.ac.in', 'Karthik', 'S', '2002-06-27', '2020bec0034', 'Alappuzha', 'Kerala', 'India', '690507', 'Male', '8921837163', 'karthzzzz845@gmail.com', 'Employed', 'Manappuram Finance Ltd', NULL),
(133, '2025/02/22 2:33:57 PM GMT+5:30', 'niveditha20bec39@iiitkottayam.ac.in', 'Mudavath', 'Niveditha', '2002-04-29', '2020BEC0039', 'Hyderabad', 'Telangana', 'India', '501505', 'Female', '7993081029', 'mudavatniveditha029@gmail.com', 'Other', NULL, '....'),
(134, '2025/02/22 2:34:25 PM GMT+5:30', 'akash20bcs181@iiitkottayam.ac.in', 'Akash', 'Bhukya', '2001-10-04', '2020BCS0181', 'Warangal', 'Telangana', 'India', '506015', 'Male', '9182664585', 'bhukyaakash99@gmail.com', 'Higher Education', 'Mtech', 'Na'),
(135, '2025/02/22 2:34:47 PM GMT+5:30', 'korrasagar20bcs168@iiitkottayam.ac.in', 'Korra', 'Sagar', '2001-04-02', '2020BCS0168', 'Warangal', 'Telangana', 'India', '506347', 'Male', '7569442871', 'sagarkorra079@gmail.com', 'Other', NULL, NULL),
(136, '2025/02/22 2:48:33 PM GMT+5:30', 'pravinkumara20bec27@iiitkottayam.ac.in', 'PRAVINKUMAR', 'A', '2002-11-01', '2020bec0027', 'Kanchipuram', 'Tamilnadu', 'India', '631605', 'Male', '6379063751', 'pravinkumar012002@gmail.com', 'Higher Education', NULL, NULL),
(137, '2025/02/22 2:51:46 PM GMT+5:30', 'krishnachaitanya20bec24@iiitkottayam.ac.in', 'Krishna Chaitanya', 'V', '2001-09-26', '2020BEC0024', 'Chennai', 'Tamil Nadu', 'India', '600072', 'Male', '7032623216', 'Vkc196420@gmail.com', 'Employed', 'Nxtjob.ai', 'NA'),
(138, '2025/02/22 4:00:48 PM GMT+5:30', 'indiansanskar2000@gmail.com', 'Sanskar', 'Kasoudhan', '2001-07-19', '2020bec0038', 'Ayodhya', 'Uttar Pradesh', 'India', '224141', 'Male', '6393357857', 'indiansanskar2000@gmail.com', 'Employed', 'DigiQunta', 'NA'),
(139, '2025/02/22 6:03:24 PM GMT+5:30', 'nikhilmenon20bcs16@iiitkottayam.ac.in', 'Nikhil', 'Menon', '2002-03-09', '2020BCS0016', 'Thrissur', 'Kerala', 'India', '680020', 'Male', '7259395776', 'nikhil9302@gmail.com', 'Employed', 'NVIDIA', NULL),
(140, '2025/02/28 7:24:23 PM GMT+5:30', 'anand20bcs101@iiitkottayam.ac.in', 'Anand', 'Swaroop', '2002-10-10', '2020BCS0101', 'Ghaziabad', 'Ghaziabad', 'India', '201002', 'Male', '9643032217', 'anand20bcs101@iiitkottayam.ac.in', 'Higher Education', NULL, NULL),
(141, '2025/02/28 7:29:49 PM GMT+5:30', 'khushwantsingh20bcs53@iiitkottayam.ac.in', 'KHUSHWANT', 'SINGH', '2002-08-21', '2020BCS0053', 'ROHTAK', 'HARYANA', 'INDIA', '124001', 'Male', '9671719495', 'Kkhushwantsingh@gmail.com', 'Other', 'IIIT KOTTAYAM', NULL),
(142, '2025/03/03 4:16:03 PM GMT+5:30', 'nabeelahmed20bcs50@iiitkottayam.ac.in', 'Nabeel', 'Khan', '2002-01-06', '2020BCS0050', 'Hyderabad', 'Telangana', 'India', '500050', 'Male', '9177801962', 'nabeelkhankk3@gmail.com', 'Employed', 'Alliance Pro IT Pvt Ltd', 'Thank you IIIT Kottayam for all the Support and Opportunities that were put ahead. Got a Lot to learn, Tough times, Happy days, Great Friends, Excellent professors, everything that impacted my learning, Thanks.\n\nI hope and believe that the institute would grow over the period of time, Emphasizing more on Quality Education and Overall persona development.\n\nNabeel Khan- Signing off IIIT Kottayam!');

-- --------------------------------------------------------

--
-- Table structure for table `alumni_2021_admission`
--

CREATE TABLE `alumni_2021_admission` (
  `id` int(11) NOT NULL,
  `timestamp` varchar(255) DEFAULT NULL,
  `username` varchar(255) DEFAULT NULL,
  `first_name` varchar(100) DEFAULT NULL,
  `last_name` varchar(100) DEFAULT NULL,
  `dob` varchar(50) DEFAULT NULL,
  `roll_no` varchar(50) DEFAULT NULL,
  `city` varchar(100) DEFAULT NULL,
  `state` varchar(100) DEFAULT NULL,
  `country` varchar(100) DEFAULT NULL,
  `pincode` varchar(20) DEFAULT NULL,
  `gender` varchar(20) DEFAULT NULL,
  `whatsapp_no` varchar(50) DEFAULT NULL,
  `personal_email` varchar(255) DEFAULT NULL,
  `present_status` varchar(100) DEFAULT NULL,
  `organization` varchar(255) DEFAULT NULL,
  `remarks` text DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `alumni_2021_admission`
--

INSERT INTO `alumni_2021_admission` (`id`, `timestamp`, `username`, `first_name`, `last_name`, `dob`, `roll_no`, `city`, `state`, `country`, `pincode`, `gender`, `whatsapp_no`, `personal_email`, `present_status`, `organization`, `remarks`) VALUES
(1, '2025-08-08 10:33:08', 'motha21bcs57@iiitkottayam.ac.in', 'Charith', 'Motha', '2003-07-09 00:00:00', '2021BCS0057', 'Rajahmundry', 'Andhra Pradesh', 'India', '533103', 'Male', '7032802238', 'mothacharith@gmail.com', 'Employed', 'CIMB AI LABS', NULL),
(2, '2025-08-08 10:33:20', 'nithupd@gmail.com', 'NIVED', 'KRISHNA', '2003-08-12 00:00:00', '2021BCS0028', 'Kodungallur', 'Kerala', 'India', '680685', 'Male', '8606914198', 'nithupd@gmail.com', 'Employed', 'Klystron Global', NULL),
(3, '2025-08-08 10:33:28', 'konyala21bcs99@iiitkottayam.ac.in', 'Anish Reddy', 'Konyala', '2004-03-10 00:00:00', '2021BCS0099', 'Gajwel', 'Telangana', 'India', '502278', 'Male', '8143533667', 'anishreddykonyala@gmail.com', 'Employed', 'Tiger Analytics', NULL),
(4, '2025-08-08 10:33:28', 'nyshadham21bcs185@iiitkottayam.ac.in', 'Keerthana', 'Nyshadham', '2002-10-05 00:00:00', '2021BCS0185', 'Bengaluru', 'Karnataka', 'India', '560029', 'Female', '9121580714', 'nnl.keerthana@gmail.com', 'Employed', 'CIMB AI Labs', NULL),
(5, '2025-08-08 10:33:30', 'aditya21bcy26@iiitkottayam.ac.in', 'Aditya', 'Shinde', '2003-04-11 00:00:00', '2021BCSY0026', 'Latur', 'Maharashtra', 'India', '413523', 'Male', '9765482996', 's.adityashinde11@gmail.com', 'Employed', 'PhysicsWallah Limited', NULL),
(6, '2025-08-08 10:33:34', 'shubham20bcs0020@iiitkottayam.ac.in', 'Shubham Mani', 'Tripathi', '2001-06-26 00:00:00', '2021BCS0020', 'Rewa', 'Madhya Pradesh', 'India', '486001', 'Male', '9111569950', 'Shubham.manitripathi2001@gmail.com', 'Employed', 'Hewlett-Packard Enterprise', NULL),
(7, '2025-08-08 10:33:44', 'marksamuel23.ms@gmail.com', 'Mark', 'Samuel', '2003-04-23 00:00:00', '2021BCS0012', 'Chennai', 'Tamil Nadu', 'India', '600096', 'Male', '9025655747', 'marksamuel23.ms@gmail.com', 'Employed', 'CDAC Bangalore', NULL),
(8, '2025-08-08 10:34:50', 'shivprakash21bec21@iiitkottayam.ac.in', 'Shiv Prakash', 'Agrahari', '2002-01-31 00:00:00', '2021bec0021', 'Prayagraj', 'Uttar Pradesh', 'India', '211003', 'Male', '7607165189', 'shivprakashagrahari1024@gmail.com', 'Employed', 'Orbo', NULL),
(9, '2025-08-08 10:36:15', 'dhanushbitra0660@gmail.com', 'Dhanush', 'Bitra', '2003-10-31 00:00:00', '2021BCS0052', 'Chirala', 'Andhra Pradesh', 'India', '523155', 'Male', '7207806810', 'dhanushbitra0660@gmail.com', 'Employed', 'Litmus7', NULL),
(10, '2025-08-08 10:37:18', 'archit21bec22@iiitkottayam.ac.in', 'ARCHIT', 'VASHIST', '2003-02-24 00:00:00', '2021BEC0022', 'Bangalore', 'Karnataka', 'India', '560016', 'Male', '7281003445', 'architvashist4728@gmail.com', 'Employed', 'CDAC', NULL),
(11, '2025-08-08 10:37:31', 'baggam21bcs179@iiitkottayam.ac.in', 'Naga Jayadeep', 'Baggam', '2003-10-04 00:00:00', '2021BCS0179', 'Vishakhapatnam', 'Andhra Pradesh', 'India', '530051', 'Male', '8121063930', 'jayadeepbaggam@gmail.com', 'Other', 'IIIT KOTTAYAM', 'Thank you for considering my application. I am enthusiastic about the opportunity to contribute and eager to bring my skills to your team.'),
(12, '2025-08-08 10:37:40', 'koduri21bcs89@iiitkottayam.ac.in', 'Manikanta Lokesh', 'Koduri', '2003-10-12 00:00:00', '2021BCS0089', 'Chirala', 'Andhra Pradesh', 'India', '523155', 'Male', '6302393952', 'manikantalokesh7@gmail.com', 'Employed', NULL, NULL),
(13, '2025-08-08 10:38:19', 'jonnalagadda21bcs48@iiitkottayam.ac.in', 'Karthik', 'Jonnalagadda', '2004-06-19 00:00:00', '2021BCS0048', 'Amalapuram', 'Andhra Pradesh', 'India', '533201', 'Male', '7993052938', 'jkarthik1947@gmail.com', 'Employed', 'CDAC, Bangalore', NULL),
(14, '2025-08-08 10:38:20', 'moturi21bcs137@iiitkottayam.ac.in', 'VENKATA SATYA KARTHIK', 'MOTURI', '2004-05-21 00:00:00', '2021BCS0137', 'Visakhapatnam', 'Andhra Pradesh', 'India', '530026', 'Male', '9398956824', 'karthikofficial432@gmail.com', 'Employed', 'Viasat India Pvt Ltd.', NULL),
(15, '2025-08-08 10:38:47', 'potturu21bcs159@iiitkottayam.ac.in', 'VENKATA SAI', 'POTTURU', '2004-05-18 00:00:00', '2021BCS0159', 'Anantapur', 'Andhra Pradesh', 'India', '515465', 'Male', '8921077079', 'venkatsaipotturu@gmail.com', 'Other', NULL, NULL),
(16, '2025-08-08 10:41:24', 'ammarsid1208@gmail.com', 'Mohd', 'Ammar', '2003-08-12 00:00:00', '2021BCS0082', 'Baskhari Ambedkar Nagar', 'Uttar Pradesh', 'India', '224129', 'Male', '8726548147', 'ammarsid1208@gmail.com', 'Employed', 'Geeksforgeek', 'Previously worked with Motive'),
(17, '2025-08-08 10:41:30', 'vangapandu21bcs83@iiitkottayam.ac.in', 'Lahir Sai Vignesh', 'Vangapandu', '2004-09-03 00:00:00', '2021BCS0083', 'Rajahmundry', 'Andhrapradesh', 'India', '533107', 'Male', '7842554406', 'lahirsaivignesh3@gmail.com', 'Employed', 'Tiger Analytics', NULL),
(18, '2025-08-08 10:41:32', 'bharambe21bcs178@iiitkottayam.ac.in', 'Samvid', 'Bharambe', '2003-05-10 00:00:00', '2021BCS0178', 'Akola', 'Maharashtra', 'India', '444001', 'Male', '9322454285', 'bharambesamvid@gmail.com', 'Higher Education', 'Indian Institute of Management (IIM), Mumbai', NULL),
(19, '2025-08-08 10:42:08', 'jaddu21bcs56@iiitkottayam.ac.in', 'Tirumala karthikeya', 'Jaddu', '2004-02-13 00:00:00', '2021BCS0056', 'Vijayawada', 'Andhra Pradesh', 'India', '521104', 'Male', '9182952376', 'j.karthikeya2004@gmail.com', 'Employed', 'Xpectrum-ai', NULL),
(20, '2025-08-08 10:44:28', 'nityam21bcs181@iiitkottayam.ac.in', 'Nityam', 'Tripathi', '2003-12-04 00:00:00', '2021BCS0181', 'Prayagraj', 'Uttar Pradesh', 'India', '211019', 'Male', '9696174443', 'tripathinityam89@gmail.com', 'Employed', 'PrivadoID', NULL),
(21, '2025-08-08 10:45:42', 'sachu21bec32@iiitkottayam.ac.in', 'Sachin', 'Tom', '2002-10-31 00:00:00', '2021BEC0032', 'Erumeli', 'Kerala', 'India', '686510', 'Male', '7012009172', 'sachutom31@gmail.com', 'Employed', 'Mannapuram Finance Ltd', 'Nil'),
(22, '2025-08-08 10:46:55', 'goddelagala21bcs144@iiitkottayam.ac.in', 'Naveen Chandra', 'Goddelagala', '2003-11-23 00:00:00', '2021BCS0144', 'Kadiri', 'Andhra Pradesh', 'India', '515561', 'Male', '8712327436', 'nanichandra379@gmail.com', 'Employed', 'Nalashaa Solutions', NULL),
(23, '2025-08-08 10:49:03', 'sharath21bec2@iiitkottayam.ac.in', 'SHARATH', 'A', '2004-06-26 00:00:00', '2021BEC0002', 'Chittoor', 'Andhra Pradesh', 'India', '517001', 'Male', '8309358519', 'sharathece26@gmail.com', 'Other', 'Preparing for GATE AND CAT', 'NAN'),
(24, '2025-08-08 10:50:56', 'kirtan21bcs70@iiitkottayam.ac.in', 'Kirtan', 'Agarwal', '2003-10-17 00:00:00', '2021BCS0070', 'Surat', 'Gujarat', 'India', '395010', 'Male', '8511862979', 'kirtanagarwal48@gmail.com', 'Employed', NULL, NULL),
(25, '2025-08-08 10:51:28', 'maitri21bcs197@iiitkottayam.ac.in', 'Maitri', 'Savla', '2003-03-17 00:00:00', '2021BCS0197', 'Mumbai', 'Maharashtra', 'India', '400095', 'Female', '9619673387', 'maitrisavla2003@gmail.com', 'Employed', 'Shipsy', NULL),
(26, '2025-08-08 10:54:17', 'yashwanth21bcs142@iiitkottayam.ac.in', 'Yashwanth A', 'Doddegowda', '2003-10-02 00:00:00', '2021BCS0142', 'Kolar', 'Karnataka', 'India', '553101', 'Male', '8073944404', 'ya64597@gmail.com', 'Employed', 'UST', 'None'),
(27, '2025-08-08 10:58:00', 'muhamed21bcs2@iiitkottayam.ac.in', 'Muhamed Yasin', 'Manath Abdulkalam', '2002-11-15 00:00:00', '2021BCS0002', 'Kochi', 'Kerala', 'India', '682021', 'Male', '7306421010', 'yasinmanath@gmail.com', 'Employed', 'Seaker Systems Pvt Ltd', 'Nil'),
(28, '2025-08-08 11:00:35', 'bhavardhananjay3@gmail.com', 'Dhananjay', 'Bhavar', '2003-08-14 00:00:00', '2021BCS0044', 'Jalna', 'Maharashtra', 'India', '431204', 'Male', '9022447627', 'bhavardhananjay3@gmail.com', 'Employed', 'Physics Wallah', NULL),
(29, '2025-08-08 11:11:36', 'anuragkumar0207@gmail.com', 'Anurag', 'Kumar', '2002-05-07 00:00:00', '2021BEC0009', 'Pune', 'Maharashtra', 'India', '411036', 'Male', '7044062154', 'anuragkumar0207@gmail.com', 'Employed', 'Smartavya Analytics Pvt Ltd.', NULL),
(30, '2025-08-08 11:11:43', 'kolapkar21bcs132@iiitkottayam.ac.in', 'Jayant', 'Kolapkar', '2002-05-04 00:00:00', '2021BCS0132', 'Baramati', 'Maharashtra', 'India', '413102', 'Male', '9422065902', 'jaykol4502@gmail.com', 'Employed', 'Fluence BESS', NULL),
(31, '2025-08-08 11:20:41', 'bandela21bec34@iiitkottayam.ac.in', 'Sai Karthik', 'Bandela', '2003-11-08 00:00:00', '2021BEC0034', 'Hyderabad', 'Telangana', 'India', '500072', 'Male', '8977031108', 'Saikarthik0811@gmail.com', 'Higher Education', NULL, NULL),
(32, '2025-08-08 11:24:15', 'mukera21bcs100@iiitkottayam.ac.in', 'Mukera', 'Nithisha', '2003-05-11 00:00:00', '2021BCS0100', 'Hyderabad', 'Telangana', 'India', '500080', 'Female', '9346914050', 'nithishamukera@gmail.com', 'Employed', 'Ultimate Kronos Group', NULL),
(33, '2025-08-08 11:25:39', 'kanak21bcs102@iiitkottayam.ac.in', 'Kanak', 'Khandelwal', '2002-02-20 00:00:00', '2021BCS0102', 'Jaipur', 'Rajasthan', 'India', '302006', 'Male', '8690049955', 'kanakkhandelwal0202@gmail.com', 'Employed', 'CDAC Bangalore', NULL),
(34, '2025-08-08 11:27:25', 'annirudh21bcs120@iiitkottayam.ac.in', 'Annirudh', 'Gupta', '2002-10-19 00:00:00', '2021BCS0120', 'VADODARA', 'GUJARAT', 'INDIA', '390010', 'Male', '7984899591', '192002annirudhgupta@gmail.com', 'Employed', 'IBM', NULL),
(35, '2025-08-08 11:53:38', 'abhishek21bcs29@iiitkottayam.ac.in', 'Abhishek', 'Porwal', '2002-06-17 00:00:00', '2021bcs0029', 'Kishangarh', 'Rajasthan', 'India', '305801', 'Male', '9414436977', 'abhishekporwal836@gmail.com', 'Employed', 'AIVI', NULL),
(36, '2025-08-08 12:00:13', 'neeraj21bcs106@iiitkottayam.ac.in', 'Neeraj', 'P Yetheendran', '2003-11-06 00:00:00', '2021BCS0106', 'Thrissur', 'Kerala', 'India', '680566', 'Male', '9074373964', 'neeraj.yathy@gmail.com', 'Employed', 'Nvidia', NULL),
(37, '2025-08-08 12:06:11', 'shah21bcs9@iiitkottayam.ac.in', 'Arnav', 'Shah', '2003-04-04 00:00:00', '2021BCS0009', 'Kochi', 'Kerala', 'India', '682030', 'Male', '8141273614', 'arnavshah0403@gmail.com', 'Employed', 'IBM', NULL),
(38, '2025-08-08 12:16:54', 'harsh21bcs41@iiitkottayam.ac.in', 'Harsh', 'Anand', '2003-10-02 00:00:00', '2021BCS0041', 'Pala', 'Kerala', 'India', '686635', 'Male', '8292104728', 'harshsmhs2003@gmail.com', 'Higher Education', NULL, NULL),
(39, '2025-08-08 12:20:29', 'siddharth21bcs54@iiitkottayam.ac.in', 'Siddharth', 'Gupta', '2003-10-13 00:00:00', '2021BCS0054', 'Bangalore', 'Karnataka', 'India', '560048', 'Male', '9175817715', 'guptasiddharth689@gmail.com', 'Employed', 'Hewlett Packard Enterprise', NULL),
(40, '2025-08-08 12:50:40', 'kanaparthi21bcs62@iiitkottayam.ac.in', 'Yogesh', 'kanaparthi', '2004-03-30 00:00:00', '2021BCS0062', 'Khammam', 'Telangana', 'India', '507316', 'Male', '7981026726', 'yogeshkanaparthi27@gmail.com', 'Employed', 'Torkehub', NULL),
(41, '2025-08-08 12:54:15', 'ravipati21bcs86@iiitkottayam.ac.in', 'Chetan', 'Ravipati', '2004-02-25 00:00:00', '2021BCS0086', 'Hyderabad', 'Telangana', 'India', '500090', 'Male', '6281926917', 'chetanravipati25@gmail.com', 'Employed', 'IBM', 'Sports in the college should be better'),
(42, '2025-08-08 12:57:32', 'riya21bcs171@iiitkottayam.ac.in', 'Riya', 'Bajaj', '2003-02-19 00:00:00', '2021BCS0171', 'Bangalore', 'Karnataka', 'India', '560037', 'Female', '8080712300', 'riyabajaj1902@gmail.com', 'Employed', 'Nvidia', 'When is the convocation'),
(43, '2025-08-08 13:05:17', 'steffin21bec16@iiitkottayam.ac.in', 'Steffin', 'George', '2001-11-23 00:00:00', '2021BEC0016', 'Kottayam', 'Kerala', 'India', '686502', 'Male', '6238606090', 'georgesteffin02@gmail.com', 'Employed', 'MAFIL', NULL),
(44, '2025-08-08 13:22:39', 'yaggadi21bec37@iiitkottayam.ac.in', 'YAGGADI', 'KARTHIK', '2004-01-06 00:00:00', '2021bec0037', 'Anantapur', 'Andhra Pradesh', 'India', '515812', 'Male', '7032838101', 'karthikyt713@gmail.com', 'Other', NULL, NULL),
(45, '2025-08-08 13:58:06', 'ashwinrgh@gmail.com', 'Ashwin', 'Raghu', '2003-03-10 00:00:00', '2021BCS0096', 'Tirur', 'Kerala', 'India', '676105', 'Female', '9072850862', '9072850862', 'Other', NULL, NULL),
(46, '2025-08-08 14:08:41', 'rohith21bec7@iiitkottayam.ac.in', 'Rohith George', 'Ninan', '2003-11-19 00:00:00', '2021BEC0007', 'Ernakulam', 'Kerala', 'India', '682017', 'Male', '8975655040', 'rohithgeorgeninan@gmail.com', 'Higher Education', 'RWTH Aachen', NULL),
(47, '2025-08-08 14:14:28', 'nallamari21bcs110@iiitkottayam.ac.in', 'Lohitaksha', 'Nallamari', '2003-09-15 00:00:00', '2021BCS0110', 'Kadiri', 'Andhra Pradesh', 'India', '515591', 'Male', '9491140679', 'lohi1734@gmail.com', 'Other', NULL, NULL),
(48, '2025-08-08 14:54:29', 'poreddy21bcs170@iiitkottayam.ac.in', 'Vamsi Krishna', 'Reddy', '2004-05-27 00:00:00', '2021BCS0170', 'Hyderabad', 'Telangana', 'Indian', '500049', 'Male', '7032098848', 'p.vamsikrisreddy@gmail.com', 'Employed', 'Software industry', 'NA'),
(49, '2025-08-08 15:57:34', 'midde21bcs169@iiitkottayam.ac.in', 'Vasu', 'Midde', '2003-11-11 00:00:00', '2021BCS0169', 'Palakol', 'Andhra Pradesh', 'India', '534327', 'Male', '8897142335', 'vmidde335@gmail.com', 'Higher Education', NULL, NULL),
(50, '2025-08-08 16:07:48', 'ramsamarth21bcs24@iiitkottayam.ac.in', 'Ram Samarth', 'B B', '2003-03-13 00:00:00', '2021BCS0024', 'Bengaluru', 'Karnataka', 'India', '560040', 'Male', '9353993309', 'achiverram28@gmail.com', 'Higher Education', 'Indian Institute of Sciece', NULL),
(51, '2025-08-08 16:10:49', 'atul21bec10@iiitkottayam.ac.in', 'Atul', 'Singh', '2003-08-26 00:00:00', '2021BEC0010', 'Gurgaon', 'Haryana', 'India', '122010', 'Male', '7906147827', 'atulsingh8262000@gmail.com', 'Employed', 'Shorthills AI', NULL),
(52, '2025-08-08 16:18:11', 'ujjwal21bcs59@iiitkottayam.ac.in', 'Ujjwal', 'Jain', '2002-06-14 00:00:00', '2021BCS0059', 'Kanpur', 'Uttar Pradesh', 'India', '208001', 'Male', '+917905008337', 'ujjwaljain.u40@gmail.com', 'Employed', 'Commvault', NULL),
(53, '2025-08-08 16:30:33', 'konduru21bcs93@iiitkottayam.ac.in', 'Karthik', 'Konduru', '2003-11-10 00:00:00', '2021BCS0093', 'Hyderabad', 'Telangana', 'India', '500035', 'Male', '7386630436', 'karthikkonduru3@gmail.com', 'Other', NULL, NULL),
(54, '2025-08-08 16:59:26', 'laxmi21bec24@iiitkottayam.ac.in', 'Laxmi Priya harshitha', 'Thamatapu', '2004-06-25 00:00:00', '2021BEC0024', 'Vizianagaram', 'Andhrapradesh', 'India', '535003', 'Female', '+91 8341740273', 'harshitha5054.25@gmail.com', 'Other', NULL, NULL),
(55, '2025-08-08 17:19:59', 'manam21bcs195@iiitkottayam.ac.in', 'MANAM', 'SASANK', '2003-09-12 00:00:00', '2021BCS0195', 'Hyderabad', 'Telangana', 'India', '500018', 'Male', '9182124006', 'sasankmanam@gmail.com', 'Higher Education', 'University of South Florida', 'No'),
(56, '2025-08-08 17:36:05', 'prateekjaiswalpj07@gmail.com', 'Prateek', 'Jaiswal', '2001-06-14 00:00:00', '2021BEC0041', 'Raipur', 'Chhattisgarh', 'India', '497331', 'Male', '9079625292', 'prateekjaiswalpj07@gmail.com', 'Employed', 'Spinny Capital Pvt Ltd', 'No'),
(57, '2025-08-08 18:02:45', 'mohit21bcs129@iiitkottayam.ac.in', 'Mohit', 'Gupta', '2002-11-01 00:00:00', '2021BCS0129', 'Jhansi', 'Uttar Pradesh', 'India', '284003', 'Male', '9648592202', 'guptamohit01112002@gmail.com', 'Employed', 'Shipsy', NULL),
(58, '2025-08-08 18:13:23', 'rahangdale21bec11@iiitkottayam.ac.in', 'Deep', 'Rahangdale', '2003-02-06 00:00:00', '2021BEC0011', 'Gondia', 'Maharashtra', 'India', '441614', 'Male', '9511683837', 'deeprahangdale2003@gmail.com', 'Employed', 'Palo Alto Networks', NULL),
(59, '2025-08-08 18:15:54', 'yallanki21bcs175@iiitkottayam.ac.in', 'Hazarathayya', 'Yallanki', '2002-12-05 00:00:00', '2021bcs0175', 'Nellore', 'Andhra Pradesh', 'India', '524002', 'Male', '6301367828', 'yallankihazarathayya@gmail.com', 'Employed', 'CDAC', NULL),
(60, '2025-08-08 20:44:23', 'amantigga402@gmail.com', 'Aman', 'Tigga', '2002-11-29 00:00:00', '2021bcs0072', 'Jashpur', 'Chhattisgarh', 'India', '496331', 'Male', '6263782036', 'amantigga402@gmail.com', 'Higher Education', NULL, NULL),
(61, '2025-08-08 21:04:24', 'barla21bec27@iiitkottayam.ac.in', 'Barla', 'Sowmya', '2003-06-24 00:00:00', '2021BEC0027', 'Hyderabad', 'Telangana', 'India', '507111', 'Female', '8977285349', 'sowmya.barla246@gmail.com', 'Other', NULL, 'No job... Low placements for ECE..'),
(62, '2025-08-08 23:23:24', 'venkatsai0609@gmail.com', 'Nenavath Venkat', 'Sai', '2003-09-06 00:00:00', '2021BCS0038', 'Wanaparthy', 'Telangana', 'India', '509130', 'Male', '9988330655', 'venkatsai0609@gmail.com', 'Other', NULL, NULL),
(63, '2025-08-09 11:38:31', 'zaid21bcs76@iiitkottayam.ac.in', 'Zaid', 'Khan', '2003-03-15 00:00:00', '2021BCS0076', 'Lucknow', 'Kerala', 'India', '226016', 'Male', '9956057739', 'zaidiiitk26@gmail.com', 'Employed', 'IBM India Pvt Ltd', NULL),
(64, '2025-08-09 11:57:32', 'ahnaf21bec1@iiitkottayam.ac.in', 'AHNAF', 'SANEEN', '2003-06-20 00:00:00', '2021BEC0001', 'KOZHIKODE', 'KERALA', 'INDIA', '673541', 'Male', '7994665834', 'ahnafsaneen@gmail.com', 'Other', 'OOREDOO QATAR', 'Nope'),
(65, '2025-08-09 13:04:46', 'arnav21bec19@iiitkottayam.ac.in', 'Arnav', 'Srivastava', '2002-03-25 00:00:00', '2021BEC0019', 'Ghaziabad', 'Uttar pradesh', 'India', '201005', 'Male', '8800892330', 'arnav.sri211@gmail.com', 'Employed', 'Tensorgo', NULL),
(66, '2025-08-09 17:31:20', 'aman21bcs116@iiitkottayam.ac.in', 'Aman', 'Singh', '2003-04-08 00:00:00', '2021BCS0116', 'KAIMUR (BHABUA)', 'Bihar', 'India', '821106', 'Male', '8887981515', 'amansinghbiuri@gmail.com', 'Employed', 'Metadome.ai', NULL),
(67, '2025-08-09 19:28:34', 'kancharla21bcs26@iiitkottayam.ac.in', 'Sathwik', 'Kancharla', '2003-12-07 00:00:00', '2021BCS0026', 'Guntur', 'Andhra Pradesh', 'India', '522004', 'Male', '9908778907', 'sathwik.kancharla2003@gmail.com', 'Other', NULL, NULL),
(68, '2025-08-10 08:39:43', 'jadhavbhuvansai@gmail.com', 'Bhuvan Sai', 'Jadhav', '2002-08-19 00:00:00', '2021BCS0153', 'Nirmal', 'Telangana', 'India', '504106', 'Male', '9676573781', 'jadhavbhuvansai@gmail.com', 'Employed', 'MAQ Software', NULL),
(69, '2025-08-10 19:30:53', 'gajjala21bcs155@iiitkottayam.ac.in', 'Gajjala Keerthi', 'Reddy', '2004-11-27 00:00:00', '2021BCS0155', 'pulivendula', 'Andhra Pradesh', 'India', '516390', 'Female', '8125637273', 'keerthireddygajjala272gmail.com', 'Employed', 'maq', NULL),
(70, '2025-08-10 20:22:27', 'lingutla21bcs43@iiitkottayam.ac.in', 'Lingutla', 'Pruthviraj', '2003-08-04 00:00:00', '2021BCS0043', 'Tadipatri', 'Andhra Pradesh', 'India', '515411', 'Male', '8074546856', 'pruthvirajlingutla@gmail.com', 'Higher Education', NULL, NULL),
(71, '2025-08-10 21:14:18', 'anurag21bcs85@iiitkottayam.ac.in', 'Anurag', 'Jha', '2003-09-01 00:00:00', '2021BCS0085', 'Kalyan', 'Maharashtra', 'India', '421306', 'Male', '8369724712', 'thisiaj193@gmail.com', 'Employed', 'Nvest Solutions', NULL),
(72, '2025-08-10 21:20:17', 'vishnu21bcs19@iiitkottayam.ac.in', 'Vishnu', 'Prasad', '2003-04-21 00:00:00', '2021BCS0019', 'Bengaluru', 'Karnataka', 'India', '586634', 'Male', '9431575153', 'vishnu210403@gmail.com', 'Employed', 'Aspora', NULL),
(73, '2025-08-11 09:43:08', 'satish21bec14@iiitkottayam.ac.in', 'S J Satish', 'Kumar', '2003-12-23 00:00:00', '2021BEC0014', 'Tirunelveli', 'Tamil Nadu', 'India', '627120', 'Male', '8148025850', 'sjsk23122003@gmail.com', 'Employed', 'CDAC Bangalore', NULL),
(74, '2025-08-11 12:04:54', 'biswadeepgiri48@gmail.com', 'Biswadeep', 'Giri', '2004-03-26 00:00:00', '2021bcs0151', 'Ghaziabad', 'Uttar Pradesh', 'India', '201014', 'Male', '8368636203', 'biswadeepgiri48@gmail.com', 'Employed', 'CDAC bangalore', NULL),
(75, '2025-08-11 12:10:53', 'boddapati21bcs146@iiitkottayam.ac.in', 'Krishna Sampath', 'Boddapati V', '2004-04-02 00:00:00', '2021BCS0146', 'Visakhapatnam', 'Andhra Pradesh', 'India', '530032', 'Male', '6302516598', 'bvks2134@gmail.com', 'Employed', 'Xpectrum AI', 'Please conduct convocation in 2025.'),
(76, '2025-08-11 18:08:04', 'kanamarlapudi21bec18@iiitkottayam.ac.in', 'Kanamarlapudi', 'Vishal', '2003-01-14 00:00:00', '2021BEC0018', 'Markapur', 'Andhra Pradesh', 'India', '523316', 'Male', '9398372264', 'Vishalengineer14@gmail.com', 'Other', 'NA', 'NA'),
(77, '2025-08-12 07:24:01', 'ramoji21bcs92@iiitkottayam.ac.in', 'RAMOJI', 'PRASHANTH', '2004-04-30 00:00:00', '2021BCS0092', 'NANDYALA', 'ANDHRA PRADESH', 'INDIA', '518511', 'Male', '9392374476', 'rprashanthramoji@gmail.com', 'Higher Education', 'ABV-IIIT GWALIOR', 'MS in AI-DS at IIIT gwalior'),
(78, '2025-08-12 10:42:46', 'singampalli21bcs68@iiitkottayam.ac.in', 'Prem Nagasai Raghava Ganesh', 'Singampalli', '2004-03-09 00:00:00', '2021BCS0068', 'Rajamundry', 'Andhra Pradesh', 'India', '533107', 'Male', '7013821558', 'premganesh321@gmail.com', 'Employed', NULL, NULL),
(79, '2025-08-12 10:55:27', 'yuvan21bcs199@iiitkottayam.ac.in', 'Yuvan Srikanth', 'E', '2002-07-17 00:00:00', '2021BCS0199', 'Kanchipuram', 'Tamil Nadu', 'India', '631501', 'Male', '7904138406', 'ela.yuvansrikanth@gmail.com', 'Employed', 'UST', NULL),
(80, '2025-08-12 17:36:03', 'vattikuti21bcs91@iiitkottayam.ac.in', 'Charan Sri Manikanta Sai', 'Vattikuti', '2004-05-15 00:00:00', '2021BCS0091', 'Vijayawada', 'Andhra Pradesh', 'India', '522501', 'Male', '7989789447', 'vcsmsai@gmail.com', 'Employed', 'Centre for Development of Advanced Computing (CDAC) Bangalore', NULL),
(81, '2025-08-13 20:13:20', 'rohit.chenna.007@gmail.com', 'Rohit', 'Chenna', '2004-05-17 00:00:00', '2021bcs0069', 'Warangal', 'Telangana', 'India', '506001', 'Male', '7331122408', 'rohit.chenna.007@gmail.com', 'Other', NULL, NULL),
(82, '2025-08-14 11:42:24', 'rohit.rn.008@gmail.com', 'Rohith', 'Rajesh Kumar Nair', '2003-06-12 00:00:00', '2021BCY0001', 'Thiruvalla', 'Kerala', 'India', '689541', 'Male', '8591819755', 'rohit.rn.008@gmail.com', 'Other', 'None', 'None'),
(83, '2025-08-15 17:52:35', 'korlepara21bcs45@iiitkottayam.ac.in', 'Korlepara', 'Sai Saranya', '2004-02-07 00:00:00', '2021BCS0045', 'Eluru', 'Andhra Pradesh', 'India', '534001', 'Female', '7901294777', 'saisaranyarao7@gmail.com', 'Higher Education', NULL, NULL),
(84, '2025-08-16 19:54:56', 'somkuwar21bcy46@iiitkottayam.ac.in', 'Hardik', 'Somkuwar', '2001-03-05 00:00:00', '2021BCY0046', 'Nagpur', 'Maharashtra', 'India', '440017', 'Male', '7057669985', 'h.somkuwar531@gmail.com', 'Employed', 'Ainocular', NULL),
(85, '2025-08-17 14:11:05', 'kunal21bcy35@gmail.com', 'Kunal', 'Rajour', '2002-11-23 00:00:00', '2021BCY0035', 'Aligarh', 'Uttar Pradesh', 'India', '202001', 'Male', '+91-9149354677', 'kunalrajour@gmail.com', 'Other', 'NA', 'NA'),
(86, '2025-08-17 14:44:30', 'abhinav21bcs78@iiitkottayam.ac.in', 'Abhinav', 'Anand', '2003-03-25 00:00:00', '2021BCS0078', 'Kochi', 'Kerala', 'India', '682030', 'Male', '8178502058', 'abanand7355@gmail.com', 'Employed', 'IBM', 'None.'),
(87, '2025-08-17 15:00:05', 'anirudhmyakam@gmail.com', 'Anirudh', 'Myakam', '2004-03-02 00:00:00', '2021BCS0139', 'Mancherial', 'Telangana', 'India', '504301', 'Male', '8897119003', 'anirudhmyakam@gmail.com', 'Employed', 'UST', NULL),
(88, '2025-08-17 17:49:38', 'gajjala21bcs10@iiitkottayam.ac.in', 'G Akshay', 'Reddy', '2003-05-16 00:00:00', '2021bcs0010', 'Noida', 'Uttarpradesh', 'India', '201301', 'Male', '9182622132', 'gajjalaakshayreddy@gmail.com', 'Employed', 'Maq software', NULL),
(89, '2025-08-17 23:36:21', 'perla21bcs187@iiitkottayam.ac.in', 'PERLA', 'UJWAL KUMAR', '2003-05-23 00:00:00', '2021BCS0187', 'Hanamkonda, warangal(urban)', 'Telengana', 'India', '506007', 'Male', '8688249089', 'ujwalkumarperla@gamil.com', 'Other', 'NA', NULL),
(90, '2025-08-20 22:51:38', 'dharmesh21bec5@iiitkottayam.ac.in', 'Dharmesh', 'Menaria', '2002-11-09 00:00:00', '2021BEC0005', 'Chittorgarh', 'Rajasthan', 'India', '312001', 'Male', '9602162210', 'dharmeshmenaria02@gmail.com', 'Employed', 'Nalashaa', NULL),
(91, '2025-08-23 11:03:26', 'pratyush21bcy27@iiitkottayam.ac.in', 'Pratyush', 'Kumar', '2001-05-15 00:00:00', '2021BCY0027', 'Sheohar', 'Bihar', 'India', '843329', 'Male', '7220800049', 'pratyushkr.iiit@gmail.com', 'Other', NULL, NULL),
(92, '2025-08-25 21:51:47', 'neeraj21bcs117@iiitkottayam.ac.in', 'Neeraj', 'Roy', '2003-05-07 00:00:00', '2021BCS0117', 'Kottayam', 'Kerala', 'India', '686575', 'Male', '9847747965', 'neerajroythomas@gmail.com', 'Other', 'Nil', 'Nil'),
(93, '2025-08-25 23:17:03', 'rishi21bcs16@iiitkottayam.ac.in', 'RISHI', 'ADHIKARI  G', '2002-12-28 00:00:00', '2021BCS0016', 'Madurai', 'Tamil Nadu', 'India', '625020', 'Male', '8438070961', 'rishiadhikarig@gmail.com', 'Higher Education', NULL, NULL),
(94, '2025-08-27 23:34:33', 'pvvr2003@gmail.com', 'vishnu vardhan reddy', 'palakolanu', '2003-11-08 00:00:00', '2021BCY0043', 'KADAPA', 'ANDHRA PRADESH', 'INDIA', '516217', 'Male', '9381593287', 'pvvr2003@gmail.com', 'Other', 'Govt', NULL),
(95, '2025-08-27 23:35:27', 'gorlebala21bcs193@iiitkottayam.ac.in', 'Gorle', 'Balasai', '2002-12-25 00:00:00', '2021BCS0193', 'Srikakulam', 'Andhrapradesh', 'India', '532407', 'Male', '8074996883', 'balasaigorle@gmail.com', 'Other', NULL, NULL),
(96, '2025-08-28 15:53:05', 'patil21bcs134@iiitkottayam.ac.in', 'Aditya', 'Patil', '2002-03-07 00:00:00', '2021bcs0134', 'Sangli', 'Maharashtra', 'India', '416416', 'Male', '7841817108', 'adityaspace01@gmail.com', 'Employed', 'IBM KOCHI', 'No'),
(97, '2025-08-28 15:54:19', 'abhishek21bcs36@iiitkottayam.ac.in', 'Abhishek', 'Harsh', '2002-10-03 00:00:00', '2021BCS0036', 'Hyderabad', 'TELANGANA', 'India', '500032', 'Male', '8573951132', 'abhishekharsh786@gmail.com', 'Employed', 'Youngsoft ind', NULL),
(98, '2025-08-28 15:54:41', 'richa21bcy2@iiitkottayam.ac.in', 'Richa', '..', '2003-06-04 00:00:00', '2021BCY0002', 'Patna', 'Bihar', 'India', '801503', 'Female', '91420 25368', 'richachoudhary462@gmail.com', 'Higher Education', NULL, NULL),
(99, '2025-08-28 15:55:41', 'komal21bcy38@iiitkottayam.ac.in', 'Komal Krishna', 'Shashank', '2003-06-30 00:00:00', '2021BCY0038', 'Hyderabad', 'Telengana', 'India', '500035', 'Male', '8688636113', 'komalkrishnashashank@gmail.com', 'Employed', 'MittArv', NULL),
(100, '2025-08-28 15:56:02', 'narayanasetti21bcy32@iiitkottayam.ac.in', 'Ajay Krishna', 'Narayanasetti', '2004-04-25 00:00:00', '2021BCY0032', 'Parvathipuram', 'Andhra Pradesh', 'India', '535501', 'Male', '8247340743', 'ajaykrishna9638@gmail.com', 'Employed', 'Bapon', 'NA'),
(101, '2025-08-28 15:56:54', 'vardhya21bcs123@iiitkottayam.ac.in', 'Aravind', 'Naik', '2003-11-01 00:00:00', '2021BCS0123', 'WANAPARTHY', 'Telangana', 'India', '509110', 'Male', '9652190773', 'aravindnaik1697@gmail.com', 'Employed', NULL, NULL),
(102, '2025-08-28 15:57:41', 'sukrit21bcs162@iiitkottayam.ac.in', 'Sukrit', 'Garg', '2003-01-20 00:00:00', '2021bcs0162', 'Kurukshetra', 'Haryana', 'India', '136118', 'Male', '9729725120', 'gargsukrit24@gmail.com', 'Employed', 'Shipsy', NULL),
(103, '2025-08-28 15:58:12', 'shivendra21bcs66@iiitkottayam.ac.in', 'Shivendra', 'Pratap Singh', '2000-11-19 00:00:00', '2021bcs0066', 'Gorakhpur', 'Uttar pradesh', 'India', '273002', 'Male', '9519179694', 'shivendra19112000@gmail.com', 'Employed', 'Techolution', NULL),
(104, '2025-08-28 15:58:48', 'gandhi21bcs40@iiitkottayam.ac.in', 'Deep', 'Gandhi', '2003-05-25 00:00:00', '2021BCS0040', 'Surat', 'Gujarat', 'India', '395007', 'Male', '7069060350', 'dbg.deepgandhi@gmail.com', 'Other', NULL, NULL),
(105, '2025-08-28 15:58:56', 'ganeshnathan06@gmail.com', 'Ganesh', 'Nathan', '2003-06-30 00:00:00', '2021bcs0104', 'Bangalore', 'Karnataka', 'India', '560077', 'Male', '7022412218', 'ganeshnathan06@gmail.com', 'Employed', 'HPE', NULL),
(106, '2025-08-28 16:01:21', 'sudarshan21bcy11@iiitkottayam.ac.in', 'Sudarshan', 'Kharade', '2003-12-29 00:00:00', '2021BCY0011', 'Pune', 'Maharashtra', 'India', '411027', 'Male', '9309780230', 'sudarshankharade2003@gmail.com', 'Employed', 'Techolution', NULL),
(107, '2025-08-28 16:06:00', 'penta21bcy21@iiitkottayam.ac.in', 'Penta', 'Bhuvan', '2004-07-02 00:00:00', '2021BCY0021', 'Vizianagaram', 'Andhra Pradesh', 'India', '535214', 'Male', '9347940381', 'pbhuvan99@gmail.com', 'Employed', NULL, NULL),
(108, '2025-08-28 16:10:56', 'munavath21bcs183@iiitkottayam.ac.in', 'Aravind Naik', 'Munavath', '2003-12-27 00:00:00', '2021bcs0183', 'Warangal', 'Telangana', 'India', '506313', 'Male', '09550040937', 'munavatharavind1927@gmail.com', 'Other', 'Na', 'Na'),
(109, '2025-08-28 16:11:53', 'bandaru21bcs186@iiitkottayam.ac.in', 'Tarun Venkata Sai', 'Bandaru', '2004-01-16 00:00:00', '2021bcs0186', 'Amalapuram', 'Andhra Pradesh', 'India', '533223', 'Male', '8121128375', 'tarun.bandaru16@gmail.com', 'Other', NULL, NULL),
(110, '2025-08-28 16:17:48', 'pakki21bcs160@iiitkottayam.ac.in', 'Pakki', 'Venkata Sai ammaji rao patnaik', '2004-04-03 00:00:00', '2021BCS0160', 'Srikakulam', 'Andhra Pradesh', 'India', '532001', 'Male', '9550642058', 'vsai88444@gmail.com', 'Employed', 'Xpectrum.ai', NULL),
(111, '2025-08-28 16:18:44', 'ponnada21bcy23@iiitkottayam.ac.in', 'Ponnada', 'Sai Surya', '2003-11-10 00:00:00', '2021BCY0023', 'Hyderabad', 'Telangana', 'India', '500004', 'Male', '9080573261', 'ponnadasaisurya0@gmail.com', 'Higher Education', 'None', 'None'),
(112, '2025-08-28 16:19:46', 'sarthak21bcy24@iiitkottayam.ac.in', 'Sarthak', 'Bokade', '2003-01-04 00:00:00', '2021BCY0024', 'Nagpur', 'Maharashtra', 'India', '440027', 'Male', '9717170479', 'sarthakbokade413@gmail.com', 'Other', NULL, NULL),
(113, '2025-08-28 16:19:50', 'vikyath21bcs166@gmail.com', 'Vikyath', 'Talari', '2003-10-20 00:00:00', '2021bcs0166', 'Gudivada', 'Andhra pradesh', 'India', '521301', 'Male', '8367755479', 'vikyathabhiram@gmail.com', 'Other', NULL, NULL),
(114, '2025-08-28 16:31:31', 'adarsh21bcs128@iiitkottayam.ac.in', 'Adarsh Singh', 'Parihar', '2003-06-26 00:00:00', '2021BCS0128', 'Satna', 'Madhya Pradesh', 'India', '485446', 'Male', '7354033286', 'adarshparihar2626@gmail.com', 'Employed', NULL, NULL),
(115, '2025-08-28 16:56:44', 'seth21bcy41@iiitkottayam.ac.in', 'Seth', 'Randive', '2003-09-26 00:00:00', '2021BCY0041', 'Banglore', 'Gujarat', 'India', '395003', 'Male', '9426179783', 'sethrandive26@gmail.com', 'Employed', 'Hyperface', NULL),
(116, '2025-08-28 17:00:04', 'bairi21bcs50@iiitkottayam.ac.in', 'Raju', 'Bairi', '2002-07-01 00:00:00', '2021BCS0050', 'Warangal', 'Telangana', 'India', '506370', 'Male', '8179443848', 'rajubairi02@gmail.com', 'Other', 'N/A', NULL),
(117, '2025-08-28 17:05:32', 'harshguptag467@gmail.com', 'Harsh', 'Gupta', '2025-01-06 00:00:00', '2021BEC043', 'Jashpur', 'Chhattisgarh', 'India', '496330', 'Male', '6262108551', 'harshguptag467@gmail.com', 'Employed', 'Siemens', 'No'),
(118, '2025-08-28 17:07:31', 'hemasaketh18@gmail.com', 'Hemasaketh', 'Veluri', '2004-01-18 00:00:00', '2021bcs0196', 'Bangalore', 'Karnataka', 'India', '560068', 'Male', '9392608773', 'hemasaketh18@gmail.com', 'Employed', 'MIHUP', NULL),
(119, '2025-08-28 17:11:29', 'ganesh21bcy10@iiitkottayam.ac.in', 'Ganesh', 'Patil', '2003-06-16 00:00:00', '2021BCY0010', 'Aurangabad', 'Maharashtra', 'India', '431001', 'Male', '7507406818', 'ganeshavp2003@gmail.com', 'Employed', 'Fluence', NULL),
(120, '2025-08-28 17:12:55', 'yogesh21bcy34@iiitkottayam.ac.in', 'Yogesh', 'Jhanwar', '2002-05-28 00:00:00', '2021BCY0034', 'Surat', 'Gujarat', 'India', '395007', 'Male', '7043848144', 'yogeshjhanwar.yj@gmail.com', 'Employed', 'Physicswallah', NULL),
(121, '2025-08-28 17:13:41', 'rajvardhan21bcs114@iiitkottayam.ac.in', 'Rajvardhan', 'Das', '2004-03-20 00:00:00', '2021bcs0114', 'Bengaluru', 'Karnataka', 'India', '560068', 'Male', '8850797559', 'rajvardhandas@outlook.com', 'Employed', 'CIMB AI LABS', NULL),
(122, '2025-08-28 17:15:32', 'polu21bcy20@iiitkottayam.ac.in', 'Vivekananda', 'Polu', '2003-10-11 00:00:00', '2021BCY0020', 'Guntur', 'Andhra Pradesh', 'India', '522006', 'Male', '7382717271', 'poluvivekananda618@gmail.com', 'Other', NULL, NULL),
(123, '2025-08-28 17:16:06', 'piyush21bec23@iiitkottayam.ac.in', 'Piyush', 'Piyush', '2001-11-14 00:00:00', '2021BEC0023', 'Gaya', 'Bihar', 'India', '823001', 'Male', '9060848426', 'piyush.official1416@gmail.com', 'Employed', 'Cekura.ai', NULL),
(124, '2025-08-28 17:16:13', 'aswin21bcy5@iiitkottayam.ac.in', 'Aswin', 'Nair', '2001-12-18 00:00:00', '2021BCY0005', 'Pathanamthitta', 'Kerala', 'India', '689582', 'Male', '8058250943', 'aswin.1812.nair@gmail.com', 'Employed', 'MAFIL', NULL),
(125, '2025-08-28 17:45:02', 'shelke21bcs126@iiitkottayam.ac.in', 'Shailesh', 'Shelke', '2003-09-13 00:00:00', '2021BCS0126', 'Bengaluru', 'Karnataka', 'India', '560048', 'Male', '9975150201', 'shelkeshailesh888@gmail.com', 'Employed', NULL, NULL),
(126, '2025-08-28 18:01:47', 'vyom21bcs97@iiitkottayam.ac.in', 'Vyom', 'Pawar', '2002-12-18 00:00:00', '2021bcs0097', 'Khetia', 'Madhya', 'Madhya Pradesh', '451881', 'Male', '6261164381', 'Vyompawar36@gmail.com', 'Other', 'Non', 'No'),
(127, '2025-08-28 18:33:47', 'tanuj21bcy18@iiitkottayam.ac.in', 'Tanuj Karteek', 'Allena', '2003-11-01 00:00:00', '2021BCS0018', 'Ahmedabad', 'Gujarat', 'India', '382424', 'Male', '9023981048', 'tanujkarteekallena@gmail.com', 'Employed', 'Elixir Club', NULL),
(128, '2025-08-28 18:37:08', 'parupudi21bcy4@iiitkottayam.ac.in', 'Suhash', 'Parupudi', '2004-01-27 00:00:00', '2021BCY0004', 'Vijayawada', 'Andhra Pradesh', 'India', '521225', 'Male', '08247231053', 'suhashparupudi@gmail.com', 'Other', NULL, NULL),
(129, '2025-08-28 19:05:23', 'mahesh21bcs121@iiitkottayam.ac.in', 'Mahesh', 'M', '2003-11-17 00:00:00', '2021BCS0121', 'Anantapur', 'Andhrapradesh', 'India', '515801', 'Male', '9110574478', 'maheshbcs0121@gmail.com', 'Employed', 'Airspan', NULL),
(130, '2025-08-28 19:11:02', 'zende21bcy33@iiitkottayam.ac.in', 'Akhilesh', 'Zende', '2002-07-25 00:00:00', '2021BCY0033', 'Solapur', 'Maharashtra', 'India', '413109', 'Male', '8181050575', 'akhileshzende11@gmail.com', 'Higher Education', 'SVNIT, Surat', NULL),
(131, '2025-08-28 19:29:45', 'boyina21bcs88@iiitkottayam.ac.in', 'Nithin', 'Boyina', '2004-06-27 00:00:00', '2021bcs0088', 'Srikakulam', 'Andhra Pradesh', 'India', '532421', 'Male', '7842468079', 'boyinanithin9@gmail.com', 'Higher Education', NULL, NULL),
(132, '2025-08-28 20:32:21', 'harish21bcy15@iiitkottayam.ac.in', 'Harish', 'Seshathiri', '2003-11-15 00:00:00', '2021BCY0015', 'Hosur', 'Tamil nadu', 'India', '635110', 'Male', '9003690676', 'harish.seshathiri@gmail.com', 'Employed', 'M2P Fintech', 'NIL'),
(133, '2025-08-28 20:56:20', 'adusumilli21bec15@iiitkottayam.ac.in', 'Laahiri', 'Adusumilli', '2003-03-07 00:00:00', '2021BEC0015', 'Hyderabad', 'Telangana', 'India', '500085', 'Female', '9515714380', 'laahiri.adusumilli7@gmail.com', 'Other', NULL, NULL),
(134, '2025-08-28 21:49:37', 'neha21bcs7@iiitkottayam.ac.in', 'Neha', 'Rajesh', '2003-04-06 00:00:00', '2021BCS0007', 'Kannur', 'Kerala', 'India', '670561', 'Female', '9746931472', 'neharajesh2003@gmail.com', 'Employed', 'Shipsy', NULL),
(135, '2025-08-28 22:11:39', 'kavala21bcs47@iiitkottayam.ac.in', 'Hari Meghana', 'Kavala', '2003-08-16 00:00:00', '2021BCS0047', 'Ramachandrapuram', 'Andhra Pradesh', 'India', '533255', 'Female', '9492953727', 'harimeghanakavala@gmail.com', 'Employed', 'SecureThings.AI Pvt. Ltd.', NULL),
(136, '2025-08-28 22:13:45', 'abhinav21bcy8@iiitkottayam.ac.in', 'Abhinav', 'Yadav', '2001-11-05 00:00:00', '2021BCY0008', 'Lucknow', 'Uttar Pradesh', 'India', '226029', 'Male', '8417808786', 'cyabhinavyadav1@gmail.com', 'Employed', 'Airspan Networks', NULL),
(137, '2025-08-28 22:16:49', 'kusumaraju21bcs135@iiitkottayam.ac.in', 'Sai Harvin', 'Kusumaraju', '2003-08-10 00:00:00', '2021BCS0135', 'Khammmam', 'Telangana', 'India', '507002', 'Male', '9100581703', 'saiharvin99@gmail.com', 'Higher Education', 'University of Georgia', NULL),
(138, '2025-08-29 00:52:57', 'saketh2021mallojjala@gmail.com', 'Saketh', 'Mallojjala', '2003-08-30 00:00:00', '2021bcs0125', 'Hyderabad', 'Telangana', 'India', '505152', 'Male', '6301338144', 'saketh2021mallojjala@gmail.com', 'Employed', 'Vantedgeai', 'Very much happy to be called as the Alumni of IIIT Kottayam.\nMemories to cherish lifelong......'),
(139, '2025-08-29 01:22:07', 'yamana21bcs94@iiitkottayam.ac.in', 'Vijaya Vardhan', 'Yamana', '2004-06-05 00:00:00', '2021BCS0094', 'Srikakulam', 'Andhra Pradesh', 'India', '532001', 'Male', '6281849587', 'vijayavardhany@gmail.com', 'Employed', 'Xpectrum-ai', NULL),
(140, '2025-08-29 06:05:16', 'johnpaulgummapu12@gmail.com', 'John', 'Paul', '2004-08-09 00:00:00', '2021BCS0035', 'Guntur', 'Andhra Pradesh', 'India', '522034', 'Male', '7995300959', 'johnpaulgummapu12@gmail.com', 'Employed', 've.ai', NULL),
(141, '2025-08-29 10:08:56', 'kartheekvalluri@gmail.com', 'Kartheek', 'Valluri', '2003-12-19 00:00:00', '2021bcs0115', 'Rajahmundry', 'Andhra Pradesh', 'India', '533125', 'Male', '8125465543', 'kartheekvalluri@gmail.com', 'Other', NULL, NULL),
(142, '2025-08-29 10:24:30', 'aditya21bcy42@iiitkottayam.ac.in', 'Aditya Kumar', 'Raushan', '2003-12-13 00:00:00', '2021BCY0042', 'Samastipur', 'Bihar', 'India', '848114', 'Male', '7070969313', 'adityaraushaniiit@gmail.com', 'Employed', 'UST global', 'Can you share the approximate month in which convocation would be conducted.\nHow many family members are allowed to come in convocation.'),
(143, '2025-08-29 12:51:02', 'dishantyadav10s@gmail.com', 'Dishant Kumar', 'Yadav', '2001-09-05 00:00:00', '2021BCS0136', 'New Delhi', 'Delhi', 'India', '110074', 'Male', '8683014674', 'dishantyadav10s@gmail.com', 'Employed', 'Micro1', NULL),
(144, '2025-08-29 13:57:03', 'sadineni21bcs98@iiitkottayam.ac.in', 'Sadineni', 'Hemanth', '2004-06-15 00:00:00', '2021bcs0098', 'Hyderabad', 'Telangana', 'India', '500055', 'Male', '7842466877', 'hemanthsadineni333@gmail.com', 'Employed', 'UST Global', NULL),
(145, '2025-08-29 13:59:18', 'banoth21bcs63@iiitkottayam.ac.in', 'Dinesh', 'Banoth', '2003-06-08 00:00:00', '2021bcs0063', 'Hyderabad', 'Telangana', 'India', '507122', 'Male', '7013239341', 'banothdinesh4@gmail.com', 'Employed', 'Torkehub', NULL),
(146, '2025-08-29 14:08:38', 'keerthana21bcs67@iiitkottayam.ac.in', 'Keerthana', 'Menon', '2002-06-21 00:00:00', '2021BCS0067', 'Thrissur', 'Kerala', 'India', '680026', 'Female', '8451875575', 'keerthana.menon21@gmail.com', 'Higher Education', 'Delft University of Technology, The Netherlands', NULL),
(147, '2025-08-29 16:57:28', 'aryan21bcy13@iiitkottayam.ac.in', 'Aryan', 'Kashyap', '2002-02-22 00:00:00', '2021BCY0013', 'Muzaffarpur', 'Bihar', 'India', '842001', 'Male', '7991160637', 'aryan.ksh07@gmail.com', 'Employed', 'Xcdify Solutions Pvt Ltd', NULL),
(148, '2025-08-29 20:23:39', 'abhishek21bcs161@iiitkottayam.ac.in', 'Abhishek', 'Kumar', '2003-05-04 00:00:00', '2021bcs0161', 'Hajipur', 'Bihar', 'India', '844102', 'Male', '8114528130', 'abhishekiiitk25@gmail.com', 'Other', NULL, NULL),
(149, '2025-08-29 20:46:52', 'datla21bcs11@iiitkottayam.ac.in', 'DATLA', 'CLINTON', '2003-11-24 00:00:00', '2021BCS0011', 'Kadapa', 'Andhra Pradesh', 'India', '516002', 'Male', '8978624467', 'datlaclinton123@gmail.com', 'Other', NULL, NULL),
(150, '2025-08-29 20:52:56', 'pushpender21bcs30@iiitkottayam.ac.in', 'Pushpender', 'Singh', '2002-08-31 00:00:00', '2021bcs0030', 'Jaisalmer', 'Rajasthan', 'India', '345022', 'Male', '8302969528', 'pushpender3108@gmail.com', 'Employed', 'Infosys', NULL),
(151, '2025-08-30 01:39:15', 'kvchakradhar74@gmail.com', 'K V', 'Chakradhar', '2004-04-02 00:00:00', '2021BCY0039', 'Tirupati', 'Andhra Pradesh', 'Indian', '517643', 'Male', '9390046676', 'kvchakradhar74@gmail.com', 'Other', 'NA', NULL),
(152, '2025-08-30 08:10:19', 'soham18082003@gmail.com', 'Soham', '.', '2003-08-18 00:00:00', '2021BCS0156', 'Kurukshetra', 'Haryana', 'India', '136118', 'Male', '7355887833', 'soham18082003@gmail.com', 'Employed', 'Tcs Research', NULL),
(153, '2025-08-30 10:31:37', 'kaushikpranav2018@gmail.com', 'Kaushik', 'Reddy', '2003-07-28 00:00:00', '2021BCS0032', 'Vadodara', 'Gujarat', 'India', '390024', 'Male', '9427353403', 'kaushikpranav2018@gmail.com', 'Employed', 'TCS Research and Innovation', NULL),
(154, '2025-08-30 11:36:15', 'suhanighosh2003@gmail.com', 'Suhani', 'Ghosh', '2003-09-15 00:00:00', '2021BEC0025', 'Bangalore', 'Karnataka', 'India', '560017', 'Female', '6290115914', 'suhanighosh2003@gmail.com', 'Employed', NULL, NULL),
(155, '2025-08-30 13:37:34', 'kratik21bcs71@iiitkottayam.ac.in', 'Kratik', 'Bohra', '2003-01-16 00:00:00', '2021BCS0071', 'Mumbai', 'Maharashtra', 'India', '401107', 'Male', '7718879909', 'kratikbohra5@gmail.com', 'Employed', 'C-DAC', NULL),
(156, '2025-08-30 16:32:42', 'logesh21bcs190@iiitkottayam.ac.in', 'Logesh', 'R', '2004-03-24 00:00:00', '2021BCS0190', 'Salem', 'Tamilnadu', 'India', '636118', 'Male', '8220815255', 'logesh822081@gmail.com', 'Employed', 'Yellow Owl Publishers', NULL),
(157, '2025-08-30 20:46:42', 'rohan21bcs15@iiitkottayam.ac.in', 'Rohan', 'Gudimetla', '2003-10-07 00:00:00', '2021BCS0015', 'Hyderabad', 'Telangana', 'India', '500081', 'Male', '8639458330', 'rohan.gudimetla07@gmail.com', 'Employed', 'ZL TECH', 'None'),
(158, '2025-08-30 22:59:29', 'settipalle21bcs163@iiitkottayam.ac.in', 'vamsi', 'Teja', '2004-06-03 00:00:00', '2021bcsp163', 'JAMMALAMADUGU', 'Andhra Pradesh', 'india', '516411', 'Male', '06300154670', 'vamsiteja191017787@gmail.com', 'Other', NULL, NULL),
(159, '2025-08-30 23:23:27', 'yash21bcy19@iiitkottayam.ac.in', 'Yash', 'Singh', '2003-03-21 00:00:00', '2021BCY0019', 'SHAKTINAGAR, SONBHADRA', 'Uttar Pradesh', 'India', '231222', 'Male', '8957859911', 'singhyash2103@gmail.com', 'Employed', NULL, NULL),
(160, '2025-09-01 11:40:38', 'rajporadwar@gmail.com', 'Niraj', 'Poradwar', '2002-07-26 00:00:00', '2021BCS0064', 'Nanded', 'Maharashtra', 'India', '431605', 'Male', '9356805221', 'rajporadwar@gmail.com', 'Other', 'None', NULL),
(161, '2025-09-01 20:17:47', 'vedant21bcs109@iiitkottayam.ac.in', 'Vedant', 'Narwade', '2003-02-12 00:00:00', '2021BCS0109', 'Dongaon', 'Maharastra', 'India', '443303', 'Male', '7387440715', 'vedantnarwade121@gmail.com', 'Employed', 'aivi.in', NULL),
(162, '2025-09-02 23:41:32', 'vigneshjan03@gmail.com', 'Vignesh', 'Aravindh T', '2004-01-03 00:00:00', '2021BCS0140', 'Tenkasi', 'Tamilnadu', 'India', '627813', 'Male', '7010085823', 'Vigneshjan03@gmail.com', 'Other', NULL, NULL),
(163, '2025-09-02 23:52:10', 'kushagra21bcs105@iiitkottayam.ac.in', 'Kushagra', 'Sagar', '2002-03-25 00:00:00', '2021BCS0105', 'Bengaluru', 'Karnataka', 'India', '560048', 'Male', '7518678290', 'kushagrasagar4@gmail.com', 'Employed', 'aivi.in', NULL),
(164, '2025-09-03 09:04:41', 'jovin21bcs27@iiitkottayam.ac.in', 'Jovin', 'P Saju', '2002-10-30 00:00:00', '2021BCS0027', 'Ernakulam', 'Kerala', 'India', '682309', 'Male', '7306893833', 'jovinpsaju2002@gmail.com', 'Employed', 'Manappuram Finance Limited', 'None'),
(165, '2025-09-03 23:12:55', 'talakanti21bcs46@iiitkottayam.ac.in', 'Talakanti Sravan Kumar', 'Reddy', '2003-08-30 00:00:00', '2021BCS0046', 'Hyderabad', 'Telangana', 'India', '500068', 'Male', '7032798401', 'talakantisravankumarreddy@gmail.com', 'Employed', 'Viasat India pvt ltd', 'No'),
(166, '2025-09-06 11:33:01', 'priyanshichaturvedi88@gmail.com', 'Priyanshi', 'Chaturvedi', '2004-12-12 00:00:00', '2021BCY0030', 'Ambedkar Nagar', 'Uttar Pradesh', 'India', '224149', 'Female', '9559153866', 'priyanshichaturvedi88@gmail.com', 'Employed', NULL, NULL),
(167, '2025-09-08 18:12:59', 'kishan21bcs192@iiitkottayam.ac.in', 'Kishan', 'Gurumurthy', '2003-02-11 00:00:00', '2021BCS0192', 'Bengaluru', 'Karnataka', 'India', '560075', 'Male', '8792144004', 'kishangurumurthy@gmail.com', 'Employed', 'TIFIN', 'Enjoyed my college days. Thank you :)'),
(168, '2025-09-09 11:52:57', 'puja21bcs198@iiitkottayam.ac.in', 'Puja', 'Perumal', '2004-10-13 00:00:00', '2021bcs0198', 'Chittoor', 'Andhra Pradesh', 'India', '517004', 'Female', '9346366352', 'pujaperumal198@gmail.com', 'Employed', 'Securethings', 'NA'),
(169, '2025-10-09 15:33:20', 'karan21bcs108@iiitkottayam.ac.in', 'Karan', 'Karan', '2002-08-23 00:00:00', '2021BCS0108', 'Bengaluru', 'Karanataka', 'India', '560035', 'Male', '8949738883', 'karanrojaria@gmail.com', 'Employed', 'Secure Things', 'No'),
(170, '2025-10-09 15:39:29', 'banoth21bcy45@iiitkottayam.ac.in', 'Banoth', 'Vighnesh', '2003-08-12 00:00:00', '2021BCY0045', 'Hyderabad', 'Telangana', 'India', '501301', 'Male', '9381195457', 'vighnesh1283@gmail.com', 'Other', 'Nah', 'Nah'),
(171, '2025-10-09 15:40:00', 'harjotpal21bcs157@iiitkottayam.ac.in', 'Harjotpal', 'Singh', '2001-05-04 00:00:00', '2021bcs0157', 'Muktsar', 'Punjab', 'India', '152032', 'Male', '7888700332', 'harjotbrar490@gmail.com', 'Employed', 'CIMB AI LABS', 'No'),
(172, '2025-10-09 15:48:28', 'madala21bcs60@iiitkottayam.ac.in', 'Venkata Rahul Babu', 'Madala', '2003-12-10 00:00:00', '2021BCS0060', 'Ongole', 'Andhra Pradesh', 'India', '523226', 'Male', '8639622272', 'madalavrahulbabu0209@gmail.com', 'Employed', NULL, NULL),
(173, '2025-10-09 15:49:20', 'sourik21bcs8@iiitkottayam.ac.in', 'Sourik', 'Mondal', '2003-05-19 00:00:00', '2021BCS0008', 'Kolkata', 'West Bengal', 'India', '700124', 'Male', '9163379641', 'sourik.mondal19@gmail.com', 'Employed', NULL, NULL),
(174, '2025-10-09 15:55:19', 'guguloth21bcs184@iiitkottayam.ac.in', 'GUGULOTHU', 'Praveen', '2003-07-03 00:00:00', '2021bcs0184', 'Hyderabad', 'Telangana', 'India', '506315', 'Male', '7995728712', 'Praveennaik7995@gmail.com', 'Other', NULL, NULL),
(175, '2025-10-09 16:05:01', 'chsasi12309@gmail.com', 'Chimmili', 'Sasi Kiran', '2004-06-11 00:00:00', '2021bcs0061', 'Nellore', 'Andhra Pradesh', 'India', '524201', 'Male', '9182269893', 'chsasi12309@gmail.com', 'Employed', 'Nalashaa Solutions', NULL),
(176, '2025-10-09 18:03:42', 'dondapati21bcs164@iiitkottayam.ac.in', 'Rakshith', 'Dondapati', '2004-03-17 00:00:00', '2021BCS0164', 'Khammam', 'Telangana', 'India', '507002', 'Male', '7981325861', 'rakshithdondapati179@gmail.com', 'Employed', 'IBM', NULL),
(177, '2025-10-09 18:10:08', 'tushaar21bcs147@iiitkottayam.ac.in', 'Tushaar', '.', '2002-09-05 00:00:00', '2021BCS0147', 'Faridabad', 'Haryana', 'India', '121013', 'Male', '9560184875', 'tushaar.sharma05@gmail.com', 'Employed', NULL, NULL),
(178, '2025-10-09 18:15:23', 'fedricmat16@gmail.com', 'Fedric', 'Savio', '2003-12-19 00:00:00', '2021BCS0174', 'Thrissur', 'Kerala', 'India', '680702', 'Male', '6282399837', 'fedricmat16@gmail.com', 'Employed', 'Manappuram finance', 'Nil'),
(179, '2025-10-09 18:23:40', 'harshvardhan5673@gmail.com', 'Harsh Vardhan', 'Singh', '2003-10-26 00:00:00', '2021BCY0028', 'Kanpur', 'Uttar pradesh', 'India', '208012', 'Male', '9555526045', 'harshvardhan5673@gmail.com', 'Employed', 'Cdac', 'Refund the mess advance asap'),
(180, '2025-10-09 18:41:41', 'mohammed21bcs177@iiitkottayam.ac.in', 'Mohammed', 'Raziq V', '2000-09-21 00:00:00', '2021bcs0177', 'Malappuram', 'Kerala', 'India', '676507', 'Male', '7012098944', 'raziqvengasseri.177@gmail.com', 'Employed', 'Covalense global', NULL),
(181, '2025-10-09 19:07:30', 'ankit21bcy7@iiitkottayam.ac.in', 'Ankit', 'Raj', '2002-08-22 00:00:00', '2021BCY0007', 'Kochi', 'Kerala', 'India', '682030', 'Male', '7488422761', '1217ankitraj@gmail.com', 'Employed', 'IBM KOCHI', 'None'),
(182, '2025-10-09 19:19:34', 'abhishek21bcs141@iiitkottayam.ac.in', 'Abhishek', 'raj', '2004-03-01 00:00:00', '2021bcs0141', 'patna', 'bihar', 'india', '801503', 'Male', '6299315090', 'rajabhishek439@gmail.com', 'Other', 'TCS', NULL),
(183, '2025-10-09 20:05:56', 'adabala21bcs118@iiitkottayam.ac.in', 'Bhanu shankar', 'ADABALA', '2004-10-11 00:00:00', '2021bcs0118', 'Tanuku', 'Ap', 'India', '534328', 'Male', '07382713385', 'bhanuadabala999@gmail.com', 'Other', NULL, NULL),
(184, '2025-10-09 22:01:07', 'yashwantrao21bcs25@iiitkottayam.ac.in', 'Yashwant', 'Sheshkar', '2001-09-24 00:00:00', '2021BCS0025', 'Betul', 'Madhya pradesh', 'India', '460001', 'Male', '7000979208', 'yashwantsheshkar249@gmail.com', 'Employed', 'Brick & Bolt', NULL),
(185, '2025-10-09 22:07:25', 'georgevjr03@gmail.com', 'George', 'Kaimoottil', '2003-07-20 00:00:00', '2021BCS0001', 'Kottayam', 'Kerala', 'India', '690101', 'Male', '9526382514', 'georgevjr03@gmail.9’', 'Employed', NULL, NULL),
(186, '2025-10-10 08:06:33', 'thomas21bec31@iiitkottayam.ac.in', 'Thomas M', 'Plathottam', '2002-10-10 00:00:00', '2021bec0031', 'Pala', 'Kerala', 'India', '686574', 'Male', '9778725618', 'thomasmanoj937@gmail.com', 'Employed', 'Mannapuram finance', 'Hi'),
(187, '2025-10-10 14:27:52', 'ganta21bcs127@iiitkottayam.ac.in', 'Meghana', 'Ganta', '2004-03-05 00:00:00', '2021BCS0127', 'Hyderabad', 'Telangana', 'India', '500103', 'Female', '7337486735', 'meghanag5304@gmail.com', 'Other', NULL, NULL),
(188, '2025-10-10 17:20:00', 'jerinthomascarmel@gmail.com', 'Jerin', 'Thomas', '2003-09-16 00:00:00', '2021BCS0031', 'Kollam', 'Kerala', 'India', '691509', 'Male', '8921129391', 'jerinthomascarmel@gmail.com', 'Other', NULL, NULL),
(189, '2025-10-10 19:00:39', 'vasi21bcs22@iiitkottayam.ac.in', 'Usha Sree', 'Vasi', '2004-01-04 00:00:00', '2021BCS0022', 'tadipatri', 'Andhra Pradesh', 'India', '515411', 'Female', '6302052410', 'vasiushasree@gmail.com', 'Employed', 'Startup company', 'Na'),
(190, '2025-10-10 19:10:24', 'steffi21bcs80@iiitkottayam.ac.in', 'Steffi Wilson', 'Anthony', '2004-02-17 00:00:00', '2021BCS0080', 'Hyderabad', 'Telangana', 'India', '500010', 'Female', '8688181336', 'steffiwilsonanthony@gmail.com', 'Employed', 'IBM', NULL),
(191, '2025-10-10 23:11:41', 'gaurav21bcy12@iiitkottayam.ac.in', 'Gaurav', 'Tiwari', '2002-09-28 00:00:00', '2021bcy0012', 'Jaipur', 'Rajasthan', 'India', '302017', 'Male', '6376013956', 'gauravtiwari282001@gmail.com', 'Employed', 'Ibm', 'For God sake make a culture which supports students to be a better developer and remove useless faculty'),
(192, '2025-10-11 11:33:35', 'psaisathvik612@gmail.com', 'Sai', 'Sathvik', '2003-12-06 00:00:00', '2021BCS0081', 'Nallacheruvu', 'Andhra Pradesh', 'India', '515551', 'Male', '8125870586', 'psaisathvik612@gmail.com', 'Employed', NULL, NULL),
(193, '2025-10-11 18:19:08', 'samhitha21bcy9@iiitkottayam.ac.in', 'Samhitha', 'Bharthulwar', '2002-09-07 00:00:00', '2021BCY0009', 'Bengaluru', 'Karnataka', 'India', '560043', 'Female', '9483484525', 'samhithabharthulwar@gmail.com', 'Employed', 'Shipsy', NULL),
(194, '2025-10-11 22:03:24', 'madara21bcy17@iiitkottayam.ac.in', 'Manoj', 'Madara', '2003-05-06 00:00:00', '2021BCY0017', 'Nandyal', 'Andhra Pradesh', 'India', '518134', 'Male', '7093372948', 'manojmadara2003@gmail.com', 'Higher Education', NULL, NULL),
(195, '2025-10-12 18:15:51', 'galeti21bec30@iiitkottayam.ac.in', 'Murali', 'Galeti', '2004-06-06 00:00:00', '2021BEC0030', 'ONGOLE', 'ANDHRA PRADESH', 'INDIA', '523225', 'Male', '8121068168', 'muraligaleti19@gmail.com', 'Other', 'NILL', 'NILL');
INSERT INTO `alumni_2021_admission` (`id`, `timestamp`, `username`, `first_name`, `last_name`, `dob`, `roll_no`, `city`, `state`, `country`, `pincode`, `gender`, `whatsapp_no`, `personal_email`, `present_status`, `organization`, `remarks`) VALUES
(196, '2025-10-12 21:40:41', 'yash21bcs79@iiitkottayam.ac.in', 'Yash', 'Bharti', '2002-09-04 00:00:00', '2021BCS0079', 'Pratapgarh', 'Uttar Pradesh', 'India', '230001', 'Male', '6388526262', 'yasssh04@gmail.com', 'Other', NULL, NULL),
(197, '2025-10-13 11:44:25', 'avinash21bcs77@iiitkottayam.ac.in', 'Avinash', 'Kumar', '2003-07-24 00:00:00', '2021BCS0077', 'Motihari', 'Bihar', 'India', '845401', 'Male', '7979903851', 'avinash1549@gmail.com', 'Employed', NULL, NULL),
(198, '2025-10-13 12:05:58', 'shendkar21bcs148@iiitkottayam.ac.in', 'Shreyash', 'Shendkar', '2002-06-25 00:00:00', '2021BCS0148', 'Pune', 'Maharashtra', 'India', '412301', 'Male', '7517674499', 'smshendkar3@gmail.com', 'Employed', 'PhysicsWallah', 'NA'),
(199, '2025-10-13 12:09:31', 'pentapati21bec4@iiitkottayam.ac.in', 'Pentapati', 'Sri Gowri', '2004-02-20 00:00:00', '2021BEC0004', 'Eluru', 'Andhra Pradesh', 'India', '534460', 'Female', '9948615678', 'gowripentapati5678@gmail.com', 'Other', NULL, 'No'),
(200, '2025-10-13 20:47:23', 'raut21bcs39@iiitkottayam.ac.in', 'Mrugank', 'Raut', '2003-04-16 00:00:00', '2021BCS0039', 'Virar', 'Maharashtra', 'India', '401305', 'Male', '9359583618', 'mmraut164@gmail.com', 'Employed', 'Infosys', NULL),
(201, '2025-10-14 19:31:50', 'gadwala21bec44@iiitkottayam.ac.in', 'Sricharan', 'Gadwala', '2001-12-23 00:00:00', '2021BEC0044', 'Hyderabad', 'Telangana', 'India', '500004', 'Male', '7794027796', 'Sricharan607@gmail.com', 'Other', NULL, NULL),
(202, '2025-10-14 20:01:02', 'abhay21bcs87@iiitkottayam.ac.in', 'Abhay', 'Kumar', '2002-04-19 00:00:00', '2021BCS0087', 'Ujjain', 'Madhya Pradesh', 'India', '456010', 'Male', '6265388464', 'ak20024091@gmail.com', 'Other', NULL, NULL),
(203, '2025-10-14 20:22:42', 'astrojaswanth28@gmail.com', 'M JASWANTH KUMAR', 'KUMAR', '2002-11-23 00:00:00', '2021BEC0012', 'TIRUPATHI', 'Andhra Pradesh', 'India', '5175901', 'Male', '09100725006', 'astrojaswanth28@gmail.com', 'Higher Education', 'IIT MADRAS', NULL),
(204, '2025-10-14 20:26:43', 'indela21bcs152@iiitkottayam.ac.in', 'Indela Venkata', 'Chaithanya Reddy', '2004-05-19 00:00:00', '2021BCS0152', 'Nellore', 'Andhra Pradesh', 'India', '524002', 'Male', '8185881137', 'ivcr1905@gmail.com', 'Employed', 'Soti', NULL),
(205, '2025-10-14 21:20:52', 'nevlinthekketath20bcs28@iiitkottayam.ac.in', 'Nevlin', 'Noble', '2003-03-06 00:00:00', '2020BCS0028', 'Thodupuzha', 'Kerala', 'India', '685583', 'Male', '8301981234', 'nevlin.noble@gmail.com', 'Higher Education', 'IIIT', 'N/A'),
(206, '2025-10-15 01:41:15', 'aaditi21bec36@iiitkottayam.ac.in', 'Aaditi', 'Chikh', '2002-01-26 00:00:00', '2021BEC0036', 'Bengaluru', 'Karnataka', 'India', '560100', 'Female', '9152087943', 'aaditi.chikhalkar26b@gmail.com', 'Employed', 'Panw', NULL),
(207, '2025-10-15 14:19:00', 'jean21bcy3@iiitkottayam.ac.in', 'Jean Joseph', 'Vadakkan', '2003-07-12 00:00:00', '2021BCY0003', 'Bengaluru', 'Karnataka', 'India', '560068', 'Male', '8861943569', 'jeanvadakkan@gmail.com', 'Employed', 'CDAC Bangalore', NULL),
(208, '2025-10-15 21:16:50', 'kondapalli21bec29@iiitkottayam.ac.in', 'Kondapalli', 'Moulya', '2004-07-21 00:00:00', '2021BEC0029', 'Tenali', 'Andhra Pradesh', 'India', '522256', 'Female', '9392958570', 'kmoulya8@gmail.com', 'Other', NULL, NULL),
(209, '2025-10-15 22:01:03', 'abhishekpal0964@gmail.com', 'Abhishek', 'Pal', '2003-02-28 00:00:00', '2021BCS0107', 'AHMEDABAD', 'Gujarat', 'India', '382418', 'Male', '7984720962', 'abhishekpal0964@gmail.com', 'Higher Education', NULL, NULL),
(210, '2025-10-17 09:22:22', 'singareddy21bcs103@iiitkottayam.ac.in', 'Singa reddy vaishnavi', 'Reddy', '2004-09-18 00:00:00', '2021BCS0103', 'Hyderabad', 'Telangana', 'India', '500018', 'Female', '7356840937', 'vaishnavireddy1809vs@gmail.com', 'Employed', 'Mondee', 'All good'),
(211, '2025-10-17 18:47:52', 'arya21bcs124@iiitkottayam.ac.in', 'Aryan', 'Rangari', '2003-12-24 00:00:00', '2021BCS0124', 'bhandara', 'maharastra', 'India', '441905', 'Male', '07972953750', 'aryanrangari13@gmail.com', 'Other', 'none', 'none'),
(212, '2025-10-18 10:54:31', 'harigovind21bcs75@iiitkottayam.ac.in', 'Harigovind', 'P', '2003-07-11 00:00:00', '2021BCS0075', 'Thrissur', 'Kerala', 'India', '680317', 'Male', '9400977141', 'harigovindputumana@gmail.com', 'Employed', 'Tiger Analytics', NULL),
(213, '2025-10-20 13:23:28', 'ahmed21bcs6@iiitkottayam.ac.in', 'Ahmed', 'Hussain', '2003-05-16 00:00:00', '2021BCS0006', 'Hydrebad', 'Telangana', 'India', '500008', 'Male', '9030134835', 'ahmedifthaquar67@gmail.com', 'Other', 'NA', NULL),
(214, '2025-10-23 11:03:42', 'satyamsingh20942@gmail.com', 'Satyam', 'Singh', '2003-11-22 00:00:00', '2021BEC0017', 'Gwalior', 'Madhya Pradesh', 'India', '474020', 'Male', '8269493498', 'satyamsingh20942@gmail.com', 'Employed', 'Whyminds.ai', NULL),
(215, '2025-10-23 16:35:53', 'yashendra21bec13@iiitkottayam.ac.in', 'Yashendra', 'Badal', '2002-02-16 00:00:00', '2021BEC0013', 'Jhansi', 'Uttar Pradesh', 'India', '284002', 'Male', '8382002892', 'yashubdl@gmail.com', 'Employed', 'GoodScore', NULL),
(216, '2025-10-23 17:59:53', 'arvind21bec35@iiitkottayam.ac.in', 'Arvind', 'Kumar', '2002-07-10 00:00:00', '2021BEC0035', 'Maharajganj', 'Uttar Pradesh', 'India', '273304', 'Male', '9695271037', 'arvindk20212025@gmail.com', 'Employed', 'CallHub', NULL),
(217, '2025-10-23 22:33:17', 'adityaps2020@gmail.com', 'Aditya Pratap', 'Singh', '2003-08-30 00:00:00', '2021BCS0058', 'Rohtak', 'Haryana', 'India', '124010', 'Male', '9729202566', 'Adityaps2020@gmail.com', 'Employed', NULL, NULL);

-- --------------------------------------------------------

--
-- Table structure for table `alumni_details_2024`
--

CREATE TABLE `alumni_details_2024` (
  `id` int(11) NOT NULL,
  `timestamp` varchar(255) DEFAULT NULL,
  `student_name` varchar(255) DEFAULT NULL,
  `batch` varchar(50) DEFAULT NULL,
  `mobile_no` varchar(50) DEFAULT NULL,
  `whatsapp_no` varchar(50) DEFAULT NULL,
  `email` varchar(255) DEFAULT NULL,
  `communication_address` text DEFAULT NULL,
  `permanent_address` text DEFAULT NULL,
  `occupation` varchar(255) DEFAULT NULL,
  `country_of_employment` varchar(100) DEFAULT NULL,
  `nationality` varchar(100) DEFAULT NULL,
  `pay_level` varchar(100) DEFAULT NULL,
  `is_govt_job` varchar(10) DEFAULT NULL,
  `willingness_to_contribute` text DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `alumni_details_2024`
--

INSERT INTO `alumni_details_2024` (`id`, `timestamp`, `student_name`, `batch`, `mobile_no`, `whatsapp_no`, `email`, `communication_address`, `permanent_address`, `occupation`, `country_of_employment`, `nationality`, `pay_level`, `is_govt_job`, `willingness_to_contribute`) VALUES
(1, '2023/06/15 8:51:53 AM GMT+5:30', 'Marothu Rajesh Kumar', '2015', '9494144319', '9494144319', 'rajeshmarotu@gmail.com', 'Taruni Andhra PG, Dorasani palya, JP Nagar 4th Phase, Bangalore 560076', 'Pedda veedhi, Subhadra V&PO, Balijapeta Mandal, Parvathipuram Manyam District, Andhra Pradesh, 535558', 'Option 1', 'India', 'India', NULL, 'No', 'Yes-Others of my choice'),
(2, '2023/06/15 9:18:46 AM GMT+5:30', 'Harsha vardhan kovvada', '2019', '9121980330', '9121980330', 'kovvadaharsha2019@iiitkottayam.ac.in', '535004', '8-32-1, ganesh nagar, V.T.Agraharam, vizianagaram, Andhra pradesh-535004', 'Option 1', 'India', 'Indian', '7lpa', 'No', 'No'),
(3, '2023/06/15 9:19:05 AM GMT+5:30', 'Abhimanyu Kumbhar', '2019', '9767609879', '9767609879', 'abhimanyukumbharc@gmail.com', 'Flat no.-201 Ramkrushna Apt, Keshav Nagar, Boisar-401501,Palghar', 'Flat no.-201 Ramkrushna Apt, Keshav Nagar, Boisar-401501,Palghar', 'Option 1', 'India', 'Indian', NULL, 'No', 'Yes-Technical Talks (voluntary);Yes-Mentoring Students'),
(4, '2023/06/15 9:22:22 AM GMT+5:30', 'Sai Suhas Paruchuri', '2019', '939 001 8169', '939 001 8169', 'saisuhas2019@iiitkottayam.ac.in', '16-98/2, N.T.R Nagar, Moula Nagar, Gollapudi, Vijayawada, Andhra Pradesh-521225', '16-98/2, N.T.R Nagar, Moula Nagar, Gollapudi, Vijayawada, Andhra Pradesh-521225', 'Option 1', 'United States of America', 'Indian', NULL, 'No', 'Yes-Joint Research work;Yes-Joint Publications;Yes-Mentoring Students;Yes-Offering Funds;Yes-Others of my choice'),
(5, '2023/06/15 9:22:44 AM GMT+5:30', 'Srivatsan H', '2019', '9123593338', '9123593338', 'srivatsanharish4@gmail.com', 'D 305, RMK Chola Garden Sundaracholapuram, Thiruverkadu\nCHENNAI, TAMIL NADU 600077', 'D 305, RMK Chola Garden Sundaracholapuram, Thiruverkadu\nCHENNAI, TAMIL NADU 600077', 'Option 1', 'India', 'Indian', NULL, 'No', 'Yes-Technical Talks (voluntary)'),
(6, '2023/06/15 9:22:55 AM GMT+5:30', 'PARLAPALLI HEMANTH KUMAR REDDY', '2019', '8688144537', '8688144537', 'parlapallihemanth2019@iiitkottayam.ac.in', 'PLOT NO 1 SUNIL TOWERS\nSRI KRISHNA NAGAR 11TH CROSS MR PALLI TIRUPATI 517502', 'PLOT NO 1 SUNIL TOWERS\nSRI KRISHNA NAGAR 11TH CROSS MR PALLI TIRUPATI 517502', 'Option 1', 'INDIA', 'INDIAN', NULL, 'NA', 'Yes-Mentoring Students'),
(7, '2023/06/15 9:23:05 AM GMT+5:30', 'Bivek Benoy Paul', '2018', '7034764794', '734764794', 'bivekpaul2018@gmail.com', 'Bethel TC 48/56, Aramada PO, Njalikonam, PIN 695032', 'Bethel TC 48/56, Aramada PO, Njalikonam, PIN 695032', 'Option 1', 'India', 'Indian', '9 lpa', 'No', 'Yes-Others of my choice'),
(8, '2023/06/15 9:24:52 AM GMT+5:30', 'Dinesh Mood', '2015', '+12057671323', '+12057671323', 'dineshdany9@gmail.com', 'Plot no 58, SA Reddy colony, sangareddy, Telangana, 502001', 'Plot no 58, SA Reddy colony, sangareddy, Telangana, 502001', 'Option 1', 'USA', 'Indian', NULL, 'NA', 'Yes-Technical Talks (voluntary);Yes-Mentoring Students;Yes-Others of my choice'),
(9, '2023/06/15 9:35:19 AM GMT+5:30', 'Anshuman Mishra', '2017', '7990343405', '7990343405', 'anshumanmishra159@gmail.com', 'L-505, Pramukh Vihar -5, Naroli road, Silvassa-396230', 'L-505, Pramukh Vihar -5, Naroli road, Silvassa-396230', 'Option 1', 'India', 'India', 'Studying', 'Studying', 'Yes-Offering Employments;Yes-via. consultancy'),
(10, '2023/06/15 9:42:00 AM GMT+5:30', 'Sameer Ahmed S J', '2017', '8838699423', '8838699423', 'awwsamsj@gmail.com', '1-239/72, Ward No. 17, Nehru Nagar, Karumalai Koodal, Mettur Dam - 636402', '10/933, Valisab Road, Kadiri -515591', 'Option 1', 'India', 'Indian', '12-14 LPA', 'No', 'Yes-Others of my choice'),
(11, '2023/06/15 9:48:35 AM GMT+5:30', 'Vellaturi Venkata Sai Kowsik', '2019', '+917287042678', '+917287042678', 'saikowsik2019@iiitkottayam.ac.in', 'G2, My Home Residency, Samatha Nagar, 2nd lane, Ongole, Andhra Pradesh, 523002', 'G2, My Home Residency, Samatha Nagar, 2nd lane, Ongole, Andhra Pradesh, 523002', 'Option 1', 'India', 'Indian', NULL, 'No', 'Yes-Others of my choice'),
(12, '2023/06/15 9:55:59 AM GMT+5:30', 'Shubham Pandey', '2019', '+919324852872', '+919324852872', 'shubhampandeyhaihum@gmail.com', 'Hira apartment, Plot 350, Rn 9, Sec 19 B, Nr kalpesh dairy, Kopar Khairane, Navi Mumbai, Maharashtra, 400709', 'Hira apartment, Plot 350, Rn 9, Sec 19 B, Nr kalpesh dairy, Kopar Khairane, Navi Mumbai, Maharashtra, 400709', 'Option 1', 'India', 'Indian', NULL, 'No', 'No'),
(13, '2023/06/15 9:59:53 AM GMT+5:30', 'Shivendra Singh', '2015', '9455428103', '9455428103', 'shivam9935@gmail.com', 'HIG Chitrapuri Hyderabad Telangana', 'Village Manpur, post Gurepara, Sitapur, Uttar Pradesh', 'Option 1', 'India', 'Indian', '30 LPA', 'No', 'Yes-Technical Talks (voluntary);Yes-Joint Research work;Yes-Mentoring Students;Yes-via. consultancy'),
(14, '2023/06/15 10:00:48 AM GMT+5:30', 'Pamula Gayathri', '2016', '8919301112', '9494200545', 'gayipamula@gmail.com', '11-47, Pidur Road, K.R.Puram, Manubolu, Nellore(dt), Andhra Pradesh, PIN: 524405', '11-47, Pidur Road, K.R.Puram, Manubolu, Nellore(dt), Andhra Pradesh, PIN: 524405', 'Option 1', 'India', 'India', NULL, 'NO', 'Yes-Others of my choice'),
(15, '2023/06/15 10:09:33 AM GMT+5:30', 'Vishnu S', '2016', '8547699096', '8547699096', 'vishnusrnvs@gmail.com', 'Room 106, Canara Swagath Apartments, Jayanagar 3rd Block East, LIC Colony, Jayanagar, Bengaluru, Karnataka - 560041', 'Vyshnavam HO, Parambath Jn., Karuvissery P/O, Kunduparamb, Calicut, Kerala - 673010', 'Option 1', 'India', 'Indian', NULL, 'Public Sec', 'Yes-Joint Research work;Yes-Joint Publications;Yes-Joint Patenting'),
(16, '2023/06/15 10:13:25 AM GMT+5:30', 'Vedant Joshi', '2017', '8879891562', '8879891562', 'vedrocks15@gmail.com', 'D/203, cosmos, gundecha valley of flowers, Thakur village, Kandivali East, Mumbai 400101', 'D/203, cosmos, gundecha valley of flowers, Thakur village, Kandivali East, Mumbai 400101', 'Option 1', 'India', 'Indian', NULL, 'No', 'Yes-Technical Talks (voluntary);Yes-Technical Talks (with honorarium);Yes-Offering Funds'),
(17, '2023/06/15 10:17:14 AM GMT+5:30', 'Kotlapudi Jaswanth', '2015', '8374988085', '8374988085', 'jaswanthjinni97@gmail.com', '3-107 ,RR Street ,kota mandal , tirupati district, Andhrapradesh\nPostal : 524411', '3-107 ,RR Street ,kota mandal , tirupati district, Andhrapradesh\nPostal : 524411', 'Option 1', 'India/ btech', 'Indian', '14', 'No', 'Yes-Technical Talks (voluntary);Yes-Joint Research work;Yes-Joint Publications;Yes-Joint Patenting;Yes-Others of my choice'),
(18, '2023/06/15 10:19:08 AM GMT+5:30', 'GAURAV KANWAT', '2017', '9079898419', '9079898419', 'gauravkanwat99@gmail.com', 'C - 25 B, SHANKAR VIHAR\nGATOR, MALVIYA NAGAR', 'C - 25 B, SHANKAR VIHAR\nGATOR, MALVIYA NAGAR', 'Option 1', 'INDIA', 'INDIAN', NULL, 'NO', 'No'),
(19, '2023/06/15 10:23:46 AM GMT+5:30', 'CYRIL KUNJUMON', '2019', '8800616469', '8800616469', 'cyril2019@iiitkottayam.ac.in', 'Cc/42-c,Lig Flats ,Hari Nagar, Lig Flats', 'Cc/42-c,Lig Flats ,Hari Nagar, Lig Flats', 'Option 1', 'India', 'Indian', NULL, 'No', 'Yes-Others of my choice'),
(20, '2023/06/15 10:53:13 AM GMT+5:30', 'Muskan Rana', '2018', '9506481444', '9506481444', 'muskanrana2812@gmail.com', '542 Rana Bhawan, Eldeco Udyan-1, Ravi Khand Sharada Nagar, Lucknow', '542 Rana Bhawan, Eldeco Udyan-1, Ravi Khand Sharada Nagar, Lucknow', 'Option 1', 'India', 'Indian', '9 lpa', 'No', 'Yes-Joint Research work;Yes-Mentoring Students;Yes-Offering Funds;Yes-Offering Employments;Yes-Others of my choice'),
(21, '2023/06/15 10:54:21 AM GMT+5:30', 'Shubham Kumar', '2015', '7903571905', '7903571905', 'skgeniusfamily@gmail.com', 'Flat No 1101, HIG 6, Chitrapuri Colony, Near Lanco Hills, Hyderabad, Telangana - 500089', 'C/O - Krishna Murari Sinha, Near Kali Mandir, AT+ POST - Ishipur, Dist - Bhagalpur, Bihar 813206', 'Option 1', 'India', 'Indian', NULL, 'No', 'Yes-Technical Talks (voluntary);Yes-Technical Talks (with honorarium);Yes-Joint Research work;Yes-Joint Publications;Yes-Joint Patenting;Yes-Mentoring Students'),
(22, '2023/06/15 11:01:43 AM GMT+5:30', 'Surya Ashish', '2019', '9550117728', '9550117728', 'ashishsurya126@gmail.com', '24-8-6, Opp Market Yard 2nd Gate, Weavers Colony 533105, Rajahmundry, Andhra Pradesh', '24-8-6, Opp Market Yard 2nd Gate, Weavers Colony 533105, Rajahmundry, Andhra Pradesh', 'Option 1', 'India', 'India', NULL, 'No', 'Yes-Others of my choice'),
(23, '2023/06/15 11:02:11 AM GMT+5:30', 'Seshathri S', '2019', '9087609727', '9087609727', 'seshathrisaravanan@gmail.com', '15/76, Bavaji nagar, Chengam road, Tiruvannamalai, Tamil Nadu, PIN:606601', '15/76, Bavaji nagar, Chengam road, Tiruvannamalai, Tamil Nadu, PIN:606601', 'Option 1', 'India', 'India', NULL, 'No', 'No'),
(24, '2023/06/15 11:02:17 AM GMT+5:30', 'Sai Bhavadeesh Yarlagadda', '2018', '8106263461', '8106263461', 'saibhavadeesh@gmail.com', 'Raghavendra AL coliving, Near white rose layout, Prashant extn, Whitefield, Bangalore, Karnataka, 560066', '3-7, Near water tank, Kankatapalem, Bapatla, Andhra Pradesh, 522317', 'Option 1', 'India', 'India', NULL, 'No', 'No'),
(25, '2023/06/15 11:02:23 AM GMT+5:30', 'AVS Aditya Vardhan', '2018', '6301819823', '6301819823', 'avsadityavardhan@gmail.com', '23-8-173/1D, Plot 17, Flat 201, Srinivasa Nivasam Appartments, New Balaji Colony, Opp. SBI, AIR Byepass Road, Tirupati, Tirupati District, Andhra Pradesh, Pin: 517502', '23-8-173/1D, Plot 17, Flat 201, Srinivasa Nivasam Appartments, New Balaji Colony, Opp. SBI, AIR Byepass Road, Tirupati, Tirupati District, Andhra Pradesh, Pin: 517502', 'Software Engineer L2', 'India', 'INDIAN', 'Level 2 Software Grade', 'No', 'Yes-Technical Talks (voluntary);Yes-Technical Talks (with honorarium);Yes-Joint Research work;Yes-Joint Publications;Yes-Joint Patenting;Yes-Mentoring Students;Yes-Business Relations;Yes-Offering Employments;Yes-Others of my choice'),
(26, '2023/06/15 11:05:54 AM GMT+5:30', 'Piyush bansal', '2019', '+919321090000', '9321090000', 'piyush2019@iiitkottayam.ac.in', '140604', 'House number 210, tribune colony baltana zirakpur Punjab', 'Option 1', 'India', 'Indian', '13LPA', 'No', 'No'),
(27, '2023/06/15 11:51:07 AM GMT+5:30', 'N L V Venkata Sai', '2016', '9963634577', '9963634577', 'venkatsainallapati@gmail.com', 'Dr no : 6-186, seshagirir rao peta, anaparthy, anaparthy mandal, east godavari district, andhra pradesh - 533342', 'Dr no : 6-186, seshagirir rao peta, anaparthy, anaparthy mandal, east godavari district, andhra pradesh - 533342', 'Software Engineer', 'India', 'Indian', '5 LPA', 'No', 'Yes-Offering Funds;Yes-Offering Employments;Yes-Others of my choice'),
(28, '2023/06/15 1:42:52 PM GMT+5:30', 'AMRUTHAM  ABHINAV', '2016', '8919616974', '8919616974', 'amruthamabhinav@gmail.com', '2-6-62', 'Kurmavada', 'Software Engineet', 'India', 'Indian', NULL, 'No', 'Yes-Others of my choice'),
(29, '2023/06/15 1:47:05 PM GMT+5:30', 'Meenakshi Venkittaraman', '2018', '8281247355', '8281247355', 'meenuvenkit2000@gmail.com', 'No 2, Rishie gardens, veeravanjitham street, semmanchery, chennai, Tamil Nadu,indian . 600119', 'Sreevalsam, TRRA 89A, ambalamukku,perrorkada PO, Thiruvananthapuram,kerala, India', 'Senior analyst', 'India', 'Indian', 'A5', 'No', 'Yes-Others of my choice'),
(30, '2023/06/15 1:53:33 PM GMT+5:30', 'Rumaise', '2018', '7591927500', '7591927500', 'puthumannilrumaiz@gmail.com', 'Al khor tower, Ajman, UAE', 'Al khor tower, Ajman, UAE', 'software engineer', 'UAE', 'India', '1.10 lakh per month', 'NO', 'Yes-Joint Research work;Yes-Joint Publications;Yes-Joint Patenting;Yes-Business Relations;Yes-Offering Employments'),
(31, '2023/06/15 1:57:17 PM GMT+5:30', 'Karthik B S', '2018', '9380409265', '9380409265', 'karthikbs129@gmail.com', '638, 2nd floor, 9th main, 26th cross road, sector 7, HSR layout, Bengaluru, 560102', '#119, 1st main, 8th cross, Manoj Park, Bengeri, Sulla Road, Hubballi. 580023', 'Product analyst', 'India', 'India', NULL, 'No', 'Yes-Technical Talks (voluntary);Yes-Technical Talks (with honorarium);Yes-Joint Research work;Yes-Joint Publications;Yes-Mentoring Students;Yes-Others of my choice;Yes-via. consultancy'),
(32, '2023/06/15 2:18:36 PM GMT+5:30', 'M G Christopher', '2018', '8547511198', '8547511198', 'christophermg2000.20@gmail.com', 'Mukkungal House,, Kunnamkulam, thrissur,, kerala. Pin 680523', 'Kunnamkulam, thrissur,', 'Data Scientist@ Cognizant', 'India', 'India', NULL, 'No', 'Yes-Technical Talks (voluntary);Yes-Joint Research work;Yes-Joint Publications'),
(33, '2023/06/15 2:37:48 PM GMT+5:30', 'Raghuvamsi Ananthu', '2018', '+91 7993625072', '+1 9452446855', 'raghuvamsiarv@gmail.com', 'Dr no - 11-147, surya school lane, peddacheruvu, narasaraopet, guntur, andhrapradesh, pin: 522601', 'Dr no - 11-147, surya school lane, peddacheruvu, narasaraopet, guntur, andhrapradesh, pin: 522601', 'Student', 'United States of America', 'Indian', NULL, 'NA', 'Yes-Joint Research work;Yes-Joint Publications;Yes-Joint Patenting;Yes-Business Relations'),
(34, '2023/06/15 2:43:04 PM GMT+5:30', 'Madala Nirupama Chowdary', '2018', '7995706119', '7995706119', 'nirupamamadala999@gmail.com', '2-34,Seetharampuram,Maddipadu,Prakasam,Andhra Pradesh, 523211', '2-34,Seetharampuram,Maddipadu,Prakasam,Andhra Pradesh, 523211', 'Software Engineer', 'India', 'Indian', NULL, 'No', 'Yes-Joint Research work;Yes-Mentoring Students'),
(35, '2023/06/15 3:22:47 PM GMT+5:30', 'Addepalli Venkata Manikyala Rao', '2015', '9490884734', '9490884734', 'manikvenkat4@gmail.com', 'Salipeta, Pydah vaari veedhi, d.no : 21-1-5/4, Kakinada, East Godavari district,  pin : 533001', 'Salipeta, Pydah vaari veedhi, d.no : 21-1-5/4, Kakinada, East Godavari district,  pin : 533001', 'Software Development Engineer', 'India', 'India', NULL, 'No', 'Yes-Mentoring Students'),
(36, '2023/06/15 3:32:15 PM GMT+5:30', 'Prasanna Devadiga', '2019', '9607781923', '9607781923', 'prasanna2019@iiitkottayam.ac.in', '6B D Wing , Wintergreen ,Rivali Park, Mumbai 400066', '6B D Wing , Wintergreen ,Rivali Park, 400066', 'Quant Developer', 'India', 'India', '27LPA', 'no', 'Yes-Technical Talks (voluntary);Yes-Mentoring Students;Yes-Offering Employments;Yes-Others of my choice;Yes-via. consultancy'),
(37, '2023/06/15 3:51:02 PM GMT+5:30', 'Roshini Rasheed', '2018', '8281369559', '8281369559', 'roshinirashid@gmail.com', 'Hayath, Nellettil PO, Bhoothakkulam, Kollam, Kerala. Pin: 691302', 'Hayath, Nellettil PO, Bhoothakkulam, Kollam, Kerala. Pin: 691302', 'Associate - Cognizant (NOTE: From Sept 2023 - Masters Student in USA)', 'India', 'India', 'Rs 6.75 LPA', 'No', 'Yes-Offering Funds;Yes-Others of my choice'),
(38, '2023/06/15 5:13:37 PM GMT+5:30', 'Prudhvi Reddy Venati', '2019', '+919494615565', '+919494615565', 'vedantiprudhvi2019@iiitkottayam.ac.in', 'House No. 5-1-14, kapu street, near Sivalayam temple, Sullurpeta, 524121', 'House No. 5-1-14, kapu street, near Sivalayam temple, Sullurpeta, 524121', 'Software Engineer at MAQ Software', 'India', 'Indian', NULL, 'No', 'Yes-Offering Employments;Yes-Others of my choice'),
(39, '2023/06/15 6:09:06 PM GMT+5:30', 'Pushpam Saxena', '2018', '9630865284', '9630865284', 'pushpamsxn58@gmail.com', 'House no. 12, Ward no. 2, Vidhya nagar, Mahaveer Colony, Obaidullaganj, Dist. Raisen, MP. Pincode: 464993', 'House no. 12, Ward no. 2, Vidhya nagar, Mahaveer Colony, Obaidullaganj, Dist. Raisen, MP. Pincode: 464993', 'Software Engineer', 'India', 'Indian', NULL, 'No', 'Yes-Technical Talks (voluntary);Yes-Technical Talks (with honorarium);Yes-Joint Research work;Yes-Joint Publications;Yes-Joint Patenting;Yes-Mentoring Students;Yes-Business Relations;Yes-Offering Funds;Yes-Offering Employments;Yes-Others of my choice;Yes-via. consultancy'),
(40, '2023/06/15 7:09:52 PM GMT+5:30', 'Gudi Avinash', '2018', '6304208596', '9866149365', 'gudiavinash2001@gmail.com', '20 Uma Maheshwari Elite Apartment,Virat nagar,nellore,Andhra pradesh,524001', '20 Uma Maheshwari Elite Apartment,Virat nagar,nellore,Andhra pradesh,524001', 'Software Engineer', 'India', 'India', '11.5 lpa', 'No', 'Yes-Technical Talks (voluntary);Yes-Joint Publications;Yes-Mentoring Students;Yes-Offering Employments;Yes-Others of my choice;Yes-via. consultancy'),
(41, '2023/06/15 7:14:30 PM GMT+5:30', 'Gamidi SuryaPavan', '2019', '8328103570', '8886143166', 'suryapavan2019@iiitkottayam.ac.in', '1-194,Ranga centre, Vanapalli kothapeta Mandal East Godavari Dist Andhra Pradesh 533228', '1-194,Ranga centre, Vanapalli kothapeta Mandal East Godavari Dist Andhra Pradesh 533228', 'Student', 'India', 'Hindu', NULL, 'No', 'Yes-Technical Talks (voluntary)'),
(42, '2023/06/15 8:30:05 PM GMT+5:30', 'Mahfuz Hasan', '2017', '8789386256', '8789386256', 'mahfuzhasan0498@gmail.com', 'Sir saiyed compound, suklatoli, siwan - 841226', 'Vill - Molnapur, PO - Mohammadpur, siwan-841226', 'Engineering', 'India', 'India', 'A decent enough to survive.', 'No', 'Yes-via. consultancy'),
(43, '2023/06/15 8:42:13 PM GMT+5:30', 'VEERANALA SANDEEP KUMAR', '2015', '8919899454', '8919899454', 'veeranala.sandeep@gmail.com', 'DIRECTORATE OF ENFORCEMENT, 3rd Floor BMTC B Block, Shanti Nagar, Wilson Garden, Bengaluru, Karnataka. 560027', 'First Floor, Sesha Reddy Buildings, Beside Post Office, Chillakur, Tirupati dt, Andhra Pradesh. 524412', 'ASSISTANT ENFORCEMENT OFFICER, DIRECTORATE OF ENFORCEMENT', 'India', 'Indian', NULL, 'India', 'Yes-Others of my choice'),
(44, '2023/06/15 9:37:34 PM GMT+5:30', 'Dharavathu Neehari Naik', '2017', '8978217729', '8978217729', 'neeharinaik10@gmail.com', '500075', 'Lic colony sowmya residency 302 gunadala vijayawada 520008', 'Software engineer', 'India', 'Indian', '8lpa', 'No', 'No'),
(45, '2023/06/15 9:42:57 PM GMT+5:30', 'Aadithya Raj R', '2017', '9489308289', '9489308289', 'aadithya0207@gmail.com', '364, Shri Lakshmi Nilayam, Valluvar Nagar South, Indunagar P.O., Ooty, The Nilgiris, Tamil Nadu - 643005', 'Same as current address', 'Senior Systems Executive', 'India', 'India', '4.02 lpa', 'No', 'Yes-Others of my choice'),
(46, '2023/06/15 9:48:22 PM GMT+5:30', 'PATTAN SALIM KHAN', '2017', '9505687861', '9505687861', 'pattansalimkhan55@gmail.com', 'Aashraya Hospitalities, Jai Hind Gandhi Road, Madhapur, Hyderabad ,500081', '7-9, Vinayaka temple Street, Unagatla west godavari, Andhra Pradesh, 534342', 'Software developer Engineer', 'India', 'Indian', NULL, 'No', 'Yes-Joint Research work;Yes-Joint Publications;Yes-Joint Patenting;Yes-Mentoring Students'),
(47, '2023/06/15 9:48:35 PM GMT+5:30', 'Rajat Kumar', '2015', '8299617747', '8299617747', 'rajat15@alumni.iiitkottayam.ac.in', 'EA-1/ 169 , A.D.A Colony, Naini, prayagraj, Uttar Pradesh, Pincode - 211008', 'EA-1/ 169 , A.D.A Colony, Naini, prayagraj, Uttar Pradesh, Pincode - 211008', 'Software Engineer', 'India', 'Indian', NULL, 'No', 'Yes-Mentoring Students'),
(48, '2023/06/15 9:51:22 PM GMT+5:30', 'Gunjan Bagde', '2017', '7276229571', '7276229571', 'gunjan806@gmail.com', 'Sumeru Homes , flat 201, kondapur, Hyderabad 500084', 'Vaishali nagar, Khat road , Bhandara, Maharashtra, 441904', 'SDE-I', 'India', 'Indian', '13.5LPA', 'NO', 'Yes-Joint Research work;Yes-Joint Publications;Yes-Joint Patenting'),
(49, '2023/06/15 10:07:02 PM GMT+5:30', 'Timmapuram Akash', '2015', '9494498013', '9494498013', 'akash15@alumni.iiitkottayam.ac.in', 'H.No 3-123/8, muchkur, nizamabad 503307', 'H.No 3-123/8, muchkur, nizamabad 503307', 'Employee', 'India', 'India', NULL, 'No', 'Yes-Technical Talks (voluntary);Yes-Mentoring Students'),
(50, '2023/06/15 11:13:19 PM GMT+5:30', 'Nikhil Jana', '2019', '8919764687', '9550800010', 'nikhil2019@iiitkottayam.ac.in', '8-9-129/1, Yesunadhapuram,\nAllagadda \nPin:- 518543', '8-9-129/1, Yesunadhapuram,\nAllagadda \nPin:- 518543', 'Student', 'India', 'India', 'Nil', 'No', 'Yes-Business Relations;Yes-Offering Funds;Yes-Others of my choice'),
(51, '2023/06/15 11:20:00 PM GMT+5:30', 'K RAGHUVAMSHI', '2019', '9390373900', '9390373900', 'raghuvamshi9492@gmail.com', '17-2-314/1/A/75 Kurmaguda, Saidabad, hyderbad 500059', '17-2-314/1/A/75 Kurmaguda, Saidabad, hyderbad 500059', 'Student', 'India', 'Indian', NULL, 'Nil', 'No'),
(52, '2023/06/16 10:02:58 AM GMT+5:30', 'M Srija Asritha', '2015', '9618325991', '9618325991', 'srijaasritha5441@gmail.com', '22-1-22, veerabhadrapuram, Rajahmundry ,533105, Andhra pradesh', '22-1-22, veerabhadrapuram, Rajahmundry ,533105, Andhra pradesh', 'Software Engineer', 'India', 'Indian', NULL, 'No', 'Yes-Others of my choice'),
(53, '2023/06/16 12:37:56 PM GMT+5:30', 'Amritha Haridasan', '2016', '9605774158', '9605774158', 'amrithaharidasan18@gmail.com', '\'Devamritham\', Green Gardens, Kallikkad, Thirunnellayi(PO), Palakkad, Kerala, India, 678004', '\'Devamritham\', Green Gardens, Kallikkad, Thirunnellayi(PO), Palakkad, Kerala, India, 678004', 'Student', 'United States of America', 'India', 'N/A', 'No', 'Yes-Technical Talks (voluntary);Yes-Technical Talks (with honorarium);Yes-Joint Research work;Yes-Joint Publications;Yes-Joint Patenting;Yes-Mentoring Students;Yes-Business Relations;Yes-Offering Funds;Yes-Offering Employments;Yes-Others of my choice;Yes-via. consultancy'),
(54, '2023/06/16 2:01:17 PM GMT+5:30', 'Shreyas Js', '2018', '6362750754', '6362750754', 'Shreyasjs.Personal@icloud.com', 'D.No Asreetha,Anthapur Colony Last Road,Near MMTC Colony Park,SN Pet,Ballari,Karnataka-583101', 'D.No Asreetha,Anthapur Colony Last Road,Near MMTC Colony Park,SN Pet,Ballari,Karnataka-583101', 'Startup Cofounder', 'India', 'India', '-', '-', 'Yes-Mentoring Students;Yes-Business Relations;Yes-Offering Employments;Yes-Others of my choice'),
(55, '2023/06/16 2:03:56 PM GMT+5:30', 'Venkateshwar Reddy Kandula', '2018', '+19452446845', '+19452446845', 'venkateshwar.kandula1306@gmail.com', '8-56, Saloora Camp, Bodhan, Nizamabad, Telangana, 503185', '8-56, Saloora Camp, Bodhan, Nizamabad, Telangana, 503185', 'Student', 'United States', 'Indian', NULL, 'No', 'Yes-Mentoring Students;Yes-Offering Funds;Yes-Others of my choice'),
(56, '2023/06/16 2:06:00 PM GMT+5:30', 'PEDADA VENKATA HARSHA', '2018', '+13124598539', '+13124598539', 'venkataharshapedada9@gmail.com', 'Plot No: 488, P.N.Colony, 9th lane, Srikakulam, 532001, Andhra Pradesh, India', 'Plot No: 488, P.N.Colony, 9th lane, Srikakulam, 532001, Andhra Pradesh, India', 'Student', 'United States', 'Indian', NULL, 'No', 'Yes-Technical Talks (voluntary);Yes-Others of my choice'),
(57, '2023/06/16 2:47:47 PM GMT+5:30', 'C Jaswanth Reddy', '2019', '9346291511', '9346291511', 'jaswanthreddy1419@gmail.com', 'Old Mahabalipuram Road, Egattur, Tamil Nadu 600130', 'Modameedhapalli , patha cuddapah,cuddapah, Ap ,516002', 'Employe', 'India', 'Indian', NULL, 'Noo', 'No'),
(58, '2023/06/16 10:00:29 PM GMT+5:30', 'Shiva Shantha Mani', '2015', '9542979689', '9542979689', 'shiva15@iiitkottayam.in', 'Srinagar colony, mellacheruvu, suryapet, telangana. 508246', 'Srinagar colony, mellacheruvu, suryapet, telangana. 508246', 'Software', 'India', 'India', NULL, 'No', 'Yes-Others of my choice'),
(59, '2023/06/17 7:54:06 AM GMT+5:30', 'Sai Manoj Konidana', '2017', '+1 4698619495', '+1 4698619495', 'saimanoj1525@gmail.com', '800 W Renner Rd 2818  Richardson, Texas 75080', '800 W Renner Rd 2818  Richardson, Texas 75080', 'Graduate Student (Masters)', 'United States of America', 'Indian', NULL, 'No', 'Yes-Joint Research work;Yes-Joint Publications;Yes-Joint Patenting;Yes-Mentoring Students'),
(60, '2023/06/17 1:16:43 PM GMT+5:30', 'Rajesh Vemulapalli', '2015', '+15205961626', '+15205961626', 'Rajeshvemulapalli1997@gmail.com', '1-198/a Mysannagudem 534447', '1-198/a Mysannagudem 534447', 'Product Management', 'United States', 'Indian', NULL, 'No', 'Yes-Technical Talks (voluntary);Yes-Mentoring Students'),
(61, '2023/06/18 11:03:38 AM GMT+5:30', 'Ravali Meda', '2015', '6302952971', '6302952971', 'ravali15@iiitkottayam.ac.in', '11-23-379, LB Nagar, Warangal, Telangana, 506002', '11-23-379, LB Nagar, Warangal, Telangana, 506002', 'Software Developer', 'India', 'India', '14LPA', 'No', 'Yes-Others of my choice'),
(62, '2023/06/18 2:46:14 PM GMT+5:30', 'Dhanush R H', '2018', '+13124599157', '+13124599157', 'dhanushrhari@gmail.com', '61 E 21st Street unit 625 Chicago Illinois 60616', '61 E 21st Street unit 625 Chicago Illinois 60616', 'Student', 'United States of America', 'Indian', NULL, 'No', 'Yes-Technical Talks (voluntary);Yes-Technical Talks (with honorarium);Yes-Business Relations;Yes-Offering Funds;Yes-Offering Employments;Yes-Others of my choice;Yes-via. consultancy'),
(63, '2023/06/20 10:00:55 AM GMT+5:30', 'SAI SIDDARDHA SUMALA', '2015', '8309569636', '8309569636', 'saisiddardha225@gmail.com', 'sai siddardha, s/o srinivasa rao, 5-12 main street, pogiri village, Rajam mandal, Vizianagaram district, Andhra pradesh, 532148.', 'sai siddardha, s/o srinivasa rao, 5-12 main street, pogiri village, Rajam mandal, Vizianagaram district, Andhra pradesh, 532148.', 'Software Development Engineer', 'India', 'Indian', NULL, 'No', 'Yes-Mentoring Students;Yes-Others of my choice'),
(64, '2023/06/25 6:59:43 PM GMT+5:30', 'A VANSHIKHA JAIN', '2016', '9207397745', '9207397745', 'VANSHIKA.JAIN1804@GMAIL.COM', '9-2-110, PARK STREET, SULLURUPETA, NELLORE, ANDHRA PRADESH - 524121', '9-2-110, PARK STREET, SULLURUPETA, NELLORE, ANDHRA PRADESH - 524121', 'SOFTWARE ENGINEER', 'INDIA', 'INDIAN', NULL, 'NO', 'Yes-Mentoring Students;Yes-Others of my choice'),
(65, '2026-07-16 07:13:42', 'Hari', 'details_2024', '', '', 'hari1234@gmail.com', '', '', '', '', '', '', '', '');

-- --------------------------------------------------------

--
-- Table structure for table `alumni_higher_studies`
--

CREATE TABLE `alumni_higher_studies` (
  `id` int(11) NOT NULL,
  `student_name` varchar(255) DEFAULT NULL,
  `roll_no` varchar(50) DEFAULT NULL,
  `program` varchar(255) DEFAULT NULL,
  `university` varchar(255) DEFAULT NULL,
  `country` varchar(100) DEFAULT NULL,
  `admission_year` varchar(20) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `alumni_higher_studies`
--

INSERT INTO `alumni_higher_studies` (`id`, `student_name`, `roll_no`, `program`, `university`, `country`, `admission_year`) VALUES
(1, 'Samvid Bharambe', '2021BCS0178', 'MBA', 'Indian Institute of Management (IIM), Mumbai', 'India', 'June 25 to April 27'),
(2, 'Ramoji Prashanth', '2021BCS0092', 'M.Tech', 'IIIT Gwalior (MS)', 'India', 'Januar 26'),
(3, 'Keerthana Menon', '2021BCS0067', 'MSc. Computer & Embedded Systems Engineering', 'Delft University of Technology (TU Delft)', 'Netherlands', 'Januar 26');

-- --------------------------------------------------------

--
-- Table structure for table `alumni_profiles`
--

CREATE TABLE `alumni_profiles` (
  `id` int(11) NOT NULL,
  `user_id` int(11) NOT NULL,
  `batch` varchar(50) NOT NULL,
  `roll_number` varchar(50) NOT NULL,
  `profile_completed` tinyint(1) NOT NULL DEFAULT 0
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `alumni_profiles`
--

INSERT INTO `alumni_profiles` (`id`, `user_id`, `batch`, `roll_number`, `profile_completed`) VALUES
(3, 3, '2017', '19cos225', 0);

-- --------------------------------------------------------

--
-- Table structure for table `birthday_wishes_log`
--

CREATE TABLE `birthday_wishes_log` (
  `id` int(11) NOT NULL,
  `alumni_id` int(11) NOT NULL,
  `table_name` varchar(100) NOT NULL,
  `sent_date` date NOT NULL,
  `status` varchar(20) NOT NULL DEFAULT 'pending',
  `email_sent_to` varchar(255) NOT NULL,
  `is_read` tinyint(1) NOT NULL DEFAULT 0,
  `created_at` timestamp NOT NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `birthday_wishes_log`
--

INSERT INTO `birthday_wishes_log` (`id`, `alumni_id`, `table_name`, `sent_date`, `status`, `email_sent_to`, `is_read`, `created_at`) VALUES
(1, 32, 'alumni_2016_batch', '2026-07-16', 'sent', 'harihari81352@gmail.com', 0, '2026-07-16 05:57:59'),
(2, 61, 'alumni_2017_batch', '2026-07-16', 'sent', 'harihari81352@gmail.com', 0, '2026-07-16 05:58:04'),
(3, 30, 'alumni_2019_admission', '2026-07-16', 'sent', 'prudhvireddyvenati@gmail.com', 0, '2026-07-16 05:58:08');

-- --------------------------------------------------------

--
-- Table structure for table `users`
--

CREATE TABLE `users` (
  `id` int(11) NOT NULL,
  `full_name` varchar(100) NOT NULL,
  `email` varchar(100) NOT NULL,
  `password_hash` varchar(255) NOT NULL,
  `role` enum('alumni','student','recruiter','admin') NOT NULL DEFAULT 'alumni',
  `created_at` timestamp NOT NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `users`
--

INSERT INTO `users` (`id`, `full_name`, `email`, `password_hash`, `role`, `created_at`) VALUES
(3, 'Hari', 'hari12345@gmail.com', '$2y$10$PqJ5slAGI7MDad5HXX0VKOLytLBHywew/1yx9U4R.rxKEF.OmjCK2', 'alumni', '2026-07-16 05:31:22');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `alumni_2016_batch`
--
ALTER TABLE `alumni_2016_batch`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `alumni_2017_batch`
--
ALTER TABLE `alumni_2017_batch`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `alumni_2019_admission`
--
ALTER TABLE `alumni_2019_admission`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `alumni_2020_admission`
--
ALTER TABLE `alumni_2020_admission`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `alumni_2021_admission`
--
ALTER TABLE `alumni_2021_admission`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `alumni_details_2024`
--
ALTER TABLE `alumni_details_2024`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `alumni_higher_studies`
--
ALTER TABLE `alumni_higher_studies`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `alumni_profiles`
--
ALTER TABLE `alumni_profiles`
  ADD PRIMARY KEY (`id`),
  ADD KEY `user_id` (`user_id`);

--
-- Indexes for table `birthday_wishes_log`
--
ALTER TABLE `birthday_wishes_log`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `email` (`email`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `alumni_2016_batch`
--
ALTER TABLE `alumni_2016_batch`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=33;

--
-- AUTO_INCREMENT for table `alumni_2017_batch`
--
ALTER TABLE `alumni_2017_batch`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=62;

--
-- AUTO_INCREMENT for table `alumni_2019_admission`
--
ALTER TABLE `alumni_2019_admission`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=92;

--
-- AUTO_INCREMENT for table `alumni_2020_admission`
--
ALTER TABLE `alumni_2020_admission`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=143;

--
-- AUTO_INCREMENT for table `alumni_2021_admission`
--
ALTER TABLE `alumni_2021_admission`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=218;

--
-- AUTO_INCREMENT for table `alumni_details_2024`
--
ALTER TABLE `alumni_details_2024`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=66;

--
-- AUTO_INCREMENT for table `alumni_higher_studies`
--
ALTER TABLE `alumni_higher_studies`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- AUTO_INCREMENT for table `alumni_profiles`
--
ALTER TABLE `alumni_profiles`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- AUTO_INCREMENT for table `birthday_wishes_log`
--
ALTER TABLE `birthday_wishes_log`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- AUTO_INCREMENT for table `users`
--
ALTER TABLE `users`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- Constraints for dumped tables
--

--
-- Constraints for table `alumni_profiles`
--
ALTER TABLE `alumni_profiles`
  ADD CONSTRAINT `alumni_profiles_ibfk_1` FOREIGN KEY (`user_id`) REFERENCES `users` (`id`) ON DELETE CASCADE;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
