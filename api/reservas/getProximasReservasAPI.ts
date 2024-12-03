import { ProximasReservasResponse } from '@api/reservas/responses/ProximasReservasResponse';
import { API_BASE_URL } from '@env';
import AsyncStorage from '@react-native-async-storage/async-storage';

export async function getProximasReservasAPI(
  sucursal: string
): Promise<ProximasReservasResponse> {

  try {
    // Obtener el token de AsyncStorage
    const token = await AsyncStorage.getItem('authToken');
    
    if (!token) {
      throw new Error('Token de autenticación no encontrado');
    }

    // Realizar la solicitud a la API
    const response = await fetch(`${API_BASE_URL}/medico/proximas-reservas?sucursal=${sucursal}&rows=25`, {
      method: 'GET',
      headers: {
        'Authorization': `Bearer ${token}`,
        'Content-Type': 'application/json',
      },
    });

    if (!response.ok) {
      throw new Error(`Error en la solicitud: ${response.statusText}`);
    }

    const data: ProximasReservasResponse = await response.json();
    
    return data;
  } catch (error) {
    throw error;
  }
}
