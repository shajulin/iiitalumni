import React, { useState } from 'react';
import { BookOpen, CheckCircle, FileText, Calendar, Users, Award, Mail, Phone, ArrowRight, ChevronDown, ChevronUp } from 'lucide-react';

const faqs = [
  {
    q: 'Who is eligible to apply for scholarships at IIIT Kottayam?',
    a: 'Scholarships are generally available to students who meet the criteria set by the respective scheme — including merit, annual family income, academic performance, and category (SC/ST/OBC/PWD/Minorities). Each scheme has specific eligibility parameters, which are detailed in the Application Process section.',
  },
  {
    q: 'How do I apply for the National Scholarship Portal (NSP) schemes?',
    a: 'Students must register on the National Scholarship Portal (scholarships.gov.in) and apply under the relevant scheme. The Academic Office at IIIT Kottayam provides guidance and verification support for all NSP applications.',
  },
  {
    q: 'What documents are typically required for scholarship applications?',
    a: 'Commonly required documents include: Aadhaar card, income certificate, caste certificate (if applicable), mark sheets, bank account details, and a bonafide certificate issued by the institute.',
  },
];

const Scholarship = () => {
  const [openFaq, setOpenFaq] = useState(null);

  return (
    <div className="about-page section-padding">
      <div className="container">

        {/* Header */}
        <div className="about-header text-center mb-5">
          <h1 className="section-title">Scholarships at IIIT Kottayam</h1>
          <p className="subtitle">Financial support opportunities for meritorious and deserving students of IIIT Kottayam</p>
        </div>

        {/* Overview */}
        <div className="about-grid" style={{ marginBottom: '60px' }}>
          <div className="about-text">
            <h2>Scholarship Overview</h2>
            <p>
              IIIT Kottayam is committed to ensuring that financial constraints do not hinder talented and deserving students from pursuing excellence in technology education. The institute facilitates access to a wide range of scholarships offered by the Central Government, the State Government of Kerala, and external organisations.
            </p>
            <p>
              A dedicated Scholarship & Students Activities Committee at IIIT Kottayam oversees all scholarship-related matters — from information dissemination and document verification to coordination with scholarship portals and agencies.
            </p>
            <p>
              The institute also acknowledges and celebrates students who receive prestigious scholarships, recognising their academic achievements and encouraging a culture of excellence.
            </p>
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
            <div className="card p-4">
              <Award size={36} style={{ color: 'var(--secondary-color)', marginBottom: '10px' }} />
              <h4 style={{ color: 'var(--primary-color)' }}>Merit-Based Scholarships</h4>
              <p style={{ color: '#555', fontSize: '0.9rem' }}>For students with exceptional academic performance, providing financial support to continue their studies.</p>
            </div>
            <div className="card p-4">
              <Users size={36} style={{ color: 'var(--secondary-color)', marginBottom: '10px' }} />
              <h4 style={{ color: 'var(--primary-color)' }}>Category-Based Scholarships</h4>
              <p style={{ color: '#555', fontSize: '0.9rem' }}>Specially designed for students from SC/ST/OBC/PWD and minority communities to ensure equal educational opportunity.</p>
            </div>
            <div className="card p-4">
              <BookOpen size={36} style={{ color: 'var(--secondary-color)', marginBottom: '10px' }} />
              <h4 style={{ color: 'var(--primary-color)' }}>Need-Based Financial Aid</h4>
              <p style={{ color: '#555', fontSize: '0.9rem' }}>For students from economically weaker sections, assessed based on annual family income and academic standing.</p>
            </div>
          </div>
        </div>

        {/* Eligibility */}
        <h2 className="section-title">Eligibility Criteria</h2>
        <div className="cards-grid" style={{ marginBottom: '60px' }}>
          {[
            { title: 'Merit-Cum-Means', icon: '📚', points: ['Minimum 60% marks (or equivalent CGPA) in qualifying examination', 'Annual family income ≤ ₹4.5 lakhs', 'Must be a regular full-time student at IIIT Kottayam', 'No backlog papers at the time of application'] },
            { title: 'Central Sector Scheme', icon: '🏛️', points: ['Top 20 percentile in qualifying board exam', 'Annual family income ≤ ₹8 lakhs', 'Must be studying in a government recognised institution', 'Not availing any other government scholarship'] },
            { title: 'SC/ST/OBC/Minority', icon: '🤝', points: ['Valid caste/community certificate from competent authority', 'Annual family income within prescribed limits (varies by scheme)', 'Enrolled in a recognised technical programme', 'Application through National Scholarship Portal (NSP)'] },
            { title: 'PWD Scholarship', icon: '♿', points: ['Disability certificate from a recognised medical authority', 'Minimum 40% disability as per applicable guidelines', 'Enrolled as a full-time student', 'Annual income within prescribed limits'] },
          ].map((s, i) => (
            <div key={i} className="card p-4">
              <div style={{ fontSize: '36px', marginBottom: '12px' }}>{s.icon}</div>
              <h4 style={{ color: 'var(--primary-color)', marginBottom: '12px' }}>{s.title}</h4>
              <ul style={{ listStyle: 'none', padding: 0 }}>
                {s.points.map((p, j) => (
                  <li key={j} style={{ display: 'flex', gap: '8px', alignItems: 'flex-start', marginBottom: '8px', color: '#555', fontSize: '0.9rem', lineHeight: 1.5 }}>
                    <CheckCircle size={14} style={{ color: 'var(--secondary-color)', flexShrink: 0, marginTop: '3px' }} />
                    {p}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Application Process */}
        <h2 className="section-title">Application Process</h2>
        <div className="card p-5" style={{ marginBottom: '60px' }}>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
            {[
              { step: '01', title: 'Check Notifications', desc: 'Monitor the official IIIT Kottayam website (iiitkottayam.ac.in) and the National Scholarship Portal (scholarships.gov.in) for scholarship announcements, opening dates, and eligibility details.' },
              { step: '02', title: 'Verify Eligibility', desc: 'Review the specific eligibility criteria for the scholarship scheme you intend to apply for. Confirm that you meet the academic, income, and category requirements before proceeding.' },
              { step: '03', title: 'Gather Documents', desc: 'Collect all required documents including mark sheets, income certificate, category certificate, Aadhaar card, bank details, and a bonafide certificate from the Academic Office.' },
              { step: '04', title: 'Submit Application', desc: 'Complete and submit your application on the relevant portal (NSP / State Portal) within the stipulated deadline. Incomplete or late applications will not be considered.' },
              { step: '05', title: 'Institute Verification', desc: 'After online submission, the IIIT Kottayam Academic Office verifies your application and supporting documents. Ensure all details are accurate to avoid rejection.' },
              { step: '06', title: 'Disbursement', desc: 'Upon approval by the respective scholarship authority, the scholarship amount is directly credited to your registered bank account (DBT mode).' },
            ].map((s, i) => (
              <div key={i} style={{ display: 'flex', gap: '20px', alignItems: 'flex-start' }}>
                <div style={{
                  width: '48px',
                  height: '48px',
                  borderRadius: '50%',
                  background: 'var(--primary-color)',
                  color: 'white',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  fontWeight: 700,
                  fontSize: '0.9rem',
                  flexShrink: 0
                }}>{s.step}</div>
                <div style={{ paddingTop: '8px' }}>
                  <h4 style={{ color: 'var(--primary-color)', marginBottom: '4px' }}>{s.title}</h4>
                  <p style={{ color: '#555', lineHeight: 1.7, margin: 0 }}>{s.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Required Documents */}
        <h2 className="section-title">Required Documents</h2>
        <div className="card p-5" style={{ marginBottom: '60px' }}>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: '16px' }}>
            {[
              'Aadhaar Card (self-attested copy)',
              'Mark sheets of previous qualifying examinations',
              'Income certificate from competent authority (current year)',
              'Caste/Category certificate (if applicable)',
              'Disability certificate (for PWD scheme)',
              'Bank account passbook (first page with IFSC)',
              'Bonafide certificate from IIIT Kottayam Academic Office',
              'Passport-size photographs (as specified)',
              'Admission letter / Fee receipt from the institute',
              'Previous scholarship approval letter (if renewal)',
            ].map((doc, i) => (
              <div key={i} style={{ display: 'flex', gap: '10px', alignItems: 'flex-start' }}>
                <FileText size={16} style={{ color: 'var(--secondary-color)', flexShrink: 0, marginTop: '3px' }} />
                <span style={{ color: '#444', fontSize: '0.92rem', lineHeight: 1.5 }}>{doc}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Important Dates */}
        <h2 className="section-title">Important Dates</h2>
        <div className="mission-vision-grid" style={{ marginBottom: '60px' }}>
          {[
            { label: 'NSP Portal Opens', date: 'October – November (annually)', icon: '📅' },
            { label: 'State Scholarship Portal', date: 'Refer to official state portal', icon: '🏛️' },
            { label: 'Document Submission at Institute', date: 'As per Academic Office notice', icon: '📋' },
            { label: 'Renewal Applications', date: 'Start of each academic year', icon: '🔄' },
          ].map((d, i) => (
            <div key={i} className="card p-4 text-center">
              <div style={{ fontSize: '36px', marginBottom: '10px' }}>{d.icon}</div>
              <h4 style={{ color: 'var(--primary-color)', marginBottom: '6px' }}>{d.label}</h4>
              <p style={{ color: 'var(--secondary-color)', fontWeight: 600, fontSize: '0.9rem' }}>{d.date}</p>
            </div>
          ))}
        </div>

        {/* Scholarship Awarded Students */}
        <h2 className="section-title">Scholarship Awardees</h2>
        <div className="card p-5" style={{ marginBottom: '60px', textAlign: 'center' }}>
          <Award size={56} style={{ color: 'var(--secondary-color)', margin: '0 auto 16px' }} />
          <h3 style={{ color: 'var(--primary-color)', marginBottom: '12px' }}>Celebrating Our Scholars</h3>
          <p style={{ color: '#555', maxWidth: '600px', margin: '0 auto 16px', lineHeight: 1.7 }}>
            IIIT Kottayam proudly recognises students who receive national, state, and institutional scholarships each academic year. The list of awardees is updated periodically by the Academic Office. For the official and updated scholarship awardees list, please visit the academic notice board on the official website.
          </p>
          <a
            href="https://www.iiitkottayam.ac.in"
            target="_blank"
            rel="noreferrer"
            className="btn btn-primary"
          >
            View on Official Website <ArrowRight size={16} style={{ verticalAlign: 'middle' }} />
          </a>
        </div>

        {/* Scholarship Sponsors */}
        <h2 className="section-title">Scholarship Sponsors & Partners</h2>
        <div className="cards-grid" style={{ marginBottom: '60px' }}>
          {[
            { name: 'Ministry of Education, GoI', type: 'Central Government', icon: '🏛️', desc: 'Central Sector Scholarship Scheme and Merit-Cum-Means scholarships for engineering students.' },
            { name: 'National Scholarship Portal (NSP)', type: 'Government Platform', icon: '💻', desc: 'The unified digital platform for all government scholarship applications and disbursements.' },
            { name: 'State Government of Kerala', type: 'State Scholarship', icon: '🌿', desc: 'State-level post-matric and income-based scholarship schemes for Kerala domicile students.' },
            { name: 'Minority Affairs Ministry', type: 'Central Government', icon: '🤝', desc: 'Top Class Education Scholarship and pre/post-matric scholarships for minority community students.' },
          ].map((sp, i) => (
            <div key={i} className="card p-4 text-center">
              <div style={{ fontSize: '40px', marginBottom: '12px' }}>{sp.icon}</div>
              <span style={{ background: '#e8f0ff', color: 'var(--primary-color)', fontSize: '0.78rem', fontWeight: 700, padding: '2px 10px', borderRadius: '20px', display: 'inline-block', marginBottom: '8px' }}>{sp.type}</span>
              <h4 style={{ color: 'var(--primary-color)', marginBottom: '8px' }}>{sp.name}</h4>
              <p style={{ color: '#555', fontSize: '0.88rem', lineHeight: 1.6 }}>{sp.desc}</p>
            </div>
          ))}
        </div>

        {/* FAQ */}
        <h2 className="section-title">Frequently Asked Questions</h2>
        <div style={{ marginBottom: '48px' }}>
          {faqs.map((faq, i) => (
            <div key={i} className="card" style={{ marginBottom: '12px', overflow: 'hidden' }}>
              <button
                onClick={() => setOpenFaq(openFaq === i ? null : i)}
                style={{
                  width: '100%',
                  background: 'none',
                  border: 'none',
                  padding: '20px 24px',
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                  cursor: 'pointer',
                  textAlign: 'left',
                  gap: '12px'
                }}
              >
                <span style={{ fontWeight: 600, color: 'var(--primary-color)', fontSize: '0.97rem', lineHeight: 1.4 }}>{faq.q}</span>
                {openFaq === i ? <ChevronUp size={20} style={{ flexShrink: 0, color: 'var(--secondary-color)' }} /> : <ChevronDown size={20} style={{ flexShrink: 0, color: '#6c757d' }} />}
              </button>
              {openFaq === i && (
                <div style={{ padding: '0 24px 20px', color: '#555', lineHeight: 1.7, borderTop: '1px solid #e2e8f0', paddingTop: '16px' }}>
                  {faq.a}
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Contact */}
        <div className="card p-5 text-center" style={{ background: 'linear-gradient(135deg, var(--primary-color) 0%, #1a4a9e 100%)', color: 'white' }}>
          <h3 style={{ color: 'white', marginBottom: '12px' }}>Need Help with Scholarship Applications?</h3>
          <p style={{ color: 'rgba(255,255,255,0.85)', maxWidth: '540px', margin: '0 auto 20px', lineHeight: 1.7 }}>
            Contact the IIIT Kottayam Academic Office or the Scholarship & Students Activities Committee for guidance on applications, document verification, and eligibility queries.
          </p>
          <div style={{ display: 'flex', gap: '24px', justifyContent: 'center', flexWrap: 'wrap' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px', color: 'rgba(255,255,255,0.9)' }}>
              <Mail size={16} />
              <a href="mailto:registrar@iiitkottayam.ac.in" style={{ color: 'rgba(255,255,255,0.9)' }}>registrar@iiitkottayam.ac.in</a>
            </div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px', color: 'rgba(255,255,255,0.9)' }}>
              <Phone size={16} />
              <span>+91 0482 2202135</span>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
};

export default Scholarship;
