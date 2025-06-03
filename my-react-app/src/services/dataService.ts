import { Category, Item, Location } from '../types/index';
import { appData } from '../data/appData';
import { appDataFR } from '../data/appDataFR';
import { appDataPT } from '../data/appDataPT';

const getDataForLanguage = (language: string) => {
  switch (language) {
    case 'fr':
      return appDataFR;
    case 'pt':
      return appDataPT;
    default:
      return appData;
  }
};

export const getCategories = (language: string): Category[] => {
  const data = getDataForLanguage(language);
  return data.categories;
};

export const getCategory = (categoryId: string, language: string): Category | undefined => {
  const data = getDataForLanguage(language);
  return data.categories.find(category => category.id === categoryId);
};

export const getCategoryItems = (categoryId: string, language: string): Item[] => {
  const category = getCategory(categoryId, language);
  return category ? category.items : [];
};

export const getItemById = (categoryId: string, itemId: number, language: string): Item | undefined => {
  const items = getCategoryItems(categoryId, language);
  return items.find(item => item.id === itemId);
};

export const getLocations = (language: string): Location[] => {
  const data = getDataForLanguage(language);
  return data.locations;
};

export const getLocationById = (id: number, language: string): Location | undefined => {
  const data = getDataForLanguage(language);
  return data.locations.find(location => location.id === id);
};

export const getLocationName = (locationIds: number[], language: string): string => {
  const data = getDataForLanguage(language);
  return locationIds
    .map(id => data.locations.find(loc => loc.id === id)?.name)
    .filter(Boolean)
    .join(', ');
}; 