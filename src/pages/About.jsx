import React from 'react';
import { Link } from 'react-router-dom';
import { BookOpen, Users, Award, Lightbulb, ArrowRight, MapPin, Globe } from 'lucide-react';

const About = () => {
  return (
    <div className="about-page section-padding">
      <div className="container">
        <div className="about-header text-center mb-5">
          <h1 className="section-title">About IIIT Kottayam</h1>
          <p className="subtitle">Indian Institute of Information Technology Kottayam — An Institution of National Importance</p>
        </div>

        <div className="about-grid">
          <div className="about-text">
            <h2>Our Institution</h2>
            <p>
              The Indian Institute of Information Technology Kottayam (IIIT Kottayam) is a premier technical institute established in 2015 under the Public-Private Partnership (PPP) model of the Government of India. It was accorded the status of an "Institution of National Importance" by an Act of Parliament in 2017.
            </p>
            <p>
              Nestled in the serene surroundings of Valavoor, near Pala, in the Kottayam district of Kerala, the institute is dedicated to advancing knowledge and innovation in the domains of Information Technology and allied research areas.
            </p>
            <p>
              With a commitment to academic rigor, research excellence, and entrepreneurial development, IIIT Kottayam prepares its graduates to be industry-ready professionals and socially responsible individuals who contribute meaningfully to the nation and the world.
            </p>
            <div className="mt-4" style={{ display: 'flex', gap: '12px', flexWrap: 'wrap' }}>
              <Link to="/about/history" className="btn btn-secondary">Institute History <ArrowRight size={16} style={{ verticalAlign: 'middle' }} /></Link>
              <Link to="/about/vision" className="btn btn-primary">Vision & Mission <ArrowRight size={16} style={{ verticalAlign: 'middle' }} /></Link>
            </div>
          </div>
          <div className="about-image">
            <img src="/images/iiitk_campus.jpg" alt="IIIT Kottayam Campus – Valavoor, Pala" className="rounded-image shadow" />
          </div>
        </div>

        {/* Key Facts */}
        <div className="mission-vision-grid mt-5">
          <div className="card text-center p-4">
            <BookOpen size={48} className="text-primary mb-3 mx-auto" />
            <h3>Established 2015</h3>
            <p>Founded under the PPP model of the Ministry of Education, Government of India, with Kottayam district and industry as partners.</p>
          </div>
          <div className="card text-center p-4">
            <Award size={48} className="text-primary mb-3 mx-auto" />
            <h3>Institution of National Importance</h3>
            <p>Declared an Institution of National Importance by an Act of Parliament in 2017, placing IIIT Kottayam among the finest technical institutions in India.</p>
          </div>
          <div className="card text-center p-4">
            <Lightbulb size={48} className="text-primary mb-3 mx-auto" />
            <h3>Research & Innovation</h3>
            <p>Focused on cutting-edge research in IoT, Cloud Computing, Data Science, Cybersecurity, and Artificial Intelligence to solve real-world challenges.</p>
          </div>
          <div className="card text-center p-4">
            <Users size={48} className="text-primary mb-3 mx-auto" />
            <h3>Global Alumni Network</h3>
            <p>A growing community of dedicated alumni spread across leading technology firms, research institutions, and entrepreneurial ventures worldwide.</p>
          </div>
        </div>

        {/* Location */}
        <div className="card p-5 mt-5">
          <h2 className="text-center" style={{ marginBottom: '24px', color: 'var(--primary-color)' }}>Campus & Location</h2>
          <div className="flex-row" style={{ flexWrap: 'wrap', gap: '32px' }}>
            <div style={{ flex: 1, minWidth: '240px' }}>
              <div style={{ display: 'flex', alignItems: 'flex-start', gap: '12px', marginBottom: '16px' }}>
                <MapPin size={22} style={{ color: 'var(--secondary-color)', marginTop: '2px', flexShrink: 0 }} />
                <div>
                  <strong>Permanent Campus Address</strong>
                  <p style={{ marginTop: '4px', color: '#555' }}>
                    Indian Institute of Information Technology Kottayam<br />
                    Valavoor P.O., Pala<br />
                    Kottayam District, Kerala – 686635<br />
                    India
                  </p>
                </div>
              </div>
              <div style={{ display: 'flex', alignItems: 'flex-start', gap: '12px' }}>
                <Globe size={22} style={{ color: 'var(--secondary-color)', marginTop: '2px', flexShrink: 0 }} />
                <div>
                  <strong>Official Website</strong>
                  <p style={{ marginTop: '4px' }}>
                    <a href="https://www.iiitkottayam.ac.in" target="_blank" rel="noreferrer" style={{ color: 'var(--primary-color)', fontWeight: 600 }}>
                      www.iiitkottayam.ac.in
                    </a>
                  </p>
                </div>
              </div>
            </div>
            <div style={{ flex: 1, minWidth: '240px' }}>
              <p style={{ color: '#555', lineHeight: 1.8 }}>
                The institute commenced its academic operations in 2015 at a temporary campus hosted by Amal Jyothi College of Engineering. It subsequently relocated to its permanent, purpose-built campus at Valavoor in 2019, which now houses modern academic blocks, research laboratories, hostels, and other student-centric facilities.
              </p>
            </div>
          </div>
        </div>

        {/* About Dropdown Quick Links */}
        <div className="mt-5">
          <h2 className="section-title">Explore More</h2>
          <div className="mission-vision-grid">
            <Link to="/about/director" className="card text-center p-4" style={{ textDecoration: 'none', display: 'block' }}>
              <h3 style={{ color: 'var(--primary-color)' }}>Message from Director</h3>
              <p>A word from the Director of IIIT Kottayam on the institute's vision and alumni's role.</p>
              <span className="link-with-icon mt-4" style={{ justifyContent: 'center' }}>Read Message <ArrowRight size={16} /></span>
            </Link>
            <Link to="/about/vision" className="card text-center p-4" style={{ textDecoration: 'none', display: 'block' }}>
              <h3 style={{ color: 'var(--primary-color)' }}>Vision & Mission</h3>
              <p>Discover the core principles and objectives that guide IIIT Kottayam towards excellence.</p>
              <span className="link-with-icon mt-4" style={{ justifyContent: 'center' }}>Learn More <ArrowRight size={16} /></span>
            </Link>
            <Link to="/about/committee" className="card text-center p-4" style={{ textDecoration: 'none', display: 'block' }}>
              <h3 style={{ color: 'var(--primary-color)' }}>Alumni Committee</h3>
              <p>Meet the dedicated faculty and student coordinators driving the alumni association.</p>
              <span className="link-with-icon mt-4" style={{ justifyContent: 'center' }}>Meet the Team <ArrowRight size={16} /></span>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
