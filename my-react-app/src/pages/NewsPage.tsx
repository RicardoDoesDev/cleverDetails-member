import React, { useMemo } from 'react';
import { appData } from '../data/appData';
import { useNavigate } from 'react-router-dom';
import { getLocationName } from '../services/dataService';
import Slideshow from '../components/Slideshow';

const NewsPage: React.FC = () => {
  const navigate = useNavigate();

  const allItems = useMemo(() => {
    return appData.categories.flatMap(category => 
      category.items.map(item => ({
        ...item,
        categoryId: category.id,
        categoryTitle: category.title
      }))
    );
  }, []);

  // Get 4 random items for the grid
  const randomItems = useMemo(() => {
    const shuffled = [...allItems].sort(() => 0.5 - Math.random());
    return shuffled.slice(0, 4);
  }, [allItems]);

  // Format items for slideshow
  const slideshowItems = useMemo(() => {
    return allItems.map(item => ({
      image: item.image,
      title: item.name,
      description: item.description,
      tag: item.categoryTitle
    }));
  }, [allItems]);

  return (
    <div className="container mx-auto px-4 py-8">
      {/* Slideshow */}
      <div className="mb-12">
        <Slideshow 
          items={slideshowItems}
          height="500px"
          autoPlayInterval={5000}
          showControls={true}
          showDots={true}
          showCaption={true}
        />
      </div>

      <h1 className="text-4xl text-white mb-8 text-center">Novidades</h1>

      {/* Random Items Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {randomItems.map((item) => (
          <div
            key={`${item.categoryId}-${item.id}`}
            className="bg-white rounded-lg shadow-lg overflow-hidden cursor-pointer transform transition-transform duration-300 hover:scale-[1.02]"
            onClick={() => navigate(`/${item.categoryId}/${item.id}`)}
          >
            <div className="relative">
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
            <div className="p-6 text-center">
              <h2 className="text-4xl font-semibold text-primary mb-2">{item.name}</h2>
              <button className="bg-secondary text-white px-4 py-2 rounded-md text-2xl">
                Read More
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default NewsPage; 