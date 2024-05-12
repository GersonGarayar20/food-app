"use client";
import { CartNavigate } from "@/components/icons/ArrowBack";
import { CartStore, useCartStore } from "@/store/cart";
import { useStore } from "zustand";

function CounterCart() {
  const store = useCartStore();
  if (!store) return <div></div>;
  return (
    <div>
      <div className="rounded-full bg-orange-600 text-white absolute w-6 -top-1 -right-1 z-20 text-center">
        <p className="" id="count">
          {store.cart.length}
        </p>
      </div>
      <CartNavigate className="text-dark dark:text-white" />
    </div>
  );
}

export default CounterCart;
