import React, { useState } from 'react';
import { getNews, NewsArticle } from '../services/newsService';
import NewsCard from './NewsCard';
import './NewsPage.css';

const NewsPage: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('');
  const news = getNews();

  const filteredNews = news.filter(article => {
    const matchesSearch = article.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         article.content.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesCategory = !selectedCategory || article.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  return (
    <div className="news-page">
      <div className="news-header">
        <h1>Novidades</h1>
        <div className="news-filters">
          <div className="search-bar">
            <input
              type="text"
              placeholder="Search..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </div>
          <select
            value={selectedCategory}
            onChange={(e) => setSelectedCategory(e.target.value)}
            className="category-select"
          >
            <option value="">All Categories</option>
            <option value="Fleet Updates">Fleet Updates</option>
            <option value="Promotions">Promotions</option>
            <option value="Partnerships">Partnerships</option>
          </select>
        </div>
      </div>

      <div className="news-grid">
        {filteredNews.map(article => (
          <NewsCard
            key={article.id}
            article={article}
            onReadMore={(article) => console.log('Read more:', article.id)}
          />
        ))}
      </div>
    </div>
  );
};

export default NewsPage; 