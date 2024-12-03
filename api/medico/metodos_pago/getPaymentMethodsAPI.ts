// api/getPaymentMethodsAPI.ts

import { PaymentMethodsResponse } from '@api/medico/metodos_pago/responses/PaymentMethodsResponse';
import { API_BASE_URL } from '@env';
import AsyncStorage from '@react-native-async-storage/async-storage';

export const getPaymentMethodsAPI = async (): Promise<PaymentMethodsResponse> => {
  
  const url = `${API_BASE_URL}/medico/metodos-pago`;

  try {
    
    // Recuperar el authToken de AsyncStorage
    const authToken = await AsyncStorage.getItem('authToken');
    
    const response = await fetch(url, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        ...(authToken ? { Authorization: `Bearer ${authToken}` } : {}), // Agregar authToken si existe
      },
    });

    if (!response.ok) {
      const errorMessage = `Error en la solicitud: ${response.statusText}`;
      throw new Error(errorMessage);
    }

    const data: PaymentMethodsResponse = await response.json();
    
    return data;

  } catch (error) {
    throw error;
  } finally {
  }
};
