import React from 'react';
import { Link } from 'react-router-dom';

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
        }`}
      >
        <div className="p-4">
          <button
            onClick={onClose}
            className="absolute top-4 right-4 text-gray-500 hover:text-gray-700"
          >
            ✕
          </button>

          <div className="mt-8">
            <h2 className="text-xl font-bold text-primary mb-4">Menu</h2>
            <nav className="space-y-2">
              <Link
                to="/boat-tours"
                className="block py-2 px-4 text-gray-700 hover:bg-secondary hover:text-white rounded-lg transition-colors"
                onClick={onClose}
              >
                Boat Tours
              </Link>
              <Link
                to="/gastronomy"
                className="block py-2 px-4 text-gray-700 hover:bg-secondary hover:text-white rounded-lg transition-colors"
                onClick={onClose}
              >
                Gastronomy
              </Link>
              <Link
                to="/activities"
                className="block py-2 px-4 text-gray-700 hover:bg-secondary hover:text-white rounded-lg transition-colors"
                onClick={onClose}
              >
                Activities
              </Link>
              <Link
                to="/winery-tours"
                className="block py-2 px-4 text-gray-700 hover:bg-secondary hover:text-white rounded-lg transition-colors"
                onClick={onClose}
              >
                Winery Tours
              </Link>
              <Link
                to="/wellness"
                className="block py-2 px-4 text-gray-700 hover:bg-secondary hover:text-white rounded-lg transition-colors"
                onClick={onClose}
              >
                Wellness
              </Link>
              <Link
                to="/beauty-and-hair-salons"
                className="block py-2 px-4 text-gray-700 hover:bg-secondary hover:text-white rounded-lg transition-colors"
                onClick={onClose}
              >
                Beauty & Hair Salons
              </Link>
            </nav>

            <h2 className="text-xl font-bold text-primary mt-8 mb-4">More</h2>
            <nav className="space-y-2">
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
            </nav>
          </div>
        </div>
        {/* Add image to the bottom of the sidebar */}
        <div className="absolute bottom-0 left-0 right-0">
          <img src="https://www.cleverdetails.com/images/logo.png" alt="Logo" className="h-auto mx-auto mb-2" />
          <h2 className="text-xl font-bold text-primary mt-8 mb-4 text-center">We ❤️ Vilamoura ...</h2>
        </div>
      </div>
    </>
  );
};

export default Sidebar; 