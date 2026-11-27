import React from 'react';
import { Link } from 'react-router-dom';
import { BookOpen, Users, Award, Lightbulb, ArrowRight, MapPin, Globe, CheckCircle2, Shield } from 'lucide-react';

const About = () => {
  return (
    <div className="about-page section-padding">
      <div className="container">
        <div className="about-header text-center mb-5">
          <span style={{ color: 'var(--secondary-color)', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '1px', fontSize: '0.85rem' }}>About Our Alma Mater</span>
          <h1 className="section-title" style={{ marginTop: '6px' }}>Indian Institute of Information Technology Kottayam</h1>
          <p className="subtitle">An Institute of National Importance under Ministry of Education, Government of India (IIIT PPP Act, 2017)</p>
        </div>

        <div className="about-grid">
          <div className="about-text">
            <h2 style={{ color: 'var(--primary-color)' }}>Our Institution</h2>
            <p>
              The Indian Institute of Information Technology Kottayam (IIIT Kottayam) was established in 2015 under the Public-Private Partnership (PPP) model by the Ministry of Education, Government of India, the Government of Kerala, and industry partners. In 2017, the institute was declared an <strong>"Institute of National Importance"</strong> by an Act of Parliament.
            </p>
            <p>
              Located in the scenic, picturesque hills of Valavoor near Pala, Kottayam district, Kerala, the institute is set across a dedicated <strong>53-acre lush green campus</strong> equipped with modern academic blocks, advanced research laboratories, and student-centric amenities.
            </p>
            <p>
              Guided by our motto <em>"Generating Knowledge for the Future"</em>, IIIT Kottayam delivers world-class undergraduate (B.Tech in CSE, ECE, Cyber Security, AI &amp; Data Science), postgraduate (M.Tech, e-M.Tech), and Ph.D. research programmes tailored to meet global industrial and technological demands.
            </p>
            <div className="mt-4" style={{ display: 'flex', gap: '12px', flexWrap: 'wrap' }}>
              <Link to="/about/history" className="btn btn-secondary">Institute History &amp; Milestones <ArrowRight size={16} style={{ verticalAlign: 'middle' }} /></Link>
              <Link to="/about/vision" className="btn btn-primary">Vision &amp; Mission <ArrowRight size={16} style={{ verticalAlign: 'middle' }} /></Link>
            </div>
          </div>
          <div className="about-image" style={{ borderRadius: '15px', overflow: 'hidden', boxShadow: '0 12px 30px rgba(0,0,0,0.12)' }}>
            <img src="/images/campus/newAcadBlock2.jpg" alt="IIIT Kottayam Academic Block" className="rounded-image shadow" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
          </div>
        </div>

        {/* Key Institutional Pillars */}
        <div className="mission-vision-grid mt-5">
          <div className="card text-center p-4">
            <Award size={44} className="text-primary mb-3 mx-auto" />
            <h3 style={{ color: 'var(--primary-color)' }}>Institute of National Importance</h3>
            <p style={{ color: '#555', fontSize: '0.92rem', lineHeight: 1.6 }}>Conferred under the Indian Institutes of Information Technology (PPP) Act 2017 by Parliament, ensuring world-class academic governance.</p>
          </div>
          <div className="card text-center p-4">
            <Lightbulb size={44} className="text-primary mb-3 mx-auto" />
            <h3 style={{ color: 'var(--primary-color)' }}>16 Innovation &amp; Research Labs</h3>
            <p style={{ color: '#555', fontSize: '0.92rem', lineHeight: 1.6 }}>High-performance computing, Cloud, AI &amp; NLP, Cyber Security, FPGA Prototyping, and Gyaan Innovation Incubation Cell.</p>
          </div>
          <div className="card text-center p-4">
            <Globe size={44} className="text-primary mb-3 mx-auto" />
            <h3 style={{ color: 'var(--primary-color)' }}>Global Partnerships</h3>
            <p style={{ color: '#555', fontSize: '0.92rem', lineHeight: 1.6 }}>Active MoUs with TUM Germany, University of Agder Norway, University of Glasgow UK, and Human Resocia Japan for global research &amp; placements.</p>
          </div>
          <div className="card text-center p-4">
            <Users size={44} className="text-primary mb-3 mx-auto" />
            <h3 style={{ color: 'var(--primary-color)' }}>Global Alumni Network</h3>
            <p style={{ color: '#555', fontSize: '0.92rem', lineHeight: 1.6 }}>A vibrant global alumni base contributing at Google, Microsoft, Amazon, NVIDIA, Goldman Sachs, and top international research centers.</p>
          </div>
        </div>

        {/* Permanent Campus & Location Details */}
        <div className="card p-5 mt-5" style={{ boxShadow: '0 8px 24px rgba(0,0,0,0.06)' }}>
          <h2 className="text-center" style={{ marginBottom: '24px', color: 'var(--primary-color)' }}>Permanent Campus at Valavoor, Pala</h2>
          <div className="flex-row" style={{ flexWrap: 'wrap', gap: '32px' }}>
            <div style={{ flex: 1, minWidth: '260px' }}>
              <div style={{ display: 'flex', alignItems: 'flex-start', gap: '12px', marginBottom: '16px' }}>
                <MapPin size={22} style={{ color: 'var(--secondary-color)', marginTop: '2px', flexShrink: 0 }} />
                <div>
                  <strong>Permanent Campus Address</strong>
                  <p style={{ marginTop: '4px', color: '#555', lineHeight: 1.6 }}>
                    Indian Institute of Information Technology Kottayam<br />
                    Valavoor.P.O, Pala<br />
                    Kottayam District, Kerala – 686635, India
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
            <div style={{ flex: 1, minWidth: '260px' }}>
              <p style={{ color: '#555', lineHeight: 1.8 }}>
                The institute commenced operations in 2015 and moved to its permanent 53-acre campus in Valavoor in 2019. The campus features state-of-the-art academic complexes, the 'Varenyam' Senate Hall, digital libraries with IEEE/ACM subscriptions, student hostels with high-speed internet, open gyms, sports facilities, and a dedicated 100% anti-ragging green ecosystem.
              </p>
            </div>
          </div>
        </div>

        {/* Quick Links Section */}
        <div className="mt-5">
          <h2 className="section-title">Explore Institutional Governance</h2>
          <div className="mission-vision-grid">
            <Link to="/about/director" className="card p-4 text-decoration-none hover-lift">
              <h3 style={{ color: 'var(--primary-color)', marginBottom: '6px' }}>Message from the Director</h3>
              <p style={{ color: '#64748b', fontSize: '0.9rem', margin: 0 }}>Vision and message from Prof. Prasad Krishna, Director (Additional Charge).</p>
            </Link>
            <Link to="/about/vision" className="card p-4 text-decoration-none hover-lift">
              <h3 style={{ color: 'var(--primary-color)', marginBottom: '6px' }}>Vision &amp; Mission</h3>
              <p style={{ color: '#64748b', fontSize: '0.9rem', margin: 0 }}>Core principles guiding knowledge generation, entrepreneurship, and ethics.</p>
            </Link>
            <Link to="/about/committee" className="card p-4 text-decoration-none hover-lift">
              <h3 style={{ color: 'var(--primary-color)', marginBottom: '6px' }}>Alumni Committee</h3>
              <p style={{ color: '#64748b', fontSize: '0.9rem', margin: 0 }}>Faculty coordinators, Associate Dean Dr. Shajulin Benedict, and alumni representatives.</p>
            </Link>
          </div>
        </div>

      </div>
    </div>
  );
};

export default About;
