import { create } from "zustand";
import { getToken, removeToken, setToken } from "../src/utils/token";
// https://starter.obytes.com/guides/authentication/

export const useAuthStore = create((set) => ({
  isAuthenticated: false,
  status: 'idle', // reemplazara a "isAuthenticated"
  token: null, // reemplazara a "isAuthenticated"
  login: () => set({ isAuthenticated: true }),
  logout: () => set({ isAuthenticated: false }),

  signIn: (token) => { // reemplazara a "login"
    setToken(token);
    set({ status: 'signIn', token });
  },
  signOut: () => { // reemplazara a "logout"
    removeToken();
    set({ status: 'signOut', token: null });
  },
  hydrate: () => {
    try {
      const userToken = getToken();
      if (userToken !== null) {
        get().signIn(userToken);
      } else {
        get().signOut();
      }
    } catch (e) {
      // Manejo de errores
    }
  },
}));
