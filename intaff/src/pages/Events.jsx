import React from 'react';
import { Calendar, MapPin, Clock, ArrowRight } from 'lucide-react';

const eventsList = [
  {
    id: 1,
    title: 'Global Alumni Meet 2026',
    date: 'November 15, 2026',
    time: '09:00 AM - 08:00 PM IST',
    location: 'IIIT Kottayam Campus & Virtual',
    description: 'Join us for the biggest alumni gathering of the year. Reconnect with batchmates, meet the faculty, and see how much the campus has grown. The event features keynote speeches from distinguished alumni, panel discussions, and an evening cultural program.',
    image: '/images/iiitk_campus.jpg',
    type: 'Flagship Event'
  },
  {
    id: 2,
    title: 'Tech Talk: The Future of AI in Enterprise',
    date: 'August 22, 2026',
    time: '06:00 PM - 07:30 PM IST',
    location: 'Virtual Event (Zoom)',
    description: 'An exclusive webinar by Rahul Sharma (Batch of 2019), Software Engineer at Google. Rahul will discuss the latest trends in Generative AI and how it is reshaping enterprise software architecture.',
    image: '/images/alumni_1.jpg',
    type: 'Webinar'
  },
  {
    id: 3,
    title: 'Start-up Pitch & Networking Night',
    date: 'September 10, 2026',
    time: '05:00 PM - 09:00 PM IST',
    location: 'Bengaluru Chapter (Taj MG Road)',
    description: 'A networking evening for IIITK alumni entrepreneurs and investors. Pitch your startup idea to a panel of alumni VCs and connect with potential co-founders.',
    image: '/images/alumni_3.jpg',
    type: 'Networking'
  }
];

const Events = () => {
  return (
    <div className="events-page section-padding">
      <div className="container">
        <div className="text-center mb-5">
          <h1 className="section-title">Alumni Events</h1>
          <p className="subtitle">Stay connected through our global and regional gatherings, webinars, and networking sessions.</p>
        </div>

        <div className="events-list-container">
          {eventsList.map(event => (
            <div key={event.id} className="event-card card mb-4" style={{ display: 'flex', flexDirection: 'row', overflow: 'hidden' }}>
              <div className="event-image" style={{ width: '30%', minWidth: '250px' }}>
                <img src={event.image} alt={event.title} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
              </div>
              <div className="event-details p-4" style={{ flex: 1 }}>
                <span className="badge" style={{ backgroundColor: 'var(--primary-color)', color: 'white', padding: '4px 8px', borderRadius: '4px', fontSize: '12px', fontWeight: 'bold' }}>{event.type}</span>
                <h2 className="mt-2 mb-3">{event.title}</h2>
                
                <div className="event-meta mb-3" style={{ display: 'flex', flexWrap: 'wrap', gap: '15px', color: '#555' }}>
                  <span style={{ display: 'flex', alignItems: 'center', gap: '5px' }}><Calendar size={16} /> {event.date}</span>
                  <span style={{ display: 'flex', alignItems: 'center', gap: '5px' }}><Clock size={16} /> {event.time}</span>
                  <span style={{ display: 'flex', alignItems: 'center', gap: '5px' }}><MapPin size={16} /> {event.location}</span>
                </div>
                
                <p className="mb-4">{event.description}</p>
                
                <button className="btn btn-secondary glass">Register Now <ArrowRight size={16} style={{ marginLeft: '5px' }} /></button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Events;
