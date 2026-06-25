import React, { useState, useEffect } from 'react';
import './SplashScreen.css';

const SplashScreen = ({ onFinish }) => {
  const [exiting, setExiting] = useState(false);

  useEffect(() => {
    // Start exit animation after 3.5 seconds
    const exitTimer = setTimeout(() => {
      setExiting(true);
    }, 3500);

    // Fully remove splash after exit animation completes
    const removeTimer = setTimeout(() => {
      onFinish();
    }, 4300);

    return () => {
      clearTimeout(exitTimer);
      clearTimeout(removeTimer);
    };
  }, [onFinish]);

  return (
    <div className={`splash-screen ${exiting ? 'exit' : ''}`}>
      <div className="splash-bg"></div>

      {/* Floating particles */}
      <div className="splash-particles">
        {Array.from({ length: 12 }).map((_, i) => (
          <div key={i} className="particle"></div>
        ))}
      </div>

      {/* Mandala decoration */}
      <div className="splash-mandala"></div>

      {/* Main content */}
      <div className="splash-content">
        <div className="splash-chalo">CHALO</div>
        <div className="splash-rajasthan">RAJASTHAN</div>
        <div className="splash-line"></div>
        <div className="splash-tagline">Explore the Land of Kings</div>
      </div>

      {/* Loader bar */}
      <div className="splash-loader">
        <div className="splash-loader-bar"></div>
      </div>
    </div>
  );
};

export default SplashScreen;
