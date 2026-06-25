import React from 'react';
import './Footer.css';
import { contactInfo } from '../data/travelData';
import { FaFacebookF, FaInstagram, FaYoutube, FaEnvelope, FaPhoneAlt } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container footer-content">
        <div className="footer-col about-col">
          <div className="footer-logo">
            <img src="https://placehold.co/250x80/FFD700/000000/png?text=Travels+Logo" alt="Logo" style={{filter: 'brightness(0) invert(1)'}}/>
          </div>
          <p className="footer-desc">
            Explore Rajasthan's wonders with us! Immerse yourself in the rich culture, heritage, and hospitality of the desert state on our curated tours.
          </p>
          <div className="social-links">
            <a href={contactInfo.social.facebook}><FaFacebookF /></a>
            <a href={contactInfo.social.instagram}><FaInstagram /></a>
            <a href={contactInfo.social.youtube}><FaYoutube /></a>
          </div>
        </div>

        <div className="footer-col links-col">
          <h3>Quick Links</h3>
          <ul>
            <li><a href="#about">About Us</a></li>
            <li><a href="#tours">Rajasthan Tours</a></li>
            <li><a href="#honeymoon">Honeymoon Tours</a></li>
            <li><a href="#spiritual">Spiritual Tours</a></li>
            <li><a href="#contact">Contact Us</a></li>
          </ul>
        </div>

        <div className="footer-col contact-col">
          <h3>Contact Info</h3>
          <div className="contact-item">
            <FaPhoneAlt className="contact-icon"/>
            <a href={`tel:${contactInfo.phone}`}>{contactInfo.phone}</a>
          </div>
          <div className="contact-item">
            <FaEnvelope className="contact-icon"/>
            <a href={`mailto:${contactInfo.email}`}>{contactInfo.email}</a>
          </div>
        </div>
      </div>
      
      <div className="footer-bottom text-center">
        <p>&copy; {new Date().getFullYear()} Rajasthan Gaurav Travels. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
