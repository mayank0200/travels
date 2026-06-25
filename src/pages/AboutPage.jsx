import React, { useEffect } from 'react';
import AboutSection from '../components/AboutSection';
import './PageBanner.css';

const AboutPage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="standalone-page">
      <div className="page-banner" style={{ backgroundImage: 'linear-gradient(rgba(0,0,0,0.6), rgba(0,0,0,0.6)), url(https://picsum.photos/seed/newbannerpng/800/600' }}>
        <h1 className="page-banner-title">About Us</h1>
      </div>
      <AboutSection />
    </div>
  );
};

export default AboutPage;
