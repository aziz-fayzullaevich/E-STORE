import { create } from "zustand";

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

type FavoriteStore = {
  favorite: TProduct[];
  addToFavoritePage: (product: TProduct) => void;
  removeFromFavoritePage: (id: number) => void;
  isFavorite: (id: number) => boolean;
  toggleFavorite: (product: TProduct) => void;
};

export const useFavoriteStore = create<FavoriteStore>((set, get) => ({
  favorite: [],
  addToFavoritePage: (product) =>
    set((state) => ({
      favorite: [...state.favorite, product],
    })),
  removeFromFavoritePage: (id) =>
    set((state) => ({
      favorite: state.favorite.filter((item) => item.id !== id),
    })),
  isFavorite: (id) => {
    return get().favorite.some((item) => item.id === id);
  },
  toggleFavorite: (product) => {
    const { isFavorite, addToFavoritePage, removeFromFavoritePage } = get();
    if (isFavorite(product.id)) {
      removeFromFavoritePage(product.id);
    } else {
      addToFavoritePage(product);
    }
  },
}));