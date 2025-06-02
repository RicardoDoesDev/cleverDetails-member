import React, { useState, useEffect } from 'react';

const AccessPage: React.FC = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [isHovered, setIsHovered] = useState(false);

  const images = [
    "/images/access/Carrosel/Cópia de condor-de-vilamoura.jpg",
    "/images/access/Carrosel/Cópia_de_0c8e01ad-d9ca-4b18-af60-26a700b19e31.avif",
    "/images/access/Carrosel/Cópia de the-detailed-combinations.jpg",
    "/images/access/Carrosel/Cópia de b8ce1f17-7758-47d7-9ad8-f4e8d68f6bc5.jpeg",
    "/images/access/Carrosel/Cópia de 7Spa6.jpg",
    "/images/access/Carrosel/Cópia de Davanti-AIA-Racing-School.jpg",
    "/images/access/Carrosel/Cópia de aquashow-park (6).jpg",
    "/images/access/Carrosel/Cópia de algarve-riders-off-road.jpg",
    "/images/access/Carrosel/Cópia de 4d07f2e9-70b3-4b8b-a1e1-91fe37279165.avif",
    "/images/access/Carrosel/Cópia de Legionario_2.webp",
    "/images/access/Carrosel/Cópia de 488211910_1210059391119190_5497740365812582147_n.jpg",
    "/images/access/Carrosel/Cópia de exceptional-view.jpg",
    "/images/access/Carrosel/Cópia de birdwatching.jpg",
    "/images/access/Carrosel/Cópia de dji_fly_20240425_145136_206_1714164247660_timed.webp",
    "/images/access/Carrosel/Cópia de almoco-vinico.jpg",
    "/images/access/Carrosel/Cópia de big-slides-tower.jpg",
    "/images/access/Carrosel/Cópia de jet-boat-ride-vilamoura.jpg",
    "/images/access/Carrosel/Cópia de Fishing-In-Algarve.webp",
    "/images/access/Carrosel/Cópia de 145.jpg",
    "/images/access/Carrosel/Cópia de 145 (8).jpg",
    "/images/access/Carrosel/Cópia de zoomarine.jpg",
    "/images/access/Carrosel/Cópia de photo0jpg.jpg",
  ];

  useEffect(() => {
    if (!isHovered) {
      const timer = setInterval(() => {
        setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
      }, 3000);
      return () => clearInterval(timer);
    }
  }, [isHovered]);

  const nextImage = () => {
    setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const prevImage = () => {
    setCurrentImageIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
  };

  return (
    <>
      <div className="container mx-auto px-4 py-8">
        <div className="relative w-full aspect-[16/9] overflow-hidden rounded-lg group">
          {/* Carousel container */}
          <div className="relative w-full h-full">
            <img 
              src={images[currentImageIndex]} 
              alt={`Slide ${currentImageIndex + 1}`} 
              className="absolute w-full h-full object-cover transition-all duration-500 group-hover:scale-105"
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
          <p className="mb-12">These advantages are reserved for those who <a href="https://www.cleverdetails.com" target="_blank" rel="noopener noreferrer" className="text-secondary">book their holiday</a> with Clever Details or entrust us with their property. It's our way of saying thank you by making your stay or investment even more rewarding.</p>
          <p className="mb-12">Explore the <a href="/all" target="_blank" rel="noopener noreferrer" className="text-secondary">full list</a> of partner perks and enjoy more than just a stay.</p>
          <p className="mb-12">With Clever Details, your holiday or home comes with much more than just a key.</p>
        </div>
      </div>

      <div className="flex flex-row items-center justify-center gap-4">
        <div className="w-2/5 aspect-[4/3] overflow-hidden rounded-lg group cursor-pointer relative">
          <img 
            src="/images/access/4 casas/45 posts insta.png"
            alt="Access" 
            className="absolute w-full h-full object-cover transition-all duration-300 group-hover:brightness-110 group-hover:shadow-lg rounded-lg border-2 border-transparent group-hover:border-secondary/20"
          />
        </div>
        <div className="w-2/5 aspect-[4/3] overflow-hidden rounded-lg group cursor-pointer relative">
          <img 
            src="/images/access/4 casas/49762951_2284974798188748_4976247511141318656_n.jpg"
            alt="Access" 
            className="absolute w-full h-full object-cover transition-all duration-300 group-hover:brightness-110 group-hover:shadow-lg rounded-lg border-2 border-transparent group-hover:border-secondary/20"
          />
        </div>
      </div>
      
      <div className="flex flex-row items-center justify-center gap-4 mt-24">
        <div className="w-2/5 aspect-[4/3] overflow-hidden rounded-lg group cursor-pointer relative">
          <img 
            src="/images/access/4 casas/20230427_144655.jpg"
            alt="Access" 
            className="absolute w-full h-full object-cover transition-all duration-300 group-hover:brightness-110 group-hover:shadow-lg rounded-lg border-2 border-transparent group-hover:border-secondary/20"
          />
        </div>
        <div className="w-2/5 aspect-[4/3] overflow-hidden rounded-lg group cursor-pointer relative">
          <img 
            src="/images/access/4 casas/IMG_2554.JPG"
            alt="Access" 
            className="absolute w-full h-full object-cover transition-all duration-300 group-hover:brightness-110 group-hover:shadow-lg rounded-lg border-2 border-transparent group-hover:border-secondary/20"
          />
        </div>
      </div>

      <button className="bg-secondary text-white px-8 py-8 rounded-md mx-auto block mb-12 mt-24 text-5xl" onClick={() => window.open('https://www.cleverdetails.com/', '_blank')}>
        Explore Our Homes
      </button>
    </>
  );
};

export default AccessPage; 