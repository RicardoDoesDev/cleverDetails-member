export interface BaseItem {
  id: number;
  name: string;
  image: string;
  description: string;
  location: string;
  rating: number;
}

export interface BoatTour extends BaseItem {
  specialOffer: {
    type: string;
    discount: string;
  };
}

export interface Restaurant extends BaseItem {
  cuisine: string;
}

export interface Activity extends BaseItem {
  price: string;
}

export interface WineryTour extends BaseItem {
  duration: string;
}

export interface Wellness extends BaseItem {
  type: string;
}

export interface BeautySalon extends BaseItem {
  services: string[];
}

export interface Category {
  id: string;
  title: string;
  route: string;
  description: string;
  image: string;
  items: (BoatTour | Restaurant | Activity | WineryTour | Wellness | BeautySalon)[];
}

export interface AppData {
  categories: Category[];
} 