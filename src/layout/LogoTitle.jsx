import { Image } from 'react-native'
import React from 'react'
import images from '../config/images'

const LogoTitle = () => {
  return (
    <Image
      source={images.logoHorB} // Ruta del logo en tu proyecto
      style={{ width: 120, height: 40, resizeMode: 'contain' }}
    />
  )
}

export default LogoTitle