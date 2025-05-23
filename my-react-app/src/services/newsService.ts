import newsData from '../data/news.json';

export interface NewsArticle {
  id: string;
  title: string;
  image: string;
  date: string;
  category: string;
  summary: string;
  content: string;
  author: string;
  tags: string[];
}

export const getNews = (): NewsArticle[] => {
  return newsData.news;
};

export const getNewsById = (id: string): NewsArticle | undefined => {
  return newsData.news.find(article => article.id === id);
};

export const getCategories = (): string[] => {
  return Array.from(new Set(newsData.news.map(article => article.category)));
};

export const getNewsByCategory = (category: string): NewsArticle[] => {
  return newsData.news.filter(article => article.category === category);
};

export const getAllTags = (): string[] => {
  const allTags = newsData.news.flatMap(article => article.tags);
  return Array.from(new Set(allTags));
}; 