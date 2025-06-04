import React, { useState } from 'react';
import { CSSTransition, TransitionGroup } from 'react-transition-group';

interface CarouselProps {
  items: Array<{
    image: string;
    title?: string;
    description?: string;
    tag?: string;
  }>;
  active?: number;
  rootFolder: string;
}

interface ItemProps {
  image: string;
  level: number;
  rootFolder: string;
}

const Item: React.FC<ItemProps> = ({ image, level, rootFolder }) => {
  return (
    <div className={`carousel-item level${level}`}>
      <img
        src={`/images/fotos/${rootFolder}/${image}`}
        alt={`View ${level}`}
        className="w-full h-full object-cover rounded-lg"
        loading={level === 0 ? "eager" : "lazy"}
        decoding="async"
        onError={(e) => {
          const target = e.target as HTMLImageElement;
          target.src = "/images/placeholder-image.jpg";
        }}
      />
    </div>
  );
};

const Carousel: React.FC<CarouselProps> = ({ items, active = 0, rootFolder }) => {
  const [activeIndex, setActiveIndex] = useState(active);
  const [direction, setDirection] = useState<'left' | 'right'>('right');

  const generateItems = () => {
    const elements = [];
    // Get previous, current, and next indices
    const prevIndex = (activeIndex - 1 + items.length) % items.length;
    const nextIndex = (activeIndex + 1) % items.length;

    // Add previous image
    elements.push(
      <CSSTransition key={prevIndex} timeout={500} classNames={direction}>
        <Item image={items[prevIndex].image} level={-1} rootFolder={rootFolder} />
      </CSSTransition>
    );

    // Add current image
    elements.push(
      <CSSTransition key={activeIndex} timeout={500} classNames={direction}>
        <Item image={items[activeIndex].image} level={0} rootFolder={rootFolder} />
      </CSSTransition>
    );

    // Add next image
    elements.push(
      <CSSTransition key={nextIndex} timeout={500} classNames={direction}>
        <Item image={items[nextIndex].image} level={1} rootFolder={rootFolder} />
      </CSSTransition>
    );

    return elements;
  };

  const moveLeft = () => {
    setDirection('left');
    setActiveIndex(prev => 
      prev === 0 ? items.length - 1 : prev - 1
    );
  };

  const moveRight = () => {
    setDirection('right');
    setActiveIndex(prev => 
      (prev + 1) % items.length
    );
  };

  return (
    <div className="carousel relative w-full">
      <button
        onClick={moveLeft}
        className="absolute left-0 md:left-2 top-1/2 -translate-y-1/2 bg-secondary text-white p-2 rounded-full hover:bg-secondary-hover transition-colors z-20"
      >
        <svg className="w-4 h-4 md:w-6 md:h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
        </svg>
      </button>

      <TransitionGroup className="carousel-items">
        {generateItems()}
      </TransitionGroup>

      <button
        onClick={moveRight}
        className="absolute right-0 md:right-2 top-1/2 -translate-y-1/2 bg-secondary text-white p-2 rounded-full hover:bg-secondary-hover transition-colors z-20"
      >
        <svg className="w-4 h-4 md:w-6 md:h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
        </svg>
      </button>

      {/* Dots */}
      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
        {items.map((_, index) => (
          <button
            key={index}
            onClick={() => setActiveIndex(index)}
            className={`w-2 h-2 rounded-full transition-all ${
              index === activeIndex ? 'bg-white w-4' : 'bg-white bg-opacity-50'
            }`}
          />
        ))}
      </div>
    </div>
  );
};

export default Carousel; 