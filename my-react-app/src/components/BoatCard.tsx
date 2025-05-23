import React from 'react';
import { Boat } from '../services/boatService';
import './BoatCard.css';

interface BoatCardProps {
  boat: Boat;
  onViewDetails: (boat: Boat) => void;
}

const BoatCard: React.FC<BoatCardProps> = ({ boat, onViewDetails }) => {
  const renderStars = (rating: number) => {
    return Array(rating).fill('⭐').join('');
  };

  return (
    <div className="boat-card">
      <div className="boat-image">
        <img src={boat.image} alt={boat.name} />
        <button className="favorite-btn">❤️</button>
      </div>
      <div className="boat-content">
        <div className="boat-header">
          <h2>{boat.name}</h2>
          <div className="rating">{renderStars(boat.rating)}</div>
        </div>
        <p className="description">{boat.description}</p>
        <div className="location">
          <span className="location-icon">📍</span>
          {boat.location}
        </div>
      </div>
      <div className="special-offer">
        <div className="offer-content">
          <h3>{boat.specialOffer.type}</h3>
          <p className="discount">{boat.specialOffer.discount}</p>
        </div>
        <button className="details-btn" onClick={() => onViewDetails(boat)}>Details</button>
      </div>
    </div>
  );
};

export default BoatCard; 