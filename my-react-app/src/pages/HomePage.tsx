import React from 'react';
import { useNavigate } from 'react-router-dom';
import { getCategories } from '../services/dataService';

const HomePage: React.FC = () => {
  const navigate = useNavigate();
  const categories = getCategories();

  return (
    <div className="container mx-auto px-4 py-8">
      <section className="mb-16">
        <h1 className="text-4xl text-white text-center mb-4">Clever Member</h1>
        <h2 className="text-2xl text-white text-center mb-8">Enjoy Exclusive Rewards</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {categories.map((category) => (
            <div
              key={category.id}
              className="bg-white rounded-lg overflow-hidden shadow-lg cursor-pointer transform transition-transform hover:scale-105"
              onClick={() => navigate(category.route)}
            >
              <div className="relative h-48">
                <img
                  src={`/images/categorias/${category.image}`}
                  alt={category.title}
                  className="w-full h-full object-cover"
                  loading="lazy"
                  decoding="async"
                  onError={(e) => {
                    const target = e.target as HTMLImageElement;
                    target.src = "/images/placeholder-image.jpg";
                  }}
                />
              </div>
              <div className="p-4 text-center">
                <h3 className="text-2xl text-primary mb-2">{category.title}</h3>
                <button className="bg-secondary text-white px-6 py-2 rounded hover:bg-secondary-hover transition-colors w-1/2">
                  Explore →
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default HomePage; 