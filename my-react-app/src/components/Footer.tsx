import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-primary text-white py-10 px-8">
      <div className="max-w-[1400px] mx-auto md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12 text-center">        
        <div>
          <h3 className="text-secondary text-lg mb-6">Quick Links</h3>
          <ul className="list-none p-0 m-0">
            <li className="mb-3">
              <a href="#about" className="text-white no-underline opacity-90 hover:opacity-100 hover:text-secondary transition-all duration-300">About Us</a>
            </li>
            <li className="mb-3">
              <a href="#membership" className="text-white no-underline opacity-90 hover:opacity-100 hover:text-secondary transition-all duration-300">Membership</a>
            </li>
            <li className="mb-3">
              <a href="#experiences" className="text-white no-underline opacity-90 hover:opacity-100 hover:text-secondary transition-all duration-300">Experiences</a>
            </li>
            <li className="mb-3">
              <a href="#contact" className="text-white no-underline opacity-90 hover:opacity-100 hover:text-secondary transition-all duration-300">Contact</a>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer; 