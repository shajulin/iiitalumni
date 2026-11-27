import React, { useState } from 'react';
import { MapPin, Phone, Mail, Send, Globe, Plane, Train, CheckCircle } from 'lucide-react';

const Contact = () => {
  const [formData, setFormData] = useState({ name: '', email: '', subject: '', message: '' });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => setFormData({ ...formData, [e.target.name]: e.target.value });
  
  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setFormData({ name: '', email: '', subject: '', message: '' });
    }, 4000);
  };

  return (
    <div className="contact-page section-padding bg-light">
      <div className="container">
        <div className="text-center mb-5">
          <span style={{ color: 'var(--secondary-color)', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '1px', fontSize: '0.85rem' }}>Official Contact &amp; Campus Location</span>
          <h1 className="section-title" style={{ marginTop: '6px' }}>Contact IIIT Kottayam</h1>
          <p className="subtitle">Connect directly with the Alumni Association, Institute Administration, and Academic Offices.</p>
        </div>

        <div className="contact-container" style={{ display: 'flex', flexWrap: 'wrap', gap: '30px', marginBottom: '50px' }}>
          
          {/* Contact Details Card */}
          <div className="contact-info" style={{ flex: '1', minWidth: '320px' }}>
            <div className="card p-5 h-100" style={{ boxShadow: '0 8px 24px rgba(0,0,0,0.06)' }}>
              <h3 className="mb-4" style={{ color: 'var(--primary-color)' }}>Official Reach Details</h3>
              
              <div className="info-item mb-4" style={{ display: 'flex', alignItems: 'flex-start', gap: '15px' }}>
                <div style={{ backgroundColor: 'var(--primary-color)', color: 'white', padding: '12px', borderRadius: '50%', flexShrink: 0 }}>
                  <MapPin size={22} />
                </div>
                <div>
                  <h4 className="mb-1" style={{ fontSize: '1.05rem', color: '#1e293b' }}>Permanent Campus Address</h4>
                  <p style={{ color: '#555', lineHeight: '1.6', fontSize: '0.92rem', margin: 0 }}>
                    Indian Institute of Information Technology Kottayam<br/>
                    Valavoor.P.O, Pala,<br/>
                    Kottayam District, Kerala – 686635, India
                  </p>
                </div>
              </div>

              <div className="info-item mb-4" style={{ display: 'flex', alignItems: 'flex-start', gap: '15px' }}>
                <div style={{ backgroundColor: 'var(--primary-color)', color: 'white', padding: '12px', borderRadius: '50%', flexShrink: 0 }}>
                  <Mail size={22} />
                </div>
                <div>
                  <h4 className="mb-1" style={{ fontSize: '1.05rem', color: '#1e293b' }}>Official Email Contacts</h4>
                  <p style={{ color: '#555', lineHeight: '1.6', fontSize: '0.92rem', margin: 0 }}>
                    <strong>Alumni Office:</strong> <a href="mailto:shajulin@iiitkottayam.ac.in" style={{ color: 'var(--primary-color)' }}>shajulin@iiitkottayam.ac.in</a><br/>
                    <strong>Registrar Office:</strong> <a href="mailto:registrar@iiitkottayam.ac.in" style={{ color: 'var(--primary-color)' }}>registrar@iiitkottayam.ac.in</a><br/>
                    <strong>Director Office:</strong> <a href="mailto:director@iiitkottayam.ac.in" style={{ color: 'var(--primary-color)' }}>director@iiitkottayam.ac.in</a>
                  </p>
                </div>
              </div>

              <div className="info-item mb-4" style={{ display: 'flex', alignItems: 'flex-start', gap: '15px' }}>
                <div style={{ backgroundColor: 'var(--primary-color)', color: 'white', padding: '12px', borderRadius: '50%', flexShrink: 0 }}>
                  <Phone size={22} />
                </div>
                <div>
                  <h4 className="mb-1" style={{ fontSize: '1.05rem', color: '#1e293b' }}>Phone &amp; EPABX</h4>
                  <p style={{ color: '#555', lineHeight: '1.6', fontSize: '0.92rem', margin: 0 }}>
                    <strong>General Enquiry:</strong> +91 0482-2202100 / 2352100<br/>
                    <strong>Academic / Admissions:</strong> +91 0482-2202135 / 2352135<br/>
                    <strong>Alumni Affairs Office:</strong> +91 0482-2202155
                  </p>
                </div>
              </div>

              <div className="info-item" style={{ display: 'flex', alignItems: 'flex-start', gap: '15px' }}>
                <div style={{ backgroundColor: 'var(--primary-color)', color: 'white', padding: '12px', borderRadius: '50%', flexShrink: 0 }}>
                  <Globe size={22} />
                </div>
                <div>
                  <h4 className="mb-1" style={{ fontSize: '1.05rem', color: '#1e293b' }}>Institute Portal</h4>
                  <p style={{ color: '#555', lineHeight: '1.6', fontSize: '0.92rem', margin: 0 }}>
                    <a href="https://www.iiitkottayam.ac.in" target="_blank" rel="noreferrer" style={{ color: 'var(--primary-color)', fontWeight: 600 }}>
                      www.iiitkottayam.ac.in
                    </a>
                  </p>
                </div>
              </div>
            </div>
          </div>
          
          {/* Contact Form */}
          <div className="contact-form-wrapper" style={{ flex: '1.3', minWidth: '340px' }}>
            <div className="card p-5" style={{ boxShadow: '0 8px 24px rgba(0,0,0,0.06)' }}>
              <h3 className="mb-2" style={{ color: 'var(--primary-color)' }}>Send a Message to Alumni Office</h3>
              <p style={{ color: '#64748b', fontSize: '0.92rem', marginBottom: '24px' }}>
                Have an inquiry, wish to organize a guest lecture, or want to contribute to the alumni fund? Drop us a note below.
              </p>

              {submitted && (
                <div style={{ background: '#ecfdf5', border: '1px solid #10b981', color: '#065f46', padding: '12px 16px', borderRadius: '8px', marginBottom: '20px', display: 'flex', alignItems: 'center', gap: '10px' }}>
                  <CheckCircle size={20} color="#10b981" />
                  <span>Thank you! Your message has been sent to the IIIT Kottayam Alumni Office.</span>
                </div>
              )}

              <form onSubmit={handleSubmit} className="contact-form">
                <div className="form-group mb-3">
                  <label htmlFor="name" style={{ display: 'block', marginBottom: '6px', fontWeight: '600', fontSize: '0.9rem', color: '#334155' }}>Full Name</label>
                  <input type="text" id="name" name="name" value={formData.name} onChange={handleChange} required placeholder="e.g. Vinay Kumar Maddiralla" style={{ width: '100%', padding: '12px', borderRadius: '8px', border: '1px solid #cbd5e1', outline: 'none' }} />
                </div>
                <div className="form-group mb-3">
                  <label htmlFor="email" style={{ display: 'block', marginBottom: '6px', fontWeight: '600', fontSize: '0.9rem', color: '#334155' }}>Email Address</label>
                  <input type="email" id="email" name="email" value={formData.email} onChange={handleChange} required placeholder="you@domain.com" style={{ width: '100%', padding: '12px', borderRadius: '8px', border: '1px solid #cbd5e1', outline: 'none' }} />
                </div>
                <div className="form-group mb-3">
                  <label htmlFor="subject" style={{ display: 'block', marginBottom: '6px', fontWeight: '600', fontSize: '0.9rem', color: '#334155' }}>Subject / Purpose</label>
                  <input type="text" id="subject" name="subject" value={formData.subject} onChange={handleChange} required placeholder="e.g. Mentorship / Campus Visit / Alumni Verification" style={{ width: '100%', padding: '12px', borderRadius: '8px', border: '1px solid #cbd5e1', outline: 'none' }} />
                </div>
                <div className="form-group mb-4">
                  <label htmlFor="message" style={{ display: 'block', marginBottom: '6px', fontWeight: '600', fontSize: '0.9rem', color: '#334155' }}>Message</label>
                  <textarea id="message" name="message" rows="4" value={formData.message} onChange={handleChange} required placeholder="Write your message here..." style={{ width: '100%', padding: '12px', borderRadius: '8px', border: '1px solid #cbd5e1', resize: 'vertical', outline: 'none' }}></textarea>
                </div>
                <button type="submit" className="btn btn-primary w-100" style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', gap: '8px', padding: '14px', fontWeight: 600 }}>
                  <Send size={18} /> Submit to Alumni Office
                </button>
              </form>
            </div>
          </div>

        </div>

        {/* How to Reach IIIT Kottayam — official guide */}
        <div className="card p-5" style={{ marginTop: '20px', background: '#fff', boxShadow: '0 8px 24px rgba(0,0,0,0.06)' }}>
          <h2 style={{ color: 'var(--primary-color)', marginBottom: '8px', textAlign: 'center' }}>How to Reach IIIT Kottayam</h2>
          <p style={{ color: '#64748b', textAlign: 'center', marginBottom: '32px', maxWidth: '750px', margin: '0 auto 32px' }}>
            The permanent campus of IIIT Kottayam is located in Valavoor village, near Pala, in the Kottayam district of Kerala, approximately 10 km from Pala town.
          </p>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '24px' }}>
            <div style={{ background: '#f8fafc', padding: '24px', borderRadius: '10px', border: '1px solid #e2e8f0' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '10px' }}>
                <Plane size={24} style={{ color: 'var(--secondary-color)' }} />
                <h4 style={{ color: 'var(--primary-color)', margin: 0 }}>From Airport</h4>
              </div>
              <p style={{ color: '#555', fontSize: '0.92rem', lineHeight: 1.7, margin: 0 }}>
                IIIT Kottayam is about <strong>70 km</strong> from Cochin International Airport (Nedumbassery - COK). Prepaid taxi services are readily available at the airport directly to the Valavoor campus.
              </p>
            </div>

            <div style={{ background: '#f8fafc', padding: '24px', borderRadius: '10px', border: '1px solid #e2e8f0' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '10px' }}>
                <Train size={24} style={{ color: 'var(--secondary-color)' }} />
                <h4 style={{ color: 'var(--primary-color)', margin: 0 }}>From Railway Station / Bus Stand</h4>
              </div>
              <p style={{ color: '#555', fontSize: '0.92rem', lineHeight: 1.7, margin: 0 }}>
                The institute is about <strong>40 km</strong> from Kottayam Railway Station and KSRTC Bus Station. Frequent KSRTC buses operate to Pala, from where direct taxis and private buses to Valavoor Junction are accessible.
              </p>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
};

export default Contact;
