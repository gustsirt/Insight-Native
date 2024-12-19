import { Slot } from "expo-router";
import "../global.css";
import { useAuthStore } from "../store/authStore";



export default function RootLayout() {
  const { hydrate } = useAuthStore()
  hydrate()
  return <Slot />
}

// Slot = hueco, pero recarga siempre
// Stack = pila, es como tab que se abren y desde la cabezera que te permite desplazar o hacia los costado, cada stack se puede personalizarW