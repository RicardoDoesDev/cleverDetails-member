import React from 'react';
import { useNavigate } from 'react-router-dom';
import { BaseItem, BoatTour, Restaurant, Activity, WineryTour, Wellness, ChefService } from '../types';

interface ListPageProps {
  title: string;
  items: BaseItem[];
  categoryRoute: string;
}

const ListPage: React.FC<ListPageProps> = ({ title, items, categoryRoute }) => {
  const navigate = useNavigate();

  const renderStars = (rating: number) => {
    return Array(rating).fill('⭐').join('');
  };

  const renderExtraInfo = (item: BaseItem) => {
    if (isBoatTour(item)) {
      return (
        <div className="text-secondary">
          {item.specialOffer.type}: {item.specialOffer.discount}
        </div>
      );
    }
    if (isRestaurant(item) || isChefService(item)) {
      return <div className="text-secondary">Cuisine: {item.cuisine}</div>;
    }
    if (isActivity(item)) {
      return <div className="text-secondary">Price: {item.price}</div>;
    }
    if (isWineryTour(item)) {
      return <div className="text-secondary">Duration: {item.duration}</div>;
    }
    if (isWellness(item)) {
      return <div className="text-secondary">Type: {item.type}</div>;
    }
    return null;
  };

  // Type guards
  const isBoatTour = (item: BaseItem): item is BoatTour => {
    return 'specialOffer' in item;
  };

  const isRestaurant = (item: BaseItem): item is Restaurant => {
    return 'cuisine' in item && !('specialOffer' in item);
  };

  const isActivity = (item: BaseItem): item is Activity => {
    return 'price' in item;
  };

  const isWineryTour = (item: BaseItem): item is WineryTour => {
    return 'duration' in item;
  };

  const isWellness = (item: BaseItem): item is Wellness => {
    return 'type' in item;
  };

  const isChefService = (item: BaseItem): item is ChefService => {
    return 'cuisine' in item && !('specialOffer' in item);
  };

  return (
    <div>
      <h1 className="text-4xl text-white text-center mb-8">{title}</h1>
      
      <div className="space-y-8">
        {items.map((item) => (
          <div
            key={item.id}
            className="bg-white rounded-lg shadow-lg overflow-hidden cursor-pointer"
            onClick={() => navigate(`${categoryRoute}/${item.id}`)}
          >
            <div className="flex flex-col md:flex-row">
              <div className="w-full md:w-1/3 h-64 md:h-auto">
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
              <div className="p-6 flex-1">
                <div className="flex justify-between items-center mb-4">
                  <h2 className="text-2xl text-primary">{item.name}</h2>
                  <div className="text-lg">{renderStars(item.rating)}</div>
                </div>
                <p className="text-gray-600 mb-4">{item.description}</p>
                <div className="flex items-center text-primary">
                  <span className="mr-2">📍</span>
                  {item.location}
                </div>
                {renderExtraInfo(item)}
              </div>
              <div className="p-6 bg-gray-50 flex flex-col justify-center items-center w-full md:w-48">
                <button className="bg-secondary text-white px-6 py-2 rounded hover:bg-secondary-hover transition-colors w-full">
                  View Details
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ListPage; 