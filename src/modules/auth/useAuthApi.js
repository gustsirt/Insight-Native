import { useState } from "react";
import myAxios from "../../data/api/axiosInstance";

export default function useAuthApi() {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [response, setResponse] = useState(null); // Estado para visualizar la respuesta de la API

  async function authenticate(option, credentials) {
    setLoading(true);
    setError(null);
    setResponse(null); // Limpiar la respuesta previa
    const url = option === 'login' ? '/v1/auth/login' : '/v1/auth/register';

    try {
      const res = await myAxios.post(url, credentials);
      const data = res.data;

      if (data?.isError) throw new Error(data.message);

      setResponse(data.data); // Guardar la respuesta exitosa de la API
    } catch (error) {
      setError(error.response?.data?.message || 'Authentication failed');
    } finally {
      setLoading(false);
    }
  }

  return {
    loading,
    error,
    response, // Exponer la respuesta para poder visualizarla
    authLogin: (credentials) => authenticate('login', credentials),
    authRegister: (credentials) => authenticate('register', credentials),
  };
}