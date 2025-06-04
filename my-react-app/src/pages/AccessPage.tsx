import React, { useState, useEffect } from 'react';
import { useLanguage } from '../contexts/LanguageContext';
import { Link } from 'react-router-dom';

const AccessPage: React.FC = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [isHovered, setIsHovered] = useState(false);
  const { t } = useLanguage();

  const images = [
    "/images/access/Carrosel/Copia_de_condor-de-vilamoura.jpg",
    "/images/access/Carrosel/Cópia_de_0c8e01ad-d9ca-4b18-af60-26a700b19e31.avif",
    "/images/access/Carrosel/Cópia_de_the-detailed-combinations.jpg",
    "/images/access/Carrosel/Cópia_de_b8ce1f17-7758-47d7-9ad8-f4e8d68f6bc5.jpeg",
    "/images/access/Carrosel/Cópia_de_7Spa6.jpg",
    "/images/access/Carrosel/Cópia_de_Davanti-AIA-Racing-School.jpg",
    "/images/access/Carrosel/Cópia_de_aquashow-park_(6).jpg",
    "/images/access/Carrosel/Cópia_de_algarve-riders-off-road.jpg",
    "/images/access/Carrosel/Cópia_de_4d07f2e9-70b3-4b8b-a1e1-91fe37279165.avif",
    "/images/access/Carrosel/Cópia_de_488211910_1210059391119190_5497740365812582147_n.jpg",
    "/images/access/Carrosel/Cópia_de_exceptional-view.jpg",
    "/images/access/Carrosel/Cópia_de_birdwatching.jpg",
    "/images/access/Carrosel/Cópia_de_dji_fly_20240425_145136_206_1714164247660_timed.webp",
    "/images/access/Carrosel/Cópia_de_almoco-vinico.jpg",
    "/images/access/Carrosel/Cópia_de_big-slides-tower.jpg",
    "/images/access/Carrosel/Cópia_de_jet-boat-ride-vilamoura.jpg",
    "/images/access/Carrosel/Cópia_de_Fishing-In-Algarve.webp",
    "/images/access/Carrosel/Cópia_de_145.jpg",
    "/images/access/Carrosel/Cópia_de_145_(8).jpg",
    "/images/access/Carrosel/Cópia_de_zoomarine.jpg",
    "/images/access/Carrosel/Cópia_de_photo0jpg.jpg",
  ];

  useEffect(() => {
    if (!isHovered) {
      const timer = setInterval(() => {
        setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
      }, 3000);
      return () => clearInterval(timer);
    }
  }, [isHovered, images.length]);

  const nextImage = () => {
    setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const prevImage = () => {
    setCurrentImageIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
  };

  const renderMainText1 = () => {
    const text = t.access.mainText1;
    const parts = text.split('Clever Details');
    return (
      <>
        {parts[0]}
        <a 
          href="https://www.cleverdetails.com/"
          target="_blank"
          rel="noopener noreferrer"
          className="text-secondary hover:text-white transition-colors underline"
        >
          Clever Details
        </a>
        {parts[1]}
      </>
    );
  };

  const renderMainText2 = () => {
    const text = t.access.mainText2;
    const parts = text.split('lista completa');
    if (parts.length === 2) {
      return (
        <>
          {parts[0]}
          <Link 
            to="/all"
            className="text-secondary hover:text-white transition-colors underline"
          >
            lista completa
          </Link>
          {parts[1]}
        </>
      );
    }
    const frParts = text.split('liste complète');
    if (frParts.length === 2) {
      return (
        <>
          {frParts[0]}
          <Link 
            to="/all"
            className="text-secondary hover:text-white transition-colors underline"
          >
            liste complète
          </Link>
          {frParts[1]}
        </>
      );
    }
    const enParts = text.split('full list');
    if (enParts.length === 2) {
      return (
        <>
          {enParts[0]}
          <Link 
            to="/all"
            className="text-secondary hover:text-white transition-colors underline"
          >
            full list
          </Link>
          {enParts[1]}
        </>
      );
    }
    return text;
  };

  return (
    <>
      <div className="container mx-auto px-4 py-8">
        <div 
          className="relative w-full aspect-[16/9] overflow-hidden rounded-lg group"
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          {/* Carousel container */}
          <div className="relative w-full h-full">
            <img 
              src={images[currentImageIndex]} 
              alt={`Slide ${currentImageIndex + 1}`} 
              className="absolute w-full h-full object-cover transition-all duration-500 group-hover:scale-105"
              loading="eager"
              decoding="async"
              onError={(e) => {
                const target = e.target as HTMLImageElement;
                target.src = "/images/placeholder-image.jpg";
              }}
            />
            
            {/* Navigation arrows */}
            <button 
              onClick={prevImage}
              className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-black bg-opacity-50 text-white p-2 rounded-full hover:bg-opacity-75 transition-all z-10"
            >
              ←
            </button>
            <button 
              onClick={nextImage}
              className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-black bg-opacity-50 text-white p-2 rounded-full hover:bg-opacity-75 transition-all z-10"
            >
              →
            </button>

            {/* Dots indicator */}
            <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2 z-10">
              {images.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentImageIndex(index)}
                  className={`w-2 h-2 rounded-full transition-all ${
                    currentImageIndex === index ? 'bg-white scale-125' : 'bg-white/50'
                  }`}
                />
              ))}
            </div>
          </div>
        </div>

        <div className="text-center text-3xl py-12 text-white">
          <p className="mb-12 text-justify">{renderMainText1()}</p>
          <p className="mb-12 text-justify">{renderMainText2()}</p>
          <p className="mb-12 text-justify">{t.access.mainText3}</p>
        </div>
      </div>

      <div className="flex flex-row items-center justify-center gap-4">
        <div className="w-2/5 aspect-[4/3] overflow-hidden rounded-lg group cursor-pointer relative">
          <img 
            src="/images/access/4 casas/45 posts insta.png"
            alt="Access" 
            className="absolute w-full h-full object-cover transition-all duration-300 group-hover:brightness-110 group-hover:shadow-lg rounded-lg border-2 border-transparent group-hover:border-secondary/20"
            loading="lazy"
            decoding="async"
            onError={(e) => {
              const target = e.target as HTMLImageElement;
              target.src = "/images/placeholder-image.jpg";
            }}
          />
        </div>
        <div className="w-2/5 aspect-[4/3] overflow-hidden rounded-lg group cursor-pointer relative">
          <img 
            src="/images/access/4 casas/49762951_2284974798188748_4976247511141318656_n.jpg"
            alt="Access" 
            className="absolute w-full h-full object-cover transition-all duration-300 group-hover:brightness-110 group-hover:shadow-lg rounded-lg border-2 border-transparent group-hover:border-secondary/20"
            loading="lazy"
            decoding="async"
            onError={(e) => {
              const target = e.target as HTMLImageElement;
              target.src = "/images/placeholder-image.jpg";
            }}
          />
        </div>
      </div>
      
      <div className="flex flex-row items-center justify-center gap-4 mt-24">
        <div className="w-2/5 aspect-[4/3] overflow-hidden rounded-lg group cursor-pointer relative">
          <img 
            src="/images/access/4 casas/20230427_144655.jpg"
            alt="Access" 
            className="absolute w-full h-full object-cover transition-all duration-300 group-hover:brightness-110 group-hover:shadow-lg rounded-lg border-2 border-transparent group-hover:border-secondary/20"
            loading="lazy"
            decoding="async"
            onError={(e) => {
              const target = e.target as HTMLImageElement;
              target.src = "/images/placeholder-image.jpg";
            }}
          />
        </div>
        <div className="w-2/5 aspect-[4/3] overflow-hidden rounded-lg group cursor-pointer relative">
          <img 
            src="/images/access/4 casas/IMG_2554.JPG"
            alt="Access" 
            className="absolute w-full h-full object-cover transition-all duration-300 group-hover:brightness-110 group-hover:shadow-lg rounded-lg border-2 border-transparent group-hover:border-secondary/20"
            loading="lazy"
            decoding="async"
            onError={(e) => {
              const target = e.target as HTMLImageElement;
              target.src = "/images/placeholder-image.jpg";
            }}
          />
        </div>
      </div>

      <button className="bg-secondary text-white px-8 py-8 rounded-md mx-auto block mb-12 mt-24 text-5xl" onClick={() => window.open('https://www.cleverdetails.com/', '_blank')}>
        {t.access.exploreHomes}
      </button>
    </>
  );
};

export default AccessPage; 