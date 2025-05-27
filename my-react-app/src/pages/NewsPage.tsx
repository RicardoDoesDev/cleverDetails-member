import React, { useState, useMemo } from 'react';
import { appData } from '../data/appData';
import { Item } from '../types';
import { useNavigate } from 'react-router-dom';
import { getLocationName } from '../services/dataService';

const NewsPage: React.FC = () => {
  const navigate = useNavigate();
  const [selectedCategory, setSelectedCategory] = useState<string>('');

  const allItems = useMemo(() => {
    return appData.categories.flatMap(category => 
      category.items.map(item => ({
        ...item,
        categoryId: category.id,
        categoryTitle: category.title
      }))
    );
  }, []);

  const filteredItems = selectedCategory
    ? allItems.filter(item => item.categoryId === selectedCategory)
    : allItems;

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl text-white mb-8">Latest News & Updates</h1>

      {/* Category Filter */}
      <div className="mb-8">
        <select
          value={selectedCategory}
          onChange={(e) => setSelectedCategory(e.target.value)}
          className="w-full md:w-auto px-4 py-2 rounded border border-gray-300 focus:outline-none focus:border-secondary"
        >
          <option value="">All Categories</option>
          {appData.categories.map(category => (
            <option key={category.id} value={category.id}>
              {category.title}
            </option>
          ))}
        </select>
      </div>

      {/* News Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {filteredItems.map((item) => (
          <div
            key={`${item.categoryId}-${item.id}`}
            className="bg-white rounded-lg shadow-lg overflow-hidden cursor-pointer transform transition-transform duration-300 hover:scale-[1.02]"
            onClick={() => navigate(`/${item.categoryId}/${item.id}`)}
          >
            <div className="relative h-48">
              <img
                src={item.image}
                alt={item.name}
                className="w-full h-full object-cover"
                onError={(e) => {
                  const target = e.target as HTMLImageElement;
                  target.src = "https://www.shutterstock.com/image-vector/default-ui-image-placeholder-wireframes-600nw-1037719192.jpg";
                }}
              />
              <div className="absolute top-4 right-4 bg-secondary text-white px-3 py-1 rounded-full">
                {item.categoryTitle}
              </div>
            </div>
            <div className="p-6">
              <h2 className="text-xl font-semibold text-primary mb-2">{item.name}</h2>
              <p className="text-gray-600 mb-4 line-clamp-2">{item.description}</p>
              <div className="flex items-center justify-between">
                <div className="flex items-center text-primary">
                  <span className="mr-2">📍</span>
                  {getLocationName(item.locationId)}
                </div>
                <div className="text-yellow-400">
                  {Array(item.rating).fill('⭐').join('')}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default NewsPage; 