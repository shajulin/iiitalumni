import React, { useState } from 'react';
import { BookOpen, CheckCircle, FileText, Calendar, Users, Award, Mail, Phone, ArrowRight, ChevronDown, ChevronUp, AlertCircle, ExternalLink } from 'lucide-react';

const bankSchemes = [
  {
    bank: 'State Bank of India (SBI)',
    scheme: 'SBI Scholar Loan Scheme',
    description: 'Premier education loan with concessional interest rates for students of Institute of National Importance (IIIT Kottayam) covering 100% of tuition and hostel fees without collateral.',
    link: 'https://sbi.co.in'
  },
  {
    bank: 'Canara Bank',
    scheme: 'Canara Vidya Turant & MoU with MoE',
    description: 'Special MoU signed between Canara Bank and the Ministry of Education, Government of India, to provide swift and collateral-free education credit for IIIT students.',
    link: 'https://canarabank.com'
  },
  {
    bank: 'Union Bank of India',
    scheme: 'Union Education Loan Special Scheme',
    description: 'Dedicated financial assistance scheme with zero processing fee and relaxed repayment terms starting after course completion + moratorium period.',
    link: 'https://www.unionbankofindia.co.in'
  },
  {
    bank: 'Punjab National Bank (PNB)',
    scheme: 'PNB Pratibha New Education Loan Scheme',
    description: 'Specialized education loan package providing comprehensive coverage of fee, laptops, and living expenses for meritorious technical students.',
    link: 'https://www.pnbindia.in'
  }
];

const faqs = [
  {
    q: 'Does IIIT Kottayam provide direct institutional financial aid?',
    a: 'As per the official institute policy, no direct financial assistance is offered directly from the Institute budget. However, the Institute actively supports, verifies, and forwards all student applications to Central/State Government scholarship portals and banking partners to ensure timely release of benefits.',
  },
  {
    q: 'How can students apply for National Scholarship Portal (NSP) schemes?',
    a: 'Students can register on the National Scholarship Portal (scholarships.gov.in) and select the scheme appropriate for their domicile, category, or merit. The Academic Office at IIIT Kottayam provides official bonafide certificates and conducts online verification.',
  },
  {
    q: 'Can alumni sponsor a student or fund an endowed scholarship?',
    a: 'Yes! The IIIT Kottayam Alumni Association and the Office of Alumni Affairs actively welcome alumni sponsorships, batch endowments, and merit-cum-means awards to support underprivileged students.',
  },
];

