import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { getItemById, getLocationName } from '../services/dataService';
import { supabaseService } from '../services/supabaseService';
import { Item, Review } from '../types/index';
import { useLanguage } from '../contexts/LanguageContext';
import Carousel from '../components/Carousel';
import StarRating from '../components/StarRating';
import '../styles/carousel.css';

interface ItemDetailsPageProps {
  category: string;
}

function LogoSection({ item }: { item: Item }) {
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

const formatDate = (dateString: string) => {
  try {
    const date = new Date(dateString);
    
    if (isNaN(date.getTime())) {
      console.error('Invalid date:', dateString);
      return 'Invalid Date';
    }
    
    return new Intl.DateTimeFormat('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
      hour: '2-digit',
      minute: '2-digit'
    }).format(date);
  } catch (error) {
    console.error('Error formatting date:', error);
    return 'Invalid Date';
  }
};

const ItemDetailsPage: React.FC<ItemDetailsPageProps> = ({ category }) => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const [comment, setComment] = useState('');
  const [rating, setRating] = useState(5);
  const [author, setAuthor] = useState('');
  const [reviews, setReviews] = useState<Review[]>([]);
  const [averageRating, setAverageRating] = useState(0);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { language, t } = useLanguage();

  const item = id ? getItemById(category, Number(id), language) : undefined;

  // Load reviews and average rating from Supabase
  useEffect(() => {
    const loadReviewData = async () => {
      if (item) {
        const [savedReviews, avgRating] = await Promise.all([
          supabaseService.getItemReviews(category, item.id),
          supabaseService.getItemAverageRating(category, item.id)
        ]);
        setReviews(savedReviews);
        setAverageRating(avgRating);
      }
    };
    loadReviewData();
  }, [category, item]);

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
      const subject = `${t.itemDetails.bookingRequest}: ${item.name}`;
      const message = t.itemDetails.bookingMessage
        .replace('{itemName}', item.name)
        .replace('{specialOffer}', item.specialOffer?.description || '');
      
      navigate(`/contact?type=item&subject=${encodeURIComponent(subject)}&message=${encodeURIComponent(message)}`);
    };

    return (
      <div className="bg-secondary p-6 rounded-lg mb-8 w-full md:w-3/4 mx-auto text-center text-white">
        <h3 className="text-3xl md:text-6xl font-bold p-6">{item.specialOffer?.description}</h3>
        <h3 className="text-3xl md:text-6xl mb-8">{t.itemDetails.specialOffer}</h3>
        {/* show cardInfo if item has cardInfo or bookingNotice2 if gastronomy else bookingNotice */}
        {item.cardInfo ? (
          <p className="text-lg md:text-2xl font-bold mb-6">{item.cardInfo}</p>
        ) : category === 'gastronomy' ? (
          <p className="text-lg md:text-2xl font-bold mb-6">{t.itemDetails.bookingNotice2}</p>
        ) : (
          <>
            <p className="text-lg md:text-2xl font-bold mb-6">{t.itemDetails.bookingNotice}</p>
            <button
              onClick={handleContactClick}
              className="bg-white text-secondary hover:bg-primary hover:text-white transition-colors duration-300 font-bold py-3 px-8 rounded-lg text-xl"
            >
              {t.itemDetails.bookNow}
            </button>
          </>
        )}
      </div>
    );
  };

  const handleSubmitComment = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!item || !comment.trim() || !author.trim()) return;

    setIsSubmitting(true);
    try {
      const newReview = await supabaseService.saveReview(category, item.id, {
        rating,
        comment,
        author
      });

      setReviews(prev => [...prev, newReview]);
      setComment('');
      setAuthor('');
      setRating(5);

      // Update average rating
      const avgRating = await supabaseService.getItemAverageRating(category, item.id);
      setAverageRating(avgRating);
    } catch (error) {
      console.error('Error submitting review:', error);
    } finally {
      setIsSubmitting(false);
    }
  };

  const renderReviewsSection = () => (
    <div className="mt-8">
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-6">
        <h2 className="text-2xl md:text-4xl font-bold">{t.itemDetails.reviewsSection.title}</h2>
        <div className="flex items-center">
          <div className="flex items-center gap-2 bg-white px-3 py-2 rounded-lg shadow-sm">
            <StarRating rating={averageRating} size="md" />
            <span className="text-base font-medium whitespace-nowrap">({reviews.length} {t.itemDetails.reviews})</span>
          </div>
        </div>
      </div>

      <div className="space-y-4">
        {reviews.map((review) => (
          <div key={review.id} className="bg-white p-4 rounded-lg shadow-sm">
            <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center gap-2">
              <div className="font-bold break-words max-w-full">{review.author}</div>
              <StarRating rating={review.rating} size="sm" />
            </div>
            <p className="mt-2 break-words">{review.comment}</p>
            <div className="text-sm text-gray-500 mt-2">
              {formatDate(review.createdAt)}
            </div>
          </div>
        ))}
      </div>

      {/* Comment Form */}
      <div className="mt-8">
        <h2 className="text-2xl md:text-3xl mb-6">{t.itemDetails.reviewsSection.leaveReview}</h2>
        <form onSubmit={handleSubmitComment} className="space-y-4">
          <input
            type="text"
            value={author}
            onChange={(e) => setAuthor(e.target.value)}
            placeholder={t.itemDetails.reviewsSection.yourName}
            className="w-full p-3 rounded-lg border border-gray-300 focus:outline-none focus:border-secondary"
            required
          />
          <div className="flex flex-col gap-2">
            <label className="text-lg">{t.itemDetails.reviewsSection.rating}</label>
            <StarRating 
              rating={rating} 
              size="lg" 
              interactive={true}
              onRatingChange={setRating}
            />
          </div>
          <textarea
            value={comment}
            onChange={(e) => setComment(e.target.value)}
            className="w-full h-32 p-3 rounded-lg border border-gray-300 focus:outline-none focus:border-secondary"
            placeholder={t.itemDetails.reviewsSection.writeComment}
            required
          />
          <button
            type="submit"
            disabled={isSubmitting || !author.trim() || !comment.trim()}
            className={`w-full sm:w-auto bg-secondary text-white px-6 py-3 rounded-lg text-lg font-medium transition-colors ${
              isSubmitting || !author.trim() || !comment.trim()
                ? 'opacity-50 cursor-not-allowed'
                : 'hover:bg-secondary-hover'
            }`}
          >
            {isSubmitting ? t.itemDetails.reviewsSection.submitting : t.itemDetails.reviewsSection.submit}
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
              <div className="flex items-center gap-2 bg-white/10 px-4 py-2 rounded-lg">
                <StarRating rating={averageRating} size="lg" />
                <span className="text-lg">({reviews.length} {t.itemDetails.reviews})</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Image Gallery */}
      <div className="relative px-4 md:px-12 bg-primary">
        <Carousel
          items={(item?.images || []).map(image => ({ image }))}
          rootFolder={item?.rootFolder || ''}
        />
      </div>

      <div className="bg-primary px-4 py-12">
        <div className="max-w-7xl mx-auto">
          <p className="text-lg md:text-2xl text-white text-justify">{item.description}</p>
        </div>
      </div>

      <div className="px-4 md:px-0">
        {renderExtraInfo()}
      </div>

      {/* Description and Reviews Section */}
      <div className="relative left-[50%] right-[50%] mx-[-50vw] w-screen bg-gray-100">
        <div className="max-w-7xl mx-auto px-4 py-8 md:py-12">
          <h2 className="text-2xl md:text-4xl mb-6 font-bold">{t.itemDetails.details}</h2>
          <div className="flex flex-col lg:flex-row gap-8">
            {/* Left Column - Details and Reviews */}
            <div className="flex-1">

              {/* Location */}
              <div className="flex items-center text-primary mb-8">
                <span className="mr-2 font-black font-bold">📍</span> 
                <span className="font-black font-bold">{getLocationName(item.locationIds, language)}</span>
              </div>

              {/* Type */}
              {item.type && (
                <div className="flex items-center text-primary mb-8">
                  <span className="mr-2 font-black">☞</span>
                  <span className="mr-2 font-black">{item.type}</span>
                  <span className="mr-2 font-bold">
                    {item.priceRange !== undefined && ` - ${item.priceRange === 1 ? '€' : item.priceRange === 2 ? '€€' : '€€€'}`}
                  </span>
                </div>
              )}

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
                <div className="space-y-4">
                  {/* Opening Hours */}
                  <div className="mb-6">
                    <h3 className="text-xl md:text-2xl font-semibold mb-3">{t.itemDetails.openingHours}</h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                      {/* show the day of the week in the language of the user */}
                      {Object.values(t.itemDetails.dateList).map((day: string) => {
                        // Try to find schedule with translated day name or English day name
                        const schedule = item.openingHours.find(
                          schedule => schedule.day === day || 
                          schedule.day === day.replace('Lundi', 'Monday')
                            .replace('Mardi', 'Tuesday')
                            .replace('Mercredi', 'Wednesday')
                            .replace('Jeudi', 'Thursday')
                            .replace('Vendredi', 'Friday')
                            .replace('Samedi', 'Saturday')
                            .replace('Dimanche', 'Sunday')
                        );
                        return (
                          <div key={day} className="flex justify-between items-center py-2 px-4 bg-white rounded-lg shadow-sm">
                            <span className="font-medium">{day}</span>
                            <span>{schedule?.hours}</span>
                          </div>
                        );
                      })}
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