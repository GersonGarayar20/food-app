import { CartStore } from "./cart";
import useStore from "./useStore";

export default function useCartStore(): CartStore | undefined {
  return useStore<CartStore, CartStore>(useCartStore, (state) => state);
}
