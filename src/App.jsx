import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Link, useLocation, Navigate } from 'react-router-dom';
import { Menu, X, ChevronDown, User, Twitter, Facebook, Linkedin, Youtube, MapPin, Phone, Mail, Globe } from 'lucide-react';
import './App.css';

import Home from './pages/Home.jsx';

import About from './pages/About.jsx';
import DirectorMessage from './pages/DirectorMessage.jsx';
import VisionMission from './pages/VisionMission.jsx';
import InstituteHistory from './pages/InstituteHistory.jsx';
import AlumniCommittee from './pages/AlumniCommittee.jsx';
import Sponsorship from './pages/Sponsorship.jsx';
import Scholarship from './pages/Scholarship.jsx';

import AlumniDirectory from './pages/Directory.jsx';
import Events from './pages/Events.jsx';
import JobsInternships from './pages/Jobs.jsx';
import News from './pages/News.jsx';
import Contact from './pages/Contact.jsx';
import DistinguishedAlumni from './pages/DistinguishedAlumni.jsx';
import Mentorship from './pages/Mentorship.jsx';
import Login from './pages/Login.jsx';
import Register from './pages/Register.jsx';
import Dashboard from './pages/Dashboard.jsx';

const GiveBack = () => <div className="page-content" style={{ padding: '100px 0', textAlign: 'center' }}><h1>Give Back</h1><p>Donation portal coming soon.</p></div>;

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const user = sessionStorage.getItem('user');

  return (
    <header className="navbar glass">
      {/* inline style guarantees left / center / right layout, edge-to-edge, overriding any .container max-width */}
      <div className="nav-container" style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: '20px', width: '100%', maxWidth: 'none', margin: 0, padding: '0 24px', boxSizing: 'border-box' }}>

        {/* ── LOGO: Official IIIT Kottayam Logo & Name ── */}
        <Link to="/" className="logo" style={{ display: 'flex', alignItems: 'center', gap: '10px', textDecoration: 'none', flexShrink: 0 }}>
          {/* Official IIIT Kottayam emblem rendered as inline SVG placeholder matching the institute's seal style */}
          <div style={{
            width: '52px',
            height: '52px',
            borderRadius: '50%',
            background: 'linear-gradient(135deg, #0d2b5e 0%, #1a4a9e 100%)',
            border: '2px solid #f7941d',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            flexShrink: 0,
            boxShadow: '0 2px 8px rgba(13,43,94,0.3)'
          }}>
            <svg viewBox="0 0 52 52" width="44" height="44" xmlns="http://www.w3.org/2000/svg">
              {/* Outer ring */}
              <circle cx="26" cy="26" r="23" fill="none" stroke="#f7941d" strokeWidth="1.2" />
              {/* Inner circle */}
              <circle cx="26" cy="26" r="16" fill="#0d2b5e" />
              {/* IIIT text */}
              <text x="26" y="23" textAnchor="middle" fill="#f7941d" fontSize="7" fontWeight="bold" fontFamily="Arial, sans-serif">IIIT</text>
              {/* K text */}
              <text x="26" y="33" textAnchor="middle" fill="white" fontSize="9" fontWeight="bold" fontFamily="Arial, sans-serif">K</text>
              {/* Stars/dots on ring */}
              <circle cx="26" cy="3.5" r="1.5" fill="#f7941d" />
              <circle cx="26" cy="48.5" r="1.5" fill="#f7941d" />
              <circle cx="3.5" cy="26" r="1.5" fill="#f7941d" />
              <circle cx="48.5" cy="26" r="1.5" fill="#f7941d" />
            </svg>
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', lineHeight: 1.2 }}>
            <span style={{ fontSize: '0.75rem', fontWeight: 700, color: 'var(--primary-color)', letterSpacing: '0.02em', whiteSpace: 'nowrap' }}>
              Indian Institute of Information Technology Kottayam
            </span>
            <span style={{ fontSize: '0.65rem', fontWeight: 600, color: 'var(--secondary-color)', letterSpacing: '0.04em', textTransform: 'uppercase' }}>
              Official Alumni Association
            </span>
          </div>
        </Link>

        {/* ── NAV LINKS: forced to center via flex:1 + justifyContent:center ── */}
        <nav className={`nav-links ${isOpen ? 'active' : ''}`} style={{ flex: '1 1 auto', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '4px' }}>
          <Link to="/" onClick={() => setIsOpen(false)}>Home</Link>

          {/* ── ABOUT DROPDOWN ── */}
          <div className="dropdown">
            <button className="dropbtn">About <ChevronDown size={16} /></button>
            <div className="dropdown-content">
              <Link to="/about" onClick={() => setIsOpen(false)}>About IIIT Kottayam</Link>
              <Link to="/about/director" onClick={() => setIsOpen(false)}>Message from Director</Link>
              <Link to="/about/vision" onClick={() => setIsOpen(false)}>Vision & Mission</Link>
              <Link to="/about/history" onClick={() => setIsOpen(false)}>Institute History</Link>
              <Link to="/about/committee" onClick={() => setIsOpen(false)}>Alumni Committee</Link>
              <Link to="/about/sponsorship" onClick={() => setIsOpen(false)}>Sponsorship</Link>
            </div>
          </div>

          <div className="dropdown">
            <button className="dropbtn">Network <ChevronDown size={16} /></button>
            <div className="dropdown-content">
              <Link to="/directory" onClick={() => setIsOpen(false)}>Directory</Link>
              <Link to="/distinguished" onClick={() => setIsOpen(false)}>Distinguished Alumni</Link>
              <Link to="/mentorship" onClick={() => setIsOpen(false)}>Mentorship</Link>
            </div>
          </div>

          <Link to="/events" onClick={() => setIsOpen(false)}>Events</Link>

          <div className="dropdown">
            <button className="dropbtn">Opportunities <ChevronDown size={16} /></button>
            <div className="dropdown-content">
              <Link to="/jobs" onClick={() => setIsOpen(false)}>Jobs &amp; Internships</Link>
              <Link to="/scholarship" onClick={() => setIsOpen(false)}>Scholarship</Link>
              <Link to="/give-back" onClick={() => setIsOpen(false)}>Give Back</Link>
            </div>
          </div>

          <Link to="/news" onClick={() => setIsOpen(false)}>News</Link>
          <Link to="/contact" onClick={() => setIsOpen(false)}>Contact</Link>
        </nav>

        {/* ── ACTIONS: pinned right, never shrinks ── */}
        <div className="nav-actions" style={{ display: 'flex', alignItems: 'center', gap: '12px', flexShrink: 0 }}>
          {user ? (
            <Link to="/dashboard" className="btn btn-primary login-btn">
              <User size={18} /> Dashboard
            </Link>
          ) : (
            <Link to="/login" className="btn btn-primary login-btn">
              <User size={18} /> Login
            </Link>
          )}
          <button className="mobile-menu-btn" onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>
    </header>
  );
};

