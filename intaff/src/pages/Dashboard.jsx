import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Bell, Calendar, Briefcase, User, Settings, LogOut, CheckCircle, Search, MapPin, Edit3, Database } from 'lucide-react';
import AlumniDataTab from './AlumniDataTab';

const Dashboard = () => {
  const navigate = useNavigate();
  const [user, setUser] = useState(null);
  const [activeTab, setActiveTab] = useState('dashboard');

  useEffect(() => {
    const loggedInUser = sessionStorage.getItem('user');
    if (!loggedInUser) {
      navigate('/login');
    } else {
      setUser(JSON.parse(loggedInUser));
    }
  }, [navigate]);

  const handleLogout = () => {
    sessionStorage.removeItem('user');
    navigate('/login');
  };

  if (!user) return <div className="section-padding text-center">Loading...</div>;

  const renderContent = () => {
    switch(activeTab) {
      case 'jobs':
        return (
          <div className="animate-fade-in">
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '20px' }}>
              <h3>Jobs Portal</h3>
              <button className="btn btn-primary" style={{ padding: '8px 15px', fontSize: '14px' }}>+ Post a Job</button>
            </div>
            <div className="card p-4 shadow mb-4" style={{ display: 'flex', gap: '15px' }}>
               <Search color="#64748b" />
               <input type="text" placeholder="Search for jobs, internships, roles..." style={{ border: 'none', outline: 'none', width: '100%', fontSize: '16px' }} />
            </div>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '20px' }}>
              {[1, 2, 3, 4].map(job => (
                <div key={job} className="card p-4 shadow" style={{ transition: 'transform 0.2s', cursor: 'pointer' }} onMouseOver={e => e.currentTarget.style.transform='translateY(-5px)'} onMouseOut={e => e.currentTarget.style.transform='translateY(0)'}>
                  <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                    <h4 style={{ color: 'var(--primary-color)', margin: '0 0 5px 0' }}>Senior Software Engineer</h4>
                    <span style={{ backgroundColor: '#e0f2fe', color: '#0369a1', padding: '3px 8px', borderRadius: '12px', fontSize: '12px', fontWeight: 'bold' }}>Full-time</span>
                  </div>
                  <h5 style={{ color: '#475569', margin: '0 0 15px 0' }}>Google India</h5>
                  <div style={{ display: 'flex', gap: '15px', color: '#64748b', fontSize: '14px', marginBottom: '20px' }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '5px' }}><MapPin size={16}/> Bengaluru</div>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '5px' }}><Briefcase size={16}/> 3-5 Yrs</div>
                  </div>
                  <button className="btn btn-primary w-100" style={{ padding: '8px' }}>Apply Now</button>
                </div>
              ))}
            </div>
          </div>
        );
      case 'events':
        return (
          <div className="animate-fade-in">
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '20px' }}>
              <h3>My Events</h3>
              <div style={{ display: 'flex', gap: '10px' }}>
                <button className="btn" style={{ backgroundColor: 'var(--primary-color)', color: 'white', padding: '8px 15px' }}>Upcoming</button>
                <button className="btn" style={{ backgroundColor: 'white', color: '#64748b', border: '1px solid #cbd5e1', padding: '8px 15px' }}>Past Events</button>
              </div>
            </div>
            
            {[1, 2].map(event => (
              <div key={event} className="card p-4 shadow mb-4" style={{ display: 'flex', gap: '20px', alignItems: 'center' }}>
                <div style={{ backgroundColor: 'var(--primary-color)', color: 'white', padding: '15px 20px', borderRadius: '12px', textAlign: 'center', minWidth: '90px' }}>
                  <div style={{ fontSize: '14px', textTransform: 'uppercase', opacity: 0.9 }}>Nov</div>
                  <div style={{ fontSize: '24px', fontWeight: 'bold' }}>15</div>
                </div>
                <div style={{ flex: 1 }}>
                  <h4 style={{ margin: '0 0 10px 0', fontSize: '18px' }}>Global Alumni Meet 2026</h4>
                  <div style={{ display: 'flex', gap: '20px', color: '#64748b', fontSize: '14px' }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '5px' }}><Calendar size={16}/> 09:00 AM - 08:00 PM</div>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '5px' }}><MapPin size={16}/> IIITK Campus & Virtual</div>
                  </div>
                </div>
                <div>
                  <button className="btn" style={{ backgroundColor: '#10b981', color: 'white' }}><CheckCircle size={18} style={{ display: 'inline', marginRight: '5px', verticalAlign: 'text-bottom' }}/> Registered</button>
                </div>
              </div>
            ))}
          </div>
        );
      case 'settings':
        return (
          <div className="animate-fade-in">
            <h3>Account Settings</h3>
            <div className="card p-4 shadow mt-4">
              <div style={{ display: 'flex', alignItems: 'center', gap: '20px', marginBottom: '30px', paddingBottom: '20px', borderBottom: '1px solid #e2e8f0' }}>
                <div style={{ width: '80px', height: '80px', borderRadius: '50%', backgroundColor: 'var(--primary-color)', color: 'white', display: 'flex', justifyContent: 'center', alignItems: 'center', fontSize: '2rem', fontWeight: 'bold' }}>
                  {user.full_name.charAt(0)}
                </div>
                <div>
                  <h4 style={{ margin: '0 0 5px 0' }}>{user.full_name}</h4>
                  <p style={{ margin: 0, color: '#64748b' }}>{user.email}</p>
                  <button className="btn mt-2" style={{ backgroundColor: '#f1f5f9', color: '#475569', padding: '5px 10px', fontSize: '12px', display: 'flex', alignItems: 'center', gap: '5px' }}><Edit3 size={12}/> Change Avatar</button>
                </div>
              </div>
              
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '20px' }}>
                <div className="form-group">
                  <label>Full Name</label>
                  <input type="text" className="form-control" defaultValue={user.full_name} />
                </div>
                <div className="form-group">
                  <label>Email Address</label>
                  <input type="email" className="form-control" defaultValue={user.email} disabled />
                </div>
                <div className="form-group">
                  <label>Role</label>
                  <input type="text" className="form-control" defaultValue={user.role.toUpperCase()} disabled />
                </div>
              </div>
              <button className="btn btn-primary mt-4">Save Changes</button>
            </div>
          </div>
        );
      case 'data_2016': return <AlumniDataTab datasetId="2016" datasetName="2016 Batch" />;
      case 'data_2017': return <AlumniDataTab datasetId="2017" datasetName="2017 Batch" />;
      case 'data_2019': return <AlumniDataTab datasetId="2019" datasetName="2019 Admission" />;
      case 'data_2020': return <AlumniDataTab datasetId="2020" datasetName="2020 Admission" />;
      case 'data_2021': return <AlumniDataTab datasetId="2021" datasetName="2021 Admission" />;
      case 'data_higher_studies': return <AlumniDataTab datasetId="higher_studies" datasetName="Higher Studies" />;
      case 'data_details_2024': return <AlumniDataTab datasetId="details_2024" datasetName="Alumni Details 30.12.24" />;
      default:
        return (
          <div className="dashboard-grid animate-fade-in" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '20px' }}>
            {/* Welcome Card */}
            <div className="card p-4 shadow" style={{ background: 'linear-gradient(135deg, var(--primary-color), #1a365d)', color: 'white' }}>
              <h3 style={{ color: 'white' }}>Profile Completion</h3>
              <p style={{ opacity: 0.8, marginBottom: '20px' }}>Complete your profile to connect with mentors and peers.</p>
              <div style={{ width: '100%', backgroundColor: 'rgba(255,255,255,0.2)', borderRadius: '10px', height: '8px', marginBottom: '10px' }}>
                <div style={{ width: '40%', backgroundColor: 'var(--secondary-color)', height: '100%', borderRadius: '10px' }}></div>
              </div>
              <p style={{ fontSize: '12px' }}>40% Completed</p>
              <button className="btn mt-3" style={{ backgroundColor: 'white', color: 'var(--primary-color)', padding: '8px 16px' }}>Complete Profile</button>
            </div>

            {/* Upcoming Events */}
            <div className="card p-4 shadow">
              <h3 className="mb-3">Upcoming Events</h3>
              <div style={{ display: 'flex', gap: '15px', alignItems: 'center', marginBottom: '15px', padding: '10px', backgroundColor: 'var(--background-light)', borderRadius: '8px' }}>
                <div style={{ backgroundColor: 'var(--primary-color)', color: 'white', padding: '10px', borderRadius: '8px', textAlign: 'center', minWidth: '60px' }}>
                  <div style={{ fontSize: '10px', textTransform: 'uppercase' }}>Nov</div>
                  <div style={{ fontWeight: 'bold' }}>15</div>
                </div>
                <div>
                  <h4 style={{ margin: 0, fontSize: '14px' }}>Global Alumni Meet</h4>
                  <p style={{ margin: 0, fontSize: '12px', color: '#666' }}>Campus & Virtual</p>
                </div>
              </div>
              <button className="btn btn-secondary glass w-100" style={{ padding: '8px' }} onClick={() => setActiveTab('events')}>View All Events</button>
            </div>

            {/* Job Recommendations */}
            <div className="card p-4 shadow">
              <h3 className="mb-3">Job Recommendations</h3>
              <div style={{ borderLeft: '3px solid var(--secondary-color)', paddingLeft: '15px', marginBottom: '15px' }}>
                <h4 style={{ margin: 0, fontSize: '14px' }}>Senior React Developer</h4>
                <p style={{ margin: 0, fontSize: '12px', color: '#666' }}>TechNova - Remote</p>
              </div>
              <div style={{ borderLeft: '3px solid var(--accent-color)', paddingLeft: '15px', marginBottom: '15px' }}>
                <h4 style={{ margin: 0, fontSize: '14px' }}>Product Manager</h4>
                <p style={{ margin: 0, fontSize: '12px', color: '#666' }}>GlobalFinTech - Mumbai</p>
              </div>
              <button className="btn btn-secondary glass w-100" style={{ padding: '8px' }} onClick={() => setActiveTab('jobs')}>Explore Jobs Portal</button>
            </div>
          </div>
        );
    }
  };

  const NavItem = ({ id, icon: Icon, label }) => (
    <a 
      href="#" 
      onClick={(e) => { e.preventDefault(); setActiveTab(id); }}
      style={{ 
        padding: '12px 15px', 
        backgroundColor: activeTab === id ? 'rgba(255,255,255,0.1)' : 'transparent', 
        borderRadius: '8px', 
        display: 'flex', 
        gap: '10px', 
        alignItems: 'center',
        opacity: activeTab === id ? 1 : 0.8,
        transition: 'all 0.2s',
        color: 'white',
        textDecoration: 'none'
      }}
    >
      <Icon size={18}/> {label}
    </a>
  );

  return (
    <div className="dashboard-page bg-light" style={{ minHeight: '100vh', display: 'flex' }}>
      {/* Sidebar */}
      <aside style={{ width: '250px', backgroundColor: 'var(--primary-color)', color: 'white', padding: '20px', display: 'flex', flexDirection: 'column', position: 'sticky', top: 0, height: '100vh' }}>
        <div style={{ textAlign: 'center', marginBottom: '40px', marginTop: '20px' }}>
          <h2 style={{ color: 'white', margin: 0, fontSize: '24px' }}>IIITK Alumni</h2>
          <span style={{ fontSize: '12px', opacity: 0.7, textTransform: 'uppercase', letterSpacing: '1px' }}>Portal</span>
        </div>
        <nav style={{ display: 'flex', flexDirection: 'column', gap: '8px', flex: 1, overflowY: 'auto', paddingRight: '10px' }}>
          <NavItem id="dashboard" icon={User} label="Dashboard" />
          <NavItem id="jobs" icon={Briefcase} label="Jobs Portal" />
          <NavItem id="events" icon={Calendar} label="My Events" />
          
          <div style={{ margin: '10px 0 0 10px', fontSize: '11px', textTransform: 'uppercase', opacity: 0.6, fontWeight: 'bold' }}>Datasets</div>
          <NavItem id="data_2016" icon={Database} label="2016 Batch" />
          <NavItem id="data_2017" icon={Database} label="2017 Batch" />
          <NavItem id="data_2019" icon={Database} label="2019 Admission" />
          <NavItem id="data_2020" icon={Database} label="2020 Admission" />
          <NavItem id="data_2021" icon={Database} label="2021 Admission" />
          <NavItem id="data_higher_studies" icon={Database} label="Higher Studies" />
          <NavItem id="data_details_2024" icon={Database} label="Details 2024" />

          <div style={{ margin: '10px 0 0 10px', fontSize: '11px', textTransform: 'uppercase', opacity: 0.6, fontWeight: 'bold' }}>Account</div>
          <NavItem id="settings" icon={Settings} label="Settings" />
        </nav>
        <button onClick={handleLogout} className="btn" style={{ backgroundColor: 'rgba(255,255,255,0.1)', color: 'white', display: 'flex', gap: '10px', justifyContent: 'center', marginTop: 'auto' }}>
          <LogOut size={18}/> Logout
        </button>
      </aside>

      {/* Main Content */}
      <main style={{ flex: 1, padding: '40px', backgroundColor: '#f1f5f9', overflowY: 'auto', height: '100vh' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '30px' }}>
          <div>
            <h2 style={{ margin: 0 }}>
              {activeTab === 'dashboard' ? `Welcome back, ${user.full_name}!` : 
               activeTab === 'jobs' ? 'Jobs Portal' :
               activeTab === 'events' ? 'My Events' :
               activeTab === 'settings' ? 'Settings' :
               activeTab.startsWith('data_') ? 'Alumni Dataset' : ''}
            </h2>
            <p style={{ margin: '5px 0 0 0', color: '#64748b' }}>
              {activeTab === 'dashboard' ? 'Here is what is happening with your network today.' : ''}
            </p>
          </div>
          
          <div style={{ display: 'flex', gap: '20px', alignItems: 'center' }}>
            <div style={{ position: 'relative', cursor: 'pointer' }}>
              <Bell size={24} color="#64748b" />
              <span style={{ position: 'absolute', top: -5, right: -5, background: '#ef4444', color: 'white', borderRadius: '50%', width: '18px', height: '18px', fontSize: '10px', display: 'flex', justifyContent: 'center', alignItems: 'center', fontWeight: 'bold' }}>3</span>
            </div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '10px', cursor: 'pointer' }} onClick={() => setActiveTab('settings')}>
              <div style={{ textAlign: 'right' }}>
                <div style={{ fontWeight: 'bold', fontSize: '14px', color: '#1e293b' }}>{user.full_name}</div>
                <div style={{ fontSize: '12px', color: '#64748b', textTransform: 'capitalize' }}>{user.role}</div>
              </div>
              <div style={{ width: '45px', height: '45px', borderRadius: '50%', backgroundColor: 'var(--primary-color)', color: 'white', display: 'flex', justifyContent: 'center', alignItems: 'center', fontWeight: 'bold', fontSize: '18px', boxShadow: '0 4px 6px -1px rgba(0,0,0,0.1)' }}>
                {user.full_name.charAt(0)}
              </div>
            </div>
          </div>
        </div>

        {renderContent()}

      </main>
    </div>
  );
};

export default Dashboard;
