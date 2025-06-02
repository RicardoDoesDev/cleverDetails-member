import React, { useState, useMemo } from 'react';
import { useNavigate } from 'react-router-dom';
import { getLocations } from '../services/dataService';
import ListPage from '../components/ListPage';
import SearchBar from '../components/SearchBar';
import { appData } from '../data/appData';
import { Item } from '../types';

const AllItemsPage: React.FC = () => {
  const navigate = useNavigate();
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedLocation, setSelectedLocation] = useState<number | ''>('');
  const [selectedCategory, setSelectedCategory] = useState('');
  
  // Get all items from all categories
  const allItems: (Item & { categoryId: string; uniqueId: string })[] = useMemo(() => {
    return appData.categories.flatMap(category => 
      category.items.map(item => ({
        ...item,
        categoryId: category.id,
        uniqueId: `${category.id}-${item.id}` // Create a unique ID combining category and item IDs
      }))
    );
  }, []);

  const locations = getLocations();
  const categories = appData.categories;

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
    <div>
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
        categoryRoute="/all"
        isAllPage={true}
      />
    </div>
  );
};

export default AllItemsPage; 