import React, { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { getItemById } from '../services/dataService';
import { BaseItem, BoatTour, Restaurant, Activity, WineryTour, Wellness, BeautySalon } from '../types';

interface ItemDetailsPageProps {
  category: string;
}

interface Review {
  id: number;
  author: string;
  rating: number;
  comment: string;
}

const ItemDetailsPage: React.FC<ItemDetailsPageProps> = ({ category }) => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [selectedImageIndex, setSelectedImageIndex] = useState(0);
  const [comment, setComment] = useState('');
  const [rating, setRating] = useState(5);

  const item = id ? getItemById(category, Number(id)) : undefined;

  // Mock reviews data
  const reviews: Review[] = [
    {
      id: 1,
      author: "Duarte.D",
      rating: 5,
      comment: "Adorámos a experiência. Obrigado À Clever Details"
    },
    {
      id: 2,
      author: "Duarte.D",
      rating: 5,
      comment: "Adorámos a experiência. Obrigado À Clever Details"
    }
  ];

  // Mock multiple images
  const images = [
    item?.image || '',
    '/boat2.jpg',
    '/boat3.jpg'
  ];

  if (!item) {
    return (
      <div className="text-center text-white py-16">
        <h1 className="text-4xl mb-4">Item Not Found</h1>
        <button
          onClick={() => navigate(-1)}
          className="bg-secondary text-white px-6 py-2 rounded hover:bg-secondary-hover transition-colors"
        >
          Go Back
        </button>
      </div>
    );
  }

  const renderStars = (rating: number) => {
    return Array(rating).fill('⭐').join('');
  };

  // Type guards
  const isBoatTour = (item: BaseItem): item is BoatTour => {
    return 'specialOffer' in item;
  };

  const isRestaurant = (item: BaseItem): item is Restaurant => {
    return 'cuisine' in item;
  };

  const isActivity = (item: BaseItem): item is Activity => {
    return 'price' in item;
  };

  const isWineryTour = (item: BaseItem): item is WineryTour => {
    return 'duration' in item;
  };

  const isWellness = (item: BaseItem): item is Wellness => {
    return 'type' in item;
  };

  const isBeautySalon = (item: BaseItem): item is BeautySalon => {
    return 'services' in item;
  };

  const renderExtraInfo = () => {
    if (isBoatTour(item)) {
      return (
        <div className="bg-secondary p-6 rounded-lg mb-8 w-1/2 mx-auto text-center text-white">
          <h3 className="text-5xl mb-2">{item.specialOffer.discount} Off – You Deserve It!</h3>
          <p className="text-xl font-bold">Bookings must be made directly with Clever Details team</p>
        </div>
      );
    }
    if (isRestaurant(item)) {
      return (
        <div className="bg-secondary/10 p-6 rounded-lg mb-8">
          <h3 className="text-secondary text-xl mb-2">Cuisine</h3>
          <p className="text-xl">{item.cuisine}</p>
        </div>
      );
    }
    if (isActivity(item)) {
      return (
        <div className="bg-secondary/10 p-6 rounded-lg mb-8">
          <h3 className="text-secondary text-xl mb-2">Price</h3>
          <p className="text-3xl font-bold text-secondary">{item.price}</p>
        </div>
      );
    }
    if (isWineryTour(item)) {
      return (
        <div className="bg-secondary/10 p-6 rounded-lg mb-8">
          <h3 className="text-secondary text-xl mb-2">Duration</h3>
          <p className="text-xl">{item.duration}</p>
        </div>
      );
    }
    if (isWellness(item)) {
      return (
        <div className="bg-secondary/10 p-6 rounded-lg mb-8">
          <h3 className="text-secondary text-xl mb-2">Type</h3>
          <p className="text-xl">{item.type}</p>
        </div>
      );
    }
    if (isBeautySalon(item)) {
      return (
        <div className="bg-secondary/10 p-6 rounded-lg mb-8">
          <h3 className="text-secondary text-xl mb-2">Services</h3>
          <div className="flex flex-wrap gap-2">
            {item.services.map((service, index) => (
              <span key={index} className="bg-secondary/20 text-secondary px-3 py-1 rounded-full">
                {service}
              </span>
            ))}
          </div>
        </div>
      );
    }
    return null;
  };

  const handleSubmitComment = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle comment submission
    console.log({ rating, comment });
    setComment('');
    setRating(5);
  };

  return (
    <div className="w-full">
      {/* Header */}
      <div className="bg-primary text-white p-8">
        <div className="container mx-auto">
          <div className="flex justify-between items-center">
            <div className="flex items-center">
              <div className="text-4xl font-bold mr-4">SA</div>
              <h1 className="text-4xl">{item.name}</h1>
            </div>
            <div className="text-2xl">{renderStars(item.rating)}</div>
          </div>
        </div>
      </div>

      {/* Image Gallery */}
      <div className="relative px-12 bg-primary">
        <div className="flex items-center justify-between gap-4 p-4">
          {/* Left Arrow */}
          <button
            onClick={() => setSelectedImageIndex((prev) => (prev - 1 + images.length) % images.length)}
            className="absolute left-0 top-1/2 -translate-y-1/2 bg-secondary text-white p-2 rounded-full hover:bg-secondary-hover transition-colors z-10"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>

          {/* Images */}
          <div className="flex-1 flex items-center justify-center gap-4">
            {/* Previous Image */}
            <div className="w-1/4 aspect-[4/3] rounded-lg overflow-hidden opacity-75">
              <img
                src={images[(selectedImageIndex - 1 + images.length) % images.length]}
                alt={`${item.name} previous`}
                className="w-full h-full object-cover"
                onError={(e) => {
                  const target = e.target as HTMLImageElement;
                  target.src = "https://www.shutterstock.com/image-vector/default-ui-image-placeholder-wireframes-600nw-1037719192.jpg";
                }}
              />
            </div>

            {/* Current Image */}
            <div className="w-1/2 aspect-[4/3] rounded-lg overflow-hidden shadow-xl">
              <img
                src={images[selectedImageIndex]}
                alt={`${item.name} current`}
                className="w-full h-full object-cover"
                onError={(e) => {
                  const target = e.target as HTMLImageElement;
                  target.src = "https://www.shutterstock.com/image-vector/default-ui-image-placeholder-wireframes-600nw-1037719192.jpg";
                }}
              />
            </div>

            {/* Next Image */}
            <div className="w-1/4 aspect-[4/3] rounded-lg overflow-hidden opacity-75">
              <img
                src={images[(selectedImageIndex + 1) % images.length]}
                alt={`${item.name} next`}
                className="w-full h-full object-cover"
                onError={(e) => {
                  const target = e.target as HTMLImageElement;
                  target.src = "https://www.shutterstock.com/image-vector/default-ui-image-placeholder-wireframes-600nw-1037719192.jpg";
                }}
              />
            </div>
          </div>

          {/* Right Arrow */}
          <button
            onClick={() => setSelectedImageIndex((prev) => (prev + 1) % images.length)}
            className="absolute right-0 top-1/2 -translate-y-1/2 bg-secondary text-white p-2 rounded-full hover:bg-secondary-hover transition-colors z-10"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>

          {/* Dots */}
          <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 flex space-x-2 pb-4">
            {images.map((_, index) => (
              <button
                key={index}
                onClick={() => setSelectedImageIndex(index)}
                className={`w-2 h-2 rounded-full transition-all ${
                  index === selectedImageIndex ? 'bg-secondary w-4' : 'bg-gray-300'
                }`}
              />
            ))}
          </div>
        </div>
      </div>

      {renderExtraInfo()}

      {/* Description and Reviews Section */}
      <div className="relative left-[50%] right-[50%] mx-[-50vw] w-screen bg-gray-100">
        <div className="max-w-7xl mx-auto px-4 py-12">
          <p className="text-xl mb-8">{item.description}</p>

          {/* Location */}
          <div className="flex items-center text-primary mb-8">
            <span className="mr-2">📍</span>
            {item.location}
          </div>

          {/* Reviews */}
          <div className="mt-8">
            <h2 className="text-3xl mb-6">Reviews</h2>
            <div className="space-y-4">
              {reviews.map((review) => (
                <div key={review.id} className="bg-white p-6 rounded-lg shadow-sm">
                  <div className="flex justify-between items-center mb-2">
                    <div className="font-bold">{review.author}</div>
                    <div>{renderStars(review.rating)}</div>
                  </div>
                  <p>{review.comment}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Comment Form */}
          <div className="mt-8">
            <h2 className="text-3xl mb-6">Leave a Review</h2>
            <form onSubmit={handleSubmitComment}>
              <div className="mb-4">
                <div className="flex gap-2 mb-4">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <button
                      key={star}
                      type="button"
                      className={`text-2xl ${star <= rating ? 'text-yellow-400' : 'text-gray-300'}`}
                      onClick={() => setRating(star)}
                    >
                      ⭐
                    </button>
                  ))}
                </div>
                <textarea
                  value={comment}
                  onChange={(e) => setComment(e.target.value)}
                  className="w-full h-32 p-4 rounded-lg border border-gray-300 focus:outline-none focus:border-secondary"
                  placeholder="Write your comment..."
                />
              </div>
              <button
                type="submit"
                className="bg-secondary text-white px-8 py-3 rounded-lg text-lg font-medium hover:bg-secondary-hover transition-colors"
              >
                Submit Review
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ItemDetailsPage; 