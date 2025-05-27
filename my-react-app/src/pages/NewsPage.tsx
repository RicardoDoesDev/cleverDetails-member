import React, { useState, useMemo } from 'react';
import { appData } from '../data/appData';
import { BaseItem } from '../types';
import { useNavigate } from 'react-router-dom';

const NewsPage: React.FC = () => {
  const navigate = useNavigate();
  const [selectedImageIndex, setSelectedImageIndex] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);

  // Get all items from all categories
  const allItems = useMemo(() => {
    return appData.categories.flatMap(category => 
      category.items.map(item => ({
        ...item,
        categoryId: category.id,
        categoryTitle: category.title
      }))
    );
  }, []);

  // Randomly select 4 items
  const randomItems = useMemo(() => {
    const shuffled = [...allItems].sort(() => Math.random() - 0.5);
    return shuffled.slice(0, 4);
  }, [allItems]);

  const handleImageChange = (newIndex: number) => {
    if (!isTransitioning) {
      setIsTransitioning(true);
      setSelectedImageIndex(newIndex);
      setTimeout(() => setIsTransitioning(false), 500);
    }
  };

  const renderStars = (rating: number) => {
    return Array(rating).fill('⭐').join('');
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-serif text-secondary text-center mb-8">Featured Experiences</h1>
      
      {/* Featured Items Slideshow */}
      <div className="relative px-12 mb-16">
        <div className="flex items-center justify-between gap-4 p-4">
          {/* Images */}
          <div className="flex-1 flex items-center justify-center gap-4">
            {/* Previous Item */}
            <div 
              className="w-1/4 aspect-[4/3] rounded-lg overflow-hidden opacity-75 cursor-pointer transition-all duration-500 hover:opacity-90"
              onClick={() => handleImageChange((selectedImageIndex - 1 + allItems.length) % allItems.length)}
            >
              <div className={`relative h-full transition-transform duration-500 ${isTransitioning ? 'scale-95' : ''}`}>
                <img
                  src={allItems[(selectedImageIndex - 1 + allItems.length) % allItems.length].image}
                  alt="Previous item"
                  className="w-full h-full object-cover"
                  onError={(e) => {
                    const target = e.target as HTMLImageElement;
                    target.src = "https://www.shutterstock.com/image-vector/default-ui-image-placeholder-wireframes-600nw-1037719192.jpg";
                  }}
                />
              </div>
            </div>

            {/* Center Section with Arrows */}
            <div className="relative w-1/2">
              {/* Left Arrow */}
              <button
                onClick={() => handleImageChange((selectedImageIndex - 1 + allItems.length) % allItems.length)}
                className="absolute left-0 top-1/2 -translate-y-1/2 bg-secondary text-white p-2 rounded-full hover:bg-secondary-hover transition-colors z-10"
                disabled={isTransitioning}
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                </svg>
              </button>

              {/* Current Item */}
              <div className="aspect-[4/3] rounded-lg overflow-hidden shadow-xl">
                <div className={`relative h-full transition-transform duration-500 ${isTransitioning ? 'scale-95' : 'scale-100'}`}>
                  <img
                    src={allItems[selectedImageIndex].image}
                    alt="Current item"
                    className="w-full h-full object-cover"
                    onError={(e) => {
                      const target = e.target as HTMLImageElement;
                      target.src = "https://www.shutterstock.com/image-vector/default-ui-image-placeholder-wireframes-600nw-1037719192.jpg";
                    }}
                  />
                </div>
              </div>

              {/* Right Arrow */}
              <button
                onClick={() => handleImageChange((selectedImageIndex + 1) % allItems.length)}
                className="absolute right-0 top-1/2 -translate-y-1/2 bg-secondary text-white p-2 rounded-full hover:bg-secondary-hover transition-colors z-10"
                disabled={isTransitioning}
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </button>
            </div>

            {/* Next Item */}
            <div 
              className="w-1/4 aspect-[4/3] rounded-lg overflow-hidden opacity-75 cursor-pointer transition-all duration-500 hover:opacity-90"
              onClick={() => handleImageChange((selectedImageIndex + 1) % allItems.length)}
            >
              <div className={`relative h-full transition-transform duration-500 ${isTransitioning ? 'scale-95' : ''}`}>
                <img
                  src={allItems[(selectedImageIndex + 1) % allItems.length].image}
                  alt="Next item"
                  className="w-full h-full object-cover"
                  onError={(e) => {
                    const target = e.target as HTMLImageElement;
                    target.src = "https://www.shutterstock.com/image-vector/default-ui-image-placeholder-wireframes-600nw-1037719192.jpg";
                  }}
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Items Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {randomItems.map(item => (
          <div 
            key={item.id} 
            className="bg-white rounded-lg overflow-hidden cursor-pointer"
            onClick={() => navigate(`/${item.categoryId}/${item.id}`)}
          >
            <div className="relative h-64">
              <img
                src={item.image}
                alt={item.name}
                className="w-full h-full object-cover"
                onError={(e) => {
                  const target = e.target as HTMLImageElement;
                  target.src = "https://www.shutterstock.com/image-vector/default-ui-image-placeholder-wireframes-600nw-1037719192.jpg";
                }}
              />
            </div>
            <div className="text-center">
              <h2 className="text-3xl font-bold text-primary mb-4">{item.name}</h2>
              <button className="bg-secondary text-white px-6 py-2 rounded hover:bg-secondary-hover transition-colors w-1/2 mt-5">
                Reveal Perks
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default NewsPage; 