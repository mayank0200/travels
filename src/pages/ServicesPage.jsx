import React, { useEffect } from 'react';
import ServicesSection from '../components/ServicesSection';
import './PageBanner.css';

const ServicesPage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="standalone-page">
      <div className="page-banner" style={{ backgroundImage: 'linear-gradient(rgba(0,0,0,0.6), rgba(0,0,0,0.6)), url(https://picsum.photos/seed/jaipurhawamahaljpg/800/600' }}>
        <h1 className="page-banner-title">Travel Booking</h1>
      </div>
      <ServicesSection />
    </div>
  );
};

export default ServicesPage;
