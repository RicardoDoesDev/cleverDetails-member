export interface Item {
  id: number;
  name: string;
  email: string;
  logo: string;
  description: string;
  locationIds: number[];
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

export interface AppData {
  categories: Category[];
  locations: Location[];
} 