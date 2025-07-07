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
    increaseQuantity: (id: number) => void;
    decreaseQuantity: (id: number) => void;
    clearCart: () => void;
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
    increaseQuantity: (id) => set(state => ({
        cart: state.cart.map(item =>
            item.id === id ? { ...item, quantity: item.quantity + 1 } : item
        )
    })),

    decreaseQuantity: (id) => set(state => ({
        cart: state.cart.map(item =>
            item.id === id && item.quantity > 1
                ? { ...item, quantity: item.quantity - 1 }
                : item
        )
    })),

    clearCart: () => set({ cart: [] }),
}));
