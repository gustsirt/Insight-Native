import { create } from "zustand";
// https://starter.obytes.com/guides/authentication/
export const useAuthStore = create((set) => ({
  isAuthenticated: false,
  login: () => set({ isAuthenticated: true }),
  logout: () => set({ isAuthenticated: false }),
}));
