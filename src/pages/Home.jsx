import React from 'react';
import { Link } from 'react-router-dom';
import { Award, ArrowRight, TrendingUp, Globe, Building2, CheckCircle, ShieldCheck, Users, Briefcase, UserCheck, MessageSquare } from 'lucide-react';
import './Home.css';

const Home = () => {
  return (
    <div className="home-page">

      {/* ── 1. HERO SECTION (4K Ultra HD Drone Campus View) ── */}
      <section className="hero">
        <div className="hero-overlay"></div>
        <div className="container hero-content">
          <div className="hero-badge">
            <ShieldCheck size={16} /> Official Alumni Network — IIIT Kottayam
          </div>
          <h1>
            Generating Knowledge <br />for the Future
          </h1>
          <p>
            Welcome to the Official Alumni Association of the Indian Institute of Information Technology Kottayam. Reconnect with batchmates, collaborate on frontier research, mentor rising engineers, and explore global career horizons.
          </p>
          <div className="hero-actions">
            <Link to="/directory" className="hero-btn-primary">
              <Users size={18} /> Explore Alumni Directory
            </Link>
            <Link to="/about" className="hero-btn-secondary">
              About Alma Mater <ArrowRight size={18} />
            </Link>
          </div>
        </div>
      </section>

      {/* ── 2. OFFICIAL STATISTICS (Floating Elevated Card) ── */}
      <section className="statistics">
        <div className="container">
          <div className="stats-grid">
            <div className="stat-card">
              <TrendingUp size={36} className="stat-icon" style={{ color: '#10b981' }} />
              <h3>₹58.93 LPA</h3>
              <p>Highest CTC Offered</p>
            </div>
            <div className="stat-card">
              <Award size={36} className="stat-icon" style={{ color: 'var(--secondary-color)' }} />
              <h3>₹14.32 LPA</h3>
              <p>Average Package</p>
            </div>
            <div className="stat-card">
              <Globe size={36} className="stat-icon" style={{ color: '#3b82f6' }} />
              <h3>85%+</h3>
              <p>Global Placements</p>
            </div>
            <div className="stat-card">
              <Building2 size={36} className="stat-icon" style={{ color: '#8b5cf6' }} />
              <h3>53 Acres</h3>
              <p>Permanent Green Campus</p>
            </div>
          </div>
        </div>
      </section>

      {/* ── 3. OFFICIAL WELCOME & INSTITUTION SHOWCASE ── */}
      <section className="welcome">
        <div className="container welcome-container">
          <div className="welcome-text">
            <span className="tagline">An Institution of National Importance</span>
            <h2>Imparting Top-Notch Technological Education</h2>
            <p>
              IIIT Kottayam imparts premier technological education at the undergraduate, postgraduate and doctoral levels and occupies a leading position among the newly formed IIITs under the Ministry of Education, Government of India.
            </p>
            <p>
              By adopting an entrepreneurial approach, utilizing contemporary teaching techniques, and addressing major societal challenges, we have made technical education responsive to the evolving needs of industry and global academia.
            </p>
            <div className="welcome-highlights">
              <div className="welcome-highlight-item">
                <CheckCircle size={18} color="#10b981" /> 100% Anti-Ragging Campus
              </div>
              <div className="welcome-highlight-item">
                <CheckCircle size={18} color="#10b981" /> 16 Specialized Research Labs
              </div>
              <div className="welcome-highlight-item">
                <CheckCircle size={18} color="#10b981" /> International MoUs &amp; Exchanges
              </div>
              <div className="welcome-highlight-item">
                <CheckCircle size={18} color="#10b981" /> Active Gyaan Innovation Cell
              </div>
            </div>
            <Link to="/about" className="link-with-icon">
              Learn more about our institution <ArrowRight size={18} />
            </Link>
          </div>
          <div className="welcome-image-wrapper">
            <img 
              src="/images/campus/newiiitk.jpg" 
              alt="IIIT Kottayam Modern Academic Complex" 
            />
          </div>
        </div>
      </section>

      {/* ── 4. TOP RECRUITERS & GLOBAL INDUSTRY PARTNERS ── */}
      <section className="recruiters-section">
        <div className="container text-center">
          <span className="section-subtitle-tag" style={{ textAlign: 'center', display: 'block' }}>Career &amp; Industry Placement Reach</span>
          <h2 className="section-title" style={{ marginTop: '8px', marginBottom: '16px' }}>Where Our Alumni Excel</h2>
          <p className="subtitle" style={{ maxWidth: '700px', margin: '0 auto 36px', textAlign: 'center', color: '#64748b', fontSize: '1.02rem' }}>
            Graduates of IIIT Kottayam contribute at the forefront of global engineering, research, and product leadership across premier multinationals.
          </p>
          <div className="recruiters-badges">
            {['Amazon', 'NVIDIA', 'Google', 'Microsoft', 'Palo Alto Networks', 'Bosch', 'IBM', 'Human Resocia (Japan)', 'Goldman Sachs', 'Deloitte', 'Commvault', 'Zoho Corporation', 'Tata Elxsi', 'TCS', 'Infosys', 'Cognizant'].map(company => (
              <div key={company} className="company-badge">
                {company}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── 5. LATEST NEWS & UPCOMING EVENTS ── */}
      <section className="news-events">
        <div className="container">
          <div className="split-layout">
            <div className="news-section">
              <span className="section-subtitle-tag">Announcements</span>
              <h3 className="section-heading-sm">Latest Institute &amp; Alumni News</h3>
              <div className="news-list">
                <div className="news-item">
                  <div className="news-date-badge">
                    <span className="month">NOV</span>
                    <span className="day">21</span>
                  </div>
                  <div className="news-content">
                    <h4>Staff Recruitment &amp; Research Fellow Updates</h4>
                    <p>Updates of Staff Recruitment against Advt. No. IIITK/01/12/2025.</p>
                  </div>
                </div>
                <div className="news-item">
                  <div className="news-date-badge">
                    <span className="month">AUG</span>
                    <span className="day">15</span>
                  </div>
                  <div className="news-content">
                    <h4>e-M.Tech &amp; Ph.D. Admissions August Batch</h4>
                    <p>List of candidates provisionally selected for advanced degree programmes.</p>
                  </div>
                </div>
                <div className="news-item">
                  <div className="news-date-badge">
                    <span className="month">JUL</span>
                    <span className="day">08</span>
                  </div>
                  <div className="news-content">
                    <h4>MoU with Human Resocia &amp; Global IT Talent Japan</h4>
                    <p>Bilateral partnership facilitating student placements and international internships.</p>
                  </div>
                </div>
              </div>
              <div style={{ marginTop: '24px' }}>
                <Link to="/news" className="btn btn-secondary">View All News &amp; Bulletins</Link>
              </div>
            </div>
            
            <div className="events-section">
              <span className="section-subtitle-tag">Gatherings</span>
              <h3 className="section-heading-sm">Upcoming Events</h3>
              <div className="events-list">
                <div className="event-item">
                  <div className="event-calendar">
                    <span className="month">NOV</span>
                    <span className="day">15</span>
                  </div>
                  <div className="event-info">
                    <h4>Global Alumni Reunion 2026</h4>
                    <p>Varenyam Senate Hall, IIITK Campus &amp; Hybrid</p>
                  </div>
                </div>
                <div className="event-item">
                  <div className="event-calendar">
                    <span className="month">AUG</span>
                    <span className="day">22</span>
                  </div>
                  <div className="event-info">
                    <h4>Tech Talk: Future of AI in Enterprise</h4>
                    <p>Zoom Webinar with Industry Alumni</p>
                  </div>
                </div>
                <div className="event-item">
                  <div className="event-calendar">
                    <span className="month">SEP</span>
                    <span className="day">10</span>
                  </div>
                  <div className="event-info">
                    <h4>ICITIIT International Conference 2026</h4>
                    <p>Annual Computing &amp; IT Flagship Symposium</p>
                  </div>
                </div>
              </div>
              <div style={{ marginTop: '24px' }}>
                <Link to="/events" className="btn btn-secondary">View All Events</Link>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* ── 6. QUICK LINKS / ACTIONS ── */}
      <section className="quick-links">
        <div className="container text-center">
          <span className="section-subtitle-tag" style={{ textAlign: 'center', display: 'block' }}>Engage &amp; Contribute</span>
          <h2 className="section-title" style={{ marginTop: '8px', marginBottom: '12px' }}>Connect with IIIT Kottayam Alumni Portal</h2>
          <p style={{ color: '#64748b', maxWidth: '640px', margin: '0 auto 10px', fontSize: '1.02rem' }}>
            Everything you need to give back, connect, and collaborate with your alma mater.
          </p>
          <div className="quick-links-grid">
            <Link to="/directory" className="quick-link-box">
              <Users size={32} color="var(--primary-color)" />
              <span>Find Alumni Directory</span>
            </Link>
            <Link to="/jobs" className="quick-link-box">
              <Briefcase size={32} color="var(--primary-color)" />
              <span>Jobs &amp; Referrals</span>
            </Link>
            <Link to="/mentorship" className="quick-link-box">
              <UserCheck size={32} color="var(--primary-color)" />
              <span>Become a Mentor</span>
            </Link>
            <Link to="/contact" className="quick-link-box">
              <MessageSquare size={32} color="var(--primary-color)" />
              <span>Contact Administration</span>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
