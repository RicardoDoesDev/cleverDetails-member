import React, { useState } from 'react';
import HomePage from './components/HomePage';
import BoatsPage from './components/BoatsPage';
import NewsPage from './components/NewsPage';
import './App.css';

function App() {
  const [currentPage, setCurrentPage] = useState('home');

  const handlePageChange = (page: string) => {
    setCurrentPage(page);
  };

  return (
    <div className="App">
      {currentPage === 'home' ? (
        <HomePage onPageChange={handlePageChange} />
      ) : currentPage === 'boats' ? (
        <BoatsPage onBack={() => handlePageChange('home')} />
      ) : currentPage === 'news' ? (
        <div>
          <button className="back-button" onClick={() => handlePageChange('home')}>
            ← Back
          </button>
          <NewsPage />
        </div>
      ) : null}
    </div>
  );
}

export default App;
