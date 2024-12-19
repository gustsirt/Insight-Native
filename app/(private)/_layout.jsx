import { Drawer } from 'expo-router/drawer';
import { useAuthStore } from '../../store/authStore';
import { Redirect } from 'expo-router';

export default function PrivateLayout() {
  const isAuthenticated = useAuthStore((state) => state.isAuthenticated)

  if (!isAuthenticated) {
    return <Redirect href="/login" />
  }

  return (
    <Drawer>
      <Drawer.Screen name="projects" options={{ title: "Proyectos" }} />
      <Drawer.Screen name="logout" options={{ title: "Cerrar Sesión" }} />
    </Drawer>
  );
}