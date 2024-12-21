import { Drawer } from 'expo-router/drawer';
import { useAuthStore } from '../../store/authStore';
import { Redirect } from 'expo-router';

export default function PrivateLayout() {
  // Usamos el token para verificar si el usuario está autenticado
  const token = useAuthStore((state) => state.token);

  if (!token) {
    // Si no hay token, redirigimos al login
    return <Redirect href="/login" />;
  }

  return (
    <Drawer>
      <Drawer.Screen name="projects" options={{ title: "Proyectos" }} />
      <Drawer.Screen name="logout" options={{ title: "Cerrar Sesión" }} />
    </Drawer>
  );
}