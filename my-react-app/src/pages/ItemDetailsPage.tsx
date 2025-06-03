import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { getItemById, getLocationName } from '../services/dataService';
import { reviewService } from '../services/reviewService';
import { Item } from '../types';

interface ItemDetailsPageProps {
  category: string;
}

const ItemDetailsPage: React.FC<ItemDetailsPageProps> = ({ category }) => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [selectedImageIndex, setSelectedImageIndex] = useState(0);
  const [comment, setComment] = useState('');
  const [rating, setRating] = useState(5);
  const [author, setAuthor] = useState('');
  const [reviews, setReviews] = useState<any[]>([]);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const item = id ? getItemById(category, Number(id)) as Item : undefined;

  // Load reviews from JSON file
  useEffect(() => {
    const loadReviews = async () => {
      if (item) {
        const savedReviews = await reviewService.getItemReviews(category, item.id);
        setReviews(savedReviews);
      }
    };
    loadReviews();
  }, [category, item]);

  // Mock multiple images
  const images = item?.images || [];

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
    const handleContactClick = () => {
      const subject = `Booking Request: ${item.name}`;
      const message = `Hi, I'm interested in booking ${item.name} with the following special offer: ${item.specialOffer?.description}.\n\nPlease provide me with more information.`;
      
      navigate(`/contact?type=item&subject=${encodeURIComponent(subject)}&message=${encodeURIComponent(message)}`);
    };

    return (
      <div className="bg-secondary p-6 rounded-lg mb-8 w-full md:w-3/4 mx-auto text-center text-white">
        <h3 className="text-3xl md:text-6xl mb-2">{item.specialOffer?.description} - You deserve it!</h3>
        <p className="text-lg md:text-2xl font-bold mb-6">Bookings must be made directly with Clever Details team</p>
        <button
          onClick={handleContactClick}
          className="bg-white text-secondary hover:bg-primary hover:text-white transition-colors duration-300 font-bold py-3 px-8 rounded-lg text-xl"
        >
          Book Now
        </button>
      </div>
    );
  };

  const handleSubmitComment = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!author.trim()) {
      alert('Please enter your name');
      return;
    }
    if (!comment.trim()) {
      alert('Please enter a comment');
      return;
    }

    setIsSubmitting(true);
    try {
      const newReview = await reviewService.saveReview(category, item.id, {
        author,
        rating,
        comment,
      });

      if (newReview) {
        setReviews([...reviews, newReview]);
        setComment('');
        setRating(5);
        setAuthor('');
      }
    } catch (error) {
      console.error('Error saving review:', error);
      alert('Failed to save review. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="w-full">
      {/* Header */}
      <div className="bg-primary text-white p-4 md:p-8">
        <div className="container mx-auto">
          <div className="flex flex-col md:flex-row md:justify-between md:items-center gap-4 md:gap-0">
            <div className="flex items-center">
              <img 
                src={`/images/logo/${item.logo}`} 
                alt={`${item.name} logo`} 
                className="w-1/4 mr-12 mb-4"
                loading="lazy"
                decoding="async"
                onError={(e) => {
                  const target = e.target as HTMLImageElement;
                  target.src = "/images/placeholder-logo.png";
                }}
              />
              <h1 className="text-3xl md:text-4xl">{item.name}</h1>
            </div>
            <div className="text-xl md:text-2xl">{renderStars(item.rating)}</div>
          </div>
        </div>
      </div>

      {/* Image Gallery */}
      <div className="relative px-4 md:px-12 bg-primary">
        <div className="flex items-center justify-between gap-4 p-4">
          {/* Left Arrow */}
          <button
            onClick={() => setSelectedImageIndex((prev) => (prev - 1 + images.length) % images.length)}
            className="absolute left-2 md:left-4 top-1/2 -translate-y-1/2 bg-secondary text-white p-2 rounded-full hover:bg-secondary-hover transition-colors z-10"
          >
            <svg className="w-4 h-4 md:w-6 md:h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>

          {/* Images */}
          <div className="flex-1 flex items-center justify-center gap-2 md:gap-4">
            {/* Previous Image - Hidden on mobile */}
            <div className="hidden md:block w-1/4 aspect-[4/3] rounded-lg overflow-hidden opacity-75">
              <img
                src={`/images/fotos/${item.rootFolder}/${images[(selectedImageIndex - 1 + images.length) % images.length]}`}
                alt={`${item.name} - Previous image`}
                className="w-full h-full object-cover"
                loading="lazy"
                decoding="async"
                onError={(e) => {
                  const target = e.target as HTMLImageElement;
                  target.src = "/images/placeholder-image.jpg";
                }}
              />
            </div>

            {/* Current Image */}
            <div className="w-full md:w-1/2 aspect-[4/3] rounded-lg overflow-hidden shadow-xl">
              <img
                src={`/images/fotos/${item.rootFolder}/${images[selectedImageIndex]}`}
                alt={`${item.name} - Current view`}
                className="w-full h-full object-cover"
                loading="eager"
                decoding="async"
                onError={(e) => {
                  const target = e.target as HTMLImageElement;
                  target.src = "/images/placeholder-image.jpg";
                }}
              />
            </div>

            {/* Next Image - Hidden on mobile */}
            <div className="hidden md:block w-1/4 aspect-[4/3] rounded-lg overflow-hidden opacity-75">
              <img
                src={`/images/fotos/${item.rootFolder}/${images[(selectedImageIndex + 1) % images.length]}`}
                alt={`${item.name} - Next image`}
                className="w-full h-full object-cover"
                loading="lazy"
                decoding="async"
                onError={(e) => {
                  const target = e.target as HTMLImageElement;
                  target.src = "/images/placeholder-image.jpg";
                }}
              />
            </div>
          </div>

          {/* Right Arrow */}
          <button
            onClick={() => setSelectedImageIndex((prev) => (prev + 1) % images.length)}
            className="absolute right-2 md:right-4 top-1/2 -translate-y-1/2 bg-secondary text-white p-2 rounded-full hover:bg-secondary-hover transition-colors z-10"
          >
            <svg className="w-4 h-4 md:w-6 md:h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>

          {/* Dots */}
          <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
            {images.map((_, index) => (
              <button
                key={index}
                onClick={() => setSelectedImageIndex(index)}
                className={`w-2 h-2 rounded-full transition-all ${
                  index === selectedImageIndex ? 'bg-white w-4' : 'bg-white bg-opacity-50'
                }`}
              />
            ))}
          </div>
        </div>
      </div>

      <div className="flex flex-row items-center justify-center gap-4 text-white text-4xl py-12">
        <p className="text-lg md:text-3xl mb-8 text-justify">{item.description}</p>
      </div>

      <div className="px-4 md:px-0">
        {renderExtraInfo()}
      </div>

      {/* Description and Reviews Section */}
      <div className="relative left-[50%] right-[50%] mx-[-50vw] w-screen bg-gray-100">
        <div className="max-w-7xl mx-auto px-4 py-8 md:py-12">
          <div className="flex flex-col lg:flex-row gap-8">
            {/* Left Column - Details and Reviews */}
            <div className="flex-1">

              {/* Location */}
              <div className="flex items-center text-primary mb-8">
                <span className="mr-2">📍</span>
                {getLocationName(item.locationIds)}
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

              {/* Details */}
              <div className="mt-8">
                <h2 className="text-2xl md:text-4xl mb-6 font-bold">Details</h2>
                <div className="space-y-4">
                  {/* Opening Hours */}
                  <div className="mb-6">
                    <h3 className="text-xl md:text-2xl font-semibold mb-3">Opening Hours</h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                      {item.openingHours.map((schedule) => (
                        <div key={schedule.day} className="flex justify-between items-center py-2 px-4 bg-white rounded-lg shadow-sm">
                          <span className="font-medium">{schedule.day}</span>
                          <span>{schedule.hours}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                  {/* Phone */}
                  {/* <p className="text-xl md:text-2xl">{item.phone}</p> */}
                </div>
                {/* Social media icons */}
                <div className="flex flex-row gap-4 mt-8">
                  <a href={item.socialMedia.facebook} target="_blank" rel="noopener noreferrer">
                    <img 
                      src="/images/social/facebook-icon.png" 
                      alt="Facebook" 
                      className="w-10 h-10"
                      loading="lazy"
                      decoding="async" 
                    />
                  </a>
                  <a href={item.socialMedia.instagram} target="_blank" rel="noopener noreferrer">
                    <img 
                      src="/images/social/instagram-icon.webp" 
                      alt="Instagram" 
                      className="w-10 h-10"
                      loading="lazy"
                      decoding="async" 
                    />
                  </a>
                  <a href={item.socialMedia.website} target="_blank" rel="noopener noreferrer">
                    <img 
                      src="/images/social/website-icon.svg" 
                      alt="Website" 
                      className="w-10 h-10"
                      loading="lazy"
                      decoding="async" 
                    />
                  </a>
                </div>
              </div>

              {/* Reviews */}
              <div className="mt-8">
                <h2 className="text-2xl md:text-4xl mb-6 font-bold">Reviews</h2>
                <div className="space-y-4">
                  {reviews.map((review) => (
                    <div key={review.id} className="bg-white p-4 md:p-6 rounded-lg shadow-sm">
                      <div className="flex flex-col md:flex-row md:justify-between md:items-center gap-2 md:gap-0 mb-2">
                        <div className="font-bold">{review.author}</div>
                        <div>{renderStars(review.rating)}</div>
                      </div>
                      <p>{review.comment}</p>
                      <div className="text-sm text-gray-500 mt-2">
                        {new Date(review.createdAt).toLocaleDateString()}
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Comment Form */}
              <div className="mt-8">
                <h2 className="text-2xl md:text-3xl mb-6">Leave a Review</h2>
                <form onSubmit={handleSubmitComment} className="space-y-4">
                  <input
                    type="text"
                    value={author}
                    onChange={(e) => setAuthor(e.target.value)}
                    placeholder="Your name"
                    className="w-full p-4 rounded-lg border border-gray-300 focus:outline-none focus:border-secondary"
                  />
                  <div className="flex gap-2 mb-4">
                    {[1, 2, 3, 4, 5].map((star) => (
                      <button
                        key={star}
                        type="button"
                        className={`text-xl md:text-2xl ${star <= rating ? 'text-yellow-400' : 'text-gray-300'}`}
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
                    disabled={isSubmitting}
                    className={`w-full md:w-auto bg-secondary text-white px-6 py-3 rounded-lg text-lg font-medium transition-colors ${
                      isSubmitting ? 'opacity-50 cursor-not-allowed' : 'hover:bg-secondary-hover'
                    }`}
                  >
                    {isSubmitting ? 'Submitting...' : 'Submit Review'}
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