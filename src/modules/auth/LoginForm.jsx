import { useState } from 'react';
import { View, Text, TextInput, Pressable } from 'react-native';
import { useForm, Controller } from 'react-hook-form'; // Usamos React Hook Form para gestionar el formulario
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import useAuthApi from './useAuthApi';
import { useAuthStore } from '../../../store/authStore';
import { alertMessage } from '../../ui/messages/alerts';

// Definición del esquema de validación usando Zod
const loginSchema = z.object({
  email: z.string().email('Debe ser un correo electrónico válido').min(1, 'El correo electrónico es obligatorio'),
  password: z.string().min(5, 'La contraseña debe tener al menos 5 caracteres'),
});

// Form de Logueo
export default function LoginForm() {

  const { authLogin, response } = useAuthApi()
  const { signIn } = useAuthStore()

  // Inicializamos el formulario
  const { control, handleSubmit, reset, formState: { errors } } = useForm({
    resolver: zodResolver(loginSchema),
    defaultValues: {
      email: 'gustavo.sirtori@gmail.com', // Valores por defecto
      password: '123456',
    },
  });

  // Función que manejará el submit del formulario
  const onSubmit = async (data) => {
    console.log('Datos enviados:', data);
    await authLogin(data)
    console.log('Datos recibidos:', response);
    if (response?.data?.token) {
      alertMessage("Login exitoso", "success")
      await signIn(response.data.token)
    } else {
      alertMessage("Error en el login", "error")
    }

  };


  return (
    <>
      <Text className="text-2xl font-bold mb-5">Iniciar sesión</Text>

      {/* Email */}
      <View className="w-full mb-4">
        <Text className="text-sm font-medium">Correo electrónico:</Text>
        <Controller
          control={control}
          render={({ field }) => (
            <TextInput
              className="mt-2 w-full border border-gray-300 rounded-md p-2 text-base"
              placeholder="Correo electrónico"
              value={field.value}
              onChangeText={field.onChange}
            />
          )}
          name="email"
        />
        {errors.email && <Text className="text-red-500 mt-1 text-sm">{errors.email.message}</Text>}
      </View>

      {/* Password */}
      <View className="w-full mb-4">
        <Text className="text-sm font-medium">Contraseña:</Text>
        <Controller
          control={control}
          render={({ field }) => (
            <TextInput
              className="mt-2 w-full border border-gray-300 rounded-md p-2 text-base"
              placeholder="Contraseña"
              secureTextEntry
              value={field.value}
              onChangeText={field.onChange}
            />
          )}
          name="password"
        />
        {errors.password && <Text className="text-red-500 mt-1 text-sm">{errors.password.message}</Text>}
      </View>

      {/* Botones */}
      <View className="w-full mt-5 flex flex-row justify-between">
        <Pressable
          className="bg-blue-600 px-4 py-2 rounded-md"
          onPress={handleSubmit(onSubmit)}
        >
          <Text className="text-white text-center font-medium">Ingresar</Text>
        </Pressable>
        <Pressable
          className="bg-gray-300 px-4 py-2 rounded-md"
          onPress={() => reset()}
        >
          <Text className="text-black text-center font-medium">Restablecer</Text>
        </Pressable>
      </View>
    </>
  )
}