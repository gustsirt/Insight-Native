import { getItem, removeItem, setItem } from "./storage";

// Llave para almacenar el token
const TOKEN_KEY = "auth_token";

// Obtener el token desde el almacenamiento
export function getToken() {
  return getItem(TOKEN_KEY);
}

// Guardar el token en el almacenamiento
export function setToken(token) {
  return setItem(TOKEN_KEY, token);
}

// Eliminar el token del almacenamiento
export function removeToken() {
  return removeItem(TOKEN_KEY);
}
