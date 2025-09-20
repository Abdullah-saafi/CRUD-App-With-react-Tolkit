export interface User {
  id: string;
  name: string;
  email: string;
}

export interface Product {
  id: number;
  name: string;
  price: number;
  description: string;
}

export interface CartItem extends Product {
  quantity: number;
}

export interface AppState {
  theme: 'light' | 'dark';
  loading: boolean;
  user: User | null;
  products: Product[];
  cart: CartItem[];
}