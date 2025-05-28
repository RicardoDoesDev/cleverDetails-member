import React, { useState, useMemo } from 'react';
import { getCategory, getLocations } from '../services/dataService';
import ListPage from '../components/ListPage';
import SearchBar from '../components/SearchBar';
import { appData } from '../data/appData';
import { useNavigate } from 'react-router-dom';

interface CategoryPageProps {
  categoryId: string;
  title: string;
}

const CategoryPage: React.FC<CategoryPageProps> = ({ categoryId, title }) => {
  const navigate = useNavigate();
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedLocation, setSelectedLocation] = useState<number | ''>('');
  
  const category = getCategory(categoryId);
  const locations = getLocations();
  const categories = appData.categories;

  const handleCategoryChange = (newCategoryId: string) => {
    if (newCategoryId) {
      navigate(`/${newCategoryId}`);
    } else {
      navigate('/all');
    }
  };

  const filteredItems = useMemo(() => {
    if (!category) return [];

    return category.items.filter(item => {
      const matchesSearch = 
        item.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        item.description.toLowerCase().includes(searchQuery.toLowerCase());
      
      const matchesLocation = !selectedLocation || item.locationId === selectedLocation;

      return matchesSearch && matchesLocation;
    });
  }, [category, searchQuery, selectedLocation]);

  if (!category) {
    return <div>Category not found</div>;
  }

  return (
    <div>
      <SearchBar
        searchQuery={searchQuery}
        onSearchChange={setSearchQuery}
        selectedLocation={selectedLocation}
        onLocationChange={setSelectedLocation}
        locations={locations}
        showLocationFilter={true}
        selectedCategory={categoryId}
        onCategoryChange={handleCategoryChange}
        categories={categories}
        showCategoryFilter={true}
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