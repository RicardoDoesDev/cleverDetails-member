import React from 'react';
import './RewardCard.css';

interface RewardCardProps {
  title: string;
  image: string;
  alt: string;
  description: string;
}

const RewardCard: React.FC<RewardCardProps> = ({ title, image, alt, description }) => {
  return (
    <div className="reward-card">
      <div className="reward-image">
        <img src={image} alt={alt} />
      </div>
      <h3>{title}</h3>
      <p className="description">{description}</p>
      <button className="see-more">See More</button>
    </div>
  );
};

export default RewardCard; 