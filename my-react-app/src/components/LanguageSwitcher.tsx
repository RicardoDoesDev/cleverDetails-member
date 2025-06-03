import React from 'react';
import { useLanguage } from '../contexts/LanguageContext';

interface LanguageSwitcherProps {
  variant?: 'header' | 'sidebar';
}

export function LanguageSwitcher({ variant = 'header' }: LanguageSwitcherProps) {
  const { setLanguage } = useLanguage();
  
  const containerClass = variant === 'header' 
    ? "flex items-center space-x-4 bg-white px-4 py-2"
    : "flex justify-center space-x-6";

  const imgClass = variant === 'header' 
    ? "w-5 h-4 mr-1"
    : "w-8 h-6 mb-1";

  const linkClass = variant === 'header'
    ? "flex items-center hover:text-secondary transition-colors"
    : "flex flex-col items-center hover:text-secondary transition-colors";

  return (
    <div className={containerClass}>
      <button
        onClick={() => setLanguage('en')}
        className={linkClass}
      >
        <img 
          src="https://flagicons.lipis.dev/flags/4x3/gb.svg" 
          alt="EN" 
          className={imgClass}
          loading="lazy"
          decoding="async"
          onError={(e) => {
            const target = e.target as HTMLImageElement;
            target.src = "/images/flags/gb.png";
          }}
        />
        <span className={variant === 'sidebar' ? "text-sm" : ""}>EN</span>
      </button>
      <button
        onClick={() => setLanguage('fr')}
        className={linkClass}
      >
        <img 
          src="https://flagicons.lipis.dev/flags/4x3/fr.svg" 
          alt="FR" 
          className={imgClass}
          loading="lazy"
          decoding="async"
          onError={(e) => {
            const target = e.target as HTMLImageElement;
            target.src = "/images/flags/fr.png";
          }}
        />
        <span className={variant === 'sidebar' ? "text-sm" : ""}>FR</span>
      </button>
      <button
        onClick={() => setLanguage('pt')}
        className={linkClass}
      >
        <img 
          src="https://flagicons.lipis.dev/flags/4x3/pt.svg" 
          alt="PT" 
          className={imgClass}
          loading="lazy"
          decoding="async"
          onError={(e) => {
            const target = e.target as HTMLImageElement;
            target.src = "/images/flags/pt.png";
          }}
        />
        <span className={variant === 'sidebar' ? "text-sm" : ""}>PT</span>
      </button>
    </div>
  );
} 