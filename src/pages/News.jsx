import React from 'react';
import { ArrowRight, Tag, Calendar, ExternalLink } from 'lucide-react';

const newsArticles = [
  {
    id: 1,
    title: 'MoU Signed with Human Resocia & Global IT Talent Japan for Overseas Placements',
    date: 'Recent Official Announcement',
    category: 'International Relations',
    excerpt: 'IIIT Kottayam has signed a landmark bilateral Memorandum of Understanding (MoU) with Human Resocia and Global IT Talent, Japan, opening high-paying international engineering placements and foreign internships in Tokyo.',
    image: '/images/campus/clg_img_new2.jpeg',
    badge: 'Flagship'
  },
  {
    id: 2,
    title: 'Placement CTC Benchmarks Surge with Highest Package Touching ₹58.93 LPA',
    date: 'Academic Year Highlights',
    category: 'Placements',
    excerpt: 'The placement cell recorded an outstanding season with the highest domestic CTC reaching ₹58.93 LPA and an average of ₹14.32 LPA. Top recruiters included Amazon, NVIDIA, Google, Bosch, Palo Alto Networks, and Goldman Sachs.',
    image: '/images/campus/newAcadBlock2.jpg',
    badge: 'Milestone'
  },
  {
    id: 3,
    title: 'Academic & Research MoUs with Technical University of Munich (TUM) Germany & Univ. of Agder Norway',
    date: 'Global Academic Partnerships',
    category: 'Research & Global',
    excerpt: 'Continuing its vision of global research leadership, IIIT Kottayam formalised academic collaborations with world-leading universities for joint research in High Performance Computing, Cloud, and Data Science.',
    image: '/images/campus/iiitview_1.jpg',
    badge: 'Research'
  },
  {
    id: 4,
    title: 'Admissions Open for e-M.Tech (AI & Data Science) and Ph.D. Programmes',
    date: 'Academic Admissions',
    category: 'Academics',
    excerpt: 'Applications invited for working professionals and researchers for the executive M.Tech in Artificial Intelligence & Data Science and Ph.D. programmes across CSE, ECE, and Computational Mathematics.',
    image: '/images/campus/clg_hostel_new1.jpeg',
    badge: 'Admissions'
  },
  {
    id: 5,
    title: 'Short-Term Cyber Security Training Programme for Kerala Police Cyber Operations Division',
    date: 'Industry & Governance',
    category: 'Consultancy',
    excerpt: 'IIIT Kottayam faculty inaugurated and conducted an intensive advanced cyber security training program for Kerala Police Cyber Operations officers at the institute’s state-of-the-art cyber labs.',
    image: '/images/campus/newAcadBlock2.jpg',
    badge: 'National Impact'
  },
  {
    id: 6,
    title: 'Alumni Spotlight: Priya Patel (Microsoft) & Rahul Sharma (Google) Driving Global Tech Innovation',
    date: 'Alumni Achievements',
    category: 'Alumni Spotlight',
    excerpt: 'IIIT Kottayam graduates continue to make significant contributions across Silicon Valley and Bengaluru tech hubs, spearheading accessible product design and Android OS systems engineering.',
    image: '/images/alumni_2.jpg',
    badge: 'Alumni Pride'
  }
];

const News = () => {
  return (
    <div className="news-page section-padding bg-light">
      <div className="container">
        <div className="text-center mb-5">
          <span style={{ color: 'var(--secondary-color)', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '1px', fontSize: '0.85rem' }}>Official Announcements &amp; Highlights</span>
          <h1 className="section-title" style={{ marginTop: '6px' }}>Latest Institute &amp; Alumni News</h1>
          <p className="subtitle">Stay updated with research breakthroughs, international tie-ups, placement records, and alumni milestones.</p>
        </div>

        <div className="news-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '30px' }}>
          {newsArticles.map(article => (
            <div key={article.id} className="card news-card" style={{ display: 'flex', flexDirection: 'column', overflow: 'hidden', boxShadow: '0 8px 24px rgba(0,0,0,0.06)' }}>
              <div className="card-img" style={{ height: '210px', overflow: 'hidden', position: 'relative' }}>
                <img src={article.image} alt={article.title} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                <span style={{
                  position: 'absolute',
                  top: '12px',
                  right: '12px',
                  background: 'rgba(13, 43, 94, 0.85)',
                  color: '#fff',
                  fontSize: '0.75rem',
                  fontWeight: 700,
                  padding: '4px 10px',
                  borderRadius: '20px',
                  letterSpacing: '0.5px'
                }}>
                  {article.badge}
                </span>
              </div>
              <div className="card-content p-4" style={{ flex: 1, display: 'flex', flexDirection: 'column' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '10px' }}>
                  <span style={{ color: 'var(--primary-color)', fontSize: '12px', fontWeight: 'bold', textTransform: 'uppercase' }}>{article.category}</span>
                  <span style={{ color: '#888', fontSize: '12px', display: 'flex', alignItems: 'center', gap: '4px' }}>
                    <Calendar size={13} /> {article.date}
                  </span>
                </div>
                <h3 className="mb-3" style={{ fontSize: '1.2rem', lineHeight: '1.4', color: 'var(--primary-color)' }}>{article.title}</h3>
                <p className="mb-4" style={{ color: '#555', fontSize: '0.92rem', lineHeight: '1.6', flex: 1 }}>{article.excerpt}</p>
                <div style={{ borderTop: '1px solid #f1f5f9', paddingTop: '14px' }}>
                  <a href="https://www.iiitkottayam.ac.in" target="_blank" rel="noreferrer" style={{ color: 'var(--secondary-color)', fontWeight: 600, fontSize: '0.9rem', display: 'inline-flex', alignItems: 'center', gap: '6px' }}>
                    Read on official portal <ExternalLink size={14} />
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default News;
