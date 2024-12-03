import { MedicoInfoResponse } from '@api/medico/responses/medicoInfoResponse';
import { API_BASE_URL } from '@env';
import AsyncStorage from '@react-native-async-storage/async-storage';

export const getMedicoInfoAPI = async (): Promise<MedicoInfoResponse> => {

  try {
    
    // Leer el token desde AsyncStorage
    const authToken = await AsyncStorage.getItem('authToken');
    
    // Verificar si se obtuvo el token
    if (!authToken) {
      throw new Error('Token de autenticación no encontrado');
    }

    const response = await fetch(`${API_BASE_URL}/medico`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${authToken}`, // Añadir el token al header
      },
    });

    if (!response.ok) {
      throw new Error(`Error en la solicitud: ${response.statusText}`);
    }

    const data: MedicoInfoResponse = await response.json();
    
    return data;

  } catch (error) {
    throw error;
  } finally {
  }
};
