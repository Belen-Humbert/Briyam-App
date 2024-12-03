import { UpdatePaymentMethodsResponse } from '@api/medico/metodos_pago/responses/UpdatePaymentMethodsResponse';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { API_BASE_URL } from '@env';

export const updatePaymentMethodsAPI = async (
  efectivo: boolean,
  tarjeta: boolean,
  transferencia: boolean
): Promise<UpdatePaymentMethodsResponse> => {
  
  const url = `${API_BASE_URL}/medico/metodos-pago/modificar`;

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
        efectivo: String(efectivo),
        tarjeta: String(tarjeta),
        transferencia: String(transferencia),
      }).toString(),
    });

    if (!response.ok) {
      throw new Error(`Error en la solicitud: ${response.statusText}`);
    }

    const data: UpdatePaymentMethodsResponse = await response.json();
    
    return data;

  } catch (error) {
    throw error;

  } finally {
    // Opcional: puedes realizar acciones adicionales aquí, si es necesario
  }
};
