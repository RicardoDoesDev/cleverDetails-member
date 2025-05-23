import React from 'react';
import './Navigation.css';

const Navigation = () => {
  return (
    <nav className="navigation">
      <div className="nav-brand">
        <h1>Clever Details</h1>
      </div>
      <div className="nav-links">
        <a href="#novidades">Novidades</a>
        <a href="#como-ter-acesso">Como ter acesso</a>
        <a href="#torne-se-parceiro">Torne-se um Parceiro</a>
        <a href="#book-properties" className="book-properties">Book Properties</a>
      </div>
    </nav>
  );
};

export default Navigation; 