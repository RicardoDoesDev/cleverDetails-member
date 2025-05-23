import React from 'react';
import { Boat } from '../services/boatService';
import './BoatDetailsPage.css';

interface BoatDetailsPageProps {
  boat: Boat;
  onBack: () => void;
}

const BoatDetailsPage: React.FC<BoatDetailsPageProps> = ({ boat, onBack }) => {
  return (
    <div className="boat-details-page">
      <header className="details-header">
        <button className="back-btn" onClick={onBack}>← Back to Boats</button>
        <h1>{boat.name}</h1>
        <div className="rating">
          {Array(boat.rating).fill('⭐').join('')}
        </div>
      </header>

      <div className="details-content">
        <div className="main-image-container">
          <img src={boat.image} alt={boat.name} className="main-image" />
          <button className="favorite-btn">❤️</button>
        </div>

        <div className="info-section">
          <div className="description-section">
            <h2>About This Experience</h2>
            <p>{boat.description}</p>
          </div>

          <div className="location-section">
            <h2>Location</h2>
            <div className="location-info">
              <span className="location-icon">📍</span>
              <span>{boat.location}</span>
            </div>
          </div>

          <div className="features-section">
            <h2>Features</h2>
            <ul className="features-list">
              <li>✨ Luxury Amenities</li>
              <li>🛥️ Professional Crew</li>
              <li>🌊 Swimming Stops</li>
              <li>🍷 Drinks Included</li>
              <li>📸 Photo Opportunities</li>
              <li>🎣 Fishing Equipment</li>
            </ul>
          </div>
        </div>

        <div className="booking-section">
          <div className="special-offer-card">
            <h3>{boat.specialOffer.type}</h3>
            <p className="discount">{boat.specialOffer.discount}</p>
            <p className="offer-description">Limited time offer for this amazing experience!</p>
          </div>
          
          <div className="booking-card">
            <h3>Book Your Experience</h3>
            <div className="price-info">
              <p className="price">From €299 per person</p>
              <p className="duration">4 hours duration</p>
            </div>
            <button className="book-btn">Book Now</button>
            <p className="booking-note">* Prices may vary based on group size and season</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BoatDetailsPage; 