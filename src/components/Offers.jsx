import React from 'react';
import './Offers.css';
import { offers } from '../data/travelData';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

const Offers = () => {
  const [titleRef, titleVisible] = useScrollAnimation(0.1);
  const [gridRef, gridVisible] = useScrollAnimation(0.1);

  return (
    <section className="offers-section container" id="offers">
      <div ref={titleRef} className={`offers-header animate-on-scroll ${titleVisible ? 'visible' : ''}`}>
        <h2 className="offers-title section-title">Offers</h2>
        <div className="offers-nav">
          <span className="nav-item active">All Offers</span>
          <span className="nav-item">Flights</span>
          <span className="nav-item">Hotels</span>
          <span className="nav-item">Holidays</span>
        </div>
      </div>
      
      <div ref={gridRef} className={`offers-scroll-container animate-on-scroll ${gridVisible ? 'visible' : ''}`}>
        <div className="offers-grid">
          {offers.map(offer => (
            <div key={offer.id} className="offer-card shadow-md card-hover-lift">
              <div className="offer-img-container img-zoom-container">
                <img src={offer.image} alt={offer.title} className="offer-img" />
              </div>
              <div className="offer-content">
                <p className="offer-tag">DOM FLIGHTS</p>
                <h3 className="offer-card-title">{offer.title}</h3>
                <div className="offer-divider"></div>
                <p className="offer-desc">{offer.description}</p>
              </div>
              <div className="offer-footer">
                <div className="offer-tc">T&C's Apply</div>
                <button className="book-btn">BOOK NOW</button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Offers;
