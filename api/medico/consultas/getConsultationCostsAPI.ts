// api/getConsultationCostsAPI.ts

import { ConsultationCostsResponse } from '@api/medico/consultas/responses/ConsultationCostsResponse';
import { API_BASE_URL } from '@env';

async function fetchConsultationCosts(token: string): Promise<ConsultationCostsResponse> {
  const url = `${API_BASE_URL}/medico/costos-consulta`;

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

    return await response.json();
    
  } catch (error) {
    handleFetchError(error);
    throw error; // Re-lanza el error después de manejarlo
  }
}

function handleFetchError(error: unknown) {
  const errorMessage = error instanceof Error ? error.message : 'Error desconocido';
  console.error('Error al obtener los costos de consulta:', errorMessage);
}

export const getConsultationCostsAPI = async (token: string): Promise<ConsultationCostsResponse> => {
  return await fetchConsultationCosts(token);
};