const Footer = () => (
  <footer className="rich-footer">
    <style>{`
      @import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:wght@500;600;700&family=Inter:wght@400;500;600&display=swap');

      .rich-footer{
        --bg-deep:#0A0F1E;
        --card-border:#25324D;
        --gold:#C9A24B;
        --gold-light:#EFDFAF;
        --text-soft:#8C94AA;
        --text-main:#EDE9DD;

        background:
          radial-gradient(circle at 15% 10%, rgba(201,162,75,0.06), transparent 45%),
          radial-gradient(circle at 85% 90%, rgba(201,162,75,0.05), transparent 40%),
          var(--bg-deep);
        border-top: 1px solid var(--card-border);
        font-family: 'Inter', sans-serif;
        position: relative;
      }

      .rich-footer::before{
        content: "";
        position: absolute;
        top: 0; left: 0; right: 0;
        height: 2px;
        background: linear-gradient(90deg, transparent, var(--gold), transparent);
        opacity: 0.7;
      }

      .rich-footer .footer-social{
        display: flex;
        justify-content: center;
        gap: 16px;
        padding: 40px 24px 8px;
      }

      .rich-footer .footer-social a{
        width: 42px;
        height: 42px;
        border-radius: 50%;
        background: linear-gradient(180deg, #1A2740, #101A30);
        border: 1px solid var(--card-border);
        display: flex;
        align-items: center;
        justify-content: center;
        color: var(--gold-light);
        text-decoration: none;
        transition: transform .2s ease, border-color .2s ease, box-shadow .2s ease, color .2s ease;
      }

      .rich-footer .footer-social a:hover{
        transform: translateY(-3px);
        border-color: var(--gold);
        color: var(--gold);
        box-shadow: 0 8px 18px -6px rgba(201,162,75,0.45);
      }

      .rich-footer .footer-links{
        display: grid;
        grid-template-columns: repeat(4, 1fr);
        gap: 32px;
        padding: 36px 24px 40px;
        max-width: 1180px;
        margin: 0 auto;
      }

      .rich-footer .footer-col{
        display: flex;
        flex-direction: column;
      }

      .rich-footer .footer-col a,
      .rich-footer .footer-col .footer-plain{
        color: var(--text-main);
        text-decoration: none;
        font-size: 13.5px;
        margin-bottom: 12px;
        opacity: 0.85;
        transition: color .2s ease, opacity .2s ease, padding-left .2s ease;
        border-left: 1px solid transparent;
        padding-left: 0;
        width: fit-content;
      }

      .rich-footer .footer-col a:hover{
        color: var(--gold-light);
        opacity: 1;
        padding-left: 8px;
        border-left: 1px solid var(--gold);
      }

      .rich-footer .footer-col .badge-new{
        display: inline-block;
        font-size: 9px;
        font-weight: 700;
        color: #1A1305;
        background: linear-gradient(180deg, #DEC07A, var(--gold));
        padding: 1px 6px;
        border-radius: 4px;
        margin-left: 6px;
        letter-spacing: 0.3px;
        transform: rotate(-4deg);
        vertical-align: middle;
      }

      .rich-footer .footer-col .footer-gst{
        color: var(--gold-light);
        font-weight: 600;
        opacity: 1;
        font-size: 13px;
      }

      .rich-footer .footer-col .footer-heading{
        color: var(--gold);
        font-weight: 700;
        font-size: 12px;
        text-transform: uppercase;
        letter-spacing: 1px;
        margin-bottom: 14px;
        opacity: 1;
        border-left: none !important;
        padding-left: 0 !important;
      }

      .rich-footer .footer-col .footer-contact-item{
        display: flex;
        align-items: flex-start;
        gap: 8px;
        color: var(--text-main);
        font-size: 13px;
        margin-bottom: 10px;
        opacity: 0.85;
        line-height: 1.5;
      }

      .rich-footer .footer-col .footer-contact-item svg{
        flex-shrink: 0;
        margin-top: 2px;
        color: var(--gold);
      }

      .rich-footer .footer-bottom{
        border-top: 1px solid var(--card-border);
        padding: 28px 24px 40px;
        text-align: center;
      }

      .rich-footer .footer-bottom p{
        color: var(--text-main);
        font-size: 13.5px;
        margin: 0 0 4px;
      }

      .rich-footer .footer-bottom p.sub{
        color: var(--text-soft);
      }

      .rich-footer .view-counter{
        margin-top: 20px;
      }

      .rich-footer .view-counter .count{
        font-family: 'Cormorant Garamond', serif;
        font-weight: 700;
        font-size: 34px;
        letter-spacing: 1px;
        background: linear-gradient(180deg, var(--gold-light), var(--gold));
        -webkit-background-clip: text;
        background-clip: text;
        color: transparent;
        display: block;
      }

      .rich-footer .view-counter .label{
        color: var(--text-soft);
        font-size: 12px;
        text-transform: uppercase;
        letter-spacing: 1px;
      }

      @media (max-width: 860px){
        .rich-footer .footer-links{
          grid-template-columns: repeat(2, 1fr);
        }
      }

      @media (max-width: 520px){
        .rich-footer .footer-links{
          grid-template-columns: 1fr;
        }
      }
    `}</style>

    {/* Social Media Links — Official IIIT Kottayam */}
    <div className="footer-social">
      <a href="https://twitter.com/IIITKottayam" target="_blank" rel="noreferrer" aria-label="Twitter / X">
        <Twitter size={18} />
      </a>
      <a href="https://www.facebook.com/iiitkottayam" target="_blank" rel="noreferrer" aria-label="Facebook">
        <Facebook size={18} />
      </a>
      <a href="https://www.linkedin.com/school/iiitkottayam/" target="_blank" rel="noreferrer" aria-label="LinkedIn">
        <Linkedin size={18} />
      </a>
      <a href="https://www.youtube.com/@iiitkottayam" target="_blank" rel="noreferrer" aria-label="YouTube">
        <Youtube size={18} />
      </a>
    </div>

    <div className="footer-links">

      {/* Column 1 – Quick Links */}
      <div className="footer-col">
        <span className="footer-heading">Quick Links</span>
        <a href="https://www.iiitkottayam.ac.in" target="_blank" rel="noreferrer">Official Website</a>
        <a href="https://www.iiitkottayam.ac.in" target="_blank" rel="noreferrer">LMS (IIIT Kottayam)<span className="badge-new">New!</span></a>
        <a href="https://www.iiitkottayam.ac.in" target="_blank" rel="noreferrer">Placement Cell</a>
        <a href="/events">Events</a>
        <a href="/scholarship">Scholarships</a>
        <a href="https://www.iiitkottayam.ac.in" target="_blank" rel="noreferrer">Gallery</a>
        <a href="https://www.iiitkottayam.ac.in" target="_blank" rel="noreferrer">Tenders</a>
      </div>

      {/* Column 2 – Institute */}
      <div className="footer-col">
        <span className="footer-heading">Institute</span>
        <a href="https://www.iiitkottayam.ac.in" target="_blank" rel="noreferrer">About IIIT Kottayam</a>
        <a href="https://www.iiitkottayam.ac.in" target="_blank" rel="noreferrer">Academics</a>
        <a href="https://www.iiitkottayam.ac.in" target="_blank" rel="noreferrer">Research</a>
        <a href="https://www.iiitkottayam.ac.in" target="_blank" rel="noreferrer">Admissions</a>
        <a href="https://www.iiitkottayam.ac.in" target="_blank" rel="noreferrer">Faculty & Staff</a>
        <a href="https://www.iiitkottayam.ac.in" target="_blank" rel="noreferrer">Careers</a>
        <a href="https://www.iiitkottayam.ac.in" target="_blank" rel="noreferrer">RTI</a>
      </div>

      {/* Column 3 – Student Resources */}
      <div className="footer-col">
        <span className="footer-heading">Student Resources</span>
        <a href="https://www.iiitkottayam.ac.in" target="_blank" rel="noreferrer">Pay Fees Online</a>
        <a href="https://www.iiitkottayam.ac.in" target="_blank" rel="noreferrer">Hostel</a>
        <a href="https://scholarships.gov.in" target="_blank" rel="noreferrer">National Scholarship Portal</a>
        <a href="https://www.iiitkottayam.ac.in" target="_blank" rel="noreferrer">Anti-Ragging Cell</a>
        <a href="https://www.iiitkottayam.ac.in" target="_blank" rel="noreferrer">Grievance Redressal</a>
        <a href="https://www.iiitkottayam.ac.in" target="_blank" rel="noreferrer">Internal Complaints Committee</a>
        <a href="https://www.iiitkottayam.ac.in" target="_blank" rel="noreferrer">SC/ST/OBC Cell</a>
      </div>

      {/* Column 4 – Contact Info */}
      <div className="footer-col">
        <span className="footer-heading">Contact Us</span>
        <div className="footer-contact-item">
          <MapPin size={14} />
          <span>Valavoor P.O., Pala, Kottayam, Kerala – 686635, India</span>
        </div>
        <div className="footer-contact-item">
          <Phone size={14} />
          <span>+91 0482 2202100 / 2352100</span>
        </div>
        <div className="footer-contact-item">
          <Mail size={14} />
          <a href="mailto:registrar@iiitkottayam.ac.in" style={{ color: 'inherit' }}>registrar@iiitkottayam.ac.in</a>
        </div>
        <div className="footer-contact-item">
          <Globe size={14} />
          <a href="https://www.iiitkottayam.ac.in" target="_blank" rel="noreferrer" style={{ color: 'inherit' }}>www.iiitkottayam.ac.in</a>
        </div>
        <a
          href="https://maps.google.com/?q=IIIT+Kottayam+Valavoor+Pala+Kerala"
          target="_blank"
          rel="noreferrer"
          style={{ marginTop: '4px' }}
        >
          📍 View on Google Maps
        </a>
        <span className="footer-plain footer-gst">GST NO: 32AAAAI9154L1ZJ</span>
      </div>

    </div>

    <div className="footer-bottom">
      <p>&copy; IIIT Kottayam {new Date().getFullYear()}</p>
      <p className="sub">Indian Institute of Information Technology Kottayam — Official Alumni Association</p>
      <p className="sub" style={{ fontSize: '12px', marginTop: '4px' }}>
        Valavoor P.O., Pala, Kottayam, Kerala – 686635 &nbsp;|&nbsp;
        <a href="https://www.iiitkottayam.ac.in" target="_blank" rel="noreferrer" style={{ color: 'inherit' }}>www.iiitkottayam.ac.in</a>
      </p>

      <div className="view-counter">
        <span className="label">This page was viewed</span>
        <span className="count">84000</span>
        <span className="label">times</span>
      </div>
    </div>
  </footer>
);

