import React from 'react';
import { getRewards } from '../services/rewardService';
import './Sidebar.css';

interface SidebarProps {
  className?: string;
}

const Sidebar: React.FC<SidebarProps> = ({ className = '' }) => {
  const rewards = getRewards();
  const categories = Array.from(new Set(rewards.map(reward => reward.title)));

  return (
    <div className={`sidebar ${className}`}>
      <h2>Categories</h2>
      <ul className="category-list">
        {categories.map((category, index) => (
          <li key={index}>
            <a href={`#${category.toLowerCase().replace(/\s+/g, '-')}`}>
              {category}
            </a>
          </li>
        ))}
      </ul>
      <div className="sidebar-logo">
        <img src="/clever-details-logo.svg" alt="Clever Details" />
        <p>VILAMOURA LOCAL RENTALS</p>
      </div>
    </div>
  );
};

export default Sidebar; 