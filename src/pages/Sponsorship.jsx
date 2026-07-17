import React from 'react';
import { Star, Award, Shield, Mail, Phone, ArrowRight, CheckCircle } from 'lucide-react';

const sponsorTiers = [
  {
    tier: 'Gold Sponsor',
    icon: '🥇',
    amount: '₹5,00,000 & above',
    color: '#C9A24B',
    bg: '#fffbf0',
    border: '#C9A24B',
    benefits: [
      'Premier branding on all alumni events and portal',
      'Dedicated booth / display at the Annual Alumni Meet',
      'Logo placement on Alumni Portal homepage banner',
      'Opportunity to address alumni and students',
      'Featured in official alumni newsletters and press releases',
      'Recognition on the IIIT Kottayam website',
      'Priority placement for campus recruitment drives',
    ],
  },
  {
    tier: 'Silver Sponsor',
    icon: '🥈',
    amount: '₹2,00,000 – ₹4,99,999',
    color: '#8C94AA',
    bg: '#f7f8fa',
    border: '#8C94AA',
    benefits: [
      'Branding at alumni events and networking sessions',
      'Logo placement in event materials and banners',
      'Recognition in the official alumni newsletter',
      'Featured on the sponsorship page of the Alumni Portal',
      'Participation in campus recruitment drives',
    ],
  },
  {
    tier: 'Bronze Sponsor',
    icon: '🥉',
    amount: '₹50,000 – ₹1,99,999',
    color: '#CD7F32',
    bg: '#fff8f5',
    border: '#CD7F32',
    benefits: [
      'Logo displayed in event programmes',
      'Name recognition in the alumni portal',
      'Acknowledgement at the Annual Alumni Meet',
      'Access to alumni networking opportunities',
    ],
  },
];

