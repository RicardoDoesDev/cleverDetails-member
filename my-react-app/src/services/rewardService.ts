import rewardsData from '../data/rewards.json';

export interface Reward {
  id: string;
  title: string;
  image: string;
  alt: string;
  description: string;
}

export const getRewards = (): Reward[] => {
  return rewardsData.rewards;
};

export const getRewardById = (id: string): Reward | undefined => {
  return rewardsData.rewards.find(reward => reward.id === id);
}; 