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

export const getAllVisibleItems = (language: string): Item[] => {
  const data = getDataForLanguage(language);
  return data.categories.flatMap(category => 
    category.items.filter(item => item.isVisible !== false)
  );
};

export const getCategories = (language: string): Category[] => {
  const data = getDataForLanguage(language);
  return data.categories.map(category => ({
    ...category,
    items: category.items.filter(item => item.isVisible !== false)
  }));
};

export const getCategory = (categoryId: string, language: string): Category | undefined => {
  const data = getDataForLanguage(language);
  const category = data.categories.find(category => category.id === categoryId);
  if (category) {
    return {
      ...category,
      items: category.items.filter(item => item.isVisible !== false)
    };
  }
  return undefined;
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