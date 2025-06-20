import React, { useState, useMemo } from 'react';
import { getLocations, getCategories } from '../services/dataService';
import ListPage from '../components/ListPage';
import SearchBar from '../components/SearchBar';
import { useLanguage } from '../contexts/LanguageContext';
import { Item } from '../types/index';

const AllItemsPage: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedLocation, setSelectedLocation] = useState<number | ''>('');
  const [selectedCategory, setSelectedCategory] = useState('');
  const [selectedFilters, setSelectedFilters] = useState<string[]>([]);
  const { language } = useLanguage();
  
  // Get all visible items from all categories
  const categories = getCategories(language);
  const allItems: (Item & { categoryId: string; uniqueId: string })[] = useMemo(() => {
    return categories.flatMap(category => 
      category.items.map(item => ({
        ...item,
        categoryId: category.id,
        uniqueId: `${category.id}-${item.id}` // Create a unique ID combining category and item IDs
      }))
    );
  }, [categories]);

  const locations = getLocations(language);

  const handleCategoryChange = (categoryId: string) => {
    setSelectedCategory(categoryId);
  };

  const filteredItems = useMemo(() => {
    const filtered = allItems.filter(item => {
      // Skip hidden items
      if (item.isVisible === false) return false;

      const matchesSearch = 
        item.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        item.description.toLowerCase().includes(searchQuery.toLowerCase());
      
      const matchesLocation = selectedLocation === '' || 
        (Array.isArray(item.locationIds) && item.locationIds.includes(selectedLocation));
      
      const matchesCategory = !selectedCategory || item.categoryId === selectedCategory;

      const matchesFilters = selectedFilters.length === 0 || 
        selectedFilters.some(filter => item.type?.toLowerCase() === filter.toLowerCase());

      return matchesSearch && matchesLocation && matchesCategory && matchesFilters;
    });

    return filtered;
  }, [allItems, searchQuery, selectedLocation, selectedCategory, selectedFilters]);

  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      <SearchBar
        searchQuery={searchQuery}
        onSearchChange={setSearchQuery}
        selectedLocation={selectedLocation}
        onLocationChange={setSelectedLocation}
        locations={locations}
        showLocationFilter={true}
        selectedCategory={selectedCategory}
        onCategoryChange={handleCategoryChange}
        categories={categories}
        showCategoryFilter={true}
        selectedFilters={selectedFilters}
        onFilterChange={setSelectedFilters}
      />

      <ListPage
        title="All Experiences"
        items={filteredItems}
        categoryRoute=""
        isAllPage={true}
      />
    </div>
  );
};

export default AllItemsPage; 