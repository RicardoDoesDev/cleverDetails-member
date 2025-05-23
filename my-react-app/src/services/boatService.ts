import boatsData from '../data/boats.json';

export interface SpecialOffer {
  discount: string;
  type: string;
}

export interface Boat {
  id: string;
  name: string;
  image: string;
  description: string;
  location: string;
  rating: number;
  specialOffer: SpecialOffer;
}

export const getBoats = (): Boat[] => {
  return boatsData.boats;
};

export const getLocations = (): string[] => {
  return Array.from(new Set(boatsData.boats.map(boat => boat.location)));
}; 