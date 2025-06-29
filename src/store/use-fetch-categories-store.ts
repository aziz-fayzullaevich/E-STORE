import { create } from "zustand";
import axios from "axios";
import { BASE_URL } from "../api/api";

type TCategory = {
    slug: string;
    name: string;
    url?: string
};

type CategoryState = {
    categories: TCategory[];
    loading: boolean;
    error: string | null;
    fetchCategories: () => Promise<void>;
}

export const useCategoryStore = create<CategoryState>(set => ({
    categories: [],
    loading: true,
    error: null,

    fetchCategories: async () => {
        set({ loading: true, error: null });
        try {
            const res = await axios.get<TCategory[]>(`${BASE_URL}/products/categories`);
            set({ categories: res.data, loading: false });
        }
        catch (error) {
            set({ error: 'Не удалось загрузить категории!', loading: false });
        }
    }
}));