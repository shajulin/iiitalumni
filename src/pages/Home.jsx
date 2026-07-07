import React from 'react';
import { Link } from 'react-router-dom';
import { Users, BookOpen, Calendar, Award, ArrowRight } from 'lucide-react';
import './Home.css';

const Home = () => {
  return (
    <div className="home-page">
      {/* Hero Banner */}
      <section className="hero">
        <div className="hero-overlay"></div>
        <div className="container hero-content">
          <h1>Welcome Back to Your Alma Mater</h1>
          <p>Connect, Engage, and Grow with the IIIT Kottayam Alumni Network.</p>
          <div className="hero-actions">
            <Link to="/register" className="btn btn-primary">Join the Network</Link>
            <Link to="/directory" className="btn btn-secondary glass">Find Alumni</Link>
          </div>
        </div>
      </section>

      {/* Alumni Statistics */}
      <section className="statistics section-padding">
        <div className="container">
          <div className="stats-grid">
            <div className="stat-card">
              <Users size={40} className="stat-icon" />
              <h3>5000+</h3>
              <p>Global Alumni</p>
            </div>
            <div className="stat-card">
              <BookOpen size={40} className="stat-icon" />
              <h3>15+</h3>
              <p>Programs</p>
            </div>
            <div className="stat-card">
              <Award size={40} className="stat-icon" />
              <h3>300+</h3>
              <p>Founders & CEOs</p>
            </div>
            <div className="stat-card">
              <Calendar size={40} className="stat-icon" />
              <h3>50+</h3>
              <p>Yearly Events</p>
            </div>
          </div>
        </div>
      </section>

      {/* Welcome Message */}
      <section className="welcome section-padding bg-light">
        <div className="container welcome-container">
          <div className="welcome-text">
            <h2>Welcome to the IIITK Alumni Portal</h2>
            <p>Our alumni are our greatest pride. This platform is designed to keep you connected with the institute and with each other. Whether you are looking for mentorship, career opportunities, or just want to catch up with old friends, you are in the right place.</p>
            <Link to="/about" className="link-with-icon">Read our story <ArrowRight size={16}/></Link>
          </div>
          <div className="welcome-image" style={{ borderRadius: '15px', overflow: 'hidden' }}>
            <img src="/images/iiitk_campus.jpg" alt="IIITK Campus" style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }} />
          </div>
        </div>
      </section>

      {/* Featured Alumni & Success Stories */}
      <section className="featured section-padding">
        <div className="container">
          <h2 className="section-title">Spotlight & Success Stories</h2>
          <div className="cards-grid">
            <div className="card">
              <div className="card-img" style={{ height: '200px' }}><img src="/images/alumni_3.jpg" alt="Anand Verma" style={{ width: '100%', height: '100%', objectFit: 'cover' }} /></div>
              <div className="card-content">
                <h3>Anand Verma</h3>
                <p className="subtitle">Founder & CEO, TechNova</p>
                <p>Read about his journey from IIIT Kottayam to raising $5M for his AI startup.</p>
                <Link to="/distinguished" className="link-with-icon">Read More <ArrowRight size={16}/></Link>
              </div>
            </div>
            <div className="card">
              <div className="card-img" style={{ height: '200px' }}><img src="/images/alumni_2.jpg" alt="Priya Patel" style={{ width: '100%', height: '100%', objectFit: 'cover' }} /></div>
              <div className="card-content">
                <h3>Priya Patel</h3>
                <p className="subtitle">Product Manager, Microsoft</p>
                <p>Read about her impactful work in accessible design and global recognition.</p>
                <Link to="/distinguished" className="link-with-icon">Read More <ArrowRight size={16}/></Link>
              </div>
            </div>
            <div className="card">
              <div className="card-img" style={{ height: '200px' }}><img src="/images/alumni_1.jpg" alt="Rahul Sharma" style={{ width: '100%', height: '100%', objectFit: 'cover' }} /></div>
              <div className="card-content">
                <h3>Rahul Sharma</h3>
                <p className="subtitle">Senior Software Engineer, Google</p>
                <p>Discover how he contributes to the core Android OS team.</p>
                <Link to="/distinguished" className="link-with-icon">Read More <ArrowRight size={16}/></Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Latest News & Upcoming Events */}
      <section className="news-events section-padding bg-light">
        <div className="container">
          <div className="split-layout">
            <div className="news-section">
              <h2 className="section-title" style={{textAlign: 'left'}}>Latest News</h2>
              <div className="news-list">
                <div className="news-item">
                  <div className="news-date" style={{ minWidth: '60px', textAlign: 'center' }}>Jun 15</div>
                  <div className="news-content">
                    <h4>IIITK Achieves 100% Placements</h4>
                    <p>Class of 2026 sets a new benchmark across top multinationals.</p>
                  </div>
                </div>
                <div className="news-item">
                  <div className="news-date" style={{ minWidth: '60px', textAlign: 'center' }}>May 28</div>
                  <div className="news-content">
                    <h4>TechNova Raises Series A</h4>
                    <p>Alumni-led startup secures $5M funding.</p>
                  </div>
                </div>
                <div className="news-item">
                  <div className="news-date" style={{ minWidth: '60px', textAlign: 'center' }}>Apr 10</div>
                  <div className="news-content">
                    <h4>New Research Block Inaugurated</h4>
                    <p>Advanced labs for Cyber Security and Data Science open.</p>
                  </div>
                </div>
              </div>
              <Link to="/news" className="btn btn-secondary mt-4">View All News</Link>
            </div>
            
            <div className="events-section">
              <h2 className="section-title" style={{textAlign: 'left'}}>Upcoming Events</h2>
              <div className="events-list">
                <div className="event-item">
                  <div className="event-calendar">
                    <span className="month">NOV</span>
                    <span className="day">15</span>
                  </div>
                  <div className="event-info">
                    <h4>Global Alumni Meet 2026</h4>
                    <p>Campus & Virtual</p>
                  </div>
                </div>
                <div className="event-item">
                  <div className="event-calendar">
                    <span className="month">AUG</span>
                    <span className="day">22</span>
                  </div>
                  <div className="event-info">
                    <h4>Tech Talk: Future of AI</h4>
                    <p>Virtual (Zoom)</p>
                  </div>
                </div>
              </div>
              <Link to="/events" className="btn btn-secondary mt-4">View All Events</Link>
            </div>
          </div>
        </div>
      </section>
      
      {/* Quick Links */}
      <section className="quick-links section-padding text-center">
        <div className="container">
          <h2>Looking for something else?</h2>
          <div className="quick-links-grid mt-4">
            <Link to="/give-back" className="quick-link-box">Make a Donation</Link>
            <Link to="/jobs" className="quick-link-box">Post a Job</Link>
            <Link to="/mentorship" className="quick-link-box">Become a Mentor</Link>
            <Link to="/contact" className="quick-link-box">Update Contact Info</Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
