import React from 'react';
import { Calendar, MapPin, Award, ArrowRight } from 'lucide-react';

const milestones = [
  {
    year: '2015',
    title: 'Foundation & Establishment',
    description:
      'IIIT Kottayam was established under the Public-Private Partnership (PPP) model of the Government of India, Ministry of Education. The institute commenced academic operations at a temporary campus hosted by Amal Jyothi College of Engineering, Kanjirappally.',
  },
  {
    year: '2016',
    title: 'First Academic Batch',
    description:
      'The inaugural batch of B.Tech students began their academic journey, marking the start of a new chapter in technical education in Kerala. The institute offered programmes in Computer Science & Engineering and Electronics & Communication Engineering.',
  },
  {
    year: '2017',
    title: 'Institution of National Importance',
    description:
      'IIIT Kottayam was accorded the prestigious status of an "Institution of National Importance" by an Act of Parliament — placing it among the most distinguished technical institutes in India and granting it greater academic and administrative autonomy.',
  },
  {
    year: '2019',
    title: 'Permanent Campus Inaugurated',
    description:
      'The institute relocated to its permanent, purpose-built campus at Valavoor, near Pala, in the Kottayam district of Kerala. The new campus features modern academic blocks, research laboratories, student hostels, and state-of-the-art facilities.',
  },
  {
    year: '2020',
    title: 'Research & PG Programmes',
    description:
      'Expansion of academic offerings with the introduction of postgraduate programmes and a strengthened focus on research in domains such as IoT, Data Science, Cybersecurity, Cloud Computing, and Artificial Intelligence.',
  },
  {
    year: '2021',
    title: 'Growing Alumni Network',
    description:
      'The first generation of alumni began making their mark in top technology companies, research institutions, and entrepreneurial ventures globally. Alumni relations were formally strengthened with the appointment of an Associate Dean for Alumni & International Affairs.',
  },
  {
    year: '2022–Present',
    title: 'Continued Excellence',
    description:
      'IIIT Kottayam continues to expand its research output, industry partnerships, and academic collaborations. The institute remains committed to its motto of "Generating Knowledge for the Future" and to shaping the next generation of technology leaders.',
  },
];

const InstituteHistory = () => {
  return (
    <div className="about-page section-padding">
      <div className="container">

        {/* Header */}
        <div className="about-header text-center mb-5">
          <h1 className="section-title">Institute History</h1>
          <p className="subtitle">Tracing the journey of IIIT Kottayam — from its founding to a nationally recognised institution</p>
        </div>

        {/* Overview Card */}
        <div className="about-grid" style={{ marginBottom: '60px' }}>
          <div className="about-text">
            <h2>Our Journey</h2>
            <p>
              The Indian Institute of Information Technology Kottayam (IIIT Kottayam) stands as a testament to India's commitment to advancing technological education and research. Born from a collaborative vision of the Government of India, the State of Kerala, and industry partners, the institute has grown rapidly from a nascent institution to a nationally recognised centre of excellence.
            </p>
            <p>
              Located in the tranquil landscape of Valavoor, Pala — in the heart of Kerala — IIIT Kottayam was conceived under the PPP model to address the growing demand for high-quality technical education and applied IT research in the country.
            </p>
            <p>
              Each phase of the institute's growth reflects the dedication of its faculty, staff, students, and the broader community of stakeholders who have contributed to making IIIT Kottayam what it is today.
            </p>
          </div>
          <div className="about-image">
            <img src="/images/iiitk_campus.jpg" alt="IIIT Kottayam Permanent Campus" className="rounded-image shadow" />
          </div>
        </div>

        {/* Key Facts */}
        <div className="mission-vision-grid" style={{ marginBottom: '60px' }}>
          <div className="card text-center p-4">
            <Calendar size={40} className="text-primary mb-3 mx-auto" />
            <h3>2015</h3>
            <p>Year of Establishment under the PPP Model of Government of India</p>
          </div>
          <div className="card text-center p-4">
            <Award size={40} className="text-primary mb-3 mx-auto" />
            <h3>2017</h3>
            <p>Declared an Institution of National Importance by Act of Parliament</p>
          </div>
          <div className="card text-center p-4">
            <MapPin size={40} className="text-primary mb-3 mx-auto" />
            <h3>2019</h3>
            <p>Inauguration of permanent campus at Valavoor, Pala, Kottayam, Kerala</p>
          </div>
        </div>

        {/* Timeline */}
        <h2 className="section-title">Milestones & Timeline</h2>
        <div style={{ position: 'relative', paddingLeft: '32px' }}>
          {/* Vertical line */}
          <div style={{
            position: 'absolute',
            left: '12px',
            top: '12px',
            bottom: '12px',
            width: '2px',
            background: 'linear-gradient(to bottom, var(--primary-color), var(--secondary-color))',
            borderRadius: '2px'
          }} />

          {milestones.map((m, idx) => (
            <div key={idx} style={{ position: 'relative', marginBottom: '40px' }}>
              {/* Dot */}
              <div style={{
                position: 'absolute',
                left: '-26px',
                top: '6px',
                width: '16px',
                height: '16px',
                borderRadius: '50%',
                background: idx % 2 === 0 ? 'var(--primary-color)' : 'var(--secondary-color)',
                border: '3px solid white',
                boxShadow: '0 0 0 2px ' + (idx % 2 === 0 ? 'var(--primary-color)' : 'var(--secondary-color)'),
              }} />

              <div className="card p-4">
                <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '8px', flexWrap: 'wrap' }}>
                  <span style={{
                    background: 'var(--primary-color)',
                    color: 'white',
                    padding: '2px 12px',
                    borderRadius: '20px',
                    fontSize: '0.88rem',
                    fontWeight: 700
                  }}>{m.year}</span>
                  <h4 style={{ color: 'var(--primary-color)', margin: 0 }}>{m.title}</h4>
                </div>
                <p style={{ color: '#555', lineHeight: 1.7, margin: 0 }}>{m.description}</p>
              </div>
            </div>
          ))}
        </div>

        {/* PPP Model Note */}
        <div className="card p-5 mt-5" style={{ background: 'linear-gradient(135deg, #f0f4ff 0%, #fff 100%)', border: '1px solid #d0d9f0' }}>
          <h3 style={{ color: 'var(--primary-color)', marginBottom: '12px' }}>About the PPP Model</h3>
          <p style={{ color: '#555', lineHeight: 1.8 }}>
            IIIT Kottayam was established under the Government of India's initiative to set up new IIITs through the Public-Private Partnership model. Under this model, the Central Government, the State Government of Kerala, and industry partners collectively contribute to the establishment and sustenance of the institute. This collaborative approach ensures that the institute remains closely aligned with both national development priorities and the practical demands of the technology industry.
          </p>
          <a
            href="https://www.iiitkottayam.ac.in"
            target="_blank"
            rel="noreferrer"
            className="link-with-icon mt-4"
            style={{ display: 'inline-flex' }}
          >
            Visit Official Website <ArrowRight size={16} />
          </a>
        </div>

      </div>
    </div>
  );
};

export default InstituteHistory;
