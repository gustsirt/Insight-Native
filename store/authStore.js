import { create } from "zustand";
import { getToken, removeToken, setToken } from "../src/utils/token";
// https://starter.obytes.com/guides/authentication/

export const useAuthStore = create((set) => ({
  isAuthenticated: false,
  status: 'idle', // reemplazara a "isAuthenticated"
  token: null, // reemplazara a "isAuthenticated"
  // login: () => set({ isAuthenticated: true }),
  // logout: () => set({ isAuthenticated: false }),

  signIn: (token) => {
    try {
      // Verifica que el token sea un valor simple (string)
      console.log("type ok: ", typeof token);
      console.log("token: ", token);

      if (typeof token === 'string') {
        setToken(token);  // Guarda el token en el almacenamiento
        set({ status: 'signIn', token });
      } else {
        console.error("El token no es un valor válido");
      }
    } catch (e) {
      console.error("Error al intentar almacenar el token:", e);
    }
  },

  signOut: () => { // reemplazara a "logout"
    removeToken();
    set({ status: 'signOut', token: null });
  },

  hydrate: () => {
    try {
      const userToken = getToken();
      if (userToken !== null) {
        set({ status: 'signIn', token: userToken });
      } else {
        set({ status: 'signOut', token: null });
      }
    } catch (e) {
      console.error("Error en hydrate:", e);
    }
  },
}));
