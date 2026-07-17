import React from 'react';
import { Mail, Phone, MapPin, Building2 } from 'lucide-react';

const DirectorMessage = () => {
  return (
    <div className="about-page section-padding">
      <div className="container">

        {/* Page Header */}
        <div className="about-header text-center mb-5">
          <h1 className="section-title">Message from the Director</h1>
          <p className="subtitle">Leadership vision and a personal note from the Director of IIIT Kottayam</p>
        </div>

        {/* Director Card */}
        <div className="card p-5" style={{ maxWidth: '900px', margin: '0 auto' }}>
          <div className="flex-row" style={{ flexWrap: 'wrap', gap: '40px', alignItems: 'flex-start' }}>

            {/* Director Photo */}
            <div style={{ textAlign: 'center', flexShrink: 0 }}>
              <div style={{
                width: '200px',
                height: '200px',
                borderRadius: '50%',
                background: 'linear-gradient(135deg, var(--primary-color) 0%, #1a4a9e 100%)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                margin: '0 auto 16px',
                border: '4px solid var(--secondary-color)',
                overflow: 'hidden',
                boxShadow: '0 8px 24px rgba(0,0,0,0.15)'
              }}>
                <span style={{ fontSize: '72px', color: 'white', fontWeight: 700, lineHeight: 1 }}>PK</span>
              </div>
              <h3 style={{ color: 'var(--primary-color)', marginBottom: '4px' }}>Prof. Prasad Krishna</h3>
              <p style={{ color: 'var(--secondary-color)', fontWeight: 600, fontSize: '0.95rem' }}>Director (Additional Charge)</p>
              <p style={{ color: '#6c757d', fontSize: '0.88rem', marginTop: '4px' }}>IIIT Kottayam</p>
            </div>

            {/* Director Message */}
            <div style={{ flex: 1, minWidth: '260px' }}>
              <blockquote style={{
                borderLeft: '4px solid var(--secondary-color)',
                paddingLeft: '20px',
                marginBottom: '24px',
                fontStyle: 'italic',
                color: '#444',
                lineHeight: 1.9
              }}>
                <p style={{ marginBottom: '16px' }}>
                  "It gives me immense pleasure to welcome you to the IIIT Kottayam Alumni Portal — a dedicated platform that bridges the institute with its greatest ambassadors: our alumni.
                </p>
                <p style={{ marginBottom: '16px' }}>
                  IIIT Kottayam was founded with a singular purpose — to cultivate outstanding technologists, researchers, and entrepreneurs who contribute meaningfully to India's knowledge economy and to the world at large. Our motto, <em>'Generating Knowledge for the Future,'</em> captures the spirit with which every student and faculty member engages with their work.
                </p>
                <p style={{ marginBottom: '16px' }}>
                  As an alumnus of this institution, you carry forward its values of excellence, integrity, and innovation. Your professional accomplishments serve as an inspiration to the students and scholars of today, and your continued engagement with the institute enriches our academic and research ecosystem.
                </p>
                <p>
                  I urge you to remain connected — not just through this portal, but through active mentorship, collaboration, and contribution. Together, let us build a future that reflects the best of what IIIT Kottayam stands for."
                </p>
              </blockquote>
              <div style={{ borderTop: '1px solid #e2e8f0', paddingTop: '16px' }}>
                <p style={{ fontWeight: 700, color: 'var(--primary-color)' }}>Prof. Prasad Krishna</p>
                <p style={{ color: '#6c757d', fontSize: '0.9rem' }}>Director (Additional Charge), IIIT Kottayam</p>
                <p style={{ color: '#6c757d', fontSize: '0.9rem' }}>Director, NIT Calicut</p>
              </div>
            </div>
          </div>
        </div>

        {/* Office Info */}
        <div className="mt-5">
          <h2 className="section-title">Director's Office</h2>
          <div className="mission-vision-grid">

            <div className="card p-4">
              <div style={{ display: 'flex', gap: '16px', alignItems: 'flex-start' }}>
                <Building2 size={32} style={{ color: 'var(--secondary-color)', flexShrink: 0 }} />
                <div>
                  <h4 style={{ color: 'var(--primary-color)', marginBottom: '8px' }}>Office Address</h4>
                  <p style={{ color: '#555', lineHeight: 1.7 }}>
                    Office of the Director<br />
                    Indian Institute of Information Technology Kottayam<br />
                    Valavoor P.O., Pala<br />
                    Kottayam District, Kerala – 686635
                  </p>
                </div>
              </div>
            </div>

            <div className="card p-4">
              <div style={{ display: 'flex', gap: '16px', alignItems: 'flex-start' }}>
                <Phone size={32} style={{ color: 'var(--secondary-color)', flexShrink: 0 }} />
                <div>
                  <h4 style={{ color: 'var(--primary-color)', marginBottom: '8px' }}>Contact – General Enquiry</h4>
                  <p style={{ color: '#555', lineHeight: 1.7 }}>
                    +91 0482 2202100<br />
                    +91 0482 2352100
                  </p>
                </div>
              </div>
            </div>

            <div className="card p-4">
              <div style={{ display: 'flex', gap: '16px', alignItems: 'flex-start' }}>
                <Mail size={32} style={{ color: 'var(--secondary-color)', flexShrink: 0 }} />
                <div>
                  <h4 style={{ color: 'var(--primary-color)', marginBottom: '8px' }}>Official Email</h4>
                  <p style={{ color: '#555', lineHeight: 1.7 }}>
                    <a href="mailto:registrar@iiitkottayam.ac.in" style={{ color: 'var(--primary-color)', fontWeight: 600 }}>
                      registrar@iiitkottayam.ac.in
                    </a>
                  </p>
                </div>
              </div>
            </div>

            <div className="card p-4">
              <div style={{ display: 'flex', gap: '16px', alignItems: 'flex-start' }}>
                <MapPin size={32} style={{ color: 'var(--secondary-color)', flexShrink: 0 }} />
                <div>
                  <h4 style={{ color: 'var(--primary-color)', marginBottom: '8px' }}>Location</h4>
                  <p style={{ color: '#555', lineHeight: 1.7 }}>
                    Valavoor, Pala — Located in the picturesque Kottayam district of Kerala, India.
                  </p>
                  <a
                    href="https://maps.google.com/?q=IIIT+Kottayam+Valavoor+Pala+Kerala"
                    target="_blank"
                    rel="noreferrer"
                    className="link-with-icon mt-4"
                    style={{ display: 'inline-flex' }}
                  >
                    View on Maps →
                  </a>
                </div>
              </div>
            </div>

          </div>
        </div>

      </div>
    </div>
  );
};

export default DirectorMessage;