const Scholarship = () => {
  const [openFaq, setOpenFaq] = useState(null);

  return (
    <div className="about-page section-padding">
      <div className="container">

        {/* Header */}
        <div className="about-header text-center mb-5">
          <span style={{ color: 'var(--secondary-color)', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '1px', fontSize: '0.85rem' }}>Financial Aid &amp; Student Support</span>
          <h1 className="section-title" style={{ marginTop: '6px' }}>Scholarships &amp; Financial Support</h1>
          <p className="subtitle">Official financial assistance schemes, government scholarships, and premier education loan facilities for IIIT Kottayam students.</p>
        </div>

        {/* Official Note matching iiitkottayam.ac.in */}
        <div className="card p-4 mb-5" style={{ background: '#fef2f2', border: '1px solid #fecaca', borderRadius: '12px' }}>
          <div style={{ display: 'flex', gap: '16px', alignItems: 'flex-start' }}>
            <AlertCircle size={28} style={{ color: '#dc2626', flexShrink: 0, marginTop: '2px' }} />
            <div>
              <h4 style={{ color: '#991b1b', marginBottom: '6px', fontSize: '1.05rem' }}>Official Institute Scholarship Policy Notice</h4>
              <p style={{ color: '#7f1d1d', lineHeight: 1.7, fontSize: '0.94rem', margin: 0 }}>
                <strong>Note:</strong> Please be informed that no direct financial assistance is available directly from the Institute budget. After admission to the Institute, students can apply for any scholarships, if they wish, directly to the respective State Government, Central Government (NSP), or other authorities of their choice. The Institute actively supports such applications by providing all necessary documents and forwarding them to the appropriate authorities to facilitate the timely processing of benefits for students.
              </p>
            </div>
          </div>
        </div>

        {/* National Scholarship Portal & Government Schemes */}
        <div className="about-grid" style={{ marginBottom: '60px' }}>
          <div className="about-text">
            <h2 style={{ color: 'var(--primary-color)' }}>National Scholarship Portal (NSP)</h2>
            <p style={{ color: '#555', lineHeight: 1.8 }}>
              Students admitted to IIIT Kottayam are eligible to apply for various Central and State Government scholarships via the National Scholarship Portal (NSP). The institute has an active verification cell that certifies bonafide status and income certificates.
            </p>
            <ul style={{ paddingLeft: '20px', color: '#555', lineHeight: 1.9, marginBottom: '24px' }}>
              <li><strong>Central Sector Scheme of Scholarships</strong> for College and University Students</li>
              <li><strong>Post Matric Scholarships</strong> for SC / ST / OBC / Minority students</li>
              <li><strong>Merit-Cum-Means Scholarship</strong> for Professional and Technical Courses</li>
              <li><strong>Prime Minister's Scholarship Scheme (PMSS)</strong> for wards of armed forces</li>
            </ul>
            <a href="https://scholarships.gov.in" target="_blank" rel="noreferrer" className="btn btn-primary" style={{ display: 'inline-flex', alignItems: 'center', gap: '8px' }}>
              Visit National Scholarship Portal <ExternalLink size={16} />
            </a>
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
            <div className="card p-4">
              <Award size={36} style={{ color: 'var(--secondary-color)', marginBottom: '10px' }} />
              <h4 style={{ color: 'var(--primary-color)' }}>Merit &amp; Means Forwarding</h4>
              <p style={{ color: '#555', fontSize: '0.9rem', margin: 0 }}>Prompt institute endorsement and document issuance for state-level welfare departments (e.g. e-Grantz Kerala, NSP, state portals).</p>
            </div>
            <div className="card p-4">
              <Users size={36} style={{ color: 'var(--secondary-color)', marginBottom: '10px' }} />
              <h4 style={{ color: 'var(--primary-color)' }}>Alumni Student Endowments</h4>
              <p style={{ color: '#555', fontSize: '0.9rem', margin: 0 }}>Opportunity for alumni chapters and corporate donors to sponsor student fees and project grants directly.</p>
            </div>
          </div>
        </div>

        {/* Bank Education Loan Schemes */}
        <h2 className="section-title text-center" style={{ marginBottom: '16px' }}>Education Loan Schemes by Partner Banks</h2>
        <p className="subtitle text-center" style={{ maxWidth: '750px', margin: '0 auto 40px' }}>
          Leading nationalized banks provide specialized collateral-free education credit under preferential scholar terms for IIIT Kottayam students.
        </p>

        <div className="cards-grid" style={{ marginBottom: '60px' }}>
          {bankSchemes.map((b, i) => (
            <div key={i} className="card p-4" style={{ display: 'flex', flexDirection: 'column' }}>
              <span style={{ fontSize: '0.8rem', fontWeight: 700, color: 'var(--secondary-color)', textTransform: 'uppercase' }}>{b.bank}</span>
              <h3 style={{ fontSize: '1.15rem', color: 'var(--primary-color)', margin: '6px 0 10px' }}>{b.scheme}</h3>
              <p style={{ color: '#555', fontSize: '0.92rem', lineHeight: 1.6, flex: 1 }}>{b.description}</p>
              <div style={{ borderTop: '1px solid #f1f5f9', paddingTop: '12px', marginTop: '14px' }}>
                <a href={b.link} target="_blank" rel="noreferrer" style={{ color: 'var(--primary-color)', fontWeight: 600, fontSize: '0.88rem', display: 'inline-flex', alignItems: 'center', gap: '6px' }}>
                  Bank Loan Details <ExternalLink size={14} />
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* FAQs */}
        <h2 className="section-title text-center" style={{ marginBottom: '32px' }}>Frequently Asked Questions</h2>
        <div style={{ maxWidth: '800px', margin: '0 auto 50px' }}>
          {faqs.map((faq, index) => (
            <div key={index} className="card p-4 mb-3" style={{ cursor: 'pointer' }} onClick={() => setOpenFaq(openFaq === index ? null : index)}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <h4 style={{ color: 'var(--primary-color)', margin: 0, fontSize: '1.05rem' }}>{faq.q}</h4>
                {openFaq === index ? <ChevronUp size={20} color="var(--primary-color)" /> : <ChevronDown size={20} color="#64748b" />}
              </div>
              {openFaq === index && (
                <p style={{ marginTop: '12px', color: '#555', lineHeight: 1.7, fontSize: '0.94rem' }}>{faq.a}</p>
              )}
            </div>
          ))}
        </div>

      </div>
    </div>
  );
};

export default Scholarship;
