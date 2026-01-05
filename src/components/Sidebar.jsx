import React from 'react';
import './Sidebar.css';
import profileImg from "../assets/Profile.png";

const Sidebar = () => {
  return (
    <div className="sidebar">
      <img src={profileImg} alt="Profile" className="profile-pic" />
      <h2>Chungman Park</h2>
      <p>Translator & Developer<br />Adelaide, Australia</p>

      <div className="social-icons">
        <a
          href="https://github.com/ChungmanPARK12/Translation.git"
          target="_blank"
          rel="noopener noreferrer"
        >
          <i className="fab fa-github"></i>
          <span className="tooltip">GitHub</span>
        </a>
        <a
          href="https://www.linkedin.com/in/chris-park-363703178/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <i className="fab fa-linkedin"></i>
          <span className="tooltip">LinkedIn</span>
        </a>
      </div>
    </div>
  );
};

export default Sidebar;
