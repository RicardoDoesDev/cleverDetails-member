import React, { useState, useMemo } from 'react';
import { getCategoryItems, getLocations } from '../services/dataService';
import ListPage from '../components/ListPage';
import SearchBar from '../components/SearchBar';

interface CategoryPageProps {
  categoryId: string;
  title: string;
}

const CategoryPage: React.FC<CategoryPageProps> = ({ categoryId, title }) => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedLocation, setSelectedLocation] = useState('');
  
  const allItems = getCategoryItems(categoryId);
  const locations = getLocations();

  const filteredItems = useMemo(() => {
    return allItems.filter(item => {
      const matchesSearch = 
        item.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        item.description.toLowerCase().includes(searchQuery.toLowerCase());
      
      const matchesLocation = !selectedLocation || item.location === selectedLocation;

      return matchesSearch && matchesLocation;
    });
  }, [allItems, searchQuery, selectedLocation]);

  return (
    <div>
      <SearchBar
        searchQuery={searchQuery}
        onSearchChange={setSearchQuery}
        selectedLocation={selectedLocation}
        onLocationChange={setSelectedLocation}
        locations={locations}
        showLocationFilter={true}
      />

      <ListPage
        title={title}
        items={filteredItems}
        categoryRoute={`/${categoryId}`}
      />
    </div>
  );
};

export default CategoryPage; 