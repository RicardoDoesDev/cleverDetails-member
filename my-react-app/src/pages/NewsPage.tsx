import React, { useState } from 'react';
import SearchBar from '../components/SearchBar';

interface NewsItem {
  id: number;
  title: string;
  date: string;
  description: string;
  image: string;
  category: string;
}

const NewsPage: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedLocation, setSelectedLocation] = useState('');

  // Mock news data
  const newsItems: NewsItem[] = [
    {
      id: 1,
      title: "New Luxury Boat Tour Launch",
      date: "2024-03-15",
      description: "Experience the ultimate in maritime luxury with our newest addition to the fleet. This state-of-the-art vessel offers unparalleled comfort and style.",
      image: "/boat-news.jpg",
      category: "Boat Tours"
    },
    {
      id: 2,
      title: "Exclusive Wine Tasting Event",
      date: "2024-03-20",
      description: "Join us for an evening of fine wines and gourmet pairings at one of Algarve's most prestigious wineries.",
      image: "/wine-news.jpg",
      category: "Winery Tours"
    },
    {
      id: 3,
      title: "Summer Activities Program Announced",
      date: "2024-03-25",
      description: "Discover our exciting lineup of summer activities, featuring new adventures for the whole family.",
      image: "/activities-news.jpg",
      category: "Activities"
    }
  ];

  const filteredNews = newsItems.filter(item =>
    item.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
    item.description.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-serif text-secondary text-center mb-8">Latest News</h1>
      
      <div className="max-w-4xl mx-auto mb-12">
        <SearchBar
          searchQuery={searchQuery}
          onSearchChange={setSearchQuery}
          selectedLocation={selectedLocation}
          onLocationChange={setSelectedLocation}
          showLocationFilter={false}
        />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {filteredNews.map(news => (
          <div key={news.id} className="bg-white rounded-lg shadow-lg overflow-hidden">
            <div className="relative h-48">
              <img
                src={news.image}
                alt={news.title}
                className="w-full h-full object-cover"
                onError={(e) => {
                  const target = e.target as HTMLImageElement;
                  target.src = "https://www.shutterstock.com/image-vector/default-ui-image-placeholder-wireframes-600nw-1037719192.jpg";
                }}
              />
              <div className="absolute top-4 right-4 bg-secondary text-white px-3 py-1 rounded-full">
                {news.category}
              </div>
            </div>
            <div className="p-6">
              <div className="text-gray-500 text-sm mb-2">{new Date(news.date).toLocaleDateString()}</div>
              <h2 className="text-2xl font-bold text-primary mb-2">{news.title}</h2>
              <p className="text-gray-600 mb-4">{news.description}</p>
              <button className="text-secondary hover:text-secondary-hover transition-colors">
                Read More →
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default NewsPage; 