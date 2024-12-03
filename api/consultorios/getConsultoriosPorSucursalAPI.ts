import AsyncStorage from '@react-native-async-storage/async-storage';
import { Consultorio } from '../../types/Consultorio.types';
import { API_BASE_URL } from '@env';

async function fetchConsultorios(idSucursal: string, token: string): Promise<Consultorio[]> {
  const url = `${API_BASE_URL}/cat/consultorios/${idSucursal}`;
  
  try {
    const response = await fetch(url, {
      method: 'GET',
      headers: {
        'Authorization': `Bearer ${token}`,
        'Content-Type': 'application/json',
      },
    });

    const result = await response.json();

    if (!response.ok) {
      console.error('[getConsultoriosPorSucursalAPI] - Error en respuesta. Estado:', response.status);
      console.error('[getConsultoriosPorSucursalAPI] - Mensaje de error recibido:', result.message);
      throw new Error(result.message || 'Error desconocido');
    }

    return result.data as Consultorio[];

  } catch (error) {
    handleFetchError(error, 'getConsultoriosPorSucursalAPI');
    throw error; // Re-lanza el error después de manejarlo
  }
}

function handleFetchError(error: unknown, source: string) {
  const errorMessage = error instanceof Error ? error.message : 'Error desconocido';
  console.error(`[${source}] - Ocurrió un error durante la solicitud a la API:`, errorMessage);
}

export const getConsultoriosPorSucursalAPI = async (idSucursal: string): Promise<Consultorio[]> => {
  try {
    const token = await AsyncStorage.getItem('authToken');
    
    if (!token) {
      throw new Error('Token de autenticación no encontrado');
    }

    return await fetchConsultorios(idSucursal, token);

  } catch (error) {
    handleFetchError(error, 'getConsultoriosPorSucursalAPI');
    throw error;
  }
};
