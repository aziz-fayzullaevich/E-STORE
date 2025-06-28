import axios from "axios";
import { create } from "zustand";
import { BASE_URL } from "../api/api";

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

type ProductState = {
  products: TProduct[];
  selectedCategory: string;
  loading: boolean;
  error: string | null;
  fetchProductsByCategory: (category: string) => Promise<void>;
  setSelectedCategory: (category: string) => void;
};

export const useProductsStore = create<ProductState>((set) => ({
  products: [],
  selectedCategory: '',
  loading: false,
  error: null,

  setSelectedCategory: (category) => set({ selectedCategory: category }),

  fetchProductsByCategory: async (category) => {
    set({ loading: true, error: null, selectedCategory: category });
    try {
      const res = await axios.get<{ products: TProduct[] }>(
        `${BASE_URL}/products/category/${category}?limit=100`
      );
      set({ products: res.data.products, loading: false });
    } catch (error) {
      set({ error: "Не удалось получить товары!", loading: false });
    }
  },

}));