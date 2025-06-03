import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { getItemById, getLocationName } from '../services/dataService';
import { reviewService } from '../services/reviewService';
import { googlePlacesService } from '../services/googlePlacesService';
import { Item, Review } from '../types';

interface StarRatingProps {
  rating: number;
  size?: 'sm' | 'md' | 'lg';
}

const StarRating: React.FC<StarRatingProps> = ({ rating, size = 'md' }) => {
  const sizeClasses = {
    sm: 'text-lg',
    md: 'text-xl',
    lg: 'text-2xl'
  };

  const fullStars = Math.floor(rating);
  const decimal = rating % 1;
  const hasHalfStar = decimal >= 0.3 && decimal < 0.8;
  const hasFullStar = decimal >= 0.8;

  return (
    <div className={`${sizeClasses[size]} flex gap-1`}>
      {[...Array(5)].map((_, index) => {
        if (index < fullStars || (index === fullStars && hasFullStar)) {
          return <span key={index} className="text-yellow-400">⭐</span>;
        } else if (index === fullStars && hasHalfStar) {
          return (
            <span key={index} className="relative">
              <span className="absolute text-yellow-400" style={{ width: '50%', overflow: 'hidden' }}>⭐</span>
              <span className="opacity-30">⭐</span>
            </span>
          );
        } else {
          return <span key={index} className="opacity-30">⭐</span>;
        }
      })}
    </div>
  );
};

interface ItemDetailsPageProps {
  category: string;
}

function LogoSection({ item }: { item: { logo: string; name: string } }) {
  const [imageFailed, setImageFailed] = useState(false);

  const hasLogo = item.logo && item.logo.trim() !== "";

  return (
    <div className="flex items-center">
      {hasLogo && !imageFailed && (
        <img
          src={`/images/logo/${item.logo}`}
          alt={`${item.name} logo`}
          className="w-1/4 mr-12 mb-4"
          loading="lazy"
          decoding="async"
          onError={() => setImageFailed(true)}
        />
      )}
      <h1 className="text-3xl md:text-4xl">{item.name}</h1>
    </div>
  );
}

const ItemDetailsPage: React.FC<ItemDetailsPageProps> = ({ category }) => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [selectedImageIndex, setSelectedImageIndex] = useState(0);
  const [comment, setComment] = useState('');
  const [rating, setRating] = useState(5);
  const [author, setAuthor] = useState('');
  const [reviews, setReviews] = useState<Review[]>([]);
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

  const getGoogleReviewsUrl = (mapsUrl: string): string => {
    try {
      // Check if it's an embed URL
      if (mapsUrl.includes('/embed')) {
        const params = new URLSearchParams(mapsUrl.split('?')[1]);
        const pbParam = params.get('pb');
        if (pbParam) {
          // Extract coordinates
          const lat = pbParam.match(/!3d([-\d.]+)/)?.[1];
          const lng = pbParam.match(/!2d([-\d.]+)/)?.[1];
          // Extract place name
          const name = pbParam.match(/!2s([^!]+)/)?.[1]?.replace(/\+/g, ' ');
          // Extract place ID
          const placeId = pbParam.match(/!1s([\w\d:]+)/)?.[1];
          
          if (lat && lng && name && placeId) {
            const encodedName = encodeURIComponent(name).replace(/%20/g, '+');
            return `https://www.google.com/maps/place/${encodedName}/@${lat},${lng},17z/data=!4m7!3m6!1s${placeId}!8m2!3d${lat}!4d${lng}!9m1!1b1`;
          }
        }
      }

      return mapsUrl;
    } catch {
      return mapsUrl;
    }
  };

  const renderReviewsSection = () => (
    <div className="mt-8">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-2xl md:text-4xl font-bold">Reviews</h2>
        <div className="flex items-center gap-4">
          <a 
            href={getGoogleReviewsUrl(item.mapsUrl)} 
            target="_blank" 
            rel="noopener noreferrer"
            className="flex items-center gap-2 bg-white px-4 py-2 rounded-lg shadow-sm hover:shadow-md transition-shadow"
          >
            <svg viewBox="0 0 24 24" className="w-6 h-6">
              <path
                fill="#4285F4"
                d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
              />
              <path
                fill="#34A853"
                d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
              />
              <path
                fill="#FBBC05"
                d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
              />
              <path
                fill="#EA4335"
                d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
              />
            </svg>
            <span className="text-lg font-medium">{item.rating} ⭐</span>
            <span className="text-blue-600 hover:text-blue-800">View on Google</span>
          </a>
        </div>
      </div>

      <div className="space-y-4">
        {reviews.map((review) => (
          <div key={review.id} className="bg-white p-4 md:p-6 rounded-lg shadow-sm">
            <div className="flex flex-col md:flex-row md:justify-between md:items-center gap-2 md:gap-0 mb-2">
              <div className="font-bold">{review.author}</div>
              <StarRating rating={review.rating} size="sm" />
            </div>
            <p>{review.comment}</p>
            <div className="text-sm text-gray-500 mt-2">
              {new Date(review.createdAt).toLocaleDateString()}
            </div>
          </div>
        ))}
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
  );

  return (
    <div className="w-full">
      {/* Header */}
      <div className="bg-primary text-white p-4 md:p-8">
        <div className="container mx-auto">
          <div className="flex flex-col md:flex-row md:justify-between md:items-center gap-4 md:gap-0">
            <LogoSection item={item} />
            <div className="flex flex-col items-end gap-2">
              <a 
                href={getGoogleReviewsUrl(item.mapsUrl)} 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center gap-2 bg-white/10 px-4 py-2 rounded-lg hover:bg-white/20 transition-colors"
              >
                <svg viewBox="0 0 24 24" className="w-5 h-5">
                  <path
                    fill="#FFFFFF"
                    d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
                  />
                  <path
                    fill="#FFFFFF"
                    d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
                  />
                  <path
                    fill="#FFFFFF"
                    d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
                  />
                  <path
                    fill="#FFFFFF"
                    d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
                  />
                </svg>
                <StarRating rating={item.rating} size="lg" />
              </a>
            </div>
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
                alt={`Previous view of ${item.name}`}
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
                alt={`Current view of ${item.name}`}
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
                alt={`Next view of ${item.name}`}
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
              {renderReviewsSection()}
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