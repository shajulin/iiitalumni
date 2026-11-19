# 🎓 IIIT Kottayam Alumni Portal (`iiitalumni`)

[![React](https://img.shields.io/badge/Frontend-React%2018%20%2B%20Vite-61dafb?logo=react&logoColor=black)](https://react.dev/)
[![PHP](https://img.shields.io/badge/Backend-PHP%208.2%20%7C%20Node.js%20%7C%20Python-777bb4?logo=php&logoColor=white)](https://www.php.net/)
[![MySQL](https://img.shields.io/badge/Database-MySQL%20%7C%20SQLite-4479a1?logo=mysql&logoColor=white)](https://www.mysql.com/)
[![License](https://img.shields.io/badge/License-Academic%20Use-green.svg)](#)

A full-stack, enterprise-grade Alumni Management Portal developed for the **Indian Institute of Information Technology Kottayam (IIIT Kottayam)**. Designed to connect alumni, faculty, researchers, and current students, facilitate institute contributions, showcase achievements, and automate alumni engagement.

---

## 📌 Table of Contents

- [Overview](#-overview)
- [System Architecture](#-system-architecture)
- [Key Features](#-key-features)
- [Project Structure](#-project-structure)
- [Database Schema & Batches](#-database-schema--batches)
- [Getting Started](#-getting-started)
  - [Prerequisites](#prerequisites)
  - [Option A: XAMPP Setup (Apache + PHP + MySQL)](#option-a-xampp-setup-apache--php--mysql-recommended)
  - [Option B: Node.js Backend (Express + SQLite)](#option-b-nodejs-backend-express--sqlite)
  - [Option C: Python Flask Backend (No XAMPP)](#option-c-python-flask-backend-no-xampp)
- [Birthday Wisher System](#-automated-birthday-wisher-system)
- [International Affairs Module (`intaff`)](#-international-affairs-module-intaff)
- [API Endpoints](#-api-endpoints)
- [Contributing & Maintenance](#-contributing--maintenance)

---

## 🌟 Overview

The **IIIT Kottayam Alumni Portal** bridges the gap between past graduates and the alma mater. It centralizes alumni records across multiple graduation years (2016 through present), supports institutional giving (Scholarships & Sponsorships), highlights leadership and history, and automates alumni outreach such as personalized birthday greetings with email tracking.

---

## 🏛️ System Architecture

```
┌────────────────────────────────────────────────────────┐
│               Frontend: React (Vite)                   │
│         Port 5173 / Proxy via Vite Dev Server          │
└───────────────────────────┬────────────────────────────┘
                            │
              REST API Calls (/api/* or /alumni-portal/*)
                            │
    ┌───────────────────────┼───────────────────────┐
    ▼                       ▼                       ▼
┌──────────────┐     ┌──────────────┐     ┌───────────────────┐
│ XAMPP Apache │     │ Node.js API  │     │ Python Flask API  │
│  & PHP 8.2   │     │  (Port 5000) │     │    (Port 8000)    │
│  (Port 80)   │     │  server.js   │     │      app.py       │
└───────┬──────┘     └──────┬───────┘     └─────────┬─────────┘
        ▼                   ▼                       ▼
  MySQL / MariaDB     SQLite (alumni_portal.db)   SQLite (alumni_portal.db)
```

---

## ✨ Key Features

### 1. 🖥️ Interactive Web Portal (Frontend)
- **Home & Campus Life**: Hero banners, institute highlights, quick action buttons, and latest news.
- **Institute Heritage**:
  - `InstituteHistory`: Milestones and journey of IIIT Kottayam.
  - `VisionMission`: Strategic vision, mission statement, and core values.
  - `DirectorMessage`: Official welcome message from the Director.
  - `AlumniCommittee`: Alumni Association leadership, executive committee members, and contact channels.
- **Student Giving & Philanthropy**:
  - `Scholarship`: Need-based & merit scholarship funds established by alumni.
  - `Sponsorship`: Campus projects, research equipment, and event sponsorships.
- **Alumni Directory & Records**:
  - Searchable directory of alumni across different graduating classes.
  - Higher studies tracker (alumni pursuing MS/PhD worldwide).
- **Alumni Data Tab**:
  - Interactive batch selector with real-time record viewing and dynamic data tables.
- **Authentication**:
  - Premium login portal with styled responsive cards.
  - Intelligent registration routing alumni automatically into their respective batch database table.

### 2. 🎂 Automated Birthday Wisher System
- Dynamically scans all alumni batch tables for today's birthdays.
- Personalized HTML email template sent via Gmail SMTP.
- Built-in duplicate prevention: checks `birthday_wishes_log` table before sending.
- Open Tracking Pixel (`track_open.php`): tracks when alumni open greetings (supports local ngrok and production URLs).
- Cron-ready script for daily scheduled triggers.

### 3. 🌐 International Affairs Module (`intaff/`)
- Portal for international academic collaborations, exchange programs, and international PhD scholars matching.
- Potential Research Collaborators matching feature.

---

## 📁 Project Structure

```
iiitalumni/
├── backend/
│   ├── api/
│   │   ├── login.php              # Alumni authentication endpoint
│   │   ├── register.php           # Batch-aware alumni registration
│   │   └── alumni_data.php        # Batch queries and data insertion
│   ├── alumni_portal_db.sql       # Complete SQL database dump (all 10 tables)
│   ├── database.sql               # Base schema definitions
│   ├── db_connect.php             # PDO database connection for MySQL
│   ├── config.php                 # SMTP & Tracking configuration
│   ├── send_birthday_wishes.php   # Dynamic birthday wisher script
│   ├── birthday_mailer.php        # SMTP mailer implementation
│   ├── track_open.php             # Email tracking pixel handler
│   ├── server.js                  # Standalone Node.js + SQLite backend
│   ├── app.py                     # Standalone Python Flask backend
│   └── init_db.py                 # SQLite database initialization script
├── src/
│   ├── pages/
│   │   ├── Home.jsx               # Landing page
│   │   ├── About.jsx              # About the alumni portal
│   │   ├── AlumniCommittee.jsx    # Alumni executive committee
│   │   ├── DirectorMessage.jsx    # Director's welcome note
│   │   ├── InstituteHistory.jsx   # IIIT Kottayam history & milestones
│   │   ├── VisionMission.jsx      # Vision, Mission & Core Values
│   │   ├── Scholarship.jsx        # Alumni scholarships program
│   │   ├── Sponsorship.jsx        # Institutional sponsorship options
│   │   ├── AlumniDataTab.jsx      # Dynamic batch-wise data viewer
│   │   ├── Directory.jsx          # Alumni directory
│   │   ├── Login.jsx              # User login page
│   │   └── Register.jsx           # User registration page
│   ├── App.jsx                    # Root routing & layout
│   └── main.jsx                   # Entry point
├── intaff/                        # International Affairs submodule
├── public/                        # Static assets (images, campus photos)
├── start.js                       # One-command unified runner
├── vite.config.js                 # Vite development proxy configuration
└── package.json                   # Dependencies & npm scripts
```

---

## 🗄️ Database Schema & Batches

The database (`alumni_portal_db`) includes the following tables:

| Table Name | Description | Approximate Records |
| :--- | :--- | :--- |
| `users` | User accounts, credentials, and roles | Dynamic |
| `alumni_profiles` | Profile mapping linking users to batches | Dynamic |
| `alumni_2016_batch` | 2016 Inaugural B.Tech Batch | 32 records |
| `alumni_2017_batch` | 2017 B.Tech Batch | 61 records |
| `alumni_2019_admission` | 2019 Admission Batch | 91 records |
| `alumni_2020_admission` | 2020 Admission Batch | 142 records |
| `alumni_2021_admission` | 2021 Admission Batch | 217 records |
| `alumni_details_2024` | 2024 Graduating Batch | 65 records |
| `alumni_higher_studies` | Alumni in Masters/PhD Programs | 3 records |
| `birthday_wishes_log` | Birthday email delivery and open audit log | Dynamic |

---

## 🚀 Getting Started

### Prerequisites

- **Node.js** (v18.0.0 or higher) & **npm**
- One of the following backend options:
  - **XAMPP** (PHP 8.2+ with Apache and MySQL / MariaDB) *(Default)*
  - **Node.js** (for SQLite backend)
  - **Python 3.9+** (for Flask backend)

---

### Option A: XAMPP Setup (Apache + PHP + MySQL) [Recommended]

1. **Clone the Repository**:
   ```bash
   git clone https://github.com/shajulin/iiitalumni.git
   cd iiitalumni
   ```

2. **Install Node Dependencies**:
   ```bash
   npm install
   ```

3. **Setup Database**:
   - Start Apache & MySQL in XAMPP:
     ```bash
     sudo /opt/lampp/lampp start
     ```
   - Open **phpMyAdmin** at [http://localhost/phpmyadmin/](http://localhost/phpmyadmin/).
   - Create a database named `alumni_portal_db`.
   - Import `backend/alumni_portal_db.sql` into `alumni_portal_db`.

4. **Deploy Backend to XAMPP htdocs**:
   ```bash
   sudo mkdir -p /opt/lampp/htdocs/alumni-portal
   sudo cp -r backend/* /opt/lampp/htdocs/alumni-portal/
   ```

5. **Start Frontend**:
   ```bash
   npm start
   # or
   npm run dev:frontend
   ```
   Open your browser at **http://localhost:5173**.

---

### Option B: Node.js Backend (Express + SQLite)

No XAMPP required!

1. **Run the SQLite-powered Node.js Server**:
   ```bash
   npm run dev:backend
   ```
   *The server runs on `http://localhost:5000` and automatically imports `alumni_portal_db.sql` into `alumni_portal.db` on first run.*

2. **In a second terminal, start the Frontend**:
   ```bash
   npm run dev:frontend
   ```

---

### Option C: Python Flask Backend (No XAMPP)

1. **Setup Python environment**:
   ```bash
   cd backend
   python3 -m venv venv
   source venv/bin/activate
   pip install flask flask-cors
   ```

2. **Initialize SQLite DB & Run**:
   ```bash
   python3 init_db.py
   python3 app.py
   ```
   *Runs on `http://localhost:8000`.*

---

## 📧 Automated Birthday Wisher System

### Configuration
Update `backend/config.php` (or `backend/app.py` for Python):
```php
define('SMTP_HOST', 'smtp.gmail.com');
define('SMTP_PORT', 587);
define('SMTP_USER', 'your_email@iiitkottayam.ac.in');
define('SMTP_PASS', 'your_google_app_password');
```

### Manual Trigger
- **PHP**: Run via CLI:
  ```bash
  php backend/send_birthday_wishes.php
  ```
- **Python**:
  ```bash
  curl -X POST http://localhost:8000/api/birthday_wisher
  ```

### Setting up a Daily Cron Job
Run every day at 08:00 AM:
```bash
0 8 * * * /usr/bin/php /opt/lampp/htdocs/alumni-portal/send_birthday_wishes.php >> /var/log/birthday_cron.log 2>&1
```

---

## 🌐 International Affairs Module (`intaff`)

The repository includes a dedicated module located at `intaff/` focusing on international academic relations, exchange memorandums, and collaborative research matching for PhD scholars.

To run the International Affairs interface separately:
```bash
cd intaff
npm install
npm run dev
```

---

## 🔌 API Endpoints

| Method | Endpoint | Description |
| :--- | :--- | :--- |
| `POST` | `/alumni-portal/backend/api/login.php` | Alumni user authentication |
| `POST` | `/alumni-portal/backend/api/register.php` | Alumni registration & batch insertion |
| `GET` | `/alumni-portal/backend/api/alumni_data.php?dataset={batch}` | Fetch records for a specific batch |
| `POST` | `/alumni-portal/backend/api/alumni_data.php?dataset={batch}` | Insert a new record into batch table |
| `GET` | `/alumni-portal/backend/track_open.php?log_id={id}` | 1x1 transparent tracking pixel |

---

## 👥 Contributing & Maintenance

1. Branch out for new features: `git checkout -b feature/your-feature-name`
2. Keep sensitive credentials inside `.env` or local configs.
3. Commit with clear messages: `git commit -m "Add: New Alumni Committee profile"`
4. Push to remote: `git push origin main`

---

*Maintained with ❤️ for the Indian Institute of Information Technology Kottayam Alumni Community.*
