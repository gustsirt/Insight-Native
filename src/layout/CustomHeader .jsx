import { Image, Text, View } from 'react-native'
import React from 'react'
import images from '../config/images'

const CustomHeader = (props) => {
  // console.log(props);

  return (
    <View className="w-full flex-1 flex-row items-center gap-2 justify-between">
      {/* Nombre a la izquierda */}
      <Text className="text-lg text-white font-bold">{props.children}</Text>

      {/* Logo a la derecha */}
      <Image
        source={images.logoHorB}
        className=""
        style={{ width: 120, height: 40, resizeMode: 'contain' }} />
    </View>
  )
}

export default CustomHeader 