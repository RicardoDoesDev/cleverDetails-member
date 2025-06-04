import React from 'react';
import { useLanguage } from '../contexts/LanguageContext';

const Footer: React.FC = () => {
  const { t } = useLanguage();
  return (
    <footer className="bg-primary text-white py-4 px-8 relative">
      <div>
        {/* Right side heading */}
        <div className="text-center">
          <h3 className="text-white text-4xl mb-6">
            <a href="https://www.cleverdetails.com" target="_blank" rel="noopener noreferrer" className="text-white no-underline opacity-90 hover:opacity-100 hover:text-secondary transition-all duration-300 text-2xl">
              {t.footer.bookHoliday}
            </a>
          </h3>
        </div>
        {/* Left side contact info */}
        <div className="text-center">
          <ul className="list-none p-0 m-0">
            <li className="mb-3">
              <a href="mailto:info@cleverdetails.com" className="text-white no-underline opacity-90 hover:opacity-100 hover:text-secondary transition-all duration-300 text-xl">info@cleverdetails.com</a>
            </li>
            <li className="mb-3">
              <a href="tel:+351289314500" className="text-white no-underline opacity-90 hover:opacity-100 hover:text-secondary transition-all duration-300 text-xl">+351 289 314 500</a>
            </li>
          </ul>
        </div>
      </div>

      {/* Bottom logo and text */}
      <div className="absolute bottom-8 left-8 hidden md:block">
        <img 
          src='/images/Logo_Clever_Branco.png'
          alt='Clever Details' 
          className='w-1/3'
          loading="lazy"
          decoding="async"
          onError={(e) => {
            const target = e.target as HTMLImageElement;
            target.src = "/images/logo.png";
          }}
        />
        <span className="text-white font-bold text-xl block" style={{ fontFamily: "'Tropika Script', cursive" }}>
          We ❤️ Vilamoura ...
        </span>
      </div>

      <div className="absolute bottom-4 right-8 hidden md:flex flex-row gap-4">
        <a href='https://www.facebook.com/cleverdetails.holiday.rentals/' target='_blank' rel='noopener noreferrer'>
          <img 
            src='/images/social/facebook-icon.png'
            alt='Facebook' 
            className='h-10 mb-4'
            loading="lazy"
            decoding="async"
            onError={(e) => {
              const target = e.target as HTMLImageElement;
              target.src = "/images/social/facebook-icon.png";
            }}
          />
        </a>
        <a href='https://www.instagram.com/cleverdetails_holiday_rentals' target='_blank' rel='noopener noreferrer'>
          <img 
            src='/images/social/instagram-icon.webp'
            alt='Instagram' 
            className='h-10 mb-4'
            loading="lazy"
            decoding="async"
            onError={(e) => {
              const target = e.target as HTMLImageElement;
              target.src = "/images/social/instagram-icon.png";
            }}
          />
        </a>
        <a href='https://www.linkedin.com/company/cleverdetails-holiday-rentals' target='_blank' rel='noopener noreferrer'>
          <img 
            src='/images/social/linkedIn_icon_new.png'
            alt='LinkedIn' 
            className='h-10 mb-4'
            loading="lazy"
            decoding="async"
            onError={(e) => {
              const target = e.target as HTMLImageElement;
              target.src = "/images/social/linkedin-icon.png";
            }}
          />
        </a>
      </div>

      {/* Copyright */}
      <div className="text-center text-sm mt-8 opacity-75">
        © {new Date().getFullYear()} Clever Details. {t.footer.allRightsReserved}
      </div>
    </footer>
  );
};

export default Footer; 