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
    images: string[]
};

type ProductState = {
    products: TProduct[];
    loading: boolean;
    error: string | null;
    fetchProducts: () => Promise<void>;
};

export const useProductsStore = create<ProductState>(set => ({
    products: [],
    loading: true,
    error: null,

    fetchProducts: async () => {
        set({ loading: true, error: null });
        try {
            const res = await axios.get<{ products: TProduct[] }>(`${BASE_URL}/products`);
            set({ products: res.data.products, loading: false });
        } catch (error) {
            set({ error: 'Не удалось получить товары!', loading: false });
        }
    }

}));