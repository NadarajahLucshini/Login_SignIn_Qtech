import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import './style.css';

function Regi() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (password !== confirmPassword) {
      setError('Passwords do not match');
      return;
    }

    try {
      const response = await axios.post('http://localhost:8080/api/auth/register', { name, email, password });

      if (response.data.token) {
        console.log('Registration successful:', response.data);
        localStorage.setItem('token', response.data.token); // Store token in localStorage
        navigate('/login'); // Redirect to login route
      }
    } catch (err) {
      setError(err.response?.data?.message || 'An error occurred');
    }
  };

  return (
    <>
      <div className="welcome-container">
        <h1>Welcome to Our Web Application</h1>
        <p>We are delighted to have you here...</p>
        <p>If you are new here...</p>
        <p>Should you have any questions...</p>
        <button type="button" className="get-started-button" onClick={() => navigate('/login')}>Get Started</button>
      </div>
      <section>
        <form onSubmit={handleSubmit}>
          <h1>Signin</h1>
          <div className="inputbox">
            <input 
              type="text" 
              required 
              placeholder=" " 
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
            <label>User Name</label>
          </div>
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
          <div className="inputbox">
            <ion-icon name="lock-closed-outline"></ion-icon>
            <input 
              type="password" 
              required 
              placeholder=" " 
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
            />
            <label>Confirm Password</label>
          </div>
          {error && <p className="error-message">{error}</p>}
          <button type="submit">Sign in</button>
        </form>
      </section>
    </>
  );
}

export default Regi;
