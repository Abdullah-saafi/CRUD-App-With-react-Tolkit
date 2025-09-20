import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { AppState, User, Product, CartItem } from '../../types';

const initialState: AppState = {
  theme: 'light',
  loading: false,
  user: null,
  products: [],
  cart: []
};

const appSlice = createSlice({
  name: 'app',
  initialState,
  reducers: {
    setTheme: (state, action: PayloadAction<'light' | 'dark'>) => {
      state.theme = action.payload;
    },
    setLoading: (state, action: PayloadAction<boolean>) => {
      state.loading = action.payload;
    },
    setUser: (state, action: PayloadAction<User | null>) => {
      state.user = action.payload;
    },
    addToCart: (state, action: PayloadAction<Product>) => {
      const existingItem = state.cart.find(item => item.id === action.payload.id);
      if (existingItem) {
        existingItem.quantity += 1;
      } else {
        state.cart.push({ ...action.payload, quantity: 1 });
      }
    },
    removeFromCart: (state, action: PayloadAction<number>) => {
      state.cart = state.cart.filter(item => item.id !== action.payload);
    },
    setProducts: (state, action: PayloadAction<Product[]>) => {
      state.products = action.payload;
    },
    updateCartItemQuantity: (state, action: PayloadAction<{ id: number; quantity: number }>) => {
      const item = state.cart.find(item => item.id === action.payload.id);
      if (item) {
        item.quantity = action.payload.quantity;
        if (item.quantity <= 0) {
          state.cart = state.cart.filter(cartItem => cartItem.id !== action.payload.id);
        }
      }
    }
  }
});

export const {
  setTheme,
  setLoading,
  setUser,
  addToCart,
  removeFromCart,
  setProducts,
  updateCartItemQuantity
} = appSlice.actions;

export default appSlice.reducer;