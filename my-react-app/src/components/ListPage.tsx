import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Item } from '../types';
import { getLocationName } from '../services/dataService';

interface ListPageProps {
  title: string;
  items: (Item & { categoryId?: string })[];
  categoryRoute: string;
  isAllPage?: boolean;
}

const ListPage: React.FC<ListPageProps> = ({ title, items, categoryRoute, isAllPage = false }) => {
  const navigate = useNavigate();

  const handleItemClick = (item: Item & { categoryId?: string }) => {
    if (isAllPage && item.categoryId) {
      navigate(`/${item.categoryId}/${item.id}`);
    } else {
      navigate(`${categoryRoute}/${item.id}`);
    }
  };

  const renderStars = (rating: number) => {
    return Array(rating).fill('⭐').join('');
  };

  const renderExtraInfo = (item: Item) => {

    return (
      <div className="text-secondary font-bold mb-4 text-center">
        {item.specialOffer?.type}:
        <div className="text-xl">{item.specialOffer?.discount}</div>
      </div>
    );
  };

  return (
    <div>
      <h1 className="text-4xl text-white text-center mb-8">{title}</h1>
      
      <div className="space-y-8">
        {items.map((item) => (
          <div
            key={item.id}
            className="bg-white rounded-lg shadow-lg overflow-hidden cursor-pointer transform transition-transform duration-300 hover:scale-[1.02]"
            onClick={() => handleItemClick(item)}
          >
            <div className="flex flex-col md:flex-row">
              <div className="w-full md:w-1/3 h-64 md:h-auto relative">
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
                  {renderStars(item.rating)}
                </div>
              </div>
              <div className="p-6 flex-1">
                <h2 className="text-2xl text-primary mb-4">{item.name}</h2>
                <p className="text-gray-600 mb-4">{item.description}</p>
                <div className="flex items-center text-primary">
                  <span className="mr-2">📍</span>
                  {getLocationName(item.locationId)}
                </div>
              </div>
              <div className="p-6 bg-gray-50 flex flex-col justify-center items-center w-full md:w-48">
                {renderExtraInfo(item)}
                <button className="bg-secondary text-white px-6 py-2 rounded hover:bg-secondary-hover transition-colors w-full">
                  Details
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