import React from 'react';
import { Briefcase, MapPin, Building, Clock, ChevronRight } from 'lucide-react';

const jobsList = [
  {
    id: 1,
    title: 'Senior Software Engineer (Frontend)',
    company: 'TechNova',
    location: 'Remote / Bengaluru, India',
    type: 'Full-time',
    postedBy: 'Anand Verma (Batch of 2018)',
    postedDate: '2 days ago',
    logo: 'https://ui-avatars.com/api/?name=TN&background=0D8ABC&color=fff&size=64'
  },
  {
    id: 2,
    title: 'Data Science Intern',
    company: 'AnalyticsEdge Solutions',
    location: 'Hyderabad, India',
    type: 'Internship',
    postedBy: 'Neha Singh (Batch of 2021)',
    postedDate: '1 week ago',
    logo: 'https://ui-avatars.com/api/?name=AE&background=FF5722&color=fff&size=64'
  },
  {
    id: 3,
    title: 'Product Manager',
    company: 'GlobalFinTech',
    location: 'Mumbai, India',
    type: 'Full-time',
    postedBy: 'Karthik R (Batch of 2019)',
    postedDate: '3 weeks ago',
    logo: 'https://ui-avatars.com/api/?name=GF&background=4CAF50&color=fff&size=64'
  }
];

const Jobs = () => {
  return (
    <div className="jobs-page section-padding">
      <div className="container">
        <div className="text-center mb-5">
          <h1 className="section-title">Jobs & Internships</h1>
          <p className="subtitle">Discover career opportunities posted exclusively for the IIIT Kottayam community by our alumni.</p>
        </div>
        
        <div className="jobs-header d-flex justify-content-between align-items-center mb-4" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <h3>Recent Opportunities</h3>
          <button className="btn btn-primary">Post a Job</button>
        </div>

        <div className="jobs-list">
          {jobsList.map(job => (
            <div key={job.id} className="job-card card p-4 mb-3" style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', transition: 'transform 0.2s', cursor: 'pointer' }} onMouseOver={(e) => e.currentTarget.style.transform = 'translateY(-2px)'} onMouseOut={(e) => e.currentTarget.style.transform = 'none'}>
              <div className="company-logo mr-4" style={{ marginRight: '20px' }}>
                <img src={job.logo} alt={job.company} style={{ borderRadius: '8px' }} />
              </div>
              
              <div className="job-details" style={{ flex: 1 }}>
                <h4 className="mb-1">{job.title}</h4>
                <div className="job-meta" style={{ display: 'flex', gap: '15px', color: '#666', fontSize: '14px', marginBottom: '8px' }}>
                  <span style={{ display: 'flex', alignItems: 'center', gap: '4px' }}><Building size={14} /> {job.company}</span>
                  <span style={{ display: 'flex', alignItems: 'center', gap: '4px' }}><MapPin size={14} /> {job.location}</span>
                  <span style={{ display: 'flex', alignItems: 'center', gap: '4px' }}><Briefcase size={14} /> {job.type}</span>
                </div>
                <div className="job-footer" style={{ fontSize: '12px', color: '#888' }}>
                  <span style={{ display: 'flex', alignItems: 'center', gap: '4px' }}><Clock size={12} /> Posted {job.postedDate} by {job.postedBy}</span>
                </div>
              </div>
              
              <div className="job-action">
                <button className="btn btn-secondary glass btn-sm" style={{ padding: '8px 12px' }}>View Details <ChevronRight size={16} style={{ verticalAlign: 'middle' }} /></button>
              </div>
            </div>
          ))}
        </div>
        
        <div className="text-center mt-5">
          <p className="text-muted">Showing 3 of 42 available opportunities</p>
          <button className="btn btn-secondary mt-2">Load More</button>
        </div>
      </div>
    </div>
  );
};

export default Jobs;
