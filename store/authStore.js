import { create } from "zustand";
import { getToken, removeToken, setToken } from "../src/utils/token";
// https://starter.obytes.com/guides/authentication/

export const useAuthStore = create((set) => ({
  status: 'idle',
  token: null,

  signIn: async (token) => {
    try {
      // Verifica que el token sea un valor simple (string)
      console.log("signIn / type ok: ", typeof token);
      console.log("signIn / token: ", token);

      if (typeof token === 'string') {
        await setToken(token);  // Guarda el token en el almacenamiento
        set({ status: 'signIn', token });
      } else {
        console.error("El token debe ser un string");
      }
    } catch (e) {
      console.error("Error al intentar almacenar el token:", e);
    }
  },

  signOut: async () => { // reemplazara a "logout"
    await removeToken();
    set({ status: 'signOut', token: null });
  },

  hydrate: async () => {
    try {

      const userToken = await getToken();
      // console.log("hydrate / userToken: ", userToken);
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
