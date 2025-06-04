import React from 'react';
import { Link } from 'react-router-dom';
import { getCategories } from '../services/dataService';
import { useLanguage } from '../contexts/LanguageContext';

const HomePage: React.FC = () => {
  const { language } = useLanguage();
  const categories = getCategories(language);

  return (
    <div className="container mx-auto px-4 py-8">
      <section className="mb-16">
        <h1 className="text-4xl text-white text-center mb-4">Clever Member</h1>
        <h2 className="text-2xl text-white text-center mb-8">Enjoy Exclusive Rewards</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {categories.map((category) => (
            <Link
              key={category.id}
              to={category.route}
              className="bg-white rounded-lg overflow-hidden shadow-lg cursor-pointer transform transition-transform hover:scale-105"
            >
              <div className="h-64 relative overflow-hidden">
                <img
                  src={`/images/categorias/${category.image}`}
                  alt={category.title}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-4 text-center">
                <h3 className="text-primary text-3xl font-semibold mb-2">{category.title}</h3>
                <button className="text-white text-2xl bg-secondary px-4 py-2 rounded hover:bg-secondary/80 transition-colors">see more</button>
              </div>
            </Link>
          ))}
        </div>
      </section>
    </div>
  );
};

export default HomePage; 