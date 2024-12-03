// api/loginAPI.ts
import { LoginResponse } from '@api/medico/responses/loginResponse';
import { API_BASE_URL } from '@env';

// Función para realizar el login
export const loginAPI = async (username: string, password: string): Promise<LoginResponse> => {

  try {
    
    // Configuración de la solicitud
    const formData = new FormData();
    formData.append('username', username);
    formData.append('password', password);

    // Construimos la URL para la solicitud
    const loginUrl = `${API_BASE_URL}/login`;
    
    // Realizamos la solicitud POST
    const response = await fetch(loginUrl, {
      method: 'POST',
      body: formData,
    });

    // Parseamos el JSON
    const data: LoginResponse = await response.json();
    
    return data;

  } catch (error) {
    throw error;
  } finally {
    
  }
};
