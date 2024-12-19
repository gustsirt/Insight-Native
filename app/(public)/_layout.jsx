import { Redirect, Stack } from "expo-router";
import { useAuthStore } from "../../store/authStore";

export default function PublicLayout() {
  const isAuthenticated = useAuthStore((state) => state.isAuthenticated)

  if (isAuthenticated) {
    return <Redirect href="/projects" />
  }

  return (
    <Stack >
      <Stack.Screen name="index" options={{ title: "Bienvenido" }} />
      <Stack.Screen name="login" options={{ title: "Iniciar Sesión" }} />
    </Stack>
  );
}