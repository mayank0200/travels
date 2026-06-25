import React, { useEffect, useState } from 'react';
import { useLocation, Link } from 'react-router-dom';
import { destinations } from '../data/travelData';
import '../components/DestinationsGrid.css';
import './PageBanner.css';
import './SearchResultsPage.css';

const SearchResultsPage = () => {
  const location = useLocation();
  const [results, setResults] = useState([]);
  
  // Parse query parameters
  const queryParams = new URLSearchParams(location.search);
  const toCity = queryParams.get('to');
  const packageType = queryParams.get('type');
  const travellers = queryParams.get('travellers');

  useEffect(() => {
    window.scrollTo(0, 0);
    
    // Filter logic: if 'toCity' is provided, we look for destinations matching the city name.
    // We also consider packageType if we want, but for now let's just find matches for the city or just return related ones.
    if (toCity) {
      const matched = destinations.filter(d => 
        d.name.toLowerCase().includes(toCity.toLowerCase()) || 
        d.description.toLowerCase().includes(toCity.toLowerCase())
      );
      // If we don't find an exact match, just show tours in the same category as the packageType
      if (matched.length > 0) {
        setResults(matched);
      } else {
        const categoryMap = {
          'Regular': 'Rajasthan Tours',
          'Honeymoon': 'Honeymoon Tours',
          'Spiritual': 'Spiritual Tours',
          'Adventure': 'Rajasthan Tours' // Fallback
        };
        const cat = categoryMap[packageType] || 'Rajasthan Tours';
        setResults(destinations.filter(d => d.category === cat));
      }
    } else {
      setResults(destinations);
    }
  }, [location.search, toCity, packageType]);

  return (
    <div className="standalone-page search-results-page">
      <div className="page-banner" style={{ backgroundImage: 'linear-gradient(rgba(0,0,0,0.6), rgba(0,0,0,0.6)), url(https://picsum.photos/seed/newbannerpng/800/600', height: '250px' }}>
        <div className="text-center">
          <h1 className="page-banner-title">Search Results</h1>
          <p className="text-white mt-2" style={{fontSize: '18px'}}>
            Showing {results.length} packages for <strong>{toCity}</strong> ({packageType} Package) for {travellers} Traveller{travellers > 1 ? 's' : ''}
          </p>
        </div>
      </div>

      <div className="container py-60">
        {results.length === 0 ? (
          <div className="text-center py-60">
            <h2>No exact matches found.</h2>
            <p>Try searching for popular destinations like Jaipur, Udaipur, or Jodhpur.</p>
            <Link to="/" className="btn-search-massive mt-4 inline-block" style={{textDecoration: 'none', padding: '10px 30px', fontSize: '16px'}}>Go Back</Link>
          </div>
        ) : (
          <div className="dest-grid">
            {results.map(item => (
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
                    <a href={`https://wa.me/918854913030?text=Hi, I am interested in the ${item.name} tour for ${travellers} travellers.`} target="_blank" rel="noreferrer" className="btn-enquire text-center" style={{textDecoration: 'none', display: 'flex', alignItems: 'center', justifyContent: 'center'}}>ENQUIRE NOW</a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default SearchResultsPage;
