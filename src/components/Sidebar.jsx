// Sidebar.jsx
// ------------
// React sidebar with full-screen mobile overlay, cross icon toggle, and dark mode as a menu item. External CSS is used.

import React, { useState, useEffect } from 'react';
import profileImg from '../assets/images/profile.jpg'; // adjust path as needed
import '../styles/sidebar.css';

const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(false);

  useEffect(() => {
    document.body.classList.toggle('dark-mode', isDarkMode);
    document.body.classList.toggle('no-scroll', isOpen);
  }, [isDarkMode, isOpen]);

  const toggleSidebar = () => setIsOpen(!isOpen);
  const toggleDarkMode = () => setIsDarkMode(!isDarkMode);

  return (
    <>
      {/* Hamburger Toggle */}
      <button
        className={`menu-toggle ${isOpen ? 'active' : ''}`}
        onClick={toggleSidebar}
        aria-label="Toggle navigation"
      >
        <i className={`fas ${isOpen ? 'fa-times' : 'fa-bars'}`}></i>
      </button>

      {/* Sidebar */}
      <div className={`sidebar-wrapper ${isOpen ? 'active' : ''}`}>
        <aside className="sidebar">
          {/* Header */}
          <div className="sidebar-header">
            <img src={profileImg} alt="Your Photo" className="profile-photo" />
            <h1 className="name">Sailesh Kafle</h1>
            <p className="role">Software Developer . Data Analyst</p>
          </div>

          {/* Scrollable Navigation Area */}
          <div className="sidebar-scroll">
            <nav className="sidebar-nav">
              <ul>
                <li><a href="#home"><i className="fas fa-home"></i> Home</a></li>
                <li><a href="#projects"><i className="fas fa-project-diagram"></i> Projects</a></li>
                <li><a href="#skills"><i className="fas fa-code"></i> Skills</a></li>
                <li><a href="#blog-publications"><i className="fas fa-newspaper"></i> Blog & Publications</a></li>
                <li><a href="#resume"><i className="fas fa-file-alt"></i> Resume</a></li>
                <li><a href="#contact"><i className="fas fa-envelope"></i> Contact Me</a></li>
                <li>
                  <a href="#darkmode" onClick={toggleDarkMode}>
                    <i className={`fas ${isDarkMode ? 'fa-sun' : 'fa-moon'}`}></i> {isDarkMode ? 'Light Mode' : 'Dark Mode'}
                  </a>
                </li>
              </ul>
            </nav>
          </div>
        </aside>
      </div>
    </>
  );
};

export default Sidebar;
