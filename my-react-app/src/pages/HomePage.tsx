import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { getCategories } from '../services/dataService';
import { useLanguage } from '../contexts/LanguageContext';

const ImageWithLoading: React.FC<{
  src: string;
  alt: string;
  loading: "lazy" | "eager";
  index: number;
}> = ({ src, alt, loading }) => {
  const [isOriginalLoaded, setIsOriginalLoaded] = useState(false);
  const optimizedSrc = src.replace('/categorias/', '/categorias/optimized/optimized-').replace(/\.[^.]+$/, '.webp');

  // Quietly preload original image
  React.useEffect(() => {
    const img = new Image();
    img.src = src;
    img.onload = () => setIsOriginalLoaded(true);
  }, [src]);

  return (
    <div className="h-64 relative overflow-hidden">
      <img
        src={isOriginalLoaded ? src : optimizedSrc}
        alt={alt}
        className="w-full h-full object-cover"
        loading={loading}
        width="800"
        height="600"
        style={{ aspectRatio: '4/3' }}
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
    </div>
  );
};

const HomePage: React.FC = () => {
  const { language, t } = useLanguage();
  const categories = getCategories(language);

  return (
    <div className="container mx-auto px-4 py-8">
      <section className="mb-16">
        <h1 className="text-4xl text-white text-center mb-4">{t.homepage.title}</h1>
        <h2 className="text-2xl text-white text-center mb-8">{t.homepage.subtitle}</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {categories.map((category, index) => (
            <Link
              key={category.id}
              to={category.route}
              className="bg-white rounded-lg overflow-hidden shadow-lg cursor-pointer transform transition-transform hover:scale-105"
            >
              <ImageWithLoading
                src={`/images/categorias/${category.image}`}
                alt={category.title}
                loading={index < 3 ? "eager" : "lazy"}
                index={index}
              />
              <div className="p-4 text-center">
                <h3 className="text-primary text-3xl font-semibold mb-2">{category.title}</h3>
                <button className="text-white text-2xl bg-secondary px-4 py-2 rounded hover:bg-secondary/80">
                  {t.homepage.seeMore}
                </button>
              </div>
            </Link>
          ))}
        </div>
      </section>
    </div>
  );
};

export default HomePage; 