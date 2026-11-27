import React from 'react';
import { Award, Linkedin, Twitter, ExternalLink, GraduationCap, Briefcase } from 'lucide-react';

const distinguishedAlumni = [
  {
    id: 1,
    name: 'Vinay Kumar Maddiralla',
    batch: '2016 (Founding Batch)',
    role: 'Aerospace Systems Engineer',
    org: 'Cranfield University & Aerospace Tech',
    achievement: 'Higher Studies & Research at Cranfield University, UK',
    description: 'A member of the historic founding 2016 batch of IIIT Kottayam. After excelling in CSE, Vinay pursued advanced research at Cranfield University, United Kingdom, and now works on high-integrity computational systems.',
    image: '/images/alumni_1.jpg'
  },
  {
    id: 2,
    name: 'Rahul Sharma',
    batch: '2019',
    role: 'Senior Software Engineer',
    org: 'Google',
    achievement: 'Android Core Engineering & Security',
    description: 'Rahul is a key contributor to Google’s Android OS core systems team. He frequently presents on mobile OS security at international conferences and mentors rising engineers at IIIT Kottayam.',
    image: '/images/alumni_3.jpg'
  },
  {
    id: 3,
    name: 'Priya Patel',
    batch: '2020',
    role: 'Product Manager',
    org: 'Microsoft',
    achievement: 'Top 30 Under 30 in Tech',
    description: 'Priya leads user-centric product engineering at Microsoft. Her pioneering work on accessible design systems has been rolled out across global platforms and recognized in leading tech publications.',
    image: '/images/alumni_2.jpg'
  },
  {
    id: 4,
    name: 'Koppeti Daniel Kamal Raj',
    batch: '2016 (Founding Batch)',
    role: 'Senior Cloud Consultant',
    org: 'Tata Consultancy Services',
    achievement: 'Enterprise Cloud Architecture Leader',
    description: 'From the pioneer 2016 batch, Daniel has architected mission-critical enterprise cloud solutions for top-tier Fortune 500 financial clients at TCS, actively guiding campus recruitment drives.',
    image: 'https://images.unsplash.com/photo-1556157382-97eda2d62296?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 5,
    name: 'Sneha Gupta',
    batch: '2021',
    role: 'Software Development Engineer II',
    org: 'Amazon',
    achievement: 'AWS High-Scale Distributed Systems',
    description: 'Sneha works on large-scale distributed architectures within Amazon Web Services (AWS), handling millions of transactions per second, and conducts open tech webinars for students.',
    image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 6,
    name: 'Anand Verma',
    batch: '2018',
    role: 'Founder & CEO',
    org: 'TechNova Platform',
    achievement: 'Closed $5M Series A Venture Funding',
    description: 'Anand built TechNova from a campus incubation project at IIIT Kottayam to an enterprise SaaS platform with operations across India, Singapore, and the US, raising $5M in institutional venture funding.',
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=800&q=80'
  }
];

const DistinguishedAlumni = () => {
  return (
    <div className="distinguished-page section-padding bg-light">
      <div className="container">
        <div className="text-center mb-5">
          <span style={{ color: 'var(--secondary-color)', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '1px', fontSize: '0.85rem' }}>Pride of IIIT Kottayam</span>
          <h1 className="section-title" style={{ marginTop: '6px' }}>Distinguished Alumni</h1>
          <p className="subtitle">Celebrating graduates of IIIT Kottayam who are shaping technology, founding high-impact startups, and leading global research.</p>
        </div>

        <div className="distinguished-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '32px' }}>
          {distinguishedAlumni.map(alumni => (
            <div key={alumni.id} className="card p-0 overflow-hidden" style={{ borderRadius: '15px', border: 'none', boxShadow: '0 8px 24px rgba(0,0,0,0.06)', display: 'flex', flexDirection: 'column' }}>
              <div className="card-header" style={{ position: 'relative', height: '230px' }}>
                <img src={alumni.image} alt={alumni.name} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                <div style={{ position: 'absolute', bottom: '0', left: '0', right: '0', background: 'linear-gradient(to top, rgba(13,43,94,0.95), transparent)', padding: '20px 20px 14px', color: 'white' }}>
                  <h3 className="mb-1" style={{ color: 'white', fontSize: '1.25rem' }}>{alumni.name}</h3>
                  <p style={{ margin: 0, opacity: 0.9, fontSize: '0.85rem', color: 'var(--secondary-color)', fontWeight: 600 }}>Class of {alumni.batch}</p>
                </div>
              </div>
              <div className="card-body p-4 text-center" style={{ flex: 1, display: 'flex', flexDirection: 'column' }}>
                <div style={{ display: 'inline-flex', alignItems: 'center', justifyContent: 'center', gap: '8px', color: 'var(--primary-color)', background: '#e8f0fe', padding: '6px 14px', borderRadius: '20px', marginBottom: '14px', fontSize: '0.82rem', fontWeight: 'bold' }}>
                  <Award size={16} />
                  <span>{alumni.achievement}</span>
                </div>
                <div style={{ marginBottom: '12px', fontWeight: 600, color: '#334155', fontSize: '0.95rem' }}>
                  {alumni.role} • <span style={{ color: 'var(--secondary-color)' }}>{alumni.org}</span>
                </div>
                <p style={{ color: '#555', lineHeight: '1.6', fontSize: '0.92rem', marginBottom: '20px', flex: 1 }}>
                  {alumni.description}
                </p>
                <div className="social-links" style={{ display: 'flex', justifyContent: 'center', gap: '15px', borderTop: '1px solid #f1f5f9', paddingTop: '14px' }}>
                  <a href="https://linkedin.com" target="_blank" rel="noreferrer" style={{ color: '#0077b5' }} aria-label="LinkedIn"><Linkedin size={20} /></a>
                  <a href="https://twitter.com/IIITKottayam" target="_blank" rel="noreferrer" style={{ color: '#1DA1F2' }} aria-label="Twitter"><Twitter size={20} /></a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default DistinguishedAlumni;
