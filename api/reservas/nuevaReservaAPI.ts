// api/nuevaReservaAPI.ts

import { NuevaReservaResponse } from '@api/reservas/responses/nuevaReservaResponse';
import { API_BASE_URL } from '@env';

export async function nuevaReservaAPI(
  fecha: string,
  hora: string,
  consultorio: string,
  sucursal: string,
  token: string
): Promise<NuevaReservaResponse> {
  
  try {
    const response = await fetch(`${API_BASE_URL}/api/v2/reserva/nueva`, {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${token}`,
        'Content-Type': 'application/x-www-form-urlencoded',
      },
      body: new URLSearchParams({
        fecha,
        hora,
        consultorio,
        sucursal,
      }).toString(),
    });

    if (!response.ok) {
      throw new Error(`Error en la solicitud: ${response.statusText}`);
    }

    const data: NuevaReservaResponse = await response.json();
    
    return data;
  } catch (error) {
    throw error;
  }
}