const AppContent = () => {
  const location = useLocation();
  const isDashboard = location.pathname.startsWith('/dashboard');
  const user = sessionStorage.getItem('user');
  
  // Routes that don't require login
  const isPublicRoute = location.pathname === '/login' || location.pathname === '/register';

  // If not logged in and trying to access a protected page, redirect to login
  if (!user && !isPublicRoute) {
    return <Navigate to="/login" replace />;
  }

  // If logged in and trying to access login/register, redirect to home
  if (user && isPublicRoute) {
    return <Navigate to="/" replace />;
  }

  return (
    <div className="app-layout">
      {(!isDashboard && !isPublicRoute) && <Navbar />}
      <main style={isDashboard || isPublicRoute ? { paddingTop: 0 } : {}}>
        <Routes>
          <Route path="/" element={<Home />} />
          {/* About sub-pages */}
          <Route path="/about" element={<About />} />
          <Route path="/about/director" element={<DirectorMessage />} />
          <Route path="/about/vision" element={<VisionMission />} />
          <Route path="/about/history" element={<InstituteHistory />} />
          <Route path="/about/committee" element={<AlumniCommittee />} />
          <Route path="/about/sponsorship" element={<Sponsorship />} />
          {/* Network */}
          <Route path="/directory" element={<AlumniDirectory />} />
          <Route path="/distinguished" element={<DistinguishedAlumni />} />
          <Route path="/mentorship" element={<Mentorship />} />
          {/* Events */}
          <Route path="/events" element={<Events />} />
          {/* Opportunities */}
          <Route path="/jobs" element={<JobsInternships />} />
          <Route path="/scholarship" element={<Scholarship />} />
          <Route path="/give-back" element={<GiveBack />} />
          {/* Other */}
          <Route path="/news" element={<News />} />
          <Route path="/contact" element={<Contact />} />
          {/* Auth */}
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/dashboard" element={<Dashboard />} />
        </Routes>
      </main>
      {(!isDashboard && !isPublicRoute) && <Footer />}
    </div>
  );
};

function App() {
  return (
    <Router>
      <AppContent />
    </Router>
  );
}

export default App;