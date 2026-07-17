import React from 'react';
import { Eye, Target, Flag, Star, Lightbulb, Shield, Globe, Users } from 'lucide-react';

const VisionMission = () => {
  return (
    <div className="about-page section-padding">
      <div className="container">

        {/* Header */}
        <div className="about-header text-center mb-5">
          <h1 className="section-title">Vision & Mission</h1>
          <p className="subtitle">The guiding principles that define IIIT Kottayam's pursuit of excellence</p>
        </div>

        {/* Vision & Mission Cards */}
        <div className="about-grid" style={{ marginBottom: '48px' }}>

          {/* Vision */}
          <div className="card p-5 text-center" style={{ borderTop: '4px solid var(--primary-color)' }}>
            <Eye size={56} className="text-primary mb-3 mx-auto" />
            <h2 style={{ color: 'var(--primary-color)', marginBottom: '16px' }}>Our Vision</h2>
            <p style={{ fontSize: '1.15rem', fontStyle: 'italic', color: '#333', lineHeight: 1.8, marginBottom: '16px' }}>
              "Generating knowledge for the future."
            </p>
            <p style={{ color: '#555', lineHeight: 1.8 }}>
              To be a premier, research-led institution of international standing in the field of Information Technology and IT-enabled disciplines — a leader in knowledge generation, innovation, and the development of future-ready professionals who serve society with integrity and excellence.
            </p>
          </div>

          {/* Mission */}
          <div className="card p-5 text-center" style={{ borderTop: '4px solid var(--secondary-color)' }}>
            <Target size={56} style={{ color: 'var(--secondary-color)' }} className="mb-3 mx-auto" />
            <h2 style={{ color: 'var(--primary-color)', marginBottom: '16px' }}>Our Mission</h2>
            <p style={{ color: '#555', lineHeight: 1.8 }}>
              To establish IIIT Kottayam as a top-tier, research-driven organization that produces graduates who are competent, creative, and committed to the highest standards of professional ethics — while fostering entrepreneurship, innovation, and meaningful contributions to industry and society.
            </p>
          </div>

        </div>

        {/* Institute Objectives */}
        <div style={{ marginBottom: '48px' }}>
          <h2 className="section-title">Institute Objectives</h2>
          <div className="cards-grid">

            <div className="card p-4">
              <div style={{ display: 'flex', gap: '16px', alignItems: 'flex-start' }}>
                <Lightbulb size={36} style={{ color: 'var(--secondary-color)', flexShrink: 0 }} />
                <div>
                  <h4 style={{ color: 'var(--primary-color)', marginBottom: '8px' }}>Academic Excellence</h4>
                  <p style={{ color: '#555', lineHeight: 1.7 }}>
                    To produce graduates who are highly competent in their profession, creative in solving real-world problems, and equipped with professional ethics and a caring attitude toward society.
                  </p>
                </div>
              </div>
            </div>

            <div className="card p-4">
              <div style={{ display: 'flex', gap: '16px', alignItems: 'flex-start' }}>
                <Globe size={36} style={{ color: 'var(--secondary-color)', flexShrink: 0 }} />
                <div>
                  <h4 style={{ color: 'var(--primary-color)', marginBottom: '8px' }}>Research & Innovation</h4>
                  <p style={{ color: '#555', lineHeight: 1.7 }}>
                    To position India at the forefront of information technology research and development by fostering an environment of rigorous inquiry, collaboration, and discovery.
                  </p>
                </div>
              </div>
            </div>

            <div className="card p-4">
              <div style={{ display: 'flex', gap: '16px', alignItems: 'flex-start' }}>
                <Star size={36} style={{ color: 'var(--secondary-color)', flexShrink: 0 }} />
                <div>
                  <h4 style={{ color: 'var(--primary-color)', marginBottom: '8px' }}>Entrepreneurship & IP</h4>
                  <p style={{ color: '#555', lineHeight: 1.7 }}>
                    To transform bright young academics and researchers into "Technopreneurs" — individuals who create wealth through entrepreneurship and intellectual property generation.
                  </p>
                </div>
              </div>
            </div>

            <div className="card p-4">
              <div style={{ display: 'flex', gap: '16px', alignItems: 'flex-start' }}>
                <Users size={36} style={{ color: 'var(--secondary-color)', flexShrink: 0 }} />
                <div>
                  <h4 style={{ color: 'var(--primary-color)', marginBottom: '8px' }}>Societal Impact</h4>
                  <p style={{ color: '#555', lineHeight: 1.7 }}>
                    To solve local problems using global technologies — and vice versa — while serving as a valuable resource for industry, government, and the broader society.
                  </p>
                </div>
              </div>
            </div>

            <div className="card p-4">
              <div style={{ display: 'flex', gap: '16px', alignItems: 'flex-start' }}>
                <Shield size={36} style={{ color: 'var(--secondary-color)', flexShrink: 0 }} />
                <div>
                  <h4 style={{ color: 'var(--primary-color)', marginBottom: '8px' }}>Equity & Ethics</h4>
                  <p style={{ color: '#555', lineHeight: 1.7 }}>
                    To promote ethics, integrity, and a deep commitment to equal opportunity, equity, and justice in technical education and in all institutional activities.
                  </p>
                </div>
              </div>
            </div>

            <div className="card p-4">
              <div style={{ display: 'flex', gap: '16px', alignItems: 'flex-start' }}>
                <Flag size={36} style={{ color: 'var(--secondary-color)', flexShrink: 0 }} />
                <div>
                  <h4 style={{ color: 'var(--primary-color)', marginBottom: '8px' }}>Industry Collaboration</h4>
                  <p style={{ color: '#555', lineHeight: 1.7 }}>
                    To build strong, enduring partnerships with industry, government bodies, and international institutions to ensure that education at IIIT Kottayam remains relevant and impactful.
                  </p>
                </div>
              </div>
            </div>

          </div>
        </div>

        {/* Core Values */}
        <div>
          <h2 className="section-title">Core Values</h2>
          <div className="card p-5">
            <div style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))',
              gap: '24px',
              textAlign: 'center'
            }}>
              {[
                { label: 'Excellence', icon: '⭐', desc: 'Striving for the highest standards in all endeavors' },
                { label: 'Integrity', icon: '🤝', desc: 'Upholding honesty, transparency, and ethical conduct' },
                { label: 'Innovation', icon: '💡', desc: 'Encouraging creative thinking and breakthrough ideas' },
                { label: 'Inclusivity', icon: '🌍', desc: 'Championing equal opportunity and diversity' },
                { label: 'Service', icon: '🏛️', desc: 'Dedicating knowledge to the betterment of society' },
                { label: 'Collaboration', icon: '🔗', desc: 'Building strong networks across academia and industry' },
              ].map((v) => (
                <div key={v.label} style={{ padding: '16px' }}>
                  <div style={{ fontSize: '36px', marginBottom: '8px' }}>{v.icon}</div>
                  <h4 style={{ color: 'var(--primary-color)', marginBottom: '6px' }}>{v.label}</h4>
                  <p style={{ color: '#6c757d', fontSize: '0.88rem', lineHeight: 1.6 }}>{v.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

      </div>
    </div>
  );
};

export default VisionMission;
