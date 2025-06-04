export interface OpeningHours {
  day: string;
  hours: string;
}

export interface Review {
  id: string | number;
  author: string;
  rating: number;
  comment: string;
  createdAt: string;
  source?: 'google' | 'local';
  itemId?: number;
  categoryId?: string;
}

export interface Item {
  id: number;
  name: string;
  email: string;
  logo: string;
  description: string;
  locationIds: number[];
  rating: number;
  mapsUrl: string;
  openingHours: OpeningHours[];
  address: string;
  phone: string;
  isVisible?: boolean;
  socialMedia: {
    facebook: string;
    instagram: string;
    website: string;
  };
  specialOffer?: {
    type: string;
    description: string;
  };
  cuisine?: string;
  price?: string;
  duration?: string;
  type?: string;
  services?: string[];
  rootFolder?: string;
  images?: string[];
}

export interface Category {
  id: string;
  title: string;
  route: string;
  description: string;
  image: string;
  items: Item[];
}

export interface Location {
  id: number;
  name: string;
  image: string;
  description: string;
}

export interface UITranslations {
  header: {
    phoneLabel: string;
    menu: {
      advantages: string;
      access: string;
      partnership: string;
      contact: string;
    }
  };
  sidebar: {
    categories: string;
    other: string;
    language: string;
  };
  searchBar: {
    searchPlaceholder: string;
    allCategories: string;
    allLocations: string;
  };
  listPage: {
    specialOffer: string;
  };
  footer: {
    bookHoliday: string;
    allRightsReserved: string;
  };
  homepage: {
    title: string;
    subtitle: string;
    seeMore: string;
  };
  access: {
    mainText1: string;
    mainText2: string;
    mainText3: string;
    exploreHomes: string;
  };
  partnership: {
    title: string;
    benefit1: {
      title: string;
      description: string;
    };
    benefit2: {
      title: string;
      description: string;
    };
    form: {
      title: string;
      businessName: string;
      contactName: string;
      email: string;
      phone: string;
      businessType: {
        label: string;
        placeholder: string;
        options: {
          boatTours: string;
          restaurants: string;
          activities: string;
          winery: string;
          wellness: string;
          chefService: string;
          other: string;
        }
      };
      description: string;
      submit: string;
      submitting: string;
    }
  };
  contact: {
    title: string;
    form: {
      name: {
        label: string;
        placeholder: string;
      };
      phone: {
        label: string;
        placeholder: string;
      };
      email: {
        label: string;
        placeholder: string;
      };
      subject: {
        label: string;
        placeholder: string;
      };
      message: {
        label: string;
        placeholder: string;
      };
      submit: string;
      sending: string;
    }
  };
  itemDetails: {
    reviews: string;
    bookNow: string;
    specialOffer: string;
    bookingNotice: string;
    details: string;
    openingHours: string;
    location: string;
    bookingRequest: string;
    bookingMessage: string;
    reviewsSection: {
      title: string;
      leaveReview: string;
      rating: string;
      writeReview: string;
      authorPlaceholder: string;
      commentPlaceholder: string;
      submit: string;
      submitting: string;
      yourName: string;
      writeComment: string;
    }
  };
}

export interface AppData {
  categories: Category[];
  locations: Location[];
  ui: UITranslations;
} 