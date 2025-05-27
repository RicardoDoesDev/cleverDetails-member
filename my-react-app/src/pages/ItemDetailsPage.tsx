import React, { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { getItemById, getLocationName } from '../services/dataService';
import { Item } from '../types';

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

  const item = id ? getItemById(category, Number(id)) as Item : undefined;

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

  const renderExtraInfo = () => {
    return (
      <div className="bg-secondary p-6 rounded-lg mb-8 w-full md:w-3/4 mx-auto text-center text-white">
          <h3 className="text-3xl md:text-6xl mb-2">{item.specialOffer?.discount} - You deserve it!</h3>
          <p className="text-lg md:text-2xl font-bold">Bookings must be made directly with Clever Details team</p>
      </div>
    );
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
          <div className="flex-1 flex items-center justify-center gap-2 md:gap-4">
            {/* Previous Image - Hidden on mobile */}
            <div className="hidden md:block w-1/4 aspect-[4/3] rounded-lg overflow-hidden opacity-75">
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
            <div className="w-full md:w-1/2 aspect-[4/3] rounded-lg overflow-hidden shadow-xl">
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

            {/* Next Image - Hidden on mobile */}
            <div className="hidden md:block w-1/4 aspect-[4/3] rounded-lg overflow-hidden opacity-75">
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

      <div className="px-4 md:px-0">
        {renderExtraInfo()}
      </div>

      {/* Description and Reviews Section */}
      <div className="relative left-[50%] right-[50%] mx-[-50vw] w-screen bg-gray-100">
        <div className="max-w-7xl mx-auto px-4 py-12">
          <div className="flex flex-col lg:flex-row gap-8">
            {/* Left Column - Details and Reviews */}
            <div className="flex-1">
              <p className="text-xl mb-8">{item.description}</p>

              {/* Location */}
              <div className="flex items-center text-primary mb-8">
                <span className="mr-2">📍</span>
                {getLocationName(item.locationId)}
              </div>

              {/* Map - Shown on mobile */}
              <div className="lg:hidden mb-8">
                <iframe
                  src={item.mapsUrl}
                  width="100%"
                  height="300"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Google Maps Location"
                  className="rounded-lg"
                />
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
                <h2 className="text-2xl md:text-3xl mb-6">Leave a Review</h2>
                <form onSubmit={handleSubmitComment} className="space-y-4">
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
                  <button
                    type="submit"
                    className="w-full md:w-auto bg-secondary text-white px-8 py-3 rounded-lg text-lg font-medium hover:bg-secondary-hover transition-colors"
                  >
                    Submit Review
                  </button>
                </form>
              </div>
            </div>

            {/* Right Column - Map (Hidden on mobile) */}
            <div className="hidden lg:block lg:w-1/3 sticky top-4">
              <iframe
                src={item.mapsUrl}
                width="100%"
                height="400"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Google Maps Location"
                className="rounded-lg"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ItemDetailsPage; 