import React, { useTransition } from 'react';
import { useNavigate } from 'react-router-dom';
import './HomeStyle.css';
import Login from '../components/Login';

function HomePage() {
  const navigate = useNavigate();
  const [isPending, startTransition] = useTransition();

  const handleHome = () => {
    startTransition(() => {
      navigate('/login');
    });
  };

  return (
    <>
      <h1>Welcome to Our Web Application</h1>
      <div className="welcome-container">
        <p>
          We are delighted to have you here. This application offers various features and tools to make your experience enjoyable and productive.
        </p>
        <br />
        <p>
          If you are new here, please take a moment to explore the different sections. Don't forget to check out our latest updates and announcements.
        </p>
        <br />
        <p>
          Should you have any questions or need assistance, feel free to reach out to our support team.
        </p>
        <br />
        <br />
        <br></br>
        <button type="button" className="get-started-button" onClick={handleHome}>Get Started</button>
      </div>
      
    </>
  );
}

export default HomePage;

