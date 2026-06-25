import React, { useState, useCallback } from 'react';
import { Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import SplashScreen from './components/SplashScreen';
import HomePage from './pages/HomePage';
import CategoryPage from './pages/CategoryPage';
import DestinationPage from './pages/DestinationPage';
import AboutPage from './pages/AboutPage';
import ServicesPage from './pages/ServicesPage';
import RajDarshanPage from './pages/RajDarshanPage';
import ContactPage from './pages/ContactPage';
import SearchResultsPage from './pages/SearchResultsPage';
import './App.css';

function App() {
  const [showSplash, setShowSplash] = useState(true);

  const handleSplashFinish = useCallback(() => {
    setShowSplash(false);
  }, []);

  return (
    <>
      {showSplash && <SplashScreen onFinish={handleSplashFinish} />}
      <div className={`app-container ${showSplash ? 'app-hidden' : 'app-reveal'}`}>
        <Header />
        <main className="main-content">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/search" element={<SearchResultsPage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/services" element={<ServicesPage />} />
            <Route path="/raj-darshan" element={<RajDarshanPage />} />
            <Route path="/contact" element={<ContactPage />} />
            <Route path="/packages/:categoryId" element={<CategoryPage />} />
            <Route path="/tour/:tourId" element={<DestinationPage />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </>
  );
}

export default App;
