import { UpdateScheduleResponse } from '@api/medico/horarios/responses/UpdateScheduleResponse';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { API_BASE_URL } from '@env';

export const updateScheduleAPI = async (dia: number, de: string, hasta: string): Promise<UpdateScheduleResponse> => {
  
  const url = `${API_BASE_URL}/medico/horarios/modificar`;
  
  // Obtener el token de AsyncStorage
  const token = await AsyncStorage.getItem('authToken'); // Cambia 'authToken' si el nombre es diferente

  if (!token) {
    throw new Error('Error: Token de autenticación no encontrado');
  }

  try {
    const response = await fetch(url, {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${token}`,
        'Content-Type': 'application/x-www-form-urlencoded',
      },
      body: new URLSearchParams({
        dia: dia.toString(),
        de,
        hasta,
      }).toString(),
    });

    if (!response.ok) {
      throw new Error(`Error en la solicitud: ${response.statusText}`);
    }

    const data: UpdateScheduleResponse = await response.json();
    
    return data;

  } catch (error) {
    throw error;
  } finally {
    // Opcional: puedes realizar acciones adicionales aquí, si es necesario
  }
};
