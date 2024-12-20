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

    // Verifica si el valor no es null y si es un JSON válido
    if (value !== null) {
      try {
        return JSON.parse(value); // Intenta parsearlo como JSON
      } catch (e) {
        return value; // Si no es JSON, devuelve el valor tal cual
      }
    }
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
