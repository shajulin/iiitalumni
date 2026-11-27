import React from 'react';
import { Calendar, MapPin, Award, ArrowRight, CheckCircle2, Building, Globe } from 'lucide-react';
import { Link } from 'react-router-dom';

const milestones = [
  {
    year: '2015',
    title: 'Establishment under PPP Model',
    description:
      'IIIT Kottayam was established by the Ministry of Education (formerly MHRD), Government of India, the Government of Kerala, and industry partners under the Public-Private Partnership (PPP) model to develop top-notch IT talent in India.',
  },
  {
    year: '2016',
    title: 'First B.Tech Admissions via JoSAA',
    description:
      'The inaugural batch of undergraduate engineering students in Computer Science & Engineering (CSE) and Electronics & Communication Engineering (ECE) commenced their studies via JEE Main through JoSAA/CSAB counselling.',
  },
  {
    year: '2017',
    title: 'Institute of National Importance (Act of Parliament)',
    description:
      'The Parliament of India passed the Indian Institutes of Information Technology (Public-Private Partnership) Act 2017, conferring IIIT Kottayam the prestigious status of an "Institute of National Importance", granting statutory autonomy.',
  },
  {
    year: '2019',
    title: 'Relocation to Permanent 53-Acre Campus at Valavoor',
    description:
      'The institute transitioned to its permanent campus set across 53 picturesque acres in Valavoor village, near Pala, Kottayam. The campus features state-of-the-art academic complexes, research facilities, and residential student hostels.',
  },
  {
    year: '2020',
    title: 'Launch of Advanced Research & PG Programmes',
    description:
      'Introduction of Ph.D. programmes in CSE, ECE, and Computational Mathematics, as well as specialized M.Tech programmes in Artificial Intelligence, Data Science, and Cyber Security for working professionals and researchers.',
  },
  {
    year: '2021',
    title: 'Global Partnerships & First Alumni Chapter',
    description:
      'Establishment of international MoUs with world-class institutions including Technical University of Munich (TUM) Germany, University of Agder Norway, and University of New Brunswick Canada. The inaugural batches stepped out into top tech firms worldwide.',
  },
  {
    year: '2022–2026',
    title: 'Record Milestones & Global Placement Leadership',
    description:
      'Placement benchmarks surged with highest CTC touching ₹58.93 LPA and overseas placements in Tokyo, Japan with Human Resocia. Expansion of 16 Innovation & Incubation Labs, Gyaan Innovation Cell, and opening of the "Varenyam" Senate Hall.',
  },
];

const InstituteHistory = () => {
  return (
    <div className="about-page section-padding">
      <div className="container">

        {/* Header */}
        <div className="about-header text-center mb-5">
          <span style={{ color: 'var(--secondary-color)', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '1px', fontSize: '0.85rem' }}>Heritage &amp; Milestones</span>
          <h1 className="section-title" style={{ marginTop: '6px' }}>History of IIIT Kottayam</h1>
          <p className="subtitle">Tracing the evolution of IIIT Kottayam from its foundation to an Institute of National Importance.</p>
        </div>

        {/* Overview Card */}
        <div className="about-grid" style={{ marginBottom: '60px' }}>
          <div className="about-text">
            <h2 style={{ color: 'var(--primary-color)' }}>A Journey of Excellence</h2>
            <p>
              The Indian Institute of Information Technology Kottayam stands as a premier national institution committed to technological excellence and societal transformation. Conceived through the joint initiative of the Government of India, the State of Kerala, and industry leaders, the institute has grown at an extraordinary pace.
            </p>
            <p>
              Spread across a scenic 53-acre hillside campus at Valavoor, Pala, IIIT Kottayam provides an enriching academic environment fostering innovative thinking, entrepreneurial spirit, and research with real-world impact.
            </p>
            <p>
              Each chapter of our history has been written by the tireless contributions of distinguished faculty, dedicated administrators, energetic students, and our ever-growing network of successful alumni.
            </p>
            <div className="mt-4">
              <Link to="/about/director" className="btn btn-primary" style={{ display: 'inline-flex', alignItems: 'center', gap: '8px' }}>
                Director's Message <ArrowRight size={16} />
              </Link>
            </div>
          </div>
          <div className="about-image" style={{ borderRadius: '15px', overflow: 'hidden', boxShadow: '0 12px 30px rgba(0,0,0,0.12)' }}>
            <img src="/images/campus/iiitview_1.jpg" alt="IIIT Kottayam Campus Hilltop Panoramic View" className="rounded-image shadow" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
          </div>
        </div>

        {/* Key Pillars */}
        <div className="mission-vision-grid" style={{ marginBottom: '60px' }}>
          <div className="card text-center p-4">
            <Calendar size={40} className="text-primary mb-3 mx-auto" />
            <h3 style={{ color: 'var(--primary-color)' }}>Founded in 2015</h3>
            <p style={{ color: '#555', fontSize: '0.92rem', margin: 0 }}>Established by Ministry of Education, Govt. of India, Govt. of Kerala, and Industry Partners.</p>
          </div>
          <div className="card text-center p-4">
            <Award size={40} className="text-primary mb-3 mx-auto" />
            <h3 style={{ color: 'var(--primary-color)' }}>Act of Parliament 2017</h3>
            <p style={{ color: '#555', fontSize: '0.92rem', margin: 0 }}>Statutory autonomy as an "Institute of National Importance" under the IIIT (PPP) Act 2017.</p>
          </div>
          <div className="card text-center p-4">
            <MapPin size={40} className="text-primary mb-3 mx-auto" />
            <h3 style={{ color: 'var(--primary-color)' }}>53-Acre Campus</h3>
            <p style={{ color: '#555', fontSize: '0.92rem', margin: 0 }}>Permanent green campus at Valavoor, Pala with modern academic blocks and research halls.</p>
          </div>
        </div>

        {/* Chronological Timeline */}
        <h2 className="section-title text-center" style={{ marginBottom: '40px' }}>Key Institutional Milestones</h2>
        <div style={{ maxWidth: '850px', margin: '0 auto', position: 'relative', paddingLeft: '32px', borderLeft: '3px solid var(--secondary-color)' }}>
          {milestones.map((item, idx) => (
            <div key={idx} style={{ marginBottom: '36px', position: 'relative' }}>
              <div style={{
                position: 'absolute',
                left: '-44px',
                top: '0',
                width: '22px',
                height: '22px',
                borderRadius: '50%',
                background: 'var(--primary-color)',
                border: '3px solid var(--secondary-color)',
                boxShadow: '0 0 0 4px rgba(247, 148, 29, 0.2)'
              }} />
              <div className="card p-4" style={{ boxShadow: '0 4px 15px rgba(0,0,0,0.05)' }}>
                <span style={{
                  background: 'var(--primary-color)',
                  color: '#fff',
                  fontSize: '0.8rem',
                  fontWeight: 700,
                  padding: '3px 10px',
                  borderRadius: '12px',
                  display: 'inline-block',
                  marginBottom: '8px'
                }}>
                  {item.year}
                </span>
                <h3 style={{ color: 'var(--primary-color)', margin: '4px 0 10px', fontSize: '1.2rem' }}>{item.title}</h3>
                <p style={{ color: '#555', lineHeight: 1.7, fontSize: '0.94rem', margin: 0 }}>{item.description}</p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </div>
  );
};

export default InstituteHistory;
