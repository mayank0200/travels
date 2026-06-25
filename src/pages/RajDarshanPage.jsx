import React, { useEffect } from 'react';
import RajDarshanSection from '../components/RajDarshanSection';
import './PageBanner.css';

const RajDarshanPage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="standalone-page">
      <div className="page-banner" style={{ backgroundImage: 'linear-gradient(rgba(0,0,0,0.6), rgba(0,0,0,0.6)), url(https://picsum.photos/seed/Kumbhalgarhfort2jpg/800/600' }}>
        <h1 className="page-banner-title">Raj Darshan</h1>
      </div>
      <RajDarshanSection />
    </div>
  );
};

export default RajDarshanPage;
