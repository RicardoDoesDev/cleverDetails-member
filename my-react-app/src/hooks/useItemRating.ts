import { useState, useEffect } from 'react';
import { supabaseService } from '../services/supabaseService';

export const useItemRating = (category: string, itemId: number) => {
  const [rating, setRating] = useState(0);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchRating = async () => {
      try {
        const avgRating = await supabaseService.getItemAverageRating(category, itemId);
        console.log('Fetched rating:', { category, itemId, avgRating });
        setRating(avgRating);
      } catch (error) {
        console.error('Error fetching rating:', error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchRating();
  }, [category, itemId]);

  return { rating, isLoading };
}; 