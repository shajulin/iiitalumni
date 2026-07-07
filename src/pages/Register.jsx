import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

const Register = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    fullName: '', email: '', password: '', confirmPassword: '', batch: '', rollNumber: ''
  });
  const [error, setError]   = useState('');
  const [success, setSuccess] = useState('');
  const [loading, setLoading] = useState(false);

  const handleChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    setSuccess('');

    if (formData.password !== formData.confirmPassword) {
      setError('Passwords do not match!');
      return;
    }

    if (!formData.batch) {
      setError('Please select your batch year.');
      return;
    }

    setLoading(true);
    try {
      const response = await fetch('http://localhost/alumni-portal/backend/api/register.php', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          fullName:        formData.fullName,
          email:           formData.email,
          password:        formData.password,
          confirmPassword: formData.confirmPassword,
          batch:           formData.batch,
          rollNumber:      formData.rollNumber,
        }),
      });

      const data = await response.json();

      if (data.status === 'success') {
        setSuccess(`✅ Registration successful! Saved to "${data.table}" table. Redirecting to login...`);
        setTimeout(() => navigate('/login'), 2000);
      } else {
        setError(data.message || 'Registration failed');
      }
    } catch (err) {
      console.error(err);
      setError('Cannot connect to server. Make sure XAMPP is running.');
    } finally {
      setLoading(false);
    }
  };

  /* ── batch options matching alumni_portal_db tables ── */
  const batchOptions = [
    { value: '',               label: '-- Select Batch --' },
    { value: '2016',           label: '2016 Batch (alumni_2016_batch)' },
    { value: '2017',           label: '2017 Batch (alumni_2017_batch)' },
    { value: '2019',           label: '2019 Admission (alumni_2019_admission)' },
    { value: '2020',           label: '2020 Admission (alumni_2020_admission)' },
    { value: '2021',           label: '2021 Admission (alumni_2021_admission)' },
    { value: 'higher_studies', label: 'Higher Studies (alumni_higher_studies)' },
    { value: 'details_2024',   label: '2024 Details (alumni_details_2024)' },
  ];

  return (
    <div style={{
      minHeight: '100vh',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      background: 'radial-gradient(circle at 20% 10%, rgba(201,162,75,0.08), transparent 45%), radial-gradient(circle at 80% 90%, rgba(201,162,75,0.06), transparent 40%), #0A0F1E',
      padding: '40px 16px',
      fontFamily: "'Inter', sans-serif",
    }}>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:wght@600&family=Inter:wght@400;500;600&display=swap');
        .reg-card { width:100%; max-width:520px; background:linear-gradient(180deg,#131F38 0%,#0E1830 100%); border:1px solid #25324D; border-radius:14px; padding:44px 40px 36px; box-shadow:0 25px 60px -15px rgba(0,0,0,0.6); position:relative; overflow:hidden; }
        .reg-card::before { content:""; position:absolute; top:0;left:0;right:0; height:2px; background:linear-gradient(90deg,transparent,#C9A24B,transparent); opacity:.7; }
        .reg-title { font-family:'Cormorant Garamond',serif; font-size:34px; font-weight:600; background:linear-gradient(180deg,#EFDFAF,#C9A24B); -webkit-background-clip:text; background-clip:text; color:transparent; text-align:center; margin:0 0 6px; }
        .reg-sub { text-align:center; color:#8C94AA; font-size:13px; margin:0 0 28px; }
        .reg-divider { width:56px; height:1px; background:linear-gradient(90deg,transparent,#C9A24B,transparent); margin:0 auto 16px; position:relative; }
        .reg-divider::after { content:""; position:absolute; left:50%;top:50%; width:5px;height:5px; background:#C9A24B; transform:translate(-50%,-50%) rotate(45deg); }
        .reg-label { display:block; font-size:11.5px; letter-spacing:.6px; text-transform:uppercase; color:#EFDFAF; opacity:.85; margin-bottom:7px; font-weight:500; }
        .reg-input, .reg-select { width:100%; background:#0D1526; border:1px solid #25324D; border-radius:8px; padding:12px 14px; font-size:14px; color:#EDE9DD; outline:none; font-family:'Inter',sans-serif; box-sizing:border-box; transition:border-color .25s,box-shadow .25s; }
        .reg-input::placeholder { color:#54607a; }
        .reg-input:focus, .reg-select:focus { border-color:#C9A24B; box-shadow:0 0 0 3px rgba(201,162,75,.15); background:#0F1B33; }
        .reg-select option { background:#0D1526; color:#EDE9DD; }
        .reg-row { display:flex; gap:14px; }
        .reg-row > div { flex:1; }
        .reg-field { margin-bottom:18px; }
        .reg-btn { width:100%; padding:14px; border:none; border-radius:8px; background:linear-gradient(180deg,#DEC07A,#C9A24B); color:#1A1305; font-weight:700; font-size:14.5px; letter-spacing:.4px; cursor:pointer; margin-top:8px; box-shadow:0 8px 20px -6px rgba(201,162,75,.5); transition:transform .2s,box-shadow .2s,filter .2s; }
        .reg-btn:hover:not(:disabled) { transform:translateY(-1px); box-shadow:0 12px 26px -6px rgba(201,162,75,.65); filter:brightness(1.05); }
        .reg-btn:disabled { opacity:.6; cursor:not-allowed; }
        .reg-error { background:rgba(220,38,38,.12); border:1px solid rgba(220,38,38,.4); color:#f3a6a6; padding:10px 14px; border-radius:8px; margin-bottom:18px; font-size:13.5px; text-align:center; }
        .reg-success { background:rgba(34,197,94,.1); border:1px solid rgba(34,197,94,.35); color:#86efac; padding:10px 14px; border-radius:8px; margin-bottom:18px; font-size:13.5px; text-align:center; }
        .reg-footer { text-align:center; margin-top:24px; font-size:13px; color:#8C94AA; }
        .reg-footer a { color:#EFDFAF; font-weight:600; text-decoration:none; border-bottom:1px solid rgba(239,223,175,.4); padding-bottom:1px; }
        .reg-footer a:hover { color:#C9A24B; border-color:#C9A24B; }
        .batch-hint { font-size:11px; color:#54607a; margin-top:5px; }
      `}</style>

      <div className="reg-card">
        <h2 className="reg-title">Join the Network</h2>
        <div className="reg-divider" />
        <p className="reg-sub">Create your IIIT Kottayam Alumni account</p>

        {error   && <div className="reg-error">{error}</div>}
        {success && <div className="reg-success">{success}</div>}

        <form onSubmit={handleSubmit}>

          {/* Full Name */}
          <div className="reg-field">
            <label className="reg-label">Full Name</label>
            <input className="reg-input" type="text" name="fullName"
              value={formData.fullName} onChange={handleChange} required placeholder="e.g. Vinay Kumar Maddirala" />
          </div>

          {/* Email */}
          <div className="reg-field">
            <label className="reg-label">Email Address</label>
            <input className="reg-input" type="email" name="email"
              value={formData.email} onChange={handleChange} required placeholder="you@example.com" />
          </div>

          {/* Batch dropdown + Roll Number */}
          <div className="reg-row">
            <div className="reg-field">
              <label className="reg-label">Batch / Dataset 📋</label>
              <select className="reg-select" name="batch"
                value={formData.batch} onChange={handleChange} required>
                {batchOptions.map(opt => (
                  <option key={opt.value} value={opt.value}>{opt.label}</option>
                ))}
              </select>
              {formData.batch && (
                <p className="batch-hint">
                  ✅ Data will be saved to: <strong style={{color:'#C9A24B'}}>
                    {batchOptions.find(o=>o.value===formData.batch)?.label.match(/\(([^)]+)\)/)?.[1]}
                  </strong>
                </p>
              )}
            </div>

            <div className="reg-field">
              <label className="reg-label">Roll Number</label>
              <input className="reg-input" type="text" name="rollNumber"
                value={formData.rollNumber} onChange={handleChange} required placeholder="e.g. 2016BCS00024" />
            </div>
          </div>

          {/* Password */}
          <div className="reg-field">
            <label className="reg-label">Password</label>
            <input className="reg-input" type="password" name="password"
              value={formData.password} onChange={handleChange} required placeholder="Min 6 characters" />
          </div>

          {/* Confirm Password */}
          <div className="reg-field">
            <label className="reg-label">Confirm Password</label>
            <input className="reg-input" type="password" name="confirmPassword"
              value={formData.confirmPassword} onChange={handleChange} required placeholder="Repeat password" />
          </div>

          <button type="submit" className="reg-btn" disabled={loading}>
            {loading ? 'Registering...' : 'Submit Registration'}
          </button>
        </form>

        <div className="reg-footer">
          <p>Already have an account? <Link to="/login">Login</Link></p>
        </div>
      </div>
    </div>
  );
};

export default Register;
