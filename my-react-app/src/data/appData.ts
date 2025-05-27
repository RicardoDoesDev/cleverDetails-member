import { AppData } from '../types';

export const appData: AppData = {
  categories: [
    {
      id: "boat-tours",
      title: "Boat Tours",
      route: "/boat-tours",
      description: "Explore the Algarve coastline with our luxury boat tours",
      image: "/boat-tours.jpg",
      items: [
        {
          id: 1,
          name: "Cool Charters",
          image: "/boat1.jpg",
          description: "Explore the Algarve by boat from Vilamoura, Albufeira, and Faro. Discover hidden caves, stunning beaches, and breathtaking coastlines. Perfect for relaxing days or unforgettable adventures on the water.",
          location: "Vilamoura",
          rating: 5,
          specialOffer: {
            type: "Special Offer",
            discount: "5%"
          }
        },
        {
          id: 2,
          name: "Cool Charters Premium",
          image: "/boat2.jpg",
          description: "Explore the Algarve by boat from Vilamoura, Albufeira, and Faro. Discover hidden caves, stunning beaches, and breathtaking coastlines. Perfect for relaxing days or unforgettable adventures on the water.",
          location: "Vilamoura",
          rating: 5,
          specialOffer: {
            type: "Special Offer",
            discount: "10%"
          }
        }
      ]
    },
    {
      id: "restaurants",
      title: "Fine Dining",
      route: "/restaurants",
      description: "Experience exquisite cuisine at selected restaurants",
      image: "/fine-dining.jpg",
      items: [
        {
          id: 1,
          name: "Ocean View Restaurant",
          image: "/restaurant1.jpg",
          description: "Fine dining with stunning ocean views. Mediterranean cuisine with a modern twist.",
          location: "Vilamoura Marina",
          rating: 5,
          cuisine: "Mediterranean"
        },
        {
          id: 2,
          name: "Gourmet Haven",
          image: "/restaurant2.jpg",
          description: "Contemporary Portuguese cuisine using local ingredients and traditional recipes.",
          location: "Quarteira",
          rating: 5,
          cuisine: "Portuguese"
        }
      ]
    },
    {
      id: "activities",
      title: "Activities",
      route: "/activities",
      description: "Enjoy exclusive access to premium activities",
      image: "/activities.jpg",
      items: [
        {
          id: 1,
          name: "Water Park Adventure",
          image: "/activity1.jpg",
          description: "Enjoy a full day of fun at the region's largest water park. Perfect for families and thrill-seekers with various slides and pools.",
          location: "Quarteira",
          rating: 5,
          price: "€35 per person"
        },
        {
          id: 2,
          name: "Golf Experience",
          image: "/activity2.jpg",
          description: "Play at one of Europe's finest golf courses with stunning ocean views. Professional instructors available for lessons.",
          location: "Vilamoura Golf Club",
          rating: 5,
          price: "€120 per round"
        }
      ]
    },
    {
      id: "winery-tours",
      title: "Winery Tours",
      route: "/winery-tours",
      description: "Discover the finest wines of the region",
      image: "/winery.jpg",
      items: [
        {
          id: 1,
          name: "Algarve Wine Experience",
          image: "/winery1.jpg",
          description: "Discover the finest wines of the Algarve region. Visit traditional wineries, learn about wine-making processes, and enjoy tastings of premium local wines.",
          location: "Lagoa Wine Region",
          rating: 5,
          duration: "4 hours"
        },
        {
          id: 2,
          name: "Sunset Wine Tour",
          image: "/winery2.jpg",
          description: "Experience a magical evening touring vineyards at sunset. Includes wine tasting, local cheese pairings, and stunning views of the countryside.",
          location: "São Brás de Alportel",
          rating: 5,
          duration: "3 hours"
        }
      ]
    },
    {
      id: "wellness",
      title: "Wellness",
      route: "/wellness",
      description: "Relax and rejuvenate with our wellness partners",
      image: "/wellness.jpg",
      items: [
        {
          id: 1,
          name: "Luxury Spa Day",
          image: "/wellness1.jpg",
          description: "Indulge in a full day of relaxation with our luxury spa treatments. Includes massage, facial, and access to all spa facilities.",
          location: "Tivoli Spa Vilamoura",
          rating: 5,
          type: "Full Day Spa"
        },
        {
          id: 2,
          name: "Beachfront Yoga",
          image: "/wellness2.jpg",
          description: "Start your day with a rejuvenating yoga session by the beach. Professional instructors guide you through meditation and poses.",
          location: "Vilamoura Beach",
          rating: 5,
          type: "Yoga & Meditation"
        }
      ]
    },
    {
      id: "chef-service",
      title: "Chef at Home",
      route: "/chef-service",
      description: "Private dining experience in your accommodation",
      image: "/chef.jpg",
      items: [
        {
          id: 1,
          name: "Private Chef Experience",
          image: "/chef1.jpg",
          description: "Enjoy a personalized dining experience with our professional chef in your accommodation. Custom menu based on your preferences.",
          location: "At Your Location",
          rating: 5,
          cuisine: "International"
        },
        {
          id: 2,
          name: "Portuguese Cooking Class",
          image: "/chef2.jpg",
          description: "Learn to cook traditional Portuguese dishes with our expert chef. Includes ingredients, wine pairing, and recipe book.",
          location: "At Your Location",
          rating: 5,
          cuisine: "Portuguese"
        }
      ]
    }
  ]
}; 