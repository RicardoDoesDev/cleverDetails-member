import React from 'react';
import { Link } from 'react-router-dom';
import { appData } from '../data/appData';
import { LanguageSwitcher } from './LanguageSwitcher';

interface SidebarProps {
  isOpen: boolean;
  onClose: () => void;
}

const Sidebar: React.FC<SidebarProps> = ({ isOpen, onClose }) => {
  return (
    <>
      {/* Overlay */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-40"
          onClick={onClose}
        />
      )}

      {/* Sidebar */}
      <div
        className={`fixed top-0 left-0 h-full w-64 bg-white shadow-lg transform transition-transform duration-300 ease-in-out z-50 ${
          isOpen ? 'translate-x-0' : '-translate-x-full'
        } flex flex-col`}
      >
        {/* Close button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-500 hover:text-gray-700"
        >
          ✕
        </button>

        {/* Main content */}
        <div className="flex-1 overflow-y-auto">
          <div className="p-4">
            <div className="mt-8">
              <h2 className="py-2 px-4 mt-4 text-xl font-bold text-bold mb-4">Categories</h2>
              <nav className="space-y-2">
                {appData.categories.map((category) => (
                  <Link
                    key={category.route}
                    to={category.route}
                    className="block py-2 px-4 text-gray-700 hover:bg-secondary hover:text-white rounded-lg transition-colors"
                    onClick={onClose}
                  >
                    {category.title}
                  </Link>
                ))}
              </nav>
              <h2 className="py-2 px-4 mt-4 text-xl font-bold text-bold mb-4">Other</h2>
              <nav className="space-y-2 mt-4">
                <Link
                  to="/all"
                  className="block py-2 px-4 text-gray-700 hover:bg-secondary hover:text-white rounded-lg transition-colors"
                  onClick={onClose}
                >
                  Advantages
                </Link>
                <Link
                  to="/access"
                  className="block py-2 px-4 text-gray-700 hover:bg-secondary hover:text-white rounded-lg transition-colors"
                  onClick={onClose}
                >
                  Access
                </Link>
                <Link
                  to="/partnership"
                  className="block py-2 px-4 text-gray-700 hover:bg-secondary hover:text-white rounded-lg transition-colors"
                  onClick={onClose}
                >
                  Partnership
                </Link>
                <Link
                  to="/contact"
                  className="block py-2 px-4 text-gray-700 hover:bg-secondary hover:text-white rounded-lg transition-colors"
                  onClick={onClose}
                >
                  Contact
                </Link>
              </nav>
            </div>
          </div>

          {/* Language Selector */}
          <div className="p-4 border-t border-gray-200">
            <h2 className="text-xl font-bold text-primary mb-4">Language</h2>
            <LanguageSwitcher variant="sidebar" onClose={onClose} />
          </div>
        </div>

        {/* Footer */}
        <div className="p-4 mt-auto border-t border-gray-200">
          <img 
            src="/images/logo.png" 
            alt="Logo" 
            className="h-auto mx-auto mb-2"
            loading="lazy"
            decoding="async"
            onError={(e) => {
              const target = e.target as HTMLImageElement;
              target.src = "/images/placeholder-logo.png";
            }}
          />
          <h2 className="text-xl font-bold text-primary text-center" style={{ fontFamily: "'Tropika Script', cursive" }}>We ❤️ Vilamoura ...</h2>
        </div>
      </div>
    </>
  );
};

export default Sidebar; 