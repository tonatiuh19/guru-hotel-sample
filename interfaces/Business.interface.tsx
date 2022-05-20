export interface Business {
  id: string;
  name: string;
  rating: number;
  review_count: number;
  photos: string[];
  display_phone: string;
  price: string;
  coordinates: Coordinates;
  hours: Hour[];
  is_closed: boolean;
  location: Location;
}

export interface Coordinates {
  latitude: number;
  longitude: number;
}

export interface Hour {
  hours_type: string;
  is_open_now: boolean;
}

export interface Location {
  address1: string;
  city: string;
  state: string;
  country: string;
}
