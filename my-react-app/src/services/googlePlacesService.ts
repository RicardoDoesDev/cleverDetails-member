import { Review } from '../types/index';

export class GooglePlacesService {
  private apiKey: string;

  constructor(apiKey: string) {
    this.apiKey = apiKey;
  }

  async getPlaceDetails(placeId: string): Promise<{
    rating: number;
    reviews: Review[];
    totalRatings: number;
  }> {
    try {
      const response = await fetch(
        `https://maps.googleapis.com/maps/api/place/details/json?place_id=${placeId}&fields=rating,reviews,user_ratings_total&key=${this.apiKey}`
      );

      if (!response.ok) {
        throw new Error('Failed to fetch place details');
      }

      const data = await response.json();

      if (data.status !== 'OK') {
        throw new Error(data.error_message || 'Failed to fetch place details');
      }

      const reviews = data.result.reviews?.map((review: any) => ({
        id: review.time.toString(),
        author: review.author_name,
        rating: review.rating,
        comment: review.text,
        createdAt: new Date(review.time * 1000).toISOString(),
        source: 'google'
      })) || [];

      return {
        rating: data.result.rating || 0,
        reviews,
        totalRatings: data.result.user_ratings_total || 0
      };
    } catch (error) {
      console.error('Error fetching Google Place details:', error);
      return {
        rating: 0,
        reviews: [],
        totalRatings: 0
      };
    }
  }

  extractPlaceIdFromMapsUrl(mapsUrl: string): string | null {
    try {
      const url = new URL(mapsUrl);
      const params = new URLSearchParams(url.search);
      const path = url.pathname;
      
      // Try to find place_id in URL parameters
      if (params.has('pb')) {
        const pbValue = params.get('pb');
        const match = pbValue?.match(/!1s([\w\d]+)!/);
        if (match) return match[1];
      }

      // Try to find in the path
      const pathMatch = path.match(/place\/([\w\d-]+)/);
      if (pathMatch) return pathMatch[1];

      return null;
    } catch (error) {
      console.error('Error extracting place ID:', error);
      return null;
    }
  }
}

// You'll need to replace 'YOUR_API_KEY' with an actual Google Cloud API key
export const googlePlacesService = new GooglePlacesService(process.env.REACT_APP_GOOGLE_PLACES_API_KEY || ''); 