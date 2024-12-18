import { Slot } from "expo-router";
import "../global.css";
import { View } from "react-native";
import { StatusBar } from "expo-status-bar";

export default function RootLayout() {
  return (
    <View className="flex-1 items-center justify-center bg-slate-400">
      <Slot />
      <StatusBar style="auto" />
    </View>
  );
}

// Slot = hueco, pero recarga siempre
// Stack = pila, es como tab que se abren y desde la cabezera que te permite desplazar o hacia los costado, cada stack se puede personalizar