const Sponsorship = () => {
  return (
    <div className="about-page section-padding">
      <div className="container">

        {/* Header */}
        <div className="about-header text-center mb-5">
          <h1 className="section-title">Sponsorship</h1>
          <p className="subtitle">Partner with IIIT Kottayam Alumni Association — invest in the future of technology and innovation</p>
        </div>

        {/* Why Sponsor */}
        <div className="about-grid" style={{ marginBottom: '60px' }}>
          <div className="about-text">
            <h2>Why Sponsor IIIT Kottayam Alumni?</h2>
            <p>
              IIIT Kottayam is one of India's fastest-growing Institutions of National Importance, producing a new generation of technologists, researchers, and innovators every year. By partnering with the IIIT Kottayam Official Alumni Association, your organisation connects directly with a dynamic community of professionals and students at the cutting edge of technology.
            </p>
            <p>
              Sponsorship is not just a financial contribution — it is a strategic partnership that positions your brand at the heart of India's IT education ecosystem. Whether your goal is talent acquisition, brand visibility, or a commitment to social responsibility, sponsoring IIIT Kottayam alumni initiatives delivers tangible value.
            </p>
            <ul style={{ marginLeft: '20px', color: '#555', lineHeight: 2 }}>
              <li>Direct access to a talent pipeline of skilled IT graduates</li>
              <li>High-visibility branding across events and digital platforms</li>
              <li>CSR alignment with national education and innovation goals</li>
              <li>Association with a nationally recognised institution</li>
            </ul>
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
            <div className="card p-4">
              <Award size={36} style={{ color: 'var(--secondary-color)', marginBottom: '10px' }} />
              <h4 style={{ color: 'var(--primary-color)' }}>Institution of National Importance</h4>
              <p style={{ color: '#555', fontSize: '0.92rem' }}>Established by Act of Parliament, IIIT Kottayam enjoys the highest academic recognition in India.</p>
            </div>
            <div className="card p-4">
              <Star size={36} style={{ color: 'var(--secondary-color)', marginBottom: '10px' }} />
              <h4 style={{ color: 'var(--primary-color)' }}>Growing Alumni Base</h4>
              <p style={{ color: '#555', fontSize: '0.92rem' }}>A rapidly expanding community of engineers, entrepreneurs, and researchers across top global firms.</p>
            </div>
            <div className="card p-4">
              <Shield size={36} style={{ color: 'var(--secondary-color)', marginBottom: '10px' }} />
              <h4 style={{ color: 'var(--primary-color)' }}>Transparent & Accountable</h4>
              <p style={{ color: '#555', fontSize: '0.92rem' }}>All sponsorship contributions are managed with full transparency and used exclusively for alumni programmes.</p>
            </div>
          </div>
        </div>

        {/* Sponsor Tiers */}
        <h2 className="section-title">Sponsorship Tiers</h2>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '28px', marginBottom: '60px' }}>
          {sponsorTiers.map((tier) => (
            <div key={tier.tier} className="card p-5" style={{ borderLeft: `5px solid ${tier.border}`, background: tier.bg }}>
              <div className="flex-row" style={{ flexWrap: 'wrap', gap: '24px', alignItems: 'flex-start' }}>
                <div style={{ textAlign: 'center', flexShrink: 0, minWidth: '120px' }}>
                  <div style={{ fontSize: '52px', marginBottom: '8px' }}>{tier.icon}</div>
                  <h3 style={{ color: tier.color, margin: 0, fontSize: '1.1rem' }}>{tier.tier}</h3>
                  <p style={{ color: '#555', fontSize: '0.88rem', marginTop: '4px', fontWeight: 600 }}>{tier.amount}</p>
                </div>
                <div style={{ flex: 1 }}>
                  <h4 style={{ color: 'var(--primary-color)', marginBottom: '12px' }}>Sponsor Benefits</h4>
                  <ul style={{ listStyle: 'none', padding: 0 }}>
                    {tier.benefits.map((b, i) => (
                      <li key={i} style={{ display: 'flex', gap: '10px', alignItems: 'flex-start', marginBottom: '8px', color: '#444' }}>
                        <CheckCircle size={16} style={{ color: tier.color, flexShrink: 0, marginTop: '3px' }} />
                        <span style={{ fontSize: '0.93rem', lineHeight: 1.5 }}>{b}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Partner Opportunities */}
        <h2 className="section-title">Partner Opportunities</h2>
        <div className="mission-vision-grid" style={{ marginBottom: '60px' }}>
          <div className="card p-4 text-center">
            <div style={{ fontSize: '40px', marginBottom: '12px' }}>🎓</div>
            <h4 style={{ color: 'var(--primary-color)', marginBottom: '8px' }}>Scholarship Sponsorship</h4>
            <p style={{ color: '#555', fontSize: '0.9rem', lineHeight: 1.7 }}>Sponsor merit or need-based scholarships for deserving IIIT Kottayam students and build lasting goodwill.</p>
          </div>
          <div className="card p-4 text-center">
            <div style={{ fontSize: '40px', marginBottom: '12px' }}>💼</div>
            <h4 style={{ color: 'var(--primary-color)', marginBottom: '8px' }}>Internship & Placement</h4>
            <p style={{ color: '#555', fontSize: '0.9rem', lineHeight: 1.7 }}>Offer internship and placement opportunities to students and gain priority access to top talent.</p>
          </div>
          <div className="card p-4 text-center">
            <div style={{ fontSize: '40px', marginBottom: '12px' }}>🏆</div>
            <h4 style={{ color: 'var(--primary-color)', marginBottom: '8px' }}>Event Sponsorship</h4>
            <p style={{ color: '#555', fontSize: '0.9rem', lineHeight: 1.7 }}>Title-sponsor hackathons, tech fests, alumni meets, and industry seminars hosted by the institute.</p>
          </div>
          <div className="card p-4 text-center">
            <div style={{ fontSize: '40px', marginBottom: '12px' }}>🔬</div>
            <h4 style={{ color: 'var(--primary-color)', marginBottom: '8px' }}>Research & Lab Support</h4>
            <p style={{ color: '#555', fontSize: '0.9rem', lineHeight: 1.7 }}>Fund research projects, labs, or chairs and gain recognition as a knowledge partner of IIIT Kottayam.</p>
          </div>
        </div>

        {/* Sponsor Registration & Contact */}
        <div className="card p-5 text-center" style={{ background: 'linear-gradient(135deg, var(--primary-color) 0%, #1a4a9e 100%)', color: 'white' }}>
          <h2 style={{ color: 'white', marginBottom: '12px' }}>Become a Sponsor</h2>
          <p style={{ color: 'rgba(255,255,255,0.85)', maxWidth: '600px', margin: '0 auto 24px', lineHeight: 1.7 }}>
            To register as a sponsor, propose a partnership, or request a detailed sponsorship prospectus, please contact the Alumni Affairs Office. We look forward to building a meaningful and impactful partnership with you.
          </p>
          <div style={{ display: 'flex', gap: '16px', justifyContent: 'center', flexWrap: 'wrap', marginBottom: '24px' }}>
            <a href="mailto:alumni@iiitkottayam.ac.in" className="btn" style={{ background: 'var(--secondary-color)', color: 'white' }}>
              <Mail size={16} style={{ verticalAlign: 'middle', marginRight: '6px' }} />
              Register as Sponsor
            </a>
            <a href="mailto:registrar@iiitkottayam.ac.in" className="btn btn-secondary" style={{ borderColor: 'white', color: 'white' }}>
              Request Prospectus <ArrowRight size={16} style={{ verticalAlign: 'middle' }} />
            </a>
          </div>
          <div style={{ display: 'flex', gap: '32px', justifyContent: 'center', flexWrap: 'wrap' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px', color: 'rgba(255,255,255,0.9)' }}>
              <Mail size={16} />
              <span>alumni@iiitkottayam.ac.in</span>
            </div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px', color: 'rgba(255,255,255,0.9)' }}>
              <Phone size={16} />
              <span>+91 0482 2202100</span>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
};

export default Sponsorship;
