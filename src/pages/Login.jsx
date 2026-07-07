import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { User, Lock, Mail, ArrowRight } from 'lucide-react';

import { useNavigate } from 'react-router-dom';

const Login = () => {
  const [formData, setFormData] = useState({ email: '', password: '' });
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleChange = (e) => setFormData({ ...formData, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');

    try {
      const response = await fetch('http://localhost/backend/api/login.php', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData)
      });
      const data = await response.json();

      if (data.status === 'success') {
        sessionStorage.setItem('user', JSON.stringify(data.user));
        navigate('/'); // Redirect to Home instead of Dashboard
      } else {
        setError(data.message || 'Login failed');
      }
    } catch (err) {
      console.error(err);
      setError('Cannot connect to server. Ensure XAMPP is running.');
    }
  };

  return (
    <div className="login-page">
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:wght@500;600;700&family=Inter:wght@400;500;600&display=swap');

        .login-page{
          --bg-deep:#0A0F1E;
          --card-border:#25324D;
          --gold:#C9A24B;
          --gold-light:#EFDFAF;
          --text-soft:#8C94AA;
          --text-main:#EDE9DD;
          --input-bg:#0D1526;

          min-height: 100vh;
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 24px;
          background:
            radial-gradient(circle at 20% 10%, rgba(201,162,75,0.08), transparent 45%),
            radial-gradient(circle at 80% 90%, rgba(201,162,75,0.06), transparent 40%),
            var(--bg-deep);
          font-family: 'Inter', sans-serif;
        }

        .login-card{
          width: 100%;
          max-width: 400px;
          background: linear-gradient(180deg, #131F38 0%, #0E1830 100%);
          border: 1px solid var(--card-border);
          border-radius: 14px;
          padding: 44px 40px 36px;
          box-shadow:
            0 25px 60px -15px rgba(0,0,0,0.6),
            0 0 0 1px rgba(201,162,75,0.04),
            inset 0 1px 0 rgba(255,255,255,0.03);
          position: relative;
          overflow: hidden;
        }

        .login-card::before{
          content: "";
          position: absolute;
          top: 0; left: 0; right: 0;
          height: 2px;
          background: linear-gradient(90deg, transparent, var(--gold), transparent);
          opacity: 0.7;
        }

        .login-header{
          text-align: center;
          margin-bottom: 34px;
        }

        .login-header h2{
          font-family: 'Cormorant Garamond', serif;
          font-weight: 600;
          font-size: 38px;
          letter-spacing: 1px;
          margin: 0 0 8px;
          background: linear-gradient(180deg, var(--gold-light), var(--gold));
          -webkit-background-clip: text;
          background-clip: text;
          color: transparent;
        }

        .login-divider{
          width: 56px;
          height: 1px;
          background: linear-gradient(90deg, transparent, var(--gold), transparent);
          margin: 0 auto 14px;
          position: relative;
        }

        .login-divider::after{
          content: "";
          position: absolute;
          left: 50%; top: 50%;
          width: 5px; height: 5px;
          background: var(--gold);
          transform: translate(-50%,-50%) rotate(45deg);
        }

        .login-header p{
          color: var(--text-soft);
          font-size: 13.5px;
          letter-spacing: 0.4px;
          margin: 0;
        }

        .login-error{
          background: rgba(220, 38, 38, 0.12);
          border: 1px solid rgba(220, 38, 38, 0.4);
          color: #f3a6a6;
          padding: 10px;
          border-radius: 8px;
          margin-bottom: 20px;
          text-align: center;
          font-size: 13.5px;
        }

        .login-field{
          margin-bottom: 22px;
        }

        .login-field label{
          display: block;
          font-size: 12px;
          letter-spacing: 0.6px;
          text-transform: uppercase;
          color: var(--gold-light);
          opacity: 0.85;
          margin-bottom: 8px;
          font-weight: 500;
        }

        .login-field input{
          width: 100%;
          background: var(--input-bg);
          border: 1px solid var(--card-border);
          border-radius: 8px;
          padding: 13px 14px;
          font-size: 14.5px;
          color: var(--text-main);
          outline: none;
          transition: border-color .25s ease, box-shadow .25s ease, background .25s ease;
          font-family: 'Inter', sans-serif;
        }

        .login-field input::placeholder{
          color: #54607a;
        }

        .login-field input:focus{
          border-color: var(--gold);
          box-shadow: 0 0 0 3px rgba(201,162,75,0.15);
          background: #0F1B33;
        }

        .login-submit-btn{
          width: 100%;
          padding: 14px;
          margin-top: 6px;
          border: none;
          border-radius: 8px;
          background: linear-gradient(180deg, #DEC07A, var(--gold));
          color: #1A1305;
          font-weight: 600;
          font-size: 14.5px;
          letter-spacing: 0.5px;
          cursor: pointer;
          box-shadow: 0 8px 20px -6px rgba(201,162,75,0.5);
          transition: transform .2s ease, box-shadow .2s ease, filter .2s ease;
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 8px;
        }

        .login-submit-btn:hover{
          transform: translateY(-1px);
          box-shadow: 0 12px 26px -6px rgba(201,162,75,0.65);
          filter: brightness(1.05);
        }

        .login-submit-btn:active{
          transform: translateY(0);
        }

        .login-footer{
          text-align: center;
          margin-top: 26px;
          font-size: 13px;
          color: var(--text-soft);
        }

        .login-footer a{
          color: var(--gold-light);
          text-decoration: none;
          font-weight: 600;
          border-bottom: 1px solid rgba(239,223,175,0.4);
          padding-bottom: 1px;
          transition: color .2s ease, border-color .2s ease;
        }

        .login-footer a:hover{
          color: var(--gold);
          border-color: var(--gold);
        }

        @media (max-width: 420px){
          .login-card{ padding: 34px 24px 28px; }
          .login-header h2{ font-size: 32px; }
        }
      `}</style>

      <div className="login-card">
        <div className="login-header">
          <h2>Login</h2>
          <div className="login-divider"></div>
          <p>Sign in to continue</p>
        </div>

        {error && <div className="login-error">{error}</div>}

        <form onSubmit={handleSubmit}>
          <div className="login-field">
            <label>Username / Email</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>

          <div className="login-field">
            <label>Password</label>
            <input
              type="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              required
            />
          </div>

          <button type="submit" className="login-submit-btn">
            Submit <ArrowRight size={16} />
          </button>
        </form>

        <div className="login-footer">
          <p>Don't have an account? <Link to="/register">Register</Link></p>
        </div>
      </div>
    </div>
  );
};

export default Login;