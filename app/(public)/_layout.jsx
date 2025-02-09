import { Redirect, Stack } from "expo-router";
import { useAuthStore } from "../../store/authStore";
import { useEffect, useState } from "react";
import { ActivityIndicator } from "react-native";
import { tailwindColors } from "../../config/tailwind";
import LogoTitle from "../../src/layout/LogoTitle";

export default function PublicLayout() {
  const token = useAuthStore((state) => state.token);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(false); // Aseguramos que la carga se complete
  }, []);

  if (loading) {
    return <ActivityIndicator />; // Mientras carga, puedes mostrar un spinner si lo deseas
  }

  // console.log("PublicLayout / Token:", token);

  // Si ya existe el token, redirigimos a /projects
  if (token) {
    return <Redirect href="/projects" />;
  }

  return (
    <Stack screenOptions={{
      headerStyle: { backgroundColor: tailwindColors.colors[1].DEFAULT },
      // headerTitle: (props) => <LogoTitle {...props} />,
      headerTitle: (props) => <LogoTitle {...props} />,
      // headerTitleAlign: "center",
      // headerTitleStyle: { color: tailwindColors.simpleColors.white },
      // headerBackTitleStyle: { color: tailwindColors.simpleColors.white },
    }} >
      <Stack.Screen name="index" options={{ title: "Bienvenido" }} />
      <Stack.Screen name="login" options={{ title: "Iniciar Sesión" }} />
    </Stack>
  );
}