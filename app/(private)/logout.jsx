import { Pressable, Text, View } from 'react-native'
import React from 'react'
import { useAuthStore } from '../../store/authStore';

export default function Login() {
  const { signOut } = useAuthStore();

  return (
    <View className="flex items-center justify-center flex-1">
      <Text>Pantalla de Logout</Text>
      <Pressable onPress={signOut}>
        <Text className='p-4 text-xl text-blue-500'>Logout</Text>
      </Pressable>
    </View>
  )
}