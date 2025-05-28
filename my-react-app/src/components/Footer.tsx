import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-primary text-white py-4 px-8 relative">
      <div>
        {/* Right side heading */}
        <div className="text-center">
          <h3 className="text-white text-4xl mb-6">Book your holiday home</h3>
        </div>
        {/* Left side contact info */}
        <div className="text-center">
          <ul className="list-none p-0 m-0">
            <li className="mb-3">
              <a href="mailto:info@cleverdetails.com" className="text-white no-underline opacity-90 hover:opacity-100 hover:text-secondary transition-all duration-300 text-2xl">info@cleverdetails.com</a>
            </li>
            <li className="mb-3">
              <a href="tel:+351912345678" className="text-white no-underline opacity-90 hover:opacity-100 hover:text-secondary transition-all duration-300 text-2xl">+351 912 345 678</a>
            </li>
          </ul>
        </div>
      </div>

      {/* Bottom logo and text */}
      <div className="absolute bottom-8 left-8">
        <img 
          src='https://www.cleverdetails.com/images/logo.png' 
          alt='Clever Details' 
          className='h-20 mb-4' 
        />
        <span className="text-white font-bold text-xl block">
          We ❤️ Vilamoura ...
        </span>
      </div>

      <div className="absolute bottom-4 right-8 flex flex-row gap-4">
        <img 
          src='https://acbrd.org.au/wp-content/uploads/2020/08/facebook-circular-logo.png' 
          alt='Facebook' 
          className='h-10 mb-4' 
        />
        <img 
          src='https://cdn4.iconfinder.com/data/icons/social-messaging-ui-color-shapes-2-free/128/social-instagram-new-circle-512.png' 
          alt='Instagram' 
          className='h-10 mb-4' 
        />
        <img 
          src='https://upload.wikimedia.org/wikipedia/commons/thumb/f/f8/LinkedIn_icon_circle.svg/1200px-LinkedIn_icon_circle.svg.png' 
          alt='LinkedIn' 
          className='h-10 mb-4' 
        />
      </div>
    </footer>
  );
};

export default Footer; 