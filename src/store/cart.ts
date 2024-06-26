import { ProductI } from "@/types/index";
import { create } from "zustand";
import { persist } from "zustand/middleware";

interface CartItem extends ProductI {
  count: number;
}

export type CartStore = {
  cart: CartItem[];
  count: () => number;
  incrementItem: (id: number) => void;
  decrementItem: (id: number) => void;
  setItemCount: (id: number, count: number) => void;
  add: (product: CartItem) => void;
  removeItem: (id: number) => void;
  removeAll: () => void;
  totalPrice: () => number;
};

export const useCartStore = create<CartStore>()(
  persist(
    (set, get) => ({
      cart: [],
      count: () => {
        const { cart } = get();
        if (cart.length) {
          return cart.map((item) => item.count).reduce((a, b) => a + b);
        }
        return 0;
      },
      add: (product) => {
        const { cart } = get();
        const p = document.getElementById("count");
        p?.classList.add("count");
        setTimeout(() => {
          p?.classList.remove("count");
        }, 300);
        const updatedCart = addToCart(cart, product);

        set({ cart: updatedCart });
      },
      removeItem: (id) => {
        const { cart } = get();
        const updatedCart = removeFromCart(cart, id);
        set({ cart: updatedCart });
      },
      removeAll: () => {
        set({ cart: [] });
      },
      incrementItem: (id) => {
        const { cart } = get();
        const updatedCart = incrementInCart(cart, id);
        set({ cart: updatedCart });
      },
      decrementItem: (id) => {
        const { cart } = get();
        const updatedCart = decrementInCart(cart, id);
        set({ cart: updatedCart });
      },
      setItemCount: (id, count) => {
        const { cart } = get();
        const updatedCart = setCountInCart(cart, id, count);
        set({ cart: updatedCart });
      },
      totalPrice: () => {
        const { cart } = get();
        if (cart.length) {
          return cart
            .map((item) => item.count * item.price)
            .reduce((a, b) => a + b);
        }
        return 0;
      },
    }),
    { name: "food-app" }
  )
);

const addToCart = (cart: CartItem[], product: CartItem): CartItem[] => {
  const item = cart.find((item) => item.id === product.id);

  if (item) {
    return cart.map((e) => {
      if (e.id === product.id) {
        const itemCount = product.count >= 1 ? product.count : 1;
        return { ...e, count: itemCount };
      }
      return e;
    });
  }

  return [...cart, { ...product }];
};

const removeFromCart = (cart: CartItem[], id: number): CartItem[] => {
  const item = cart.find((item) => item.id === id);
  if (item) {
    return cart.filter((item) => item.id !== id);
  }
  return cart;
};

const incrementInCart = (cart: CartItem[], id: number): CartItem[] => {
  const item = cart.find((item) => item.id === id);
  if (item) {
    return cart.map((item) => {
      if (item.id === id) {
        return { ...item, count: item.count + 1 };
      }
      return item;
    });
  }
  return cart;
};

const decrementInCart = (cart: CartItem[], id: number): CartItem[] => {
  const item = cart.find((item) => item.id === id);
  if (item) {
    return cart.map((item) => {
      if (item.id === id) {
        const itemCount = item.count > 1 ? item.count - 1 : 1;
        return { ...item, count: itemCount };
      }
      return item;
    });
  }
  return cart;
};

const setCountInCart = (
  cart: CartItem[],
  id: number,
  count: number
): CartItem[] => {
  const item = cart.find((item) => item.id === id);
  if (item) {
    return cart.map((item) => {
      if (item.id === id) {
        const itemCount = count >= 1 ? count : 1;
        return { ...item, count: itemCount };
      }
      return item;
    });
  }
  return cart;
};
