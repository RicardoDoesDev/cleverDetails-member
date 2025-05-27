import React from 'react';
import { Link } from 'react-router-dom';

const categories = [
  { title: 'Gastronomia', route: '/gastronomia' },
  { title: 'Adegas/Winery Tours', route: '/winery-tours' },
  { title: 'Atividades', route: '/atividades' },
  { title: 'Wellness', route: '/wellness' },
  { title: 'Beauty & Hair Salons', route: '/beauty-salons' },
  { title: 'Boat Tours/Passeios de Barco', route: '/boat-tours' }
];

const Navbar: React.FC = () => {
  return (
    <nav className="bg-white shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex">
            <div className="flex-shrink-0 flex items-center">
              <Link to="/" className="text-primary text-2xl font-bold">
                Clever Details
              </Link>
            </div>
          </div>

          <div className="hidden md:flex md:items-center md:space-x-8">
            {categories.map((category) => (
              <Link
                key={category.route}
                to={category.route}
                className="text-primary hover:text-secondary transition-colors"
              >
                {category.title}
              </Link>
            ))}
          </div>
        </div>

        <div className="md:hidden mt-4">
          <div className="flex flex-col space-y-2">
            {categories.map((category) => (
              <Link
                key={category.route}
                to={category.route}
                className="text-primary hover:text-secondary transition-colors py-2"
              >
                {category.title}
              </Link>
            ))}
          </div>
        </div>
      </div>

      <div className="absolute top-2 right-4 text-secondary italic">
        We ❤️ Vilamoura...
      </div>
    </nav>
  );
};

export default Navbar; 