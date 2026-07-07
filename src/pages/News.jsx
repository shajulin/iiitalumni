import React from 'react';
import { ArrowRight } from 'lucide-react';

const newsArticles = [
  {
    id: 1,
    title: 'IIIT Kottayam Achieves 100% Placement Record for Class of 2026',
    date: 'June 15, 2026',
    category: 'Campus News',
    excerpt: 'The graduating class of 2026 has set a new benchmark with 100% placements across top-tier multinational companies and hyper-growth startups, with the highest package reaching a record high.',
    image: '/images/iiitk_campus.jpg'
  },
  {
    id: 2,
    title: 'Alumni Startup "TechNova" Raises Series A Funding',
    date: 'May 28, 2026',
    category: 'Alumni Spotlight',
    excerpt: 'Anand Verma (Batch of 2018), Founder & CEO of TechNova, successfully closed a $5M Series A funding round led by prominent venture capitalists to expand their AI-driven SaaS platform.',
    image: '/images/alumni_3.jpg'
  },
  {
    id: 3,
    title: 'New Research Block Inaugurated at Valavoor Campus',
    date: 'April 10, 2026',
    category: 'Infrastructure',
    excerpt: 'The newly constructed state-of-the-art research facility was inaugurated today. The facility houses advanced labs for Cyber Security, Data Science, and IoT, partially funded by alumni contributions.',
    image: '/images/iiitk_campus.jpg'
  },
  {
    id: 4,
    title: 'Priya Patel Named Top 30 Under 30 in Tech',
    date: 'March 05, 2026',
    category: 'Alumni Spotlight',
    excerpt: 'We are proud to announce that Priya Patel (Batch of 2020), Product Manager at Microsoft, has been featured in the prestigious 30 Under 30 list for her contributions to accessible design.',
    image: '/images/alumni_2.jpg'
  }
];

const News = () => {
  return (
    <div className="news-page section-padding bg-light">
      <div className="container">
        <div className="text-center mb-5">
          <h1 className="section-title">Latest News & Updates</h1>
          <p className="subtitle">Catch up on the latest happenings at IIIT Kottayam and celebrate the achievements of our alumni.</p>
        </div>

        <div className="news-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '30px' }}>
          {newsArticles.map(article => (
            <div key={article.id} className="card news-card">
              <div className="card-img" style={{ height: '200px', overflow: 'hidden' }}>
                <img src={article.image} alt={article.title} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
              </div>
              <div className="card-content p-4">
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '10px' }}>
                  <span style={{ color: 'var(--primary-color)', fontSize: '12px', fontWeight: 'bold', textTransform: 'uppercase' }}>{article.category}</span>
                  <span style={{ color: '#888', fontSize: '12px' }}>{article.date}</span>
                </div>
                <h3 className="mb-3" style={{ fontSize: '1.25rem', lineHeight: '1.4' }}>{article.title}</h3>
                <p className="mb-4" style={{ color: '#555', fontSize: '0.95rem' }}>{article.excerpt}</p>
                <a href="#" className="link-with-icon font-weight-bold" style={{ color: 'var(--secondary-color)', textDecoration: 'none', display: 'flex', alignItems: 'center', gap: '5px' }}>
                  Read Full Article <ArrowRight size={16} />
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default News;
