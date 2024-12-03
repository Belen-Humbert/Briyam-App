// api/updateDiseasesAPI.ts

import Config from 'react-native-config';
import { UpdateDiseasesResponse } from '@api/enfermedades/responses/UpdateDiseasesResponse';
import { API_BASE_URL } from '@env';

async function sendUpdateDiseasesRequest(token: string, enfermedades: string[]): Promise<UpdateDiseasesResponse> {
  const url = `${API_BASE_URL}/medico/experiencia/enfermedades/modificar`;

  try {
    const response = await fetch(url, {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${token}`,
        'Content-Type': 'application/x-www-form-urlencoded',
      },
      body: new URLSearchParams({
        enfermedad_1: enfermedades[0],
        enfermedad_2: enfermedades[1],
        enfermedad_3: enfermedades[2],
        enfermedad_4: enfermedades[3],
      }),
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
  console.error('Error al actualizar las enfermedades:', errorMessage);
}

export const updateDiseasesAPI = async (
  token: string,
  enfermedad1: string,
  enfermedad2: string,
  enfermedad3: string,
  enfermedad4: string
): Promise<UpdateDiseasesResponse> => {
  return await sendUpdateDiseasesRequest(token, [enfermedad1, enfermedad2, enfermedad3, enfermedad4]);
};
