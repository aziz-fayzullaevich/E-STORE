import { create } from 'zustand';

type TProduct = {
    id: number;
    title: string;
    description: string;
    category: string;
    price: number;
    rating: number;
    brand: string;
    images: string[];
    quantity: number;
};

type CartState = {
    cart: TProduct[];
    addToCart: (product: TProduct) => void;
    removeFromCart: (id: number) => void;
};

export const useCartStore = create<CartState>((set) => ({
    cart: [],
    addToCart: (product) =>
        set((state) => {
            const existingProduct = state.cart.find((item) => item.id === product.id);
            if (existingProduct) {
                return {
                    cart: state.cart.map((item) =>
                        item.id === product.id
                            ? { ...item, quantity: item.quantity + product.quantity }
                            : item
                    ),
                };
            } else {
                return {
                    cart: [...state.cart, product],
                };
            }
        }),
    removeFromCart: (id) =>
        set((state) => ({
            cart: state.cart.filter((item) => item.id !== id),
        })),
}));
