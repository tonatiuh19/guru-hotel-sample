export interface Businesses {
  id: string;
  name: string;
  rating: number;
  review_count: number;
  photos: string[];
  display_phone: string;
  price: string;
  is_closed: boolean;
  location: Location;
}

export interface Location {
  address1: string;
  city: string;
  state: string;
  country: string;
}
