import { Stack } from "expo-router";

export default function PublicLayout() {
  return (
    <Stack >
      <Stack.Screen name="index" options={{ title: "Bienvenido" }} />
      <Stack.Screen name="login" options={{ title: "Iniciar Sesión" }} />
    </Stack>
  );
}