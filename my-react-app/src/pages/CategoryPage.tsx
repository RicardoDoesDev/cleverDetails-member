import React, { useState, useMemo } from 'react';
import { getCategory, getLocations, getCategories } from '../services/dataService';
import { useLanguage } from '../contexts/LanguageContext';
import ListPage from '../components/ListPage';
import SearchBar from '../components/SearchBar';
import { Item } from '../types';

interface CategoryPageProps {
  categoryId: string;
  title: string;
}

const CategoryPage: React.FC<CategoryPageProps> = ({ categoryId, title }) => {
  const { language } = useLanguage();
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedLocation, setSelectedLocation] = useState<number | ''>('');
  
  const category = getCategory(categoryId, language);
  const locations = getLocations(language);
  const categories = getCategories(language);

  const filteredItems = useMemo(() => {
    if (!category) return [];
    
    return category.items.filter(item => {
      const matchesSearch = 
        item.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        item.description.toLowerCase().includes(searchQuery.toLowerCase());
      
      const matchesLocation = !selectedLocation || item.locationIds.includes(selectedLocation);

      return matchesSearch && matchesLocation;
    });
  }, [category, searchQuery, selectedLocation]);

  if (!category) {
    return <div>Category not found</div>;
  }

  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      <SearchBar
        searchQuery={searchQuery}
        onSearchChange={setSearchQuery}
        selectedLocation={selectedLocation}
        onLocationChange={setSelectedLocation}
        locations={locations}
        showLocationFilter={true}
        selectedCategory={categoryId}
        onCategoryChange={() => {}} // Category is fixed in this view
        categories={categories}
        showCategoryFilter={false} // Hide category filter since we're in a specific category
      />

      <ListPage
        title={category.title}
        items={filteredItems}
        categoryRoute={category.route}
        isAllPage={false}
      />
    </div>
  );
};

export default CategoryPage; 