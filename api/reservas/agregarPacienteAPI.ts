// api/actualizarPacienteAPI.ts

import { ActualizarPacienteResponse } from '@/api/reservas/responses/AgregarPacienteResponse';
import { API_BASE_URL } from '@env';

export async function actualizarPacienteAPI(
  folio: string,
  nombre: string,
  apellidos: string,
  telefono: string,
  recordatorio_sms: string,
  token: string
): Promise<ActualizarPacienteResponse> {
  
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
        recordatorio_sms,
      }).toString(),
    });

    if (!response.ok) {
      throw new Error(`Error en la solicitud: ${response.statusText}`);
    }

    const data: ActualizarPacienteResponse = await response.json();
    
    return data;
  } catch (error) {
    throw error;
  }
}
