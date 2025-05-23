import React from 'react';
import Navigation from './Navigation';
import RewardCard from './RewardCard';
import Footer from './Footer';
import { getRewards } from '../services/rewardService';
import './HomePage.css';

interface HomePageProps {
  onPageChange: (page: string) => void;
}

const HomePage: React.FC<HomePageProps> = ({ onPageChange }) => {
  const rewards = getRewards();

  const handleRewardClick = (title: string) => {
    if (title === 'Boat Tours') {
      onPageChange('boats');
    } else if (title === 'Novidades') {
      onPageChange('news');
    }
  };

  return (
    <div className="homepage">
      <Navigation />
      <main>
        <div className="hero-section">
          <h1>Clever Member</h1>
          <h2>Enjoy Exclusive Rewards</h2>
        </div>
        <div className="rewards-grid">
          {rewards.map((reward) => (
            <RewardCard
              key={reward.id}
              title={reward.title}
              image={reward.image}
              alt={reward.alt}
              description={reward.description}
              onClick={() => handleRewardClick(reward.title)}
            />
          ))}
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default HomePage; 