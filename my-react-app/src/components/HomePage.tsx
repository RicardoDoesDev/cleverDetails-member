import React from 'react';
import Navigation from './Navigation';
import RewardCard from './RewardCard';
import Sidebar from './Sidebar';
import { getRewards } from '../services/rewardService';
import './HomePage.css';

const HomePage = () => {
  const rewards = getRewards();

  return (
    <div className="homepage">
      <Navigation />
      <div className="content-wrapper">
        <Sidebar />
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
              />
            ))}
          </div>
        </main>
      </div>
    </div>
  );
};

export default HomePage; 