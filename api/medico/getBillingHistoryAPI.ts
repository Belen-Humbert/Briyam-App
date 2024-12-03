// api/getBillingHistoryAPI.ts

import { BillingHistoryResponse } from '@api/medico/responses/BillingHistoryResponse';
import { API_BASE_URL } from '@env';

export const getBillingHistoryAPI = async (token: string, year: number, sucursal: number): Promise<BillingHistoryResponse> => {
  const url = `${API_BASE_URL}/medico/historial-facturación?y=${year}&sucursal=${sucursal}`;
  
  try {
    const response = await fetch(url, {
      method: 'GET',
      headers: {
        'Authorization': `Bearer ${token}`,
        'Content-Type': 'application/json',
      },
    });

    if (!response.ok) {
      throw new Error(`Error en la solicitud: ${response.statusText}`);
    }

    const data: BillingHistoryResponse = await response.json();
    
    return data;

  } catch (error) {
    throw error;
  } finally {
    
  }
};
