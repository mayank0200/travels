import React, { useEffect } from 'react';
import ContactSection from '../components/ContactSection';
import './PageBanner.css';

const ContactPage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="standalone-page">
      <div className="page-banner" style={{ backgroundImage: 'linear-gradient(rgba(0,0,0,0.6), rgba(0,0,0,0.6)), url(https://picsum.photos/seed/contactbannerjpg/800/600' }}>
        <h1 className="page-banner-title">Contact Us</h1>
      </div>
      <ContactSection />
    </div>
  );
};

export default ContactPage;
