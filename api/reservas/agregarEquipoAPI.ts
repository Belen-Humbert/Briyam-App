// api/agregarEquipoAPI.ts

import { AgregarEquipoResponse } from '@api/reservas/responses/AgregarEquipoResponse';
import { API_BASE_URL } from '@env';

export async function agregarEquipoAPI(
  folio: string,
  id_equipo: string,
  periodo: string,
  token: string
): Promise<AgregarEquipoResponse> {
  
  try {
    const response = await fetch(`${API_BASE_URL}/api/v2/reserva/agregar-equipo`, {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${token}`,
        'Content-Type': 'application/x-www-form-urlencoded',
      },
      body: new URLSearchParams({
        folio,
        id_equipo,
        periodo,
      }).toString(),
    });

    if (!response.ok) {
      throw new Error(`Error en la solicitud: ${response.statusText}`);
    }

    const data: AgregarEquipoResponse = await response.json();
    
    return data;
  } catch (error) {
    throw error;
  }
}
