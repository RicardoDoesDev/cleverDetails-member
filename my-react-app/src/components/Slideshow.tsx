import React, { useState, useEffect } from 'react';

interface SlideshowProps {
  items: Array<{
    image: string;
    title?: string;
    description?: string;
    tag?: string;
  }>;
  height?: string;
  autoPlayInterval?: number;
  showControls?: boolean;
  showDots?: boolean;
  showCaption?: boolean;
}

const Slideshow: React.FC<SlideshowProps> = ({
  items,
  height = "500px",
  autoPlayInterval = 5000,
  showControls = true,
  showDots = true,
  showCaption = true,
}) => {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    if (autoPlayInterval > 0) {
      const timer = setInterval(() => {
        setCurrentSlide((prev) => (prev + 1) % items.length);
      }, autoPlayInterval);

      return () => clearInterval(timer);
    }
  }, [items.length, autoPlayInterval]);

  const handlePrevSlide = (e: React.MouseEvent) => {
    e.stopPropagation();
    setCurrentSlide((prev) => (prev - 1 + items.length) % items.length);
  };

  const handleNextSlide = (e: React.MouseEvent) => {
    e.stopPropagation();
    setCurrentSlide((prev) => (prev + 1) % items.length);
  };

  const handleDotClick = (e: React.MouseEvent, index: number) => {
    e.stopPropagation();
    setCurrentSlide(index);
  };

  if (!items.length) return null;

  return (
    <div className="relative overflow-hidden" style={{ height }}>
      <div 
        className="absolute inset-0 transition-transform duration-500 ease-in-out"
        style={{ transform: `translateX(-${currentSlide * 100}%)` }}
      >
        {items.map((item, index) => (
          <div
            key={index}
            className="absolute top-0 left-0 w-full h-full"
            style={{ transform: `translateX(${index * 100}%)` }}
          >
            <img
              src={item.image}
              alt={item.title || `Slide ${index + 1}`}
              className="w-full h-full object-cover"
              loading="lazy"
              decoding="async"
              onError={(e) => {
                const target = e.target as HTMLImageElement;
                target.src = "/images/placeholder-image.jpg";
              }}
            />
            {showCaption && (item.title || item.description) && (
              <div className="absolute bottom-0 left-0 right-0 bg-black bg-opacity-50 text-white p-6">
                {item.tag && (
                  <div className="absolute top-4 right-4 bg-secondary text-white px-3 py-1 rounded-full">
                    {item.tag}
                  </div>
                )}
                {item.title && <h2 className="text-2xl font-semibold mb-2">{item.title}</h2>}
                {item.description && <p className="line-clamp-2">{item.description}</p>}
              </div>
            )}
          </div>
        ))}
      </div>

      {showControls && (
        <>
          <button
            onClick={handlePrevSlide}
            className="absolute left-4 top-1/2 -translate-y-1/2 bg-black bg-opacity-50 text-white p-2 rounded-full hover:bg-opacity-75 transition-opacity"
          >
            ←
          </button>
          <button
            onClick={handleNextSlide}
            className="absolute right-4 top-1/2 -translate-y-1/2 bg-black bg-opacity-50 text-white p-2 rounded-full hover:bg-opacity-75 transition-opacity"
          >
            →
          </button>
        </>
      )}

      {showDots && (
        <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
          {items.map((_, index) => (
            <button
              key={index}
              onClick={(e) => handleDotClick(e, index)}
              className={`w-2 h-2 rounded-full transition-all ${
                index === currentSlide ? 'bg-white w-4' : 'bg-white bg-opacity-50'
              }`}
            />
          ))}
        </div>
      )}
    </div>
  );
};

export default Slideshow; 