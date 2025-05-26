import React, { ReactNode } from 'react';
import { Link } from 'react-router-dom';

interface HeaderProps {
  onToggleSidebar: () => void;
  children?: ReactNode;
}

const Header: React.FC<HeaderProps> = ({ children, onToggleSidebar }) => {
  return (
    <header className="fixed top-0 left-0 right-0 z-40">
      {/* Main Header */}
      <div className="bg-white relative z-50">
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
                    className="h-16 md:h-20 w-auto pb-4"
                  />
                </Link>
              </div>
              <img 
                src="https://www.cleverdetails.com/images/header-right.png" 
                alt="Clever Details" 
                className="hidden md:block h-16 md:h-20 w-auto"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Navigation Bar - Positioned to hover over the header */}
      <nav className="absolute bottom-0 left-0 right-0 transform translate-y-1/2 z-50 pt-12 bg-primary">
        <div className="max-w-xl mx-auto">
          <div className="flex justify-center items-center gap-8 px-8 py-3">
            <Link to="/news" className="text-white hover:text-secondary transition-colors font-medium whitespace-nowrap">
              News
            </Link>
            <Link to="/access" className="text-white hover:text-secondary transition-colors font-medium whitespace-nowrap">
              Access
            </Link>
            <Link to="/partnership" className="text-white hover:text-secondary transition-colors font-medium whitespace-nowrap">
              Partnership
            </Link>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header; 