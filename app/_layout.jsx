import { Slot } from "expo-router";
import "../global.css";
import { View } from "react-native";
import { StatusBar } from "expo-status-bar";
// import { useAuthStore } from "../store/authStore"; // Estado de autenticación

export default function RootLayout() {
  // const isAuthenticated = useAuthStore((state) => state.isAuthenticated);

  // return isAuthenticated ? (
  //   <Slot /> // Carga las rutas privadas
  // ) : (
  //   <Slot /> // Carga las rutas públicas
  // );
  return (
    <Slot />
  );
}

// Slot = hueco, pero recarga siempre
// Stack = pila, es como tab que se abren y desde la cabezera que te permite desplazar o hacia los costado, cada stack se puede personalizar