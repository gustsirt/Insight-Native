import { Pressable, Text, View } from 'react-native'
import React, { Component } from 'react'
import { Link } from 'expo-router'
import { useAuthStore } from '../../store/authStore';

export default function Login() {
  const { logout, isAuthenticated } = useAuthStore();
  console.log(isAuthenticated);

  return (
    <View className="flex items-center justify-center flex-1">
      <Text>Pantalla de Logout</Text>
      <Link href="/projects" asChild><Pressable>
        <Text className='p-4 text-xl text-blue-500'>Projects</Text>
      </Pressable></Link>
      <Pressable onPress={logout}>
        <Text className='p-4 text-xl text-blue-500'>Logout/Proyectos</Text>
      </Pressable>
    </View>
  )
}