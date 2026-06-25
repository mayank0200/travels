import React from 'react';
import { Link } from 'react-router-dom';
import './DestinationsGrid.css';
import { destinations } from '../data/travelData';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

const AnimatedSection = ({ children, className = '' }) => {
  const [ref, isVisible] = useScrollAnimation(0.1);
  return (
    <div ref={ref} className={`animate-on-scroll ${isVisible ? 'visible' : ''} ${className}`}>
      {children}
    </div>
  );
};

const DestinationsGrid = () => {
  const rajasthanTours = destinations.filter(d => d.category === 'Rajasthan Tours');
  const spiritualTours = destinations.filter(d => d.category === 'Spiritual Tours');
  const honeymoonTours = destinations.filter(d => d.category === 'Honeymoon Tours');

  const renderSection = (title, subtitle, items) => (
    <div className="dest-section">
      <AnimatedSection>
        <div className="dest-header">
          <h2 className="dest-title section-title">{title}</h2>
          <p className="dest-subtitle">{subtitle}</p>
        </div>
      </AnimatedSection>
      <div className="dest-grid">
        {items.map((item, index) => (
          <AnimatedSection key={item.id} className={`stagger-delay-${index}`}>
            <div className="dest-card card-hover-lift">
              <div className="dest-img-wrapper img-zoom-container">
                <img src={item.image} alt={item.name} className="dest-img" />
                <div className="dest-overlay">
                  <h3 className="dest-name">{item.name}</h3>
                  <p className="dest-tagline">{item.title}</p>
                </div>
              </div>
              <div className="dest-info">
                <p className="dest-description">{item.description}</p>
                <div className="dest-features">
                  {item.features && item.features.map((f, i) => (
                    <span key={i}>
                      {f === 'Hotels' && '🏨'}
                      {f === 'Meals' && '🍽️'}
                      {f === 'Sightseeing' && '🔭'}
                      {f === 'Transfer' && '🚙'}
                      {' '}{f}
                    </span>
                  ))}
                </div>
                <div className="dest-actions">
                  <Link to={`/tour/${item.id}`} className="btn-view-detail text-center">View Detail</Link>
                  <a href={`https://wa.me/918854913030?text=Hi, I am interested in the ${item.name} tour.`} target="_blank" rel="noreferrer" className="btn-enquire text-center" style={{textDecoration: 'none', display: 'flex', alignItems: 'center', justifyContent: 'center'}}>ENQUIRE NOW</a>
                </div>
              </div>
            </div>
          </AnimatedSection>
        ))}
      </div>
    </div>
  );

  return (
    <section className="destinations-section container" id="destinations">
      {renderSection("Explore Rajasthan", "Discover palaces, forts, and desert wonders", rajasthanTours)}
      {renderSection("Honeymoon Tours", "Romantic getaways in the royal state", honeymoonTours)}
      {renderSection("Spiritual Tours", "Sacred pilgrimages to divine abodes", spiritualTours)}
    </section>
  );
};

export default DestinationsGrid;
