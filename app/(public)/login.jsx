import { Pressable, Text, View } from 'react-native'
import React, { Component } from 'react'
import { Link } from 'expo-router'

export default function Login() {
  return (
    <View className="flex items-center justify-center flex-1">
      <Text>Login</Text>
      <Text>Login</Text>
      <Text>Login</Text>
      <Link href="/" asChild>
        <Pressable>
          <Text className='p-4 text-xl text-blue-500'>Home</Text>
        </Pressable>
      </Link>
      <Link href="/projects" asChild>
        <Pressable>
          <Text className='p-4 text-xl text-blue-500'>Proyectos</Text>
        </Pressable>
      </Link>
    </View>
  )
}