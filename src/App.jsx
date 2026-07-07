import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Link, useLocation, Navigate } from 'react-router-dom';
import { Menu, X, ChevronDown, User, Twitter, Facebook, Linkedin, Youtube } from 'lucide-react';
import './App.css';

import Home from './pages/Home.jsx';

import About from './pages/About.jsx';
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
      <div className="container nav-container">
        <Link to="/" className="logo">
          <span className="logo-text">IIITK Alumni</span>
        </Link>
        
        <nav className={`nav-links ${isOpen ? 'active' : ''}`}>
          <Link to="/" onClick={() => setIsOpen(false)}>Home</Link>
          <Link to="/about" onClick={() => setIsOpen(false)}>About</Link>
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
              <Link to="/jobs" onClick={() => setIsOpen(false)}>Jobs & Internships</Link>
              <Link to="/give-back" onClick={() => setIsOpen(false)}>Give Back</Link>
            </div>
          </div>
          <Link to="/news" onClick={() => setIsOpen(false)}>News</Link>
          <Link to="/contact" onClick={() => setIsOpen(false)}>Contact</Link>
        </nav>

        <div className="nav-actions">
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

    <div className="footer-social">
      <a href="#" aria-label="Twitter"><Twitter size={18} /></a>
      <a href="#" aria-label="Facebook"><Facebook size={18} /></a>
      <a href="#" aria-label="LinkedIn"><Linkedin size={18} /></a>
      <a href="#" aria-label="YouTube"><Youtube size={18} /></a>
    </div>

    <div className="footer-links">
      <div className="footer-col">
        <a href="#">LMS (IIIT Kottayam)<span className="badge-new">New!</span></a>
        <a href="#">Placement</a>
        <a href="#">Site Map</a>
        <a href="#">Events</a>
        <a href="#">Gallery</a>
        <a href="#">English @ Ease/Psychological Tips</a>
      </div>

      <div className="footer-col">
        <a href="#">Matlab for IIIT Kottayam)</a>
        <a href="#">Tenders</a>
        <a href="#">Career</a>
        <a href="#">ACM</a>
        <a href="#">Contact</a>
        <a href="#">Internal Directory</a>
        <a href="#">Institute Email</a>
        <a href="#">Forms to Download(Internal)</a>
      </div>

      <div className="footer-col">
        <a href="#">Pay Your Fees Online</a>
        <a href="#">Gymnasium</a>
        <a href="#">IEEE</a>
        <a href="#">Hostel</a>
        <a href="#">Internet</a>
        <a href="#">Sports and Yoga</a>
        <a href="#">Group Mail ID's</a>
        <a href="#">IEM</a>
      </div>

      <div className="footer-col">
        <a href="#">RTI</a>
        <a href="#">National Scholarship Portal</a>
        <a href="#">Internal Complaints Committee</a>
        <a href="#">Grievance Redressal Committee</a>
        <a href="#">Disciplinary Action Committee</a>
        <a href="#">SC/ST/OBC cell</a>
        <a href="#">CVO</a>
        <a href="#">Anti-Ragging</a>
        <a href="#">Reach IIIT Kottayam</a>
        <span className="footer-plain footer-gst">GST NO: 32AAAAI9154L1ZJ</span>
      </div>
    </div>

    <div className="footer-bottom">
      <p>&copy; IIIT Kottayam {new Date().getFullYear()}</p>
      <p className="sub">Indian Institute of Information Technology Kottayam</p>

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
          <Route path="/about" element={<About />} />
          <Route path="/directory" element={<AlumniDirectory />} />
          <Route path="/events" element={<Events />} />
          <Route path="/jobs" element={<JobsInternships />} />
          <Route path="/news" element={<News />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/distinguished" element={<DistinguishedAlumni />} />
          <Route path="/mentorship" element={<Mentorship />} />
          <Route path="/give-back" element={<GiveBack />} />
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