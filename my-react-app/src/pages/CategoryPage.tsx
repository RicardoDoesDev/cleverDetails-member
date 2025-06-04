import React, { useState, useMemo } from 'react';
import { useParams } from 'react-router-dom';
import { getCategory, getLocations, getCategories } from '../services/dataService';
import { useLanguage } from '../contexts/LanguageContext';
import ListPage from '../components/ListPage';
import SearchBar from '../components/SearchBar';
import { useNavigate } from 'react-router-dom';

interface CategoryPageProps {
  categoryId?: string;
  title?: string;
}

const CategoryPage: React.FC<CategoryPageProps> = ({ categoryId: propsCategoryId, title: propsTitle }) => {
  const { categoryId: paramsCategoryId } = useParams<{ categoryId: string }>();
  const navigate = useNavigate();
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedLocation, setSelectedLocation] = useState<number | ''>('');
  const [selectedFilters, setSelectedFilters] = useState<string[]>([]);
  const { language } = useLanguage();

  // Use categoryId from props if available, otherwise from params
  const categoryId = propsCategoryId || paramsCategoryId || '';

  const category = useMemo(() => getCategory(categoryId, language), [categoryId, language]);
  const locations = getLocations(language);
  const categories = getCategories(language);

  const handleCategoryChange = (newCategoryId: string) => {
    if (newCategoryId !== categoryId) {
      navigate(`/${newCategoryId}`);
    }
  };

  const filteredItems = useMemo(() => {
    if (!category) return [];
    
    return category.items.filter(item => {
      if (item.isVisible === false) return false;

      const matchesSearch = 
        item.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        item.description.toLowerCase().includes(searchQuery.toLowerCase());
      
      const matchesLocation = !selectedLocation || item.locationIds.includes(selectedLocation);

      const matchesFilters = selectedFilters.length === 0 || 
        selectedFilters.some(filter => item.type?.toLowerCase() === filter.toLowerCase());

      return matchesSearch && matchesLocation && matchesFilters;
    });
  }, [category, searchQuery, selectedLocation, selectedFilters]);

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
        onCategoryChange={handleCategoryChange}
        categories={categories}
        showCategoryFilter={true}
        selectedFilters={selectedFilters}
        onFilterChange={setSelectedFilters}
      />

      <ListPage
        title={propsTitle || category.title}
        items={filteredItems}
        categoryRoute={category.route}
        isAllPage={false}
      />
    </div>
  );
};

export default CategoryPage; 