import { Redirect, Stack } from "expo-router";
import { useAuthStore } from "../../store/authStore";
import { useEffect, useState } from "react";
import { ActivityIndicator } from "react-native";

export default function PublicLayout() {
  const token = useAuthStore((state) => state.token);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(false); // Aseguramos que la carga se complete
  }, []);

  if (loading) {
    return <ActivityIndicator />; // Mientras carga, puedes mostrar un spinner si lo deseas
  }

  console.log("Token en PublicLayout:", token);
  console.log("Loading:", loading);

  // Si ya existe el token, redirigimos a /projects
  if (token) {
    return <Redirect href="/projects" />;
  }

  return (
    <Stack >
      <Stack.Screen name="index" options={{ title: "Bienvenido" }} />
      <Stack.Screen name="login" options={{ title: "Iniciar Sesión" }} />
    </Stack>
  );
}