import React from 'react';
import { MaterialIcons, FontAwesome, Ionicons, AntDesign, Feather } from '@expo/vector-icons';

export const icons = {
  addEle: (size = 24, color = 'black') => <FontAwesome name="plus-square" size={size} color={color} />, // Agregar Elemento
  back: (size = 24, color = 'black') => <AntDesign name="back" size={size} color={color} />, // volver atras
  deploy: (size = 24, color = 'black') => <MaterialIcons name="cloud-upload" size={size} color={color} />, // Deploy
  edit: (size = 24, color = 'black') => <MaterialIcons name="edit" size={size} color={color} />,// Editar contenido
  plus: (size = 24, color = 'black') => <Feather name="plus" size={size} color={color} />,// Agregar uno más
  repository: (size = 24, color = 'black') => <MaterialIcons name="bookmark-outline" size={size} color={color} />,// Repository
  reset: (size = 24, color = 'black') => <AntDesign name="reload1" size={size} color={color} />,// Resetear
  x: (size = 24, color = 'black') => <Ionicons name="close" size={size} color={color} />, // X de cerrar
};

// Ejemplo:

// import React from 'react';
// import { View, Text } from 'react-native';
// import { icons } from './IconProvider';  // Asegúrate de importar tu mapeo de iconos

// const App = () => {
//   return (
//     <View>
//       <Text>Icono X:</Text>
//       {icons.x(30, 'red')}  {/* Tamaño 30px, color rojo */}

//       <Text>Icono Plus (Tamaño por defecto, color por defecto):</Text>
//       {icons.plus()}  {/* Tamaño y color por defecto */}

//       ...
