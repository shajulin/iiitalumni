import React, { useState } from 'react';
import { Search, MapPin, Briefcase, Mail } from 'lucide-react';

const alumniData = [
  { id: 1, name: 'Rahul Sharma', batch: '2019', company: 'Google', role: 'Software Engineer', location: 'Bengaluru, India', image: '/images/alumni_1.jpg' },
  { id: 2, name: 'Priya Patel', batch: '2020', company: 'Microsoft', role: 'Product Manager', location: 'Hyderabad, India', image: '/images/alumni_2.jpg' },
  { id: 3, name: 'Anand Verma', batch: '2018', company: 'TechNova Startup', role: 'Founder & CEO', location: 'Kochi, India', image: '/images/alumni_3.jpg' },
  { id: 4, name: 'Sneha Gupta', batch: '2021', company: 'Amazon', role: 'SDE II', location: 'Pune, India', image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80' },
  { id: 5, name: 'Kiran Kumar', batch: '2019', company: 'TCS', role: 'Systems Analyst', location: 'Chennai, India', image: 'https://images.unsplash.com/photo-1556157382-97eda2d62296?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80' },
  { id: 6, name: 'Aisha Khan', batch: '2022', company: 'Infosys', role: 'Data Scientist', location: 'Bengaluru, India', image: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80' },
];

const Directory = () => {
  const [searchTerm, setSearchTerm] = useState('');

  const filteredAlumni = alumniData.filter(alumni => 
    alumni.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    alumni.company.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="directory-page section-padding bg-light">
      <div className="container">
        <div className="text-center mb-5">
          <h1 className="section-title">Alumni Directory</h1>
          <p className="subtitle">Connect with IIITK graduates around the world.</p>
        </div>

        <div className="search-bar-container mb-5">
          <div className="search-input-wrapper" style={{ position: 'relative', maxWidth: '600px', margin: '0 auto' }}>
            <Search size={20} style={{ position: 'absolute', left: '15px', top: '50%', transform: 'translateY(-50%)', color: '#6c757d' }} />
            <input 
              type="text" 
              placeholder="Search by name, company, or batch..." 
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              style={{ width: '100%', padding: '12px 20px 12px 45px', borderRadius: '30px', border: '1px solid #ddd', fontSize: '16px' }}
            />
          </div>
        </div>

        <div className="cards-grid">
          {filteredAlumni.map(alumni => (
            <div key={alumni.id} className="card alumni-card text-center p-4">
              <div className="card-img-wrapper" style={{ width: '100px', height: '100px', margin: '0 auto 15px', borderRadius: '50%', overflow: 'hidden' }}>
                <img src={alumni.image} alt={alumni.name} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
              </div>
              <h3 className="mb-1">{alumni.name}</h3>
              <p className="text-primary mb-2">Class of {alumni.batch}</p>
              
              <div className="alumni-details text-left mt-3">
                <p className="mb-2" style={{ display: 'flex', alignItems: 'center', gap: '10px' }}><Briefcase size={16} /> {alumni.role} at {alumni.company}</p>
                <p className="mb-2" style={{ display: 'flex', alignItems: 'center', gap: '10px' }}><MapPin size={16} /> {alumni.location}</p>
              </div>
              
              <button className="btn btn-primary btn-sm mt-3 w-100" style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '8px' }}>
                <Mail size={16} /> Connect
              </button>
            </div>
          ))}
        </div>
        
        {filteredAlumni.length === 0 && (
          <div className="text-center py-5">
            <h3>No alumni found matching "{searchTerm}"</h3>
            <p>Try adjusting your search terms.</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Directory;
