import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Item } from '../types/index';
import { getLocationName } from '../services/dataService';
import { useLanguage } from '../contexts/LanguageContext';
import Slideshow from './Slideshow';

interface ListPageProps {
  title: string;
  items: (Item & { categoryId?: string; uniqueId?: string })[];
  categoryRoute: string;
  isAllPage?: boolean;
}

const ListPage: React.FC<ListPageProps> = ({ title, items, categoryRoute, isAllPage = false }) => {
  const navigate = useNavigate();
  const { language } = useLanguage();

  const handleItemClick = (item: Item & { categoryId?: string }) => {
    if (isAllPage && item.categoryId) {
      navigate(`/${item.categoryId}/${item.id}`);
    } else {
      navigate(`${categoryRoute}/${item.id}`);
    }
  };

  const renderExtraInfo = (item: Item) => {
    return (
      <div className="font-bold mb-2 text-center">
        {item.specialOffer?.description && (
          <>
            <div className="text-primary text-lg md:text-xl">Special Offer:</div>
            <div className="text-secondary text-lg">{item.specialOffer?.description}</div>
          </>
        )}
      </div>
    );
  };
  

  return (
    <div className="pb-8">
      <h1 className="text-3xl md:text-4xl text-white text-center mb-6 md:mb-8 px-4">{title}</h1>
      
      <div className="space-y-6 md:space-y-8 px-4 md:px-0">
        {items.map((item) => {
          const itemKey = item.uniqueId || `${item.categoryId || 'category'}-${item.id}`;
          return (
            <div
              key={itemKey}
              className="bg-white rounded-lg shadow-lg overflow-hidden cursor-pointer transform transition-transform duration-300 hover:scale-[1.02]"
              onClick={() => handleItemClick(item)}
            >
              <div className="flex flex-col md:flex-row">
                <div className="w-full md:w-1/3 h-48 md:h-[300px] relative">
                  <Slideshow
                    items={item.images?.map(image => ({
                      image: `/images/fotos/${item.rootFolder}/${image}`
                    })) || []}
                    height="100%"
                    autoPlayInterval={4000}
                    showCaption={false}
                    showDots={false}
                  />
                </div>
                <div className="p-4 md:p-6 flex-1">
                  <h2 className="text-xl md:text-2xl text-primary mb-2 md:mb-4 font-bold">{item.name}</h2>
                  <p className="text-gray-600 mb-3 md:mb-4 text-sm md:text-base">
                    {item.description.length > 150 ?
                      `${item.description.substring(0, 150)}...` : item.description
                    }
                  </p>
                  <div className="flex items-center text-primary text-sm md:text-base">
                    <span className="mr-2">📍</span>
                    {getLocationName(item.locationIds, language)}
                  </div>
                </div>
                <div className="p-4 md:p-4 bg-gray-50 flex flex-col justify-center items-center w-full md:w-48">
                  {renderExtraInfo(item)}
                  <button className="bg-secondary text-white px-4 md:px-6 py-2 rounded hover:bg-secondary-hover transition-colors w-full text-sm md:text-base">
                    Details
                  </button>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default ListPage; 