import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { destinations } from '../data/travelData';
import '../components/DestinationsGrid.css';
import './CategoryPage.css';

const CategoryPage = () => {
  const { categoryId } = useParams();
  
  // Map URL parameter to full category name
  const categoryMap = {
    'rajasthan': 'Rajasthan Tours',
    'honeymoon': 'Honeymoon Tours',
    'spiritual': 'Spiritual Tours'
  };

  const categoryName = categoryMap[categoryId] || 'Rajasthan Tours';
  const items = destinations.filter(d => d.category === categoryName);

  const getBannerImage = () => {
    if (categoryId === 'honeymoon') return 'https://picsum.photos/seed/udaipurhoneymoonjpg/800/600';
    if (categoryId === 'spiritual') return 'https://picsum.photos/seed/HomepagespiritualtourSalasarBalajijpg/800/600';
    return 'https://picsum.photos/seed/newbannerpng/800/600';
  };

  return (
    <div className="category-page">
      <div className="category-hero" style={{ backgroundImage: `linear-gradient(rgba(0,0,0,0.6), rgba(0,0,0,0.6)), url(${getBannerImage()})` }}>
        <div className="container text-center">
          <h1 className="category-title">{categoryName}</h1>
          <p className="category-subtitle">Explore our exclusive {categoryName.toLowerCase()} curated just for you.</p>
        </div>
      </div>

      <div className="container py-60">
        <div className="dest-grid">
          {items.map(item => (
            <div key={item.id} className="dest-card shadow-md">
              <div className="dest-img-wrapper">
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
                  <a href="https://wa.me/918854913030" target="_blank" rel="noreferrer" className="btn-enquire text-center">ENQUIRE NOW</a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CategoryPage;
