import React from 'react';
import './Sidebar.css';
import profileImg from "../assets/Profile.png"; 

const Sidebar = () => {
  return (
    <div className="sidebar">
      <img src={profileImg} alt="Profile" className="profile-pic" />
      <h2>Chungman Park</h2>
      <p>Translator & Developer<br />Adelaide, Australia</p>
      {/* <div className="social-icons">
        <a href="#"><i className="fab fa-github"></i></a>
        <a href="#"><i className="fab fa-linkedin"></i></a>
      </div> */}
    </div>
  );
};

export default Sidebar;
