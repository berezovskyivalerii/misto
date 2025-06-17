import { createContext, useContext, useState } from 'react';

type CartItem = { id: string; price: number; };

type CartCtx = {
    items: CartItem[];
    add: (item: CartItem) => void;
};

export const CartContext = createContext<CartCtx | null>(null);

export function CartProvider({ children }: { children: React.ReactNode }) {
    const [items, setItems] = useState<CartItem[]>([]);

    const add = (item: CartItem) => setItems((prev) => [...prev, item]);

    return (
        <CartContext.Provider value={{ items, add }}>
            {children}
        </CartContext.Provider>
    );
}

export const useCart = () => {
    const ctx = useContext(CartContext);
    if (!ctx) throw new Error('useCart must be inside CartProvider');
    return ctx;
};
