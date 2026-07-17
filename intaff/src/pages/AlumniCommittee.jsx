import React from 'react';
import { Mail, Phone, Users, BookOpen, Star, UserCheck } from 'lucide-react';

const committeeMembers = [
  {
    role: 'Associate Dean – Alumni & International Affairs',
    name: 'Dr. Shajulin Benedict',
    designation: 'Associate Professor, Dept. of CSE',
    initials: 'SB',
    contact: 'alumni@iiitkottayam.ac.in',
    category: 'Faculty Coordinator',
  },
  {
    role: 'Faculty Coordinator – Alumni Relations',
    name: 'Faculty Representative',
    designation: 'Department of ECE / CSE',
    initials: 'FR',
    contact: 'alumni@iiitkottayam.ac.in',
    category: 'Faculty Coordinator',
  },
];

const officeBearer = [
  { role: 'President', name: 'Alumni Representative', batch: 'Batch 2019–2023', initials: 'PR', category: 'Office Bearer' },
  { role: 'Vice President', name: 'Alumni Representative', batch: 'Batch 2019–2023', initials: 'VP', category: 'Office Bearer' },
  { role: 'Secretary', name: 'Alumni Representative', batch: 'Batch 2020–2024', initials: 'SE', category: 'Office Bearer' },
  { role: 'Treasurer', name: 'Alumni Representative', batch: 'Batch 2020–2024', initials: 'TR', category: 'Office Bearer' },
  { role: 'Joint Secretary', name: 'Alumni Representative', batch: 'Batch 2021–2025', initials: 'JS', category: 'Office Bearer' },
  { role: 'Executive Member', name: 'Alumni Representative', batch: 'Batch 2021–2025', initials: 'EM', category: 'Office Bearer' },
];

const MemberCard = ({ name, role, designation, batch, initials, contact, category }) => {
  const colors = {
    'Faculty Coordinator': { bg: 'var(--primary-color)', badge: '#e8f0ff', badgeText: 'var(--primary-color)' },
    'Office Bearer': { bg: 'var(--secondary-color)', badge: '#fff3e0', badgeText: '#b35c00' },
  };
  const c = colors[category] || colors['Office Bearer'];

  return (
    <div className="card p-4 text-center">
      <div style={{
        width: '80px',
        height: '80px',
        borderRadius: '50%',
        background: c.bg,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        margin: '0 auto 14px',
        border: '3px solid rgba(0,0,0,0.08)',
      }}>
        <span style={{ color: 'white', fontWeight: 700, fontSize: '1.4rem' }}>{initials}</span>
      </div>
      <span style={{
        display: 'inline-block',
        background: c.badge,
        color: c.badgeText,
        fontSize: '0.75rem',
        fontWeight: 700,
        padding: '2px 10px',
        borderRadius: '20px',
        marginBottom: '8px',
        textTransform: 'uppercase',
        letterSpacing: '0.5px'
      }}>{role}</span>
      <h4 style={{ color: 'var(--primary-color)', marginBottom: '4px', fontSize: '1rem' }}>{name}</h4>
      <p style={{ color: '#6c757d', fontSize: '0.87rem', marginBottom: '4px' }}>{designation || batch}</p>
      {contact && (
        <a href={`mailto:${contact}`} style={{ color: 'var(--secondary-color)', fontSize: '0.85rem', display: 'inline-flex', alignItems: 'center', gap: '4px', marginTop: '6px' }}>
          <Mail size={13} /> {contact}
        </a>
      )}
    </div>
  );
};

const AlumniCommittee = () => {
  return (
    <div className="about-page section-padding">
      <div className="container">

        {/* Header */}
        <div className="about-header text-center mb-5">
          <h1 className="section-title">Alumni Committee</h1>
          <p className="subtitle">The dedicated team steering the IIIT Kottayam Official Alumni Association</p>
        </div>

        {/* About Committee */}
        <div className="card p-5 mb-5">
          <div className="flex-row" style={{ flexWrap: 'wrap', gap: '32px', alignItems: 'flex-start' }}>
            <Users size={52} style={{ color: 'var(--primary-color)', flexShrink: 0 }} />
            <div style={{ flex: 1 }}>
              <h2 style={{ color: 'var(--primary-color)', marginBottom: '12px' }}>About the Alumni Association</h2>
              <p style={{ color: '#555', lineHeight: 1.8, marginBottom: '12px' }}>
                The IIIT Kottayam Official Alumni Association serves as the formal body that connects the institution with its growing community of graduates. Managed jointly by faculty coordinators and elected alumni representatives, the committee drives initiatives in mentorship, networking, career support, and alumni engagement.
              </p>
              <p style={{ color: '#555', lineHeight: 1.8 }}>
                The Association is supported by the Office of Alumni & International Affairs, which facilitates interaction between current students and alumni — enabling internship opportunities, professional mentoring, and collaborative academic activities.
              </p>
            </div>
          </div>
        </div>

        {/* Faculty Coordinators */}
        <h2 className="section-title">Faculty Coordinators</h2>
        <div className="cards-grid mb-5" style={{ marginBottom: '48px' }}>
          {committeeMembers.map((m, i) => <MemberCard key={i} {...m} />)}
        </div>

        {/* Office Bearers */}
        <h2 className="section-title">Office Bearers</h2>
        <div className="cards-grid mb-5" style={{ marginBottom: '48px' }}>
          {officeBearer.map((m, i) => <MemberCard key={i} {...m} />)}
        </div>

        {/* Committee Activities */}
        <h2 className="section-title">Committee Activities & Focus Areas</h2>
        <div className="mission-vision-grid">
          <div className="card p-4">
            <BookOpen size={36} style={{ color: 'var(--secondary-color)', marginBottom: '12px' }} />
            <h4 style={{ color: 'var(--primary-color)', marginBottom: '8px' }}>Mentorship Programme</h4>
            <p style={{ color: '#555', lineHeight: 1.7 }}>Pairing experienced alumni with current students to guide career decisions, technical skill development, and entrepreneurial pursuits.</p>
          </div>
          <div className="card p-4">
            <Star size={36} style={{ color: 'var(--secondary-color)', marginBottom: '12px' }} />
            <h4 style={{ color: 'var(--primary-color)', marginBottom: '8px' }}>Alumni Meets & Events</h4>
            <p style={{ color: '#555', lineHeight: 1.7 }}>Organising annual alumni meets, tech talks, and networking events that foster a strong sense of community and belonging among graduates.</p>
          </div>
          <div className="card p-4">
            <UserCheck size={36} style={{ color: 'var(--secondary-color)', marginBottom: '12px' }} />
            <h4 style={{ color: 'var(--primary-color)', marginBottom: '8px' }}>Placement Support</h4>
            <p style={{ color: '#555', lineHeight: 1.7 }}>Facilitating referrals, job postings, and industry connections through the alumni network to assist current students and recent graduates in securing placements.</p>
          </div>
          <div className="card p-4">
            <Phone size={36} style={{ color: 'var(--secondary-color)', marginBottom: '12px' }} />
            <h4 style={{ color: 'var(--primary-color)', marginBottom: '8px' }}>Contact the Committee</h4>
            <p style={{ color: '#555', lineHeight: 1.7, marginBottom: '8px' }}>For queries, collaboration proposals, or to get involved with the alumni committee, reach out to:</p>
            <a href="mailto:alumni@iiitkottayam.ac.in" style={{ color: 'var(--primary-color)', fontWeight: 600 }}>alumni@iiitkottayam.ac.in</a>
            <br />
            <a href="mailto:registrar@iiitkottayam.ac.in" style={{ color: 'var(--primary-color)', fontWeight: 600 }}>registrar@iiitkottayam.ac.in</a>
          </div>
        </div>

        {/* Note */}
        <div className="card p-4 mt-5" style={{ background: '#f0f4ff', border: '1px solid #c7d4f0' }}>
          <p style={{ color: '#444', fontSize: '0.92rem', lineHeight: 1.7, margin: 0 }}>
            <strong>Note:</strong> The Alumni Committee roster is updated periodically based on elections and new appointments. For the most current list of committee members and contact information, please visit the official IIIT Kottayam website at{' '}
            <a href="https://www.iiitkottayam.ac.in" target="_blank" rel="noreferrer" style={{ color: 'var(--primary-color)', fontWeight: 600 }}>www.iiitkottayam.ac.in</a> or contact the registrar's office.
          </p>
        </div>

      </div>
    </div>
  );
};

export default AlumniCommittee;
