import React from 'react';
import { Calendar, MapPin, Clock, ArrowRight, Tag, Users } from 'lucide-react';

const eventsList = [
  {
    id: 1,
    title: 'Global Alumni Reunion & Felicitation 2026',
    date: 'November 15, 2026',
    time: '09:30 AM – 06:00 PM IST',
    location: 'Varenyam Senate Hall, IIIT Kottayam Campus & Virtual (Hybrid)',
    description: 'The premier annual gathering of IIIT Kottayam alumni across all graduating batches. Featuring presidential address by Institute Leadership, alumni achievement awards, interaction with faculty, guided campus tours, and cultural evening.',
    image: '/images/campus/clg_img_new2.jpeg',
    type: 'Flagship Event'
  },
  {
    id: 2,
    title: 'ICITIIT 2026: International Conference on Information Technology Trends',
    date: 'September 18–19, 2026',
    time: '10:00 AM – 05:30 PM IST',
    location: 'Academic Complex & Virtual',
    description: 'Flagship international computing conference organized by IIIT Kottayam in technical co-sponsorship with IEEE. Alumni researchers and industry leaders present frontier findings in AI, High Performance Computing, and Cyber Security.',
    image: '/images/campus/newAcadBlock2.jpg',
    type: 'Academic Conference'
  },
  {
    id: 3,
    title: 'Tokyo & Global Career Forum with Human Resocia Japan',
    date: 'August 24, 2026',
    time: '05:00 PM – 07:00 PM IST',
    location: 'Online Webinar (Zoom)',
    description: 'Interactive session exploring overseas software engineering careers, bilingual technical roles, and relocation to Japan, led by IIIT Kottayam alumni working in Tokyo in partnership with Human Resocia.',
    image: '/images/campus/iiitview_1.jpg',
    type: 'Career & Global'
  },
  {
    id: 4,
    title: 'Dhruva National Techno-Cultural Festival: Alumni Homecoming',
    date: 'October 10–12, 2026',
    time: 'Full Day Festival',
    location: 'IIIT Kottayam Campus, Valavoor',
    description: 'The annual techno-cultural extravaganza of IIIT Kottayam. Alumni are invited back to campus for hackathons, gaming tournaments, musical pro-nights, and startup exhibition booths.',
    image: '/images/campus/clg_hostel_new1.jpeg',
    type: 'Festival & Reunion'
  }
];

const Events = () => {
  return (
    <div className="events-page section-padding">
      <div className="container">
        <div className="text-center mb-5">
          <span style={{ color: 'var(--secondary-color)', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '1px', fontSize: '0.85rem' }}>Gatherings &amp; Symposia</span>
          <h1 className="section-title" style={{ marginTop: '6px' }}>Alumni Events &amp; Conferences</h1>
          <p className="subtitle">Participate in annual reunions, global webinars, hackathons, and research symposia at IIIT Kottayam.</p>
        </div>

        <div className="events-list-container">
          {eventsList.map(event => (
            <div key={event.id} className="event-card card mb-4" style={{ display: 'flex', flexWrap: 'wrap', overflow: 'hidden', boxShadow: '0 8px 24px rgba(0,0,0,0.06)' }}>
              <div className="event-image" style={{ flex: '1 1 300px', minHeight: '220px' }}>
                <img src={event.image} alt={event.title} style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }} />
              </div>
              <div className="event-details p-4" style={{ flex: '2 1 400px', display: 'flex', flexDirection: 'column' }}>
                <span className="badge" style={{
                  backgroundColor: 'var(--primary-color)',
                  color: 'white',
                  padding: '4px 10px',
                  borderRadius: '20px',
                  fontSize: '11px',
                  fontWeight: 'bold',
                  textTransform: 'uppercase',
                  alignSelf: 'flex-start',
                  letterSpacing: '0.5px'
                }}>
                  {event.type}
                </span>
                <h2 className="mt-2 mb-3" style={{ color: 'var(--primary-color)', fontSize: '1.4rem' }}>{event.title}</h2>
                
                <div className="event-meta mb-3" style={{ display: 'flex', flexWrap: 'wrap', gap: '16px', color: '#64748b', fontSize: '0.9rem' }}>
                  <span style={{ display: 'flex', alignItems: 'center', gap: '6px' }}><Calendar size={16} color="var(--secondary-color)" /> {event.date}</span>
                  <span style={{ display: 'flex', alignItems: 'center', gap: '6px' }}><Clock size={16} color="var(--secondary-color)" /> {event.time}</span>
                  <span style={{ display: 'flex', alignItems: 'center', gap: '6px' }}><MapPin size={16} color="var(--secondary-color)" /> {event.location}</span>
                </div>
                
                <p style={{ color: '#555', lineHeight: '1.7', fontSize: '0.95rem', flex: 1 }}>{event.description}</p>
                
                <div style={{ marginTop: '16px', display: 'flex', gap: '12px', flexWrap: 'wrap' }}>
                  <a href="mailto:alumni@iiitkottayam.ac.in?subject=RSVP for Event" className="btn btn-primary" style={{ padding: '8px 18px', fontSize: '0.9rem' }}>
                    Register / RSVP
                  </a>
                  <a href="https://www.iiitkottayam.ac.in" target="_blank" rel="noreferrer" className="btn btn-secondary" style={{ padding: '8px 18px', fontSize: '0.9rem' }}>
                    Event Details
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

export default Events;
