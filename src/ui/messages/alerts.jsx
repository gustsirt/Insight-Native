import Toast from 'react-native-toast-message';

const mapColors = {
  success: "#EBFFD3",
  error: "#FFD3D9",
  warning: "#FFF7D4",
  info: "#D6EAFE",
  question: "#CBC3C3",
}

export const alertMessage = (title, icon = "", time = 3) => {
  const backgroundColor = icon && mapColors[icon];

  Toast.show({
    type: 'success',
    text1: title,
    position: 'top',
    visibilityTime: time * 1000,
    style: { backgroundColor },
  });
};

export const alertAreYouSure = (action) => {
  // similar to the Alert example but using Toast as confirmation
  Toast.show({
    type: 'error',
    text1: '¿Estás seguro?',
    text2: 'Este cambio es irreversible',
    onPress: () => {
      action && action();
      Toast.show({
        type: 'success',
        text1: '¡Eliminado!',
      });
    },
  });
};
