import React, { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { getItemById } from '../services/dataService';
import { BaseItem, BoatTour, Restaurant, Activity, WineryTour, Wellness, ChefService } from '../types';

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
    return 'cuisine' in item && !('specialOffer' in item);
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

  const isChefService = (item: BaseItem): item is ChefService => {
    return 'cuisine' in item && !('specialOffer' in item);
  };

  const renderExtraInfo = () => {
    if (isBoatTour(item)) {
      return (
        <div className="bg-secondary/10 p-6 rounded-lg mb-8">
          <h3 className="text-secondary text-xl mb-2">{item.specialOffer.type}</h3>
          <p className="text-3xl font-bold text-secondary">{item.specialOffer.discount}</p>
        </div>
      );
    }
    if (isRestaurant(item) || isChefService(item)) {
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
    <div className="bg-white rounded-lg shadow-lg overflow-hidden">
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
      <div className="relative">
        <div className="grid grid-cols-3 gap-4 p-4">
          {images.map((image, index) => (
            <div
              key={index}
              className={`relative aspect-[16/9] rounded-lg overflow-hidden cursor-pointer ${
                index === selectedImageIndex ? 'ring-4 ring-secondary' : ''
              }`}
              onClick={() => setSelectedImageIndex(index)}
            >
              <img
                src={image}
                alt={`${item.name} ${index + 1}`}
                className="w-full h-full object-cover"
                onError={(e) => {
                  const target = e.target as HTMLImageElement;
                  target.src = "https://www.shutterstock.com/image-vector/default-ui-image-placeholder-wireframes-600nw-1037719192.jpg";
                }}
              />
            </div>
          ))}
        </div>
      </div>

      {/* Description */}
      <div className="p-8">
        <p className="text-xl mb-8">{item.description}</p>

        {isBoatTour(item) && (
          <div className="bg-secondary/10 p-6 rounded-lg mb-8 text-center">
            <h2 className="text-3xl text-secondary mb-2">Enjoy {item.specialOffer.discount} - You Deserve It!</h2>
            <p className="text-xl">Bookings must be made directly with Clever Details team</p>
          </div>
        )}
      </div>

      {/* Details Section */}
      <div className="p-8 bg-gray-50">
        <h2 className="text-3xl mb-6">Details</h2>
        <div className="space-y-4">
          <p className="text-xl">📍 {item.location}</p>
          <p className="text-xl">🕒 09AM - 18PM</p>
          <p className="text-xl">📞 912 345 678</p>
          <div className="flex gap-4 mt-4">
            <a href="#" className="text-3xl text-primary hover:text-secondary">
              <i className="fab fa-facebook"></i>
            </a>
            <a href="#" className="text-3xl text-primary hover:text-secondary">
              <i className="fab fa-instagram"></i>
            </a>
            <a href="#" className="text-3xl text-primary hover:text-secondary">
              <i className="fas fa-globe"></i>
            </a>
          </div>
        </div>
      </div>

      {/* Reviews Section */}
      <div className="p-8">
        <h2 className="text-3xl mb-6">Reviews</h2>
        <div className="space-y-6">
          {reviews.map(review => (
            <div key={review.id} className="border-b pb-6">
              <div className="flex items-center mb-2">
                <div className="w-12 h-12 bg-gray-200 rounded-full flex items-center justify-center text-xl mr-4">
                  👤
                </div>
                <div>
                  <h3 className="text-xl font-bold">{review.author}</h3>
                  <div className="text-lg">{renderStars(review.rating)}</div>
                </div>
              </div>
              <p className="text-lg">{review.comment}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Comment Form */}
      <div className="p-8 bg-gray-50">
        <h2 className="text-3xl mb-6">Deixar um comentário</h2>
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
            Enviar
          </button>
        </form>
      </div>
    </div>
  );
};

export default ItemDetailsPage; 