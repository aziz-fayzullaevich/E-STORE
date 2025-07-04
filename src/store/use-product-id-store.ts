import { create } from 'zustand';
import axios from 'axios';
import { BASE_URL } from '../api/api';

type TProduct = {
  id: number;
  title: string;
  description: string;
  category: string;
  price: number;
  rating: number;
  brand: string;
  images: string[];
};

type SingleProductState = {
  product: TProduct | null;
  loading: boolean;
  error: string | null;
  fetchProductById: (id: string | number) => Promise<void>;
};

export const useSingleProductStore = create<SingleProductState>((set) => ({
  product: null,
  loading: false,
  error: null,

  fetchProductById: async (id) => {
    set({ loading: true, error: null });
    try {
      const res = await axios.get<TProduct>(`${BASE_URL}/products/${id}`);
      set({ product: res.data, loading: false });
    } catch (error) {
      set({ error: 'Не удалось загрузить продукт', loading: false });
    }
  },
}));
