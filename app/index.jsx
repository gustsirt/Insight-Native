import { StatusBar } from 'expo-status-bar';
import { Text, View } from 'react-native';

export default function Index() {
  return (
    <View className="flex items-center justify-center flex-1">
      <Text>Open up App.js to start working on your app!!</Text>
      <StatusBar style="auto" />
    </View>
  );
}

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#fff',
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
// });


// Slot es Outlet en Tanstack o "Children"

// <ActivityIndicator/> es un compornendte "loading..."
// <ScrollView></ScrollView> es una vista para scrooll pero solo sirve para cosas estaticas, sin variacion porque carga TODO lo que se ve y no se ve
// <FlatList></FlatList> se usa para denreizar componentes dinamicos, pero se configura diferente

// para svg se necesita npx expot isntall react-native-svg

// new Animated  para animar cosas