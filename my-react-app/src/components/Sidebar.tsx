import React from 'react';
import { Link } from 'react-router-dom';
import { LanguageSwitcher } from './LanguageSwitcher';
import { useLanguage } from '../contexts/LanguageContext';
import { appData } from '../data/appData';

interface SidebarProps {
  isOpen: boolean;
  onClose: () => void;
}

const Sidebar: React.FC<SidebarProps> = ({ isOpen, onClose }) => {
  const { t } = useLanguage();

  return (
    <>
      {/* Backdrop */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-40"
          onClick={onClose}
        />
      )}

      {/* Sidebar */}
      <div
        className={`fixed top-0 left-0 h-full w-64 bg-white transform transition-transform duration-300 ease-in-out z-50 ${
          isOpen ? 'translate-x-0' : '-translate-x-full'
        }`}
      >
        <div className="flex flex-col h-full">
          {/* Close button */}
          <button
            onClick={onClose}
            className="absolute top-4 right-4 text-gray-500 hover:text-gray-700"
            aria-label="Close menu"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>

          {/* Logo */}
          <div className="p-4 border-b border-gray-200">
            <Link to="/" onClick={onClose}>
              <img
                src="https://www.cleverdetails.com/images/logo.png"
                alt="Clever Details"
                className="h-16 w-auto"
                loading="eager"
                decoding="async"
                onError={(e) => {
                  const target = e.target as HTMLImageElement;
                  target.src = "/images/logo.png";
                }}
              />
            </Link>
          </div>

          {/* Navigation Links */}
          <div className="flex-1 overflow-y-auto">
            {/* Categories Section */}
            <div className="p-4 border-b border-gray-200">
              <h2 className="text-xl font-bold text-primary mb-4">{t.sidebar.categories}</h2>
              <nav className="space-y-2">
                {appData.categories.map((category) => (
                  <Link
                    key={category.id}
                    to={category.route}
                    onClick={onClose}
                    className="block text-gray-600 hover:text-secondary transition-colors"
                  >
                    {category.title}
                  </Link>
                ))}
              </nav>
            </div>

            {/* Other Links Section */}
            <div className="p-4 border-b border-gray-200">
              <h2 className="text-xl font-bold text-primary mb-4">{t.sidebar.other}</h2>
              <nav className="space-y-2">
                <Link
                  to="/all"
                  onClick={onClose}
                  className="block text-gray-600 hover:text-secondary transition-colors"
                >
                  {t.header.menu.advantages}
                </Link>
                <Link
                  to="/access"
                  onClick={onClose}
                  className="block text-gray-600 hover:text-secondary transition-colors"
                >
                  {t.header.menu.access}
                </Link>
                <Link
                  to="/partnership"
                  onClick={onClose}
                  className="block text-gray-600 hover:text-secondary transition-colors"
                >
                  {t.header.menu.partnership}
                </Link>
                <Link
                  to="/contact"
                  onClick={onClose}
                  className="block text-gray-600 hover:text-secondary transition-colors"
                >
                  {t.header.menu.contact}
                </Link>
              </nav>
            </div>

            {/* Language Selector */}
            <div className="p-4 border-t border-gray-200">
              <h2 className="text-xl font-bold text-primary mb-4">{t.sidebar.language}</h2>
              <LanguageSwitcher variant="sidebar" onClose={onClose} />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Sidebar;