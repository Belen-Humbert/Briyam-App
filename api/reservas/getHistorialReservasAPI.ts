// api/getHistorialReservasAPI.ts

import { HistorialReservasResponse } from '@api/reservas/responses/HistorialReservasResponse';
import { API_BASE_URL } from '@env';

export async function getHistorialReservasAPI(
  sucursal: string,
  rows: string,
  token: string
): Promise<HistorialReservasResponse> {
  
  try {
    const response = await fetch(`${API_BASE_URL}/api/v2/medico/historial-reservas?sucursal=${sucursal}&rows=${rows}`, {
      method: 'GET',
      headers: {
        'Authorization': `Bearer ${token}`,
        'Content-Type': 'application/json',
      },
    });

    if (!response.ok) {
      throw new Error(`Error en la solicitud: ${response.statusText}`);
    }

    const data: HistorialReservasResponse = await response.json();
    
    return data;
  } catch (error) {
    throw error;
  }
}
