import { create } from "zustand";

interface BearState {
  word: string;
  category_id: number;
  minPrice: number;
  maxPrice: number;

  setFilters: ({ word, category_id, maxPrice }: Filter) => void;
}

interface Filter {
  word?: string;
  category_id?: number;
  minPrice?: number;
  maxPrice?: number;
}

export const useFilterStore = create<BearState>()((set) => ({
  word: "",
  category_id: 0,
  minPrice: 0,
  maxPrice: 1000,
  setFilters: (values) => set((state) => ({ ...values })),
}));

