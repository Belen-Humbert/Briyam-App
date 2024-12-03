// api/getDiseasesAPI.ts

import { GetDiseasesResponse } from '@api/enfermedades/responses/GetDiseasesResponse';
import { API_BASE_URL } from '@env';

async function fetchDiseases(): Promise<GetDiseasesResponse> {
  const url = `${API_BASE_URL}/medico/experiencia/enfermedades`;

  try {
    const response = await fetch(url, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
    });

    if (!response.ok) {
      throw new Error(`Error en la solicitud: ${response.statusText}`);
    }

    return await response.json();
    
  } catch (error) {
    handleFetchError(error);
    throw error;
  }
}

function handleFetchError(error: unknown) {
  const errorMessage = error instanceof Error ? error.message : 'Error desconocido';
  console.error('Error al obtener las enfermedades:', errorMessage);
}

export const getDiseasesAPI = async (): Promise<GetDiseasesResponse> => {
  return await fetchDiseases();
};
