import React from 'react';
import { Users, BookOpen, MessageCircle, Star } from 'lucide-react';

const Mentorship = () => {
  return (
    <div className="mentorship-page section-padding bg-light">
      <div className="container">
        <div className="text-center mb-5">
          <h1 className="section-title">Alumni Mentorship Program</h1>
          <p className="subtitle">Bridge the gap between academic learning and industry readiness by connecting with experienced alumni.</p>
        </div>

        <div className="mentorship-hero card p-5 mb-5 text-center" style={{ backgroundImage: 'linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)), url(/images/iiitk_campus.jpg)', backgroundSize: 'cover', backgroundPosition: 'center', color: 'white', borderRadius: '15px' }}>
          <h2 style={{ color: 'white', marginBottom: '20px' }}>Guide the Next Generation</h2>
          <p style={{ maxWidth: '700px', margin: '0 auto 30px', fontSize: '1.1rem', lineHeight: '1.6' }}>
            Our mentorship program pairs current students and recent graduates with seasoned alumni professionals. Share your industry insights, career advice, and help shape the future leaders from IIIT Kottayam.
          </p>
          <div style={{ display: 'flex', justifyContent: 'center', gap: '20px' }}>
            <button className="btn btn-primary">Become a Mentor</button>
            <button className="btn btn-secondary glass">Find a Mentor</button>
          </div>
        </div>

        <div className="how-it-works mb-5">
          <h2 className="text-center mb-4">How It Works</h2>
          <div className="steps-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '30px' }}>
            
            <div className="step-card card text-center p-4">
              <div style={{ width: '60px', height: '60px', backgroundColor: 'var(--primary-color)', color: 'white', borderRadius: '50%', display: 'flex', justifyContent: 'center', alignItems: 'center', margin: '0 auto 20px', fontSize: '24px', fontWeight: 'bold' }}>1</div>
              <Users size={40} style={{ color: 'var(--primary-color)', margin: '0 auto 15px' }} />
              <h3>Match</h3>
              <p>Sign up and tell us about your background, interests, and goals. Our algorithm will pair you with the best mentor or mentee.</p>
            </div>
            
            <div className="step-card card text-center p-4">
              <div style={{ width: '60px', height: '60px', backgroundColor: 'var(--primary-color)', color: 'white', borderRadius: '50%', display: 'flex', justifyContent: 'center', alignItems: 'center', margin: '0 auto 20px', fontSize: '24px', fontWeight: 'bold' }}>2</div>
              <MessageCircle size={40} style={{ color: 'var(--primary-color)', margin: '0 auto 15px' }} />
              <h3>Connect</h3>
              <p>Once matched, schedule your first virtual meeting. Set expectations, define goals, and establish a communication rhythm.</p>
            </div>
            
            <div className="step-card card text-center p-4">
              <div style={{ width: '60px', height: '60px', backgroundColor: 'var(--primary-color)', color: 'white', borderRadius: '50%', display: 'flex', justifyContent: 'center', alignItems: 'center', margin: '0 auto 20px', fontSize: '24px', fontWeight: 'bold' }}>3</div>
              <BookOpen size={40} style={{ color: 'var(--primary-color)', margin: '0 auto 15px' }} />
              <h3>Learn</h3>
              <p>Engage in regular sessions. Discuss career paths, review resumes, practice interviews, and navigate workplace challenges.</p>
            </div>
            
            <div className="step-card card text-center p-4">
              <div style={{ width: '60px', height: '60px', backgroundColor: 'var(--primary-color)', color: 'white', borderRadius: '50%', display: 'flex', justifyContent: 'center', alignItems: 'center', margin: '0 auto 20px', fontSize: '24px', fontWeight: 'bold' }}>4</div>
              <Star size={40} style={{ color: 'var(--primary-color)', margin: '0 auto 15px' }} />
              <h3>Grow</h3>
              <p>Build a lasting professional relationship. Both mentors and mentees gain valuable perspectives and expand their network.</p>
            </div>
            
          </div>
        </div>

      </div>
    </div>
  );
};

export default Mentorship;
