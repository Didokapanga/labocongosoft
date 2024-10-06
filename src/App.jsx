import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import './App.css';
import Home from './pages/Home/Home';
import Navbar from './components/Navbar/Navbar';
import Services from './pages/Services/Services';
import 'leaflet/dist/leaflet.css';

function App() {
  const [loading, setLoading] = useState(false);

  const handleNavigation = () => {
    setLoading(true);
    // Simuler un chargement, remplacer par votre logique si besoin
    setTimeout(() => {
      setLoading(false);
    }, 1000); // 1 seconde de chargement
  };

  return (
    <Router>
      <div className='app'>
        {loading && <div className="loading-screen">Chargement...</div>}
        <Navbar handleNavigation={handleNavigation} />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/services" element={<Services />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
