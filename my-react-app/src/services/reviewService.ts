interface Review {
  id: number;
  author: string;
  rating: number;
  comment: string;
  itemId: number;
  categoryId: string;
  createdAt: string;
}

interface NewReview {
  author: string;
  rating: number;
  comment: string;
}

const API_URL = 'http://localhost:3001/api';

export const reviewService = {
  getItemReviews: async (categoryId: string, itemId: number): Promise<Review[]> => {
    try {
      const response = await fetch(`${API_URL}/reviews/${categoryId}/${itemId}`);
      if (!response.ok) throw new Error('Failed to fetch reviews');
      return response.json();
    } catch (error) {
      console.error('Error fetching reviews:', error);
      return [];
    }
  },

  saveReview: async (categoryId: string, itemId: number, review: NewReview): Promise<Review | null> => {
    try {
      const response = await fetch(`${API_URL}/reviews/${categoryId}/${itemId}`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(review),
      });
      
      if (!response.ok) throw new Error('Failed to save review');
      return response.json();
    } catch (error) {
      console.error('Error saving review:', error);
      return null;
    }
  },
}; 