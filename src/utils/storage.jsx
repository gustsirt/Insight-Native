import AsyncStorage from "@react-native-async-storage/async-storage";
// para mayor rendimeinto luego se peude variar a react-native-mmkv

/**
 * Obtener un valor de AsyncStorage
 * @param {string} key - Clave del dato a recuperar
 * @returns {Promise<any>} - Valor almacenado o `null` si no existe
 */
export const getItem = async (key) => {
  try {
    const value = await AsyncStorage.getItem(key);
    return value ? JSON.parse(value) : null; // Intenta deserializar objetos
  } catch (error) {
    console.error("Error al obtener el dato:", error);
    return null;
  }
};

/**
 * Guardar un valor en AsyncStorage
 * @param {string} key - Clave para almacenar el dato
 * @param {any} value - Valor a almacenar
 */
export const setItem = async (key, value) => {
  try {
    const serializedValue =
      typeof value === "object" ? JSON.stringify(value) : value.toString();
    await AsyncStorage.setItem(key, serializedValue);
  } catch (error) {
    console.error("Error al guardar el dato:", error);
  }
};

/**
 * Eliminar un valor de AsyncStorage
 * @param {string} key - Clave del dato a eliminar
 */
export const removeItem = async (key) => {
  try {
    await AsyncStorage.removeItem(key);
  } catch (error) {
    console.error("Error al eliminar el dato:", error);
  }
};
