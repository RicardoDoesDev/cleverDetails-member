import { appData } from '../data/appData';
import { Category, Item, Location } from '../types';

export const getCategories = (): Category[] => {
  return appData.categories;
};

export const getCategory = (categoryId: string): Category | undefined => {
  return appData.categories.find(category => category.id === categoryId);
};

export const getCategoryItems = (categoryId: string): Item[] => {
  const category = getCategory(categoryId);
  return category ? category.items : [];
};

export const getItemById = (categoryId: string, itemId: number): Item | undefined => {
  const items = getCategoryItems(categoryId);
  return items.find(item => item.id === itemId);
};

export const getLocations = (): Location[] => {
  return appData.locations;
};

export const getLocationById = (id: number): Location | undefined => {
  return appData.locations.find(location => location.id === id);
};

export const getLocationName = (locationId: number): string => {
  const location = getLocationById(locationId);
  return location ? location.name : 'Unknown Location';
}; 