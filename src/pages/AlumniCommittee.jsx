import React from 'react';
import { Mail, Phone, Users, BookOpen, Star, UserCheck } from 'lucide-react';

const committeeMembers = [
  {
    role: 'Patron',
    name: 'Prof. Prasad Krishna',
    designation: 'Director (Additional Charge), IIIT Kottayam',
    photo: '/images/faculty/director.jpeg',
    contact: 'director@iiitkottayam.ac.in',
    category: 'Leadership',
  },
  {
    role: 'Advisory',
    name: 'Dr. M Radhakrishnan',
    designation: 'Registrar, IIIT Kottayam',
    photo: '/images/faculty/registrar.jpeg',
    contact: 'registrar@iiitkottayam.ac.in',
    category: 'Leadership',
  },
  {
    role: 'Associate Dean – Alumni & International Affairs',
    name: 'Dr. Shajulin Benedict',
    designation: 'Associate Professor, Department of CSE',
    photo: '/images/faculty/shajulin.jpg',
    contact: 'shajulin@iiitkottayam.ac.in',
    category: 'Faculty Coordinator',
  },
  {
    role: 'Associate Dean – Career Development & Student Welfare',
    name: 'Dr. J. V. Bibal Benifa',
    designation: 'Associate Professor, Department of CSE',
    photo: '/images/faculty/bibal.jpg',
    contact: 'benifa@iiitkottayam.ac.in',
    category: 'Faculty Coordinator',
  },
  {
    role: 'Associate Dean – Industry Relations & Funding',
    name: 'Dr. Ragesh G. K.',
    designation: 'Associate Professor, Department of ECE',
    photo: '/images/faculty/ragesh.jpeg',
    contact: 'ragesh@iiitkottayam.ac.in',
    category: 'Faculty Coordinator',
  },
  {
    role: 'Associate Dean – Academic Affairs',
    name: 'Dr. Ebin Deni Raj',
    designation: 'Associate Professor, Department of CSE',
    photo: '/images/faculty/ebin.jpeg',
    contact: 'ebindeniraj@iiitkottayam.ac.in',
    category: 'Faculty Coordinator',
  },
];

const officeBearer = [
  { role: 'Alumni President', name: 'Vinay Kumar Maddiralla', batch: 'Founding Batch (2016–2020)', initials: 'VK', category: 'Office Bearer' },
  { role: 'Vice President', name: 'Sai Surya Kiran Pokala', batch: 'Batch (2016–2020)', initials: 'SK', category: 'Office Bearer' },
  { role: 'Secretary', name: 'Rahul Sharma', batch: 'Batch (2019–2023)', initials: 'RS', category: 'Office Bearer' },
  { role: 'Treasurer', name: 'Priya Patel', batch: 'Batch (2020–2024)', initials: 'PP', category: 'Office Bearer' },
  { role: 'Joint Secretary', name: 'Anand Verma', batch: 'Batch (2018–2022)', initials: 'AV', category: 'Office Bearer' },
  { role: 'Executive Member', name: 'Sneha Gupta', batch: 'Batch (2021–2025)', initials: 'SG', category: 'Office Bearer' },
];

const MemberCard = ({ name, role, designation, batch, photo, initials, contact, category }) => {
  const colors = {
    'Leadership': { bg: 'var(--primary-color)', badge: '#e8f0fe', badgeText: '#1a56db' },
    'Faculty Coordinator': { bg: 'var(--primary-color)', badge: '#e8f0ff', badgeText: 'var(--primary-color)' },
    'Office Bearer': { bg: 'var(--secondary-color)', badge: '#fff3e0', badgeText: '#b35c00' },
  };
  const c = colors[category] || colors['Office Bearer'];

  return (
    <div className="card p-4 text-center" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
      <div style={{
        width: '88px',
        height: '88px',
        borderRadius: '50%',
        background: c.bg,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        margin: '0 auto 14px',
        border: '3px solid rgba(0,0,0,0.08)',
        overflow: 'hidden',
        boxShadow: '0 4px 12px rgba(0,0,0,0.1)'
      }}>
        {photo ? (
          <img src={photo} alt={name} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
        ) : (
          <span style={{ color: 'white', fontWeight: 700, fontSize: '1.4rem' }}>{initials}</span>
        )}
      </div>
      <span style={{
        display: 'inline-block',
        background: c.badge,
        color: c.badgeText,
        fontSize: '0.72rem',
        fontWeight: 700,
        padding: '3px 10px',
        borderRadius: '20px',
        marginBottom: '8px',
        textTransform: 'uppercase',
        letterSpacing: '0.4px',
        maxWidth: '100%'
      }}>{role}</span>
      <h4 style={{ color: 'var(--primary-color)', marginBottom: '4px', fontSize: '1.02rem', fontWeight: 600 }}>{name}</h4>
      <p style={{ color: '#6c757d', fontSize: '0.84rem', marginBottom: '4px', flex: 1 }}>{designation || batch}</p>
      {contact && (
        <a href={`mailto:${contact}`} style={{ color: 'var(--secondary-color)', fontSize: '0.82rem', display: 'inline-flex', alignItems: 'center', gap: '4px', marginTop: '6px' }}>
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
