import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const toggleNavbar = () => {
    setIsOpen(!isOpen);
  };

  const closeNavbar = () => {
    setIsOpen(false);
  };

  const isActive = (path) => location.pathname === path;

  return (
    <nav className="navbar-redesign">
      <div className="navbar-container">
        {/* Logo */}
        <Link to="/" className="navbar-logo" onClick={closeNavbar}>
          <span className="logo-icon">💪</span>
          <span className="logo-text">GYM</span>
        </Link>

        {/* Mobile Toggle Button */}
        <button 
          className={`navbar-toggle ${isOpen ? 'active' : ''}`}
          type="button" 
          onClick={toggleNavbar}
          aria-label="Toggle navigation"
        >
          <span></span>
          <span></span>
          <span></span>
        </button>

        {/* Navigation Menu */}
        <div className={`navbar-menu ${isOpen ? 'active' : ''}`}>
          <div className="navbar-links">
            <Link 
              to="/" 
              className={`nav-item ${isActive('/') ? 'active' : ''}`}
              onClick={closeNavbar}
            >
              Home
            </Link>
            <Link 
              to="/about" 
              className={`nav-item ${isActive('/about') ? 'active' : ''}`}
              onClick={closeNavbar}
            >
              About Us
            </Link>
            <Link 
              to="/classes" 
              className={`nav-item ${isActive('/classes') ? 'active' : ''}`}
              onClick={closeNavbar}
            >
              Classes
            </Link>
            <Link 
              to="/news" 
              className={`nav-item ${isActive('/news') ? 'active' : ''}`}
              onClick={closeNavbar}
            >
              News
            </Link>
            <Link 
              to="/contact" 
              className={`nav-item ${isActive('/contact') ? 'active' : ''}`}
              onClick={closeNavbar}
            >
              Contact
            </Link>
          </div>

          {/* Join Gym Button */}
          <Link 
            to="/join" 
            className="navbar-cta" 
            onClick={closeNavbar}
          >
            JOIN GYM
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;