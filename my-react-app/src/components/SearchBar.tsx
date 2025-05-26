import React from 'react';

interface SearchBarProps {
  searchQuery: string;
  onSearchChange: (query: string) => void;
  selectedLocation?: string;
  onLocationChange?: (location: string) => void;
  locations?: string[];
  showLocationFilter?: boolean;
  onSubmit?: (e: React.FormEvent) => void;
}

const SearchBar: React.FC<SearchBarProps> = ({
  searchQuery,
  onSearchChange,
  selectedLocation = '',
  onLocationChange,
  locations = [],
  showLocationFilter = false,
  onSubmit
}) => {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (onSubmit) {
      onSubmit(e);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="bg-white rounded-lg shadow-lg p-4 mb-8 flex items-center space-x-4">
      <div className="flex-1 relative">
        <input
          type="text"
          placeholder="Search..."
          className="w-full pl-10 pr-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:border-[#d35400]"
          value={searchQuery}
          onChange={(e) => onSearchChange(e.target.value)}
        />
        <span className="absolute left-3 top-1/2 transform -translate-y-1/2">
          🔍
        </span>
      </div>

      {showLocationFilter && onLocationChange && (
        <div className="relative">
          <select
            value={selectedLocation}
            onChange={(e) => onLocationChange(e.target.value)}
            className="appearance-none bg-white pl-4 pr-10 py-2 rounded-lg border border-gray-300 focus:outline-none focus:border-[#d35400]"
          >
            <option value="">All Locations</option>
            {locations.map(location => (
              <option key={location} value={location}>{location}</option>
            ))}
          </select>
          <span className="absolute right-3 top-1/2 transform -translate-y-1/2">
            ▼
          </span>
        </div>
      )}
    </form>
  );
};

export default SearchBar; 