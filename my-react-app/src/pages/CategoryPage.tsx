import React, { useState, useMemo } from 'react';
import { useParams } from 'react-router-dom';
import { getLocations, getCategories, getAllVisibleItems } from '../services/dataService';
import { useLanguage } from '../contexts/LanguageContext';
import ListPage from '../components/ListPage';
import SearchBar from '../components/SearchBar';

interface CategoryPageProps {
  categoryId?: string;
  title?: string;
}

const CategoryPage: React.FC<CategoryPageProps> = ({ categoryId: propsCategoryId, title: propsTitle }) => {
  const { categoryId: paramsCategoryId } = useParams<{ categoryId: string }>();
  const [selectedCategory, setSelectedCategory] = useState(propsCategoryId || paramsCategoryId || '');
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedLocation, setSelectedLocation] = useState<number | ''>('');
  const [selectedFilters, setSelectedFilters] = useState<string[]>([]);
  const { language } = useLanguage();

  const categories = getCategories(language);
  const locations = getLocations(language);
  const allItems = useMemo(() => getAllVisibleItems(language), [language]);

  const handleCategoryChange = (newCategoryId: string) => {
    setSelectedCategory(newCategoryId);
  };

  const filteredItems = useMemo(() => {
    // Start with all items or category items
    let items = allItems;

    // Apply category filter if selected
    if (selectedCategory) {
      const category = categories.find(cat => cat.id === selectedCategory);
      items = category?.items || [];
    }

    return items.filter(item => {
      // Skip hidden items
      if (item.isVisible === false) return false;

      // Apply search filter
      const matchesSearch = searchQuery 
        ? item.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
          item.description.toLowerCase().includes(searchQuery.toLowerCase())
        : true;

      // Apply location filter
      const matchesLocation = selectedLocation === '' || 
        (Array.isArray(item.locationIds) && item.locationIds.includes(selectedLocation));

      const matchesFilters = selectedFilters.length === 0 
        ? true 
        : selectedFilters.some(filter => 
            item.type?.toLowerCase() === filter.toLowerCase()
          );

      return matchesSearch && matchesLocation && matchesFilters;
    });
  }, [allItems, selectedCategory, categories, searchQuery, selectedLocation, selectedFilters]);

  // Get the current category for title
  const currentCategory = categories.find(cat => cat.id === selectedCategory);
  const pageTitle = !selectedCategory ? "All Experiences" : (propsTitle || currentCategory?.title || "");
  const categoryRoute = currentCategory?.route || "";

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
        title={pageTitle}
        items={filteredItems}
        categoryRoute={categoryRoute}
        isAllPage={!selectedCategory}
      />
    </div>
  );
};

export default CategoryPage; 