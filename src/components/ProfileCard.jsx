import React from 'react';
import './ProfileCard.css';

const ProfileCard = () => {
  return (
    <div className="card-container">
      <div className="header"></div>

      <div className="avatar">
        <img
          src="assets/Cy .png"
          alt="profile"
          width="100px"
          height="100px"
        />
      </div>

      <div className="bio">
        <h2 className="name">Cypress Bullo</h2>
        <p className="role">2nd Year IT Student</p>
        <p className="school">USTP-CDO</p>
      </div>

      <div className="social-links">
        <a
          href="https://github.com/cutiestcypressie"
          target="_blank"
          rel="noopener noreferrer"
          className="social-link"
        >
          <i className="fab fa-github"></i>
        </a>
        <a
          href="https://www.facebook.com/cypress.gomez"
          target="_blank"
          rel="noopener noreferrer"
          className="social-link"
        >
          <i className="fab fa-facebook"></i>
        </a>
        <a
          href="https://www.instagram.com/cutiestcypie/"
          target="_blank"
          rel="noopener noreferrer"
          className="social-link"
        >
          <i className="fab fa-instagram"></i>
        </a>
      </div>

      <div>
        <button>Subscribe</button>
        <button>Message</button>
      </div>

      <div className="stats">
        <div>
          <i className="fas fa-heart" style={{ fontSize: '25px' }}></i>
          <p>143.7k</p>
        </div>
        <div>
          <i className="fas fa-comment" style={{ fontSize: '25px' }}></i>
          <p>541.2k</p>
        </div>
        <div>
          <i className="fas fa-share" style={{ fontSize: '25px' }}></i>
          <p>50k</p>
        </div>
      </div>
    </div>
  );
};

export default ProfileCard;