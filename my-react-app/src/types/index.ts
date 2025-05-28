export interface Item {
  id: number;
  name: string;
  image: string;
  description: string;
  locationId: number;
  rating: number;
  mapsUrl: string;
  openingHours: string;
  address: string;
  phone: string;
  socialMedia: {
    facebook: string;
    instagram: string;
    website: string;
  };
  specialOffer?: {
    type: string;
    discount: string;
  };
  cuisine?: string;
  price?: string;
  duration?: string;
  type?: string;
  services?: string[];
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

export interface AppData {
  categories: Category[];
  locations: Location[];
} 