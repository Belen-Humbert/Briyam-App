// api/getPlanesAPI.ts
import { GetPlanesResponse } from '@api/catalogos/responses/GetPlanesResponse';
import { API_BASE_URL } from '@env';

async function fetchPlanes(token: string): Promise<GetPlanesResponse> {
  try {
    const response = await fetch(`${API_BASE_URL}/cat/planes`, {
      method: 'GET',
      headers: {
        'Authorization': `Bearer ${token}`,
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
  console.error('Error al obtener los planes:', errorMessage);
}

export async function getPlanesAPI(token: string): Promise<GetPlanesResponse> {
  if (!token) {
    throw new Error('El token de autorización es requerido.');
  }

  return await fetchPlanes(token);
}
