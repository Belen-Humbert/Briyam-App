// api/getScheduleAPI.ts

import { ScheduleResponse } from '@api/medico/horarios/responses/ScheduleResponse';
import { API_BASE_URL } from '@env';
import AsyncStorage from '@react-native-async-storage/async-storage'; // Importa AsyncStorage

export const getScheduleAPI = async (): Promise<ScheduleResponse> => {
  const url = `${API_BASE_URL}/medico/horarios`;
  
  try {
    const authToken = await AsyncStorage.getItem('authToken'); // Obtén el token de AsyncStorage
    
    const response = await fetch(url, {
      method: 'GET',
      headers: {
        'Authorization': `Bearer ${authToken}`, // Usa el token obtenido
        'Content-Type': 'application/json',
      },
    });

    if (!response.ok) {
      const errorMessage = `Error en la solicitud: ${response.statusText}`;
      throw new Error(errorMessage);
    }

    const data: ScheduleResponse = await response.json();
    
    return data;

  } catch (error) {
    throw error;
  } finally {
  }
};
