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
              className="group relative overflow-hidden rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300"
            >
              <div className="h-64 relative overflow-hidden">
                <img
                  src={`/images/categorias/${category.image}`}
                  alt={category.title}
                  className="absolute inset-0 w-full h-full object-cover object-center transform group-hover:scale-110 transition-transform duration-300"
                />
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent">
                <div className="absolute bottom-0 left-0 p-4">
                  <h2 className="text-white text-xl font-semibold mb-2">{category.title}</h2>
                  <p className="text-white/80 text-sm">{category.description}</p>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </section>
    </div>
  );
};

export default HomePage; 