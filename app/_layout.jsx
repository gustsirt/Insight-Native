import { Slot } from "expo-router";
import "../global.css";
import { useAuthStore } from "../store/authStore";
import { useEffect, useState } from "react";
import { ActivityIndicator } from "react-native";

export default function RootLayout() {
  const { hydrate } = useAuthStore();
  const [loading, setLoading] = useState(true);

  // Verificador de usaurio
  useEffect(() => {
    const initializeAuth = async () => {
      await hydrate();
      setLoading(false); // Una vez hidratado, actualizamos el estado de carga
    };
    initializeAuth();
  }, [hydrate]);

  if (loading) {
    return (
      <ActivityIndicator />
    )
  }

  return (

    <Slot />
  )
}

// Slot = hueco, pero recarga siempre
// Stack = pila, es como tab que se abren y desde la cabezera que te permite desplazar o hacia los costado, cada stack se puede personalizarW