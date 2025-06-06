import React from 'react';

interface StarRatingProps {
  rating: number;
  size?: 'sm' | 'md' | 'lg';
  interactive?: boolean;
  onRatingChange?: (rating: number) => void;
}

const StarRating: React.FC<StarRatingProps> = ({ 
  rating, 
  size = 'md', 
  interactive = false,
  onRatingChange
}) => {
  const sizeClasses = {
    sm: 'w-5 h-5',
    md: 'w-6 h-6',
    lg: 'w-8 h-8'
  };

  const handleStarClick = (event: React.MouseEvent<HTMLButtonElement>, starNumber: number) => {
    if (!onRatingChange) return;

    const button = event.currentTarget;
    const rect = button.getBoundingClientRect();
    const x = event.clientX - rect.left;
    const halfWidth = rect.width / 2;

    // If clicked on the left half, use half star
    const newRating = x < halfWidth ? starNumber - 0.5 : starNumber;

    // If clicking the same value, reset to the previous half star
    if (rating === newRating) {
      onRatingChange(newRating - 0.5);
    } else {
      onRatingChange(newRating);
    }
  };

  const renderStar = (index: number) => {
    const starNumber = index + 1;
    const filled = starNumber <= Math.floor(rating);
    const hasHalf = !filled && starNumber === Math.ceil(rating) && rating % 1 !== 0;
    const starClass = filled ? 'text-yellow-400' : 'text-gray-300';

    const star = (
      <svg
        className={`${sizeClasses[size]} ${starClass}`}
        fill="currentColor"
        viewBox="0 0 24 24"
      >
        <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
      </svg>
    );

    if (interactive) {
      return (
        <button
          key={index}
          type="button"
          onClick={(e) => handleStarClick(e, starNumber)}
          className="transition-transform hover:scale-110 relative group"
          aria-label={`Rate ${starNumber} stars`}
        >
          <div className={`absolute inset-0 w-1/2 z-10 cursor-pointer group-hover:bg-gray-100/10`} />
          {star}
          {hasHalf && (
            <div className="absolute inset-0 overflow-hidden w-1/2">
              <svg
                className={`${sizeClasses[size]} text-yellow-400`}
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
              </svg>
            </div>
          )}
        </button>
      );
    }

    return (
      <div key={index} className="relative">
        {star}
        {hasHalf && (
          <div className="absolute inset-0 overflow-hidden w-1/2">
            <svg
              className={`${sizeClasses[size]} text-yellow-400`}
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
            </svg>
          </div>
        )}
      </div>
    );
  };

  return (
    <div className="flex gap-1">
      {[...Array(5)].map((_, index) => renderStar(index))}
    </div>
  );
};

export default StarRating; 