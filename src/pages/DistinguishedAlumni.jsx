import React from 'react';
import { Award, Linkedin, Twitter } from 'lucide-react';

const distinguishedAlumni = [
  {
    id: 1,
    name: 'Anand Verma',
    batch: '2018',
    achievement: 'Founder & CEO, TechNova',
    description: 'Anand founded TechNova, an AI-driven SaaS platform that recently secured $5M in Series A funding. He was named in the "Top 40 Under 40 Entrepreneurs" list for his innovative approach to solving supply chain logistics.',
    image: '/images/alumni_3.jpg'
  },
  {
    id: 2,
    name: 'Priya Patel',
    batch: '2020',
    achievement: 'Product Manager, Microsoft',
    description: 'Priya leads the accessible design team at Microsoft. Her work on inclusive tech features has been adopted globally. She was recently featured in the "30 Under 30 in Tech" list.',
    image: '/images/alumni_2.jpg'
  },
  {
    id: 3,
    name: 'Rahul Sharma',
    batch: '2019',
    achievement: 'Senior Software Engineer, Google',
    description: 'Rahul is a key contributor to the Android OS core team. He has published multiple papers on mobile operating system security and is a frequent speaker at global tech conferences.',
    image: '/images/alumni_1.jpg'
  }
];

const DistinguishedAlumni = () => {
  return (
    <div className="distinguished-page section-padding">
      <div className="container">
        <div className="text-center mb-5">
          <h1 className="section-title">Distinguished Alumni</h1>
          <p className="subtitle">Celebrating the exceptional achievements of our IIIT Kottayam graduates who are making a global impact.</p>
        </div>

        <div className="distinguished-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '40px' }}>
          {distinguishedAlumni.map(alumni => (
            <div key={alumni.id} className="card p-0 overflow-hidden" style={{ borderRadius: '15px', border: 'none', boxShadow: '0 10px 30px rgba(0,0,0,0.1)' }}>
              <div className="card-header" style={{ position: 'relative', height: '250px' }}>
                <img src={alumni.image} alt={alumni.name} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                <div style={{ position: 'absolute', bottom: '0', left: '0', right: '0', background: 'linear-gradient(to top, rgba(0,0,0,0.8), transparent)', padding: '20px', color: 'white' }}>
                  <h3 className="mb-1" style={{ color: 'white' }}>{alumni.name}</h3>
                  <p style={{ margin: 0, opacity: 0.9 }}>Class of {alumni.batch}</p>
                </div>
              </div>
              <div className="card-body p-4 text-center">
                <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', gap: '10px', color: 'var(--primary-color)', marginBottom: '15px' }}>
                  <Award size={20} />
                  <span style={{ fontWeight: 'bold' }}>{alumni.achievement}</span>
                </div>
                <p style={{ color: '#555', lineHeight: '1.6', marginBottom: '20px' }}>
                  {alumni.description}
                </p>
                <div className="social-links" style={{ display: 'flex', justifyContent: 'center', gap: '15px' }}>
                  <a href="#" style={{ color: '#0077b5' }}><Linkedin size={24} /></a>
                  <a href="#" style={{ color: '#1DA1F2' }}><Twitter size={24} /></a>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        <div className="nominate-section text-center mt-5 p-5 card" style={{ backgroundColor: 'var(--primary-color)', color: 'white' }}>
          <h2 style={{ color: 'white' }}>Know a deserving alumni?</h2>
          <p style={{ maxWidth: '600px', margin: '0 auto 20px', opacity: 0.9 }}>
            The Distinguished Alumni Award is the highest honor bestowed upon an alumnus/alumna of IIIT Kottayam. Help us recognize greatness.
          </p>
          <button className="btn btn-secondary glass">Nominate Now</button>
        </div>
      </div>
    </div>
  );
};

export default DistinguishedAlumni;
