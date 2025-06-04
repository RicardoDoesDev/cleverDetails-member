import React from 'react';
import { Category, Location } from '../types/index';

interface SearchBarProps {
  searchQuery: string;
  onSearchChange: (query: string) => void;
  selectedLocation: number | '';
  onLocationChange: (locationId: number | '') => void;
  locations: Location[];
  showLocationFilter?: boolean;
  selectedCategory?: string;
  onCategoryChange?: (categoryId: string) => void;
  categories?: Category[];
  showCategoryFilter?: boolean;
  selectedFilters: string[];
  onFilterChange: (filters: string[]) => void;
}

const SearchBar: React.FC<SearchBarProps> = ({
  searchQuery,
  onSearchChange,
  selectedLocation,
  onLocationChange,
  locations,
  showLocationFilter = false,
  selectedCategory = '',
  onCategoryChange,
  categories = [],
  showCategoryFilter = false,
  selectedFilters = [],
  onFilterChange = () => {},
}) => {
  const handleLocationChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const value = e.target.value;
    console.log('Location selected:', value);
    onLocationChange(value === '' ? '' : parseInt(value, 10));
  };

  const handleCategoryChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const value = e.target.value;
    console.log('Category selected:', value);
    if (onCategoryChange) {
      onCategoryChange(value);
    }
  };

  return (
    <div className="flex flex-col gap-4 mb-8">
      <div className="flex flex-col md:flex-row gap-4">
        <input
          type="text"
          value={searchQuery}
          onChange={(e) => onSearchChange(e.target.value)}
          placeholder="Search experiences..."
          className="flex-1 px-4 py-2 rounded border border-gray-300 focus:outline-none focus:border-secondary"
        />

        {showLocationFilter && (
          <select
            value={selectedLocation}
            onChange={handleLocationChange}
            className="w-full md:w-auto px-4 py-2 rounded border border-gray-300 focus:outline-none focus:border-secondary"
          >
            <option value="">All Locations</option>
            {locations.map(location => (
              <option key={location.id} value={location.id}>
                {location.name}
              </option>
            ))}
          </select>
        )}

        {showCategoryFilter && categories && onCategoryChange && (
          <select
            value={selectedCategory}
            onChange={handleCategoryChange}
            className="w-full md:w-auto px-4 py-2 rounded border border-gray-300 focus:outline-none focus:border-secondary"
          >
            <option value="">All Categories</option>
            {categories.map(category => (
              <option key={category.id} value={category.id}>
                {category.title}
              </option>
            ))}
          </select>
        )}
      </div>
    </div>
  );
};

export default SearchBar; 