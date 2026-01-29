export interface Product {
  id: string;
  title: string;
  price: number;
  maxPrice?: number;
  image: string;
  badge?: string;
}

export interface Collection {
  id: string;
  title: string;
  image: string;
}

export interface StyleCollection {
  title: string;
  description: string;
  image: string;
}

export interface Testimonial {
  id: string;
  rating: number;
  text: string;
  author: string;
  date: string;
}

export interface TrustBadge {
  title: string;
  description: string;
  icon: string;
}
