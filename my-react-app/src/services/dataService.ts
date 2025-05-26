import { appData } from '../data/appData';
import { Category, BaseItem } from '../types';

export const getCategories = (): Category[] => {
  return appData.categories;
};

export const getCategory = (categoryId: string): Category | undefined => {
  return appData.categories.find(category => category.id === categoryId);
};

export const getCategoryItems = (categoryId: string): BaseItem[] => {
  const category = getCategory(categoryId);
  return category ? category.items : [];
};

export const getItemById = (categoryId: string, itemId: number): BaseItem | undefined => {
  const items = getCategoryItems(categoryId);
  return items.find(item => item.id === itemId);
};

export const getLocations = (): string[] => {
  const allItems = appData.categories.flatMap(category => category.items);
  return Array.from(new Set(allItems.map(item => item.location)));
}; 