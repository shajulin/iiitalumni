import React, { useState } from 'react';
import { MapPin, Phone, Mail, Send } from 'lucide-react';

const Contact = () => {
  const [formData, setFormData] = useState({ name: '', email: '', subject: '', message: '' });

  const handleChange = (e) => setFormData({ ...formData, [e.target.name]: e.target.value });
  
  const handleSubmit = (e) => {
    e.preventDefault();
    alert('Thank you for your message. We will get back to you shortly.');
    setFormData({ name: '', email: '', subject: '', message: '' });
  };

  return (
    <div className="contact-page section-padding bg-light">
      <div className="container">
        <div className="text-center mb-5">
          <h1 className="section-title">Contact Us</h1>
          <p className="subtitle">Have a question or want to get involved? Reach out to the IIITK Alumni Association.</p>
        </div>

        <div className="contact-container" style={{ display: 'flex', flexWrap: 'wrap', gap: '40px' }}>
          <div className="contact-info" style={{ flex: '1', minWidth: '300px' }}>
            <div className="card p-5 h-100">
              <h3 className="mb-4">Get in Touch</h3>
              
              <div className="info-item mb-4" style={{ display: 'flex', alignItems: 'flex-start', gap: '15px' }}>
                <div className="icon-wrapper" style={{ backgroundColor: 'var(--primary-color)', color: 'white', padding: '12px', borderRadius: '50%' }}>
                  <MapPin size={24} />
                </div>
                <div>
                  <h4 className="mb-1" style={{ fontSize: '1.1rem' }}>Location</h4>
                  <p style={{ color: '#555', lineHeight: '1.5' }}>
                    Indian Institute of Information Technology Kottayam,<br/>
                    Valavoor P.O, Pala,<br/>
                    Kottayam, Kerala - 686635, India
                  </p>
                </div>
              </div>

              <div className="info-item mb-4" style={{ display: 'flex', alignItems: 'flex-start', gap: '15px' }}>
                <div className="icon-wrapper" style={{ backgroundColor: 'var(--primary-color)', color: 'white', padding: '12px', borderRadius: '50%' }}>
                  <Mail size={24} />
                </div>
                <div>
                  <h4 className="mb-1" style={{ fontSize: '1.1rem' }}>Email</h4>
                  <p style={{ color: '#555', lineHeight: '1.5' }}>
                    alumni@iiitkottayam.ac.in<br/>
                    support.alumni@iiitkottayam.ac.in
                  </p>
                </div>
              </div>

              <div className="info-item" style={{ display: 'flex', alignItems: 'flex-start', gap: '15px' }}>
                <div className="icon-wrapper" style={{ backgroundColor: 'var(--primary-color)', color: 'white', padding: '12px', borderRadius: '50%' }}>
                  <Phone size={24} />
                </div>
                <div>
                  <h4 className="mb-1" style={{ fontSize: '1.1rem' }}>Phone</h4>
                  <p style={{ color: '#555', lineHeight: '1.5' }}>
                    +91 4822 202100<br/>
                    +91 4822 202135
                  </p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="contact-form-wrapper" style={{ flex: '1.5', minWidth: '350px' }}>
            <div className="card p-5">
              <h3 className="mb-4">Send us a Message</h3>
              <form onSubmit={handleSubmit} className="contact-form">
                <div className="form-group mb-3">
                  <label htmlFor="name" style={{ display: 'block', marginBottom: '8px', fontWeight: '500' }}>Full Name</label>
                  <input type="text" id="name" name="name" value={formData.name} onChange={handleChange} required style={{ width: '100%', padding: '12px', borderRadius: '8px', border: '1px solid #ddd' }} />
                </div>
                <div className="form-group mb-3">
                  <label htmlFor="email" style={{ display: 'block', marginBottom: '8px', fontWeight: '500' }}>Email Address</label>
                  <input type="email" id="email" name="email" value={formData.email} onChange={handleChange} required style={{ width: '100%', padding: '12px', borderRadius: '8px', border: '1px solid #ddd' }} />
                </div>
                <div className="form-group mb-3">
                  <label htmlFor="subject" style={{ display: 'block', marginBottom: '8px', fontWeight: '500' }}>Subject</label>
                  <input type="text" id="subject" name="subject" value={formData.subject} onChange={handleChange} required style={{ width: '100%', padding: '12px', borderRadius: '8px', border: '1px solid #ddd' }} />
                </div>
                <div className="form-group mb-4">
                  <label htmlFor="message" style={{ display: 'block', marginBottom: '8px', fontWeight: '500' }}>Message</label>
                  <textarea id="message" name="message" rows="5" value={formData.message} onChange={handleChange} required style={{ width: '100%', padding: '12px', borderRadius: '8px', border: '1px solid #ddd', resize: 'vertical' }}></textarea>
                </div>
                <button type="submit" className="btn btn-primary w-100" style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', gap: '8px', padding: '12px' }}>
                  <Send size={18} /> Send Message
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
