import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import './Header.css';
import { FaHome, FaInfoCircle, FaSuitcase, FaCar, FaLandmark, FaPhoneAlt, FaEnvelope, FaBars, FaTimes, FaAngleDown } from 'react-icons/fa';
import { contactInfo } from '../data/travelData';

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const location = useLocation();

  const NavLinkItem = ({ href, icon, label, dropdown }) => {
    return (
      <li 
        className={`nav-item ${dropdown ? 'has-dropdown' : ''}`}
        onMouseEnter={() => dropdown && setDropdownOpen(true)}
        onMouseLeave={() => dropdown && setDropdownOpen(false)}
      >
        {dropdown ? (
          <div className="nav-link-dropdown-trigger">
            <span className="nav-icon">{icon}</span>
            {label}
            <FaAngleDown className="dropdown-arrow" />
          </div>
        ) : (
          <Link to={href} onClick={() => setMenuOpen(false)}>
            <span className="nav-icon">{icon}</span>
            {label}
          </Link>
        )}

        {dropdown && (
          <ul className={`dropdown-menu ${dropdownOpen ? 'show' : ''}`}>
            <li><Link to="/packages/rajasthan" onClick={() => setMenuOpen(false)}>Rajasthan Tours</Link></li>
            <li><Link to="/packages/honeymoon" onClick={() => setMenuOpen(false)}>Honeymoon Tours</Link></li>
            <li><Link to="/packages/spiritual" onClick={() => setMenuOpen(false)}>Spiritual Tours</Link></li>
          </ul>
        )}
      </li>
    );
  };

  return (
    <header className="header" id="home">
      {/* Top Bar */}
      <div className="header-topbar">
        <div className="container flex justify-between items-center">
          <div className="topbar-left">
            <a href={`mailto:${contactInfo.email}`} className="topbar-item">
              <FaEnvelope /> <span>{contactInfo.email}</span>
            </a>
            <a href={`tel:${contactInfo.phone}`} className="topbar-item">
              <FaPhoneAlt /> <span>{contactInfo.phone}</span>
            </a>
          </div>
          <div className="topbar-right">
            <a href={contactInfo.social.facebook} className="social-icon">f</a>
            <a href={contactInfo.social.instagram} className="social-icon">𝕚</a>
            <a href={contactInfo.social.youtube} className="social-icon">▶</a>
          </div>
        </div>
      </div>

      {/* Main Header */}
      <div className="header-main">
        <div className="container flex justify-between items-center">
          <div className="logo">
            <Link to="/">
              <img src="https://placehold.co/250x80/FFD700/000000/png?text=Travels+Logo" alt="Rajasthan Gaurav Travels" />
            </Link>
          </div>

          {/* Desktop Nav */}
          <nav className="desktop-nav">
            <ul className="nav-list">
              <NavLinkItem href="/" icon={<FaHome />} label="Home" />
              <NavLinkItem href="/about" icon={<FaInfoCircle />} label="About" />
              <NavLinkItem href="#" icon={<FaSuitcase />} label="Packages" dropdown={true} />
              <NavLinkItem href="/services" icon={<FaCar />} label="Travel Booking" />
              <NavLinkItem href="/raj-darshan" icon={<FaLandmark />} label="Raj Darshan" />
              <NavLinkItem href="/contact" icon={<FaPhoneAlt />} label="Contact Us" />
            </ul>
          </nav>

          <a href={contactInfo.whatsapp} className="enquire-btn desktop-only" target="_blank" rel="noreferrer">
            ENQUIRE NOW →
          </a>

          {/* Mobile Toggle */}
          <button className="mobile-toggle" onClick={() => setMenuOpen(!menuOpen)}>
            {menuOpen ? <FaTimes /> : <FaBars />}
          </button>
        </div>
      </div>

      {/* Mobile Nav */}
      <div className={`mobile-nav ${menuOpen ? 'open' : ''}`}>
        <ul className="mobile-nav-list">
          <li><Link to="/" onClick={() => setMenuOpen(false)}>Home</Link></li>
          <li><Link to="/about" onClick={() => setMenuOpen(false)}>About</Link></li>
          <li className="mobile-dropdown-header">Packages</li>
          <li className="mobile-sub-item"><Link to="/packages/rajasthan" onClick={() => setMenuOpen(false)}>Rajasthan Tours</Link></li>
          <li className="mobile-sub-item"><Link to="/packages/honeymoon" onClick={() => setMenuOpen(false)}>Honeymoon Tours</Link></li>
          <li className="mobile-sub-item"><Link to="/packages/spiritual" onClick={() => setMenuOpen(false)}>Spiritual Tours</Link></li>
          <li><Link to="/services" onClick={() => setMenuOpen(false)}>Travel Booking</Link></li>
          <li><Link to="/raj-darshan" onClick={() => setMenuOpen(false)}>Raj Darshan</Link></li>
          <li><Link to="/contact" onClick={() => setMenuOpen(false)}>Contact Us</Link></li>
          
          <li className="mobile-nav-item">
            <a href={contactInfo.whatsapp} className="mobile-enquire-btn" target="_blank" rel="noreferrer" onClick={() => setMenuOpen(false)}>
              ENQUIRE NOW
            </a>
          </li>
        </ul>
      </div>
    </header>
  );
};

export default Header;
