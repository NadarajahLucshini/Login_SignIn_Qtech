import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import './style.css';

function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate(); // Initialize the navigate function

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post('http://localhost:8080/api/auth/login', { email, password });

      if (response.data.token) {
        console.log('Login successful:', response.data);
        localStorage.setItem('token', response.data.token); // Store token in localStorage
        setError('');
        navigate('/dash'); // Redirect to /dash route
      }
    } catch (err) {
      setError(err.response?.data?.message || 'An error occurred');
    }
  };

  return (
    <>
      <h1>Welcome to Our Web Application</h1>
      <div className="welcome-container">
        <p>We are delighted to have you here...</p>
        <p>If you are new here...</p>
        <p>Should you have any questions...</p>
        <br /><br /><br />
      </div>
      <section>
        <form onSubmit={handleSubmit}>
          <h1>Login</h1>
          <div className="inputbox">
            <ion-icon name="mail-outline"></ion-icon>
            <input 
              type="email" 
              required 
              placeholder=" " 
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <label>Email</label>
          </div>
          <div className="inputbox">
            <ion-icon name="lock-closed-outline"></ion-icon>
            <input 
              type="password" 
              required 
              placeholder=" " 
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <label>Password</label>
          </div>
          {error && <p className="error-message">{error}</p>}
          <div className="forget">
            <label>
              <input type="checkbox" /> Remember Me
            </label>
            <a href="#">Forget Password</a>
          </div>
          <button type="submit">Log in</button>
          <div className="register">
            <p>Don't have an account? <Link to="/reg">Register</Link></p>
          </div>
        </form>
      </section>
    </>
  );
}

export default Login;
