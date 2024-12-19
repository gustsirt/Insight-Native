import { Link } from 'expo-router';
import { Pressable, Text, View } from 'react-native';

export default function Index() {
  return (
    <View className="flex items-center justify-center flex-1">
      <Text>Bienvenido a Insight Native</Text>
      <Link href="/login" asChild>
        <Pressable>
          <Text className='p-4 text-xl text-blue-500'>Iniciar Sesión</Text>
        </Pressable>
      </Link>
    </View>
  );
}


// Slot es Outlet en Tanstack o "Children"

// <ActivityIndicator/> es un compornendte "loading..."
// <ScrollView></ScrollView> es una vista para scrooll pero solo sirve para cosas estaticas, sin variacion porque carga TODO lo que se ve y no se ve
// <FlatList></FlatList> se usa para denreizar componentes dinamicos, pero se configura diferente

// para svg se necesita npx expot isntall react-native-svg

// new Animated  para animar cosas