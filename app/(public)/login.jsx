import { Pressable, Text, View } from 'react-native'
import React from 'react'
import { Link } from 'expo-router'
import { useAuthStore } from '../../store/authStore'

export default function Login() {
  const { signIn } = useAuthStore();

  const handleLogin = () => {
    signIn("token_prueba");
  };

  return (
    <View className="flex items-center justify-center flex-1">
      <Text>Pantalla de Login 😁</Text>
      <Link href="/" asChild><Pressable>
        <Text className='p-4 text-xl text-blue-500'>Home</Text>
      </Pressable></Link>
      <Pressable onPress={handleLogin}>
        <Text className='p-4 text-xl text-blue-500'>Login</Text>
      </Pressable>
    </View>
  )
}