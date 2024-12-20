import { Slot } from "expo-router";
import "../global.css";
import { useAuthStore } from "../store/authStore";
import { useEffect } from "react";



export default function RootLayout() {
  const { hydrate } = useAuthStore();

  useEffect(() => {
    hydrate(); // Solo se ejecuta una vez al montar el componente
  }, [hydrate]);

  return <Slot />
}

// Slot = hueco, pero recarga siempre
// Stack = pila, es como tab que se abren y desde la cabezera que te permite desplazar o hacia los costado, cada stack se puede personalizarW