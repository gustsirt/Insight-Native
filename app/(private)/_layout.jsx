import { Drawer } from 'expo-router/drawer';
import { useAuthStore } from '../../store/authStore';
import { Redirect } from 'expo-router';
import { tailwindColors } from '../../config/tailwind';
import CustomHeader from '../../src/layout/CustomHeader ';

export default function PrivateLayout() {
  // Usamos el token para verificar si el usuario está autenticado
  const token = useAuthStore((state) => state.token);

  if (!token) {
    // Si no hay token, redirigimos al login
    return <Redirect href="/login" />;
  }

  return (
    <Drawer
      screenOptions={{
        headerStyle: { backgroundColor: tailwindColors.colors[1].DEFAULT },
        headerTitle: (props) => <CustomHeader {...props} />, // Header personalizado
        drawerLabelStyle: {
          fontSize: 16,
          // color: tailwindColors.simpleColors.white,
        },
      }}
    >
      <Drawer.Screen name="projects" options={{ title: "Proyectos" }} />
      <Drawer.Screen name="logout" options={{ title: "Cerrar Sesión" }} />
    </Drawer>
  );
}