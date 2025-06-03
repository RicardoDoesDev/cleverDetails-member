import React, { useState, useMemo } from 'react';
import { useNavigate } from 'react-router-dom';
import { getLocations, getCategories } from '../services/dataService';
import ListPage from '../components/ListPage';
import SearchBar from '../components/SearchBar';
import { useLanguage } from '../contexts/LanguageContext';
import { Item } from '../types/index';

const AllItemsPage: React.FC = () => {
  const navigate = useNavigate();
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedLocation, setSelectedLocation] = useState<number | ''>('');
  const [selectedCategory, setSelectedCategory] = useState('');
  const { language } = useLanguage();
  
  // Get all items from all categories
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
    console.log('Category changed to:', categoryId);
    setSelectedCategory(categoryId);
  };

  const filteredItems = useMemo(() => {
    console.log('Filtering with:', { selectedLocation, selectedCategory, searchQuery });
    
    const filtered = allItems.filter(item => {
      const matchesSearch = 
        item.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        item.description.toLowerCase().includes(searchQuery.toLowerCase());
      
      const matchesLocation = !selectedLocation || item.locationIds.includes(selectedLocation);
      
      const matchesCategory = !selectedCategory || item.categoryId === selectedCategory;

      console.log('Item:', item.name, { matchesSearch, matchesLocation, matchesCategory });

      return matchesSearch && matchesLocation && matchesCategory;
    });

    console.log('Filtered items:', filtered.length);
    return filtered;
  }, [allItems, searchQuery, selectedLocation, selectedCategory]);

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