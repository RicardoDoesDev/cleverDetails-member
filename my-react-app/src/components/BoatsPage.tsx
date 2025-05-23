import React, { useState } from 'react';
import { getBoats, getLocations, Boat } from '../services/boatService';
import BoatCard from './BoatCard';
import BoatDetailsPage from './BoatDetailsPage';
import Footer from './Footer';
import './BoatsPage.css';

interface BoatsPageProps {
  onBack: () => void;
}

const BoatsPage: React.FC<BoatsPageProps> = ({ onBack }) => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedLocation, setSelectedLocation] = useState('');
  const [selectedBoat, setSelectedBoat] = useState<Boat | null>(null);
  const boats = getBoats();
  const locations = getLocations();

  const filteredBoats = boats.filter(boat => {
    const matchesSearch = boat.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         boat.description.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesLocation = !selectedLocation || boat.location === selectedLocation;
    return matchesSearch && matchesLocation;
  });

  if (selectedBoat) {
    return (
      <BoatDetailsPage 
        boat={selectedBoat} 
        onBack={() => setSelectedBoat(null)} 
      />
    );
  }

  return (
    <div className="boats-page">
      <header className="boats-header">
        <button className="back-btn" onClick={onBack}>← Back to Rewards</button>
        <div className="search-bar">
          <input
            type="text"
            placeholder="Search..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
        </div>
        <div className="filters">
          <div className="filter-dropdown">
            <select
              value={selectedLocation}
              onChange={(e) => setSelectedLocation(e.target.value)}
            >
              <option value="">All Locations</option>
              {locations.map(location => (
                <option key={location} value={location}>{location}</option>
              ))}
            </select>
          </div>
          <div className="filter-dropdown">
            <select>
              <option value="">All Categories</option>
              <option value="yacht">Yacht</option>
              <option value="speedboat">Speedboat</option>
              <option value="sailboat">Sailboat</option>
            </select>
          </div>
        </div>
      </header>

      <h1>Boat Tours</h1>

      <div className="boats-list">
        {filteredBoats.map(boat => (
          <BoatCard 
            key={boat.id} 
            boat={boat} 
            onViewDetails={setSelectedBoat}
          />
        ))}
      </div>
      <Footer />
    </div>
  );
};

export default BoatsPage; 