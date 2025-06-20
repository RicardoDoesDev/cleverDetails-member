import React, { ReactNode } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { LanguageSwitcher } from './LanguageSwitcher';
import { useLanguage } from '../contexts/LanguageContext';

interface HeaderProps {
  onToggleSidebar: () => void;
  children?: ReactNode;
}

const Header: React.FC<HeaderProps> = ({ children, onToggleSidebar }) => {
  const location = useLocation();
  const { t } = useLanguage();

  const isActive = (path: string) => {
    return location.pathname === path;
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-40">
      {/* Top line */}
      <div className="bg-white text-black py-2">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center">
            {/* Phone number */}
            <div className="flex items-center">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" viewBox="0 0 20 20" fill="currentColor">
                <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
              </svg>
              <div>
                <div className="font-bold">
                  <a href="tel:+351289314500" className="text-black no-underline opacity-90 hover:opacity-100 hover:text-secondary transition-all duration-300 text-3sm">+351 289 314 500</a>
                </div>
                <div className="text-sm opacity-75">{t.header.phoneLabel}</div>
              </div>
            </div>
          </div>
          {/* Language selector */}
          <div className="absolute top-0 right-0 z-[70] hidden md:block lg:block">
            <LanguageSwitcher variant="header" />
            <div className="text-secondary font-bold text-xl py-2 text-right pr-5" style={{ fontFamily: "'Tropika Script', cursive" }}>
              We ❤️ Vilamoura ...
            </div>
          </div>
        </div>
      </div>
      <div className="bg-white relative z-[60]">
        <div 
          className="relative"
          style={{
            background: 'white url(https://www.cleverdetails.com/images/tiltedwall.png) bottom left no-repeat',
            backgroundSize: 'contain',
          }}
        >
          <div className="max-w-7xl mx-auto px-4 py-4">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-4">
                <button
                  onClick={onToggleSidebar}
                  className="text-primary hover:text-secondary transition-colors p-2"
                  aria-label="Toggle Menu"
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
                      d="M4 6h16M4 12h16M4 18h16"
                    />
                  </svg>
                </button>
                <Link to="/" className="block">
                  <img 
                    src="https://www.cleverdetails.com/images/logo.png" 
                    alt="Clever Details" 
                    className="h-20 md:h-24 w-auto pb-4"
                    loading="eager"
                    decoding="async"
                    onError={(e) => {
                      const target = e.target as HTMLImageElement;
                      target.src = "/images/logo.png";
                    }}
                  />
                </Link>
              </div>
              <img 
                src="https://www.cleverdetails.com/images/header-right.png" 
                alt="Clever Details" 
                className="hidden md:block h-16 md:h-20 w-auto"
                loading="lazy"
                decoding="async"
                onError={(e) => {
                  const target = e.target as HTMLImageElement;
                  target.src = "/images/header-right.png";
                }}
              />
            </div>
          </div>
        </div>
      </div>

      {/* Navigation Bar - Positioned to hover over the header */}
      <nav className="absolute bottom-0 left-0 right-0 transform translate-y-1/2 z-[50] pt-12 pb-2 shadow-lg bg-primary">
        <div className="hidden lg:block mx-auto">
          <div className="flex justify-center items-center gap-4 md:gap-8 px-4 md:px-8 py-3 overflow-x-auto whitespace-nowrap">
            <Link 
              to="/all" 
              className={`${isActive('/all') ? 'text-secondary' : 'text-white'} hover:text-secondary transition-colors font-medium text-xl md:text-3xl`}
            >
              {t.header.menu.advantages}
            </Link>
            <Link 
              to="/access" 
              className={`${isActive('/access') ? 'text-secondary' : 'text-white'} hover:text-secondary transition-colors font-medium text-xl md:text-3xl`}
            >
              {t.header.menu.access}
            </Link>
            <Link 
              to="/partnership" 
              className={`${isActive('/partnership') ? 'text-secondary' : 'text-white'} hover:text-secondary transition-colors font-medium text-xl md:text-3xl`}
            >
              {t.header.menu.partnership}
            </Link>
            <Link 
              to="/contact" 
              className={`${isActive('/contact') ? 'text-secondary' : 'text-white'} hover:text-secondary transition-colors font-medium text-xl md:text-3xl`}
            >
              {t.header.menu.contact}
            </Link>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header; 