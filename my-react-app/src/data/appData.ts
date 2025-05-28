import { AppData } from '../types';

export const appData: AppData = {
  categories: [
    {
      id: "boat-tours",
      title: "Boat Tours",
      route: "/boat-tours",
      description: "Explore the Algarve coastline with our luxury boat tours",
      image: "ai-generated-boat-picture.jpg",
      items: [
        {
          id: 1,
          name: "Cool Charters",
          image: "/boat1.jpg",
          description: "Explore the Algarve by boat from Vilamoura, Albufeira, and Faro. Discover hidden caves, stunning beaches, and breathtaking coastlines. Perfect for relaxing days or unforgettable adventures on the water.",
          locationId: 1,
          rating: 5,
          openingHours: "09am - 18pm",
          address: "Rua das oliveiras",
          phone: "912 345 678",
          socialMedia: {
            facebook: "https://www.facebook.com/cleverdetails",
            instagram: "https://www.instagram.com/cleverdetails",
            website: "https://www.cleverdetails.com"
          },
          mapsUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3125.835434509374!2d-8.122345!3d37.082651!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0!2s!5e0!3m2!1sen!2spt!4v1616581234567!5m2!1sen!2spt",
          specialOffer: {
            type: "Special Offer",
            discount: "5% OFF"
          }
        },
        {
          id: 2,
          name: "Cool Charters Premium",
          image: "/boat2.jpg",
          description: "Explore the Algarve by boat from Vilamoura, Albufeira, and Faro. Discover hidden caves, stunning beaches, and breathtaking coastlines. Perfect for relaxing days or unforgettable adventures on the water.",
          locationId: 1,
          rating: 5,
          openingHours: "09am - 18pm",
          address: "Rua das oliveiras",
          phone: "912 345 678",
          socialMedia: {
            facebook: "https://www.facebook.com/cleverdetails",
            instagram: "https://www.instagram.com/cleverdetails",
            website: "https://www.cleverdetails.com"
          },
          mapsUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3125.835434509374!2d-8.126789!3d37.076543!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0!2s!5e0!3m2!1sen!2spt!4v1616581234567!5m2!1sen!2spt",
          specialOffer: {
            type: "Special Offer",
            discount: "10% OFF"
          }
        }
      ]
    },
    {
      id: "restaurants",
      title: "Fine Dining",
      route: "/restaurants",
      description: "Experience exquisite cuisine at selected restaurants",
      image: "pexels-pixabay-262978.jpg",
      items: [
        {
          id: 1,
          name: "Ocean View Restaurant",
          image: "/restaurant1.jpg",
          description: "Fine dining with stunning ocean views. Mediterranean cuisine with a modern twist.",
          locationId: 1,
          rating: 5,
          openingHours: "09am - 18pm",
          address: "Rua das oliveiras",
          phone: "912 345 678",
          socialMedia: {
            facebook: "https://www.facebook.com/cleverdetails",
            instagram: "https://www.instagram.com/cleverdetails",
            website: "https://www.cleverdetails.com"
          },
          mapsUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3125.835434509374!2d-8.134567!3d37.091234!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0!2s!5e0!3m2!1sen!2spt!4v1616581234567!5m2!1sen!2spt",
          specialOffer: {
            type: "Special Offer",
            discount: "10% OFF"
          }
        },
        {
          id: 2,
          name: "Gourmet Haven",
          image: "/restaurant2.jpg",
          description: "Contemporary Portuguese cuisine using local ingredients and traditional recipes.",
          locationId: 2,
          rating: 5,
          openingHours: "09am - 18pm",
          address: "Rua das oliveiras",
          phone: "912 345 678",
          socialMedia: {
            facebook: "https://www.facebook.com/cleverdetails",
            instagram: "https://www.instagram.com/cleverdetails",
            website: "https://www.cleverdetails.com"
          },
          mapsUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3125.835434509374!2d-8.142345!3d37.087654!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0!2s!5e0!3m2!1sen!2spt!4v1616581234567!5m2!1sen!2spt",
          specialOffer: {
            type: "Special Offer",
            discount: "10% OFF"
          }
        }
      ]
    },
    {
      id: "activities",
      title: "Activities",
      route: "/activities",
      description: "Enjoy exclusive access to premium activities",
      image: "card_slides.jpg",
      items: [
        {
          id: 1,
          name: "Water Park Adventure",
          image: "/activity1.jpg",
          description: "Enjoy a full day of fun at the region's largest water park. Perfect for families and thrill-seekers with various slides and pools.",
          locationId: 2,
          rating: 5,
          price: "€35 per person",
          openingHours: "09am - 18pm",
          address: "Rua das oliveiras",
          phone: "912 345 678",
          socialMedia: {
            facebook: "https://www.facebook.com/cleverdetails",
            instagram: "https://www.instagram.com/cleverdetails",
            website: "https://www.cleverdetails.com"
          },
          mapsUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3125.835434509374!2d-8.156789!3d37.098765!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0!2s!5e0!3m2!1sen!2spt!4v1616581234567!5m2!1sen!2spt",
          specialOffer: {
            type: "Special Offer",
            discount: "10% OFF"
          }
        },
        {
          id: 2,
          name: "Golf Experience",
          image: "/activity2.jpg",
          description: "Play at one of Europe's finest golf courses with stunning ocean views. Professional instructors available for lessons.",
          locationId: 1,
          rating: 5,
          price: "€120 per round",
          openingHours: "09am - 18pm",
          address: "Rua das oliveiras",
          phone: "912 345 678",
          socialMedia: {
            facebook: "https://www.facebook.com/cleverdetails",
            instagram: "https://www.instagram.com/cleverdetails",
            website: "https://www.cleverdetails.com"
          },
          mapsUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3125.835434509374!2d-8.167890!3d37.102345!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0!2s!5e0!3m2!1sen!2spt!4v1616581234567!5m2!1sen!2spt",
          specialOffer: {
            type: "Special Offer",
            discount: "10% OFF"
          }
        }
      ]
    },
    {
      id: "winery-tours",
      title: "Winery Tours",
      route: "/winery-tours",
      description: "Discover the finest wines of the region",
      image: "vertical-shot-person-holding-glass-wine-vineyard-sunlight.jpg",
      items: [
        {
          id: 1,
          name: "Algarve Wine Experience",
          image: "/winery1.jpg",
          description: "Discover the finest wines of the Algarve region. Visit traditional wineries, learn about wine-making processes, and enjoy tastings of premium local wines.",
          locationId: 3,
          rating: 5,
          duration: "4 hours",
          openingHours: "09am - 18pm",
          address: "Rua das oliveiras",
          phone: "912 345 678",
          socialMedia: {
            facebook: "https://www.facebook.com/cleverdetails",
            instagram: "https://www.instagram.com/cleverdetails",
            website: "https://www.cleverdetails.com"
          },
          mapsUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3125.835434509374!2d-8.178901!3d37.112345!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0!2s!5e0!3m2!1sen!2spt!4v1616581234567!5m2!1sen!2spt",
          specialOffer: {
            type: "Special Offer",
            discount: "10% OFF"
          }
        },
        {
          id: 2,
          name: "Sunset Wine Tour",
          image: "/winery2.jpg",
          description: "Experience a magical evening touring vineyards at sunset. Includes wine tasting, local cheese pairings, and stunning views of the countryside.",
          locationId: 4,
          rating: 5,
          duration: "3 hours",
          openingHours: "09am - 18pm",
          address: "Rua das oliveiras",
          phone: "912 345 678",
          socialMedia: {
            facebook: "https://www.facebook.com/cleverdetails",
            instagram: "https://www.instagram.com/cleverdetails",
            website: "https://www.cleverdetails.com"
          },
          mapsUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3125.835434509374!2d-8.189012!3d37.123456!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0!2s!5e0!3m2!1sen!2spt!4v1616581234567!5m2!1sen!2spt",
          specialOffer: {
            type: "Special Offer",
            discount: "10% OFF"
          }
        }
      ]
    },
    {
      id: "wellness",
      title: "Wellness",
      route: "/wellness",
      description: "Relax and rejuvenate with our wellness partners",
      image: "close-up-therapist-hand-massaging-woman-s-back-with-hot-towel-spa.jpg",
      items: [
        {
          id: 1,
          name: "Luxury Spa Day",
          image: "/wellness1.jpg",
          description: "Indulge in a full day of relaxation with our luxury spa treatments. Includes massage, facial, and access to all spa facilities.",
          locationId: 1,
          rating: 5,
          type: "Full Day Spa",
          openingHours: "09am - 18pm",
          address: "Rua das oliveiras",
          phone: "912 345 678",
          socialMedia: {
            facebook: "https://www.facebook.com/cleverdetails",
            instagram: "https://www.instagram.com/cleverdetails",
            website: "https://www.cleverdetails.com"
          },
          mapsUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3125.835434509374!2d-8.198765!3d37.134567!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0!2s!5e0!3m2!1sen!2spt!4v1616581234567!5m2!1sen!2spt",
          specialOffer: {
            type: "Special Offer",
            discount: "10% OFF"
          }
        },
        {
          id: 2,
          name: "Beachfront Yoga",
          image: "/wellness2.jpg",
          description: "Start your day with a rejuvenating yoga session by the beach. Professional instructors guide you through meditation and poses.",
          locationId: 1,
          rating: 5,
          type: "Yoga & Meditation",
          openingHours: "09am - 18pm",
          address: "Rua das oliveiras",
          phone: "912 345 678",
          socialMedia: {
            facebook: "https://www.facebook.com/cleverdetails",
            instagram: "https://www.instagram.com/cleverdetails",
            website: "https://www.cleverdetails.com"
          },
          mapsUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3125.835434509374!2d-8.209876!3d37.145678!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0!2s!5e0!3m2!1sen!2spt!4v1616581234567!5m2!1sen!2spt",
          specialOffer: {
            type: "Special Offer",
            discount: "10% OFF"
          }
        }
      ]
    },
    {
      id: "other",
      title: "Other",
      route: "/other",
      description: "Private dining experience in your accommodation",
      image: "pexels-valeriya-939836.jpg",
      items: [
        {
          id: 1,
          name: "Private Chef Experience",
          image: "/chef1.jpg",
          description: "Enjoy a personalized dining experience with our professional chef in your accommodation. Custom menu based on your preferences.",
          locationId: 0,
          rating: 5,
          cuisine: "International",
          openingHours: "09am - 18pm",
          address: "Rua das oliveiras",
          phone: "912 345 678",
          socialMedia: {
            facebook: "https://www.facebook.com/cleverdetails",
            instagram: "https://www.instagram.com/cleverdetails",
            website: "https://www.cleverdetails.com"
          },
          mapsUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3125.835434509374!2d-8.219876!3d37.156789!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0!2s!5e0!3m2!1sen!2spt!4v1616581234567!5m2!1sen!2spt",
          specialOffer: {
            type: "Special Offer",
            discount: "10% OFF"
          }
        },
        {
          id: 2,
          name: "Portuguese Cooking Class",
          image: "/chef2.jpg",
          description: "Learn to cook traditional Portuguese dishes with our expert chef. Includes ingredients, wine pairing, and recipe book.",
          locationId: 0,
          rating: 5,
          cuisine: "Portuguese",
          openingHours: "09am - 18pm",
          address: "Rua das oliveiras",
          phone: "912 345 678",
          socialMedia: {
            facebook: "https://www.facebook.com/cleverdetails",
            instagram: "https://www.instagram.com/cleverdetails",
            website: "https://www.cleverdetails.com"
          },
          mapsUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3125.835434509374!2d-8.229876!3d37.167890!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0!2s!5e0!3m2!1sen!2spt!4v1616581234567!5m2!1sen!2spt",
          specialOffer: {
            type: "Special Offer",
            discount: "10% OFF"
          }
        }
      ]
    }
  ],
  locations: [
    {
      id: 0,
      name: "At Your Location",
      image: "/location0.jpg",
      description: "We come to you! Our services are available at your accommodation.",
    },
    {
      id: 1,
      name: "Vilamoura",
      image: "/location1.jpg",
      description: "Vilamoura is a beautiful city in the Algarve, Portugal. It is known for its beautiful beaches and its vibrant nightlife.",
    },
    {
      id: 2,
      name: "Quarteira",
      image: "/location2.jpg",
      description: "Quarteira is a beautiful city in the Algarve, Portugal. It is known for its beautiful beaches and its vibrant nightlife.",
    },
    {
      id: 3,
      name: "Lagoa",
      image: "/location3.jpg",
      description: "Lagoa is a beautiful city in the Algarve, Portugal. It is known for its beautiful beaches and its vibrant nightlife.",
    },
    {
      id: 4,
      name: "São Brás de Alportel",
      image: "/location4.jpg",
      description: "São Brás de Alportel is a charming town in the Algarve, known for its traditional architecture and wine production.",
    }
  ]
}; 