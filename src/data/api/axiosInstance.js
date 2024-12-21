import axios from 'axios';
import { useAuthStore } from '../../../store/authStore';


const myAxios = axios.create({
  baseURL: import.meta.env.VITE_BACKEND_URL,
  timeout: 1000 * 10, // Tiempo de espera máximo de 10 segundos
  headers: {
    'Content-Type': 'application/json',
  },
});

// Interceptor para agregar el Bearer Token si está disponible
myAxios.interceptors.request.use((config) => {

  const token = useAuthStore.getState().token;

  if (token) { config.headers.Authorization = `Bearer ${token}`; }

  return config;
}, (error) => {
  console.error('Error en el interceptor de request:', error);
  return Promise.reject(error);
});

// Interceptor de respuesta para manejar errores globalmente (opcional)
myAxios.interceptors.response.use(
  (response) => response,
  (error) => {
    console.error('Error en la respuesta:', error.response || error.message);
    return Promise.reject(error);
  }
);

export default myAxios;
