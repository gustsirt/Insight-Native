// app/_layoutPrivate/_layout.js
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { Drawer } from "expo-router";

export default function PrivateLayout() {
  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <Drawer>
        <Drawer.Screen name="Projects" options={{ title: "Proyectos" }} />
        <Drawer.Screen name="logout" options={{ title: "Cerrar Sesión" }} />
      </Drawer>
    </GestureHandlerRootView>
  );
}