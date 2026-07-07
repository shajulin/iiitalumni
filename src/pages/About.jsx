import React from 'react';
import { Target, Eye, Flag, BookOpen } from 'lucide-react';

const About = () => {
  return (
    <div className="about-page section-padding">
      <div className="container">
        <div className="about-header text-center mb-5">
          <h1 className="section-title">About IIIT Kottayam Alumni Association</h1>
          <p className="subtitle">Fostering a lifelong connection between the institute and its graduates.</p>
        </div>

        <div className="about-grid">
          <div className="about-text">
            <h2>Our Story</h2>
            <p>
              The Indian Institute of Information Technology Kottayam (IIITK) Alumni Association was established to create a strong, global network of graduates who are making significant contributions in the fields of technology, research, and entrepreneurship.
            </p>
            <p>
              From our humble beginnings in the beautiful campus of Valavoor, Pala, our alumni have spread their wings across the globe, leading top tech firms, driving innovation, and giving back to the community.
            </p>
            <p>
              We believe that our alumni are our greatest ambassadors. This platform is dedicated to celebrating your achievements, facilitating continuous learning, and providing a platform for you to engage with the next generation of IIITK students.
            </p>
          </div>
          <div className="about-image">
            <img src="/images/iiitk_campus.jpg" alt="IIIT Kottayam Campus" className="rounded-image shadow" />
          </div>
        </div>

        <div className="mission-vision-grid mt-5">
          <div className="card text-center p-4">
            <Target size={48} className="text-primary mb-3 mx-auto" />
            <h3>Our Mission</h3>
            <p>To engage, connect, and celebrate IIITK alumni. We aim to build a robust network that supports the professional and personal growth of our members while contributing to the advancement of our alma mater.</p>
          </div>
          <div className="card text-center p-4">
            <Eye size={48} className="text-primary mb-3 mx-auto" />
            <h3>Our Vision</h3>
            <p>To be a premier alumni association that empowers every IIITK graduate to achieve excellence and make a positive impact globally, fostering a culture of lifelong learning and giving back.</p>
          </div>
          <div className="card text-center p-4">
            <Flag size={48} className="text-primary mb-3 mx-auto" />
            <h3>Core Values</h3>
            <p>Excellence, Integrity, Innovation, and Community. We strive to uphold the core values of IIIT Kottayam in all our endeavors and partnerships.</p>
          </div>
        </div>

        <div className="leadership-section mt-5">
          <h2 className="section-title text-center">Message from the Director</h2>
          <div className="director-message card p-5 mt-4">
            <div className="director-content flex-row">
              <div className="director-text">
                <p><em>"Our alumni are the true measure of our institute's success. Your achievements in the industry, academia, and entrepreneurial ventures make IIIT Kottayam immensely proud. I urge you to stay connected, mentor our bright young minds, and help us take our beloved institute to even greater heights."</em></p>
                <h4 className="mt-3">- Prof. (Dr.) Rajiv V. Dharaskar</h4>
                <p className="text-muted">Director, IIIT Kottayam</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
