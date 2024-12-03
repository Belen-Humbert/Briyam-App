// api/eliminarEquipoAPI.ts

import { EliminarEquipoResponse } from '@api/reservas/responses/EliminarEquipoResponse';
import { API_BASE_URL } from '@env';

export async function eliminarEquipoAPI(
  folio: string,
  token: string
): Promise<EliminarEquipoResponse> {
  
  try {
    const response = await fetch(`${API_BASE_URL}/api/v2/reserva/eliminar-equipo`, {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${token}`,
        'Content-Type': 'application/x-www-form-urlencoded',
      },
      body: new URLSearchParams({
        folio,
      }).toString(),
    });

    if (!response.ok) {
      throw new Error(`Error en la solicitud: ${response.statusText}`);
    }

    const data: EliminarEquipoResponse = await response.json();
    
    return data;
  } catch (error) {
    throw error;
  }
}
