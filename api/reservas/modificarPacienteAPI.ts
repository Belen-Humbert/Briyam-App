// api/modificarPacienteAPI.ts

import { ModificarPacienteResponse } from '@api/reservas/responses/ModificarPacienteResponse';
import { API_BASE_URL } from '@env';

export async function modificarPacienteAPI(
  folio: string,
  nombre: string,
  apellidos: string,
  telefono: string,
  token: string
): Promise<ModificarPacienteResponse> {
  
  try {
    const response = await fetch(`${API_BASE_URL}/api/v2/reserva/agregar-paciente`, {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${token}`,
        'Content-Type': 'application/x-www-form-urlencoded',
      },
      body: new URLSearchParams({
        folio,
        nombre,
        apellidos,
        telefono,
      }).toString(),
    });

    const data: ModificarPacienteResponse = await response.json();

    if (!response.ok) {
      throw new Error(data.message);
    }

    
    return data;
  } catch (error) {
    throw error;
  }
}
