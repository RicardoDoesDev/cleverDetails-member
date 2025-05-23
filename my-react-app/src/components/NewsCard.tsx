import React from 'react';
import { NewsArticle } from '../services/newsService';
import './NewsCard.css';

interface NewsCardProps {
  article: NewsArticle;
  onReadMore: (article: NewsArticle) => void;
}

const NewsCard: React.FC<NewsCardProps> = ({ article, onReadMore }) => {
  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-GB', {
      day: 'numeric',
      month: 'long',
      year: 'numeric'
    });
  };

  return (
    <div className="news-card">
      <div className="news-image">
        <img src={article.image} alt={article.title} />
        <div className="news-heart">❤️</div>
      </div>
      
      <div className="news-content">
        <div className="news-header">
          <h3>{article.title}</h3>
          <div className="rating">
            {'★'.repeat(5)}
          </div>
        </div>

        <p className="news-description">{article.summary}</p>

        <div className="news-footer">
          <div className="location">
            <span className="location-icon">📍</span>
            <span>{article.category}</span>
          </div>

          <div className="special-offer">
            <div className="offer-label">Special Offer</div>
            <div className="offer-value">5% OFF</div>
            <button className="details-button" onClick={() => onReadMore(article)}>
              Details
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewsCard; 