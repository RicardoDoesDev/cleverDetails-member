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
  const allItems: (Item & { categoryId: string })[] = useMemo(() => {
    return appData.categories.flatMap(category => 
      category.items.map(item => ({
        ...item,
        categoryId: category.id
      }))
    );
  }, []);

  const locations = getLocations();
  const categories = appData.categories;

  const handleCategoryChange = (categoryId: string) => {
    if (categoryId) {
      navigate(`/${categoryId}`);
    } else {
      setSelectedCategory(categoryId);
    }
  };

  const filteredItems = useMemo(() => {
    return allItems.filter(item => {
      const matchesSearch = 
        item.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        item.description.toLowerCase().includes(searchQuery.toLowerCase());
      
      const matchesLocation = !selectedLocation || item.locationId === selectedLocation;
      
      const matchesCategory = !selectedCategory || item.categoryId === selectedCategory;

      return matchesSearch && matchesLocation && matchesCategory;
    });
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