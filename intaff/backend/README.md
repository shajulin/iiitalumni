# ALUMNI_PORTAL

A web portal built for IIIT Kottayam alumni to stay connected, network, and engage with the institute community.

## Features

- **Dashboard** – A personalized overview page for logged-in alumni with quick access to key sections.
- **Alumni Directory** – Search and browse registered alumni profiles by batch, department, or location.
- **Distinguished Alumni** – Showcase page highlighting notable achievements of alumni.
- **Events** – View and stay updated on upcoming alumni meets, reunions, and institute events.
- **Job Board** – Alumni can post and browse job/internship opportunities within the network.
- **Mentorship Program** – Connect current students or junior alumni with experienced alumni mentors.
- **News & Updates** – Latest news and announcements related to the institute and alumni community.
- **Automatic Birthday Wishes** – Automatically notifies/wishes alumni on their birthdays to keep the community engaged.
- **Authentication** – Secure Login and Registration system for alumni to create and access their accounts.
- **About & Contact** – Information about the portal and ways to reach the admin team.

## Tech Stack

- **Frontend:** React (Vite), React Router
- **Backend/Database:** MySQL (via `mysql2`)
- **Build Tool:** Vite
- **Icons:** Lucide React

## Getting Started

### Prerequisites
- Node.js installed on your system
- MySQL database set up

### Installation

```bash
git clone https://github.com/hariramakrishnan-star/ALUMNI_PORTAL.git
cd ALUMNI_PORTAL
npm install
```

### Running the project

```bash
npm run dev
```

The app will start on the local development server (usually `http://localhost:5173`).

## Project Structure

```
src/
├── pages/
│   ├── Dashboard.jsx
│   ├── Directory.jsx
│   ├── DistinguishedAlumni.jsx
│   ├── Events.jsx
│   ├── Jobs.jsx
│   ├── Mentorship.jsx
│   ├── News.jsx
│   ├── Login.jsx
│   ├── Register.jsx
│   ├── About.jsx
│   └── Contact.jsx
├── App.jsx
└── main.jsx
```

## Contributing

Contributions, issues, and feature requests are welcome.

## License

This project is open source and available for educational use.
