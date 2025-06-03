import { supabase } from '../lib/supabase';
import { Review } from '../types/index';

type ReviewInput = {
  author: string;
  rating: number;
  comment: string;
};

export const supabaseService = {
  // Get all reviews for an item
  getItemReviews: async (category: string, itemId: number) => {
    const { data, error } = await supabase
      .from('reviews')
      .select('*')
      .eq('category', category)
      .eq('item_id', itemId)
      .order('created_at', { ascending: false });

    if (error) {
      console.error('Error fetching reviews:', error);
      return [];
    }

    // Transform the data to match our Review interface
    return (data || []).map(review => ({
      ...review,
      id: review.id,
      createdAt: review.created_at // Map created_at to createdAt
    })) as Review[];
  },

  // Save a new review
  saveReview: async (category: string, itemId: number, review: ReviewInput) => {
    const { data, error } = await supabase
      .from('reviews')
      .insert([{
        category,
        item_id: itemId,
        author: review.author,
        rating: review.rating,
        comment: review.comment
      }])
      .select()
      .single();

    if (error) {
      console.error('Error saving review:', error);
      throw error;
    }

    // Transform the response to match our Review interface
    return {
      ...data,
      id: data.id,
      createdAt: data.created_at // Map created_at to createdAt
    } as Review;
  },

  // Update a review
  updateReview: async (reviewId: number, updates: Partial<ReviewInput>) => {
    const { data, error } = await supabase
      .from('reviews')
      .update(updates)
      .eq('id', reviewId)
      .select()
      .single();

    if (error) {
      console.error('Error updating review:', error);
      throw error;
    }

    return data as Review;
  },

  // Delete a review
  deleteReview: async (reviewId: number) => {
    const { error } = await supabase
      .from('reviews')
      .delete()
      .eq('id', reviewId);

    if (error) {
      console.error('Error deleting review:', error);
      throw error;
    }
  }
}; 