import { UpdateSpecialtiesResponse } from '@/api/medico/especialidades/responses/UpdateSpecialtiesResponse';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { API_BASE_URL } from '@env';

export const updateSpecialtiesAPI = async (
  specialties: { especialidad_1: string; especialidad_2: string; especialidad_3: string; especialidad_4: string }
): Promise<UpdateSpecialtiesResponse> => {

  const url = `${API_BASE_URL}/medico/experiencia/especialidades/modificar`;

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
      body: new URLSearchParams(specialties as any),
    });

    if (!response.ok) {
      throw new Error(`Error en la solicitud: ${response.statusText}`);
    }

    const data: UpdateSpecialtiesResponse = await response.json();
    
    return data;

  } catch (error) {
    throw error;
  } finally {
    // Opcional: puedes realizar acciones adicionales aquí, si es necesario
  }
};