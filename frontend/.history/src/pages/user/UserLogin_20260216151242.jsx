
import React from 'react';
import { Link } from 'react-router-dom';
import '../../styles/auth.css';

App.use rea

const UserLogin = () => {
  return (
    <div className="auth-container">
      <div className="auth-card">
        <div className="auth-header">
          <div className="auth-logo">Zomato</div>
          <h1 className="auth-title">Welcome back</h1>
          <p className="auth-subtitle">Sign in to continue ordering</p>
        </div>

        <form className="auth-form">
          <div className="form-group">
            <label className="form-label" htmlFor="email">Email Address</label>
            <input 
              type="email" 
              id="email" 
              className="form-input" 
              placeholder="Enter your email" 
            />
          </div>

          <div className="form-group">
            <label className="form-label" htmlFor="password">Password</label>
            <input 
              type="password" 
              id="password" 
              className="form-input" 
              placeholder="Enter your password" 
            />
          </div>

          <div className="form-options">
            <label className="form-checkbox-label">
              <input type="checkbox" />
              Remember me
            </label>
            <Link to="/user/forgot-password" className="form-link">
              Forgot password?
            </Link>
          </div>

          <button type="submit" className="auth-submit-btn">
            Sign In
          </button>
        </form>

        <div className="auth-footer">
          Don't have an account? <Link to="/user/register">Sign up</Link>
        </div>
      </div>
    </div>
  );
};

export default UserLogin;
