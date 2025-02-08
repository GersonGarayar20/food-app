import { create } from "zustand";
import { persist } from "zustand/middleware";

interface UserState {
  name: string;
  image: string;
  email: string;
  setUser: (user: { name: string; image: string; email: string }) => void;
  logout: () => void;
}

export const useUserStore = create<UserState>()(
  persist(
    (set) => ({
      name: "",
      image: "",
      email: "",
      setUser: (user) => set(user),
      logout: () => set({ name: "", image: "", email: "" }),
    }),
    {
      name: "user-storage", // Nombre en localStorage
      getStorage: () => localStorage, // Usa localStorage para guardar
    }
  )
);
