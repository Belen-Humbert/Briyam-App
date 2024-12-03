// api/getComoSeEnteroAPI.ts
import { GetComoSeEnteroResponse } from '@api/catalogos/responses/getComoSeEnteroResponseAPI';
import { API_BASE_URL } from '@env';

let cachedComoSeEntero: GetComoSeEnteroResponse | null = null;
let cacheExpirationTime: number | null = null;
const CACHE_DURATION = 5 * 60 * 1000; // 5 minutos de duración para el caché

async function fetchComoSeEntero(): Promise<GetComoSeEnteroResponse> {
  try {
    const response = await fetch(`${API_BASE_URL}/cat/como-se-entero`, {
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
    throw error; // Re-lanza el error después de manejarlo
  }
}

function handleFetchError(error: unknown) {
  const errorMessage = error instanceof Error ? error.message : 'Error desconocido';
  console.error('Error al obtener "Cómo se enteró":', errorMessage);
}

export async function getComoSeEnteroAPI(): Promise<GetComoSeEnteroResponse> {
  const currentTime = Date.now();
  if (cachedComoSeEntero && cacheExpirationTime && currentTime < cacheExpirationTime) {
    return cachedComoSeEntero;
  }

  try {
    cachedComoSeEntero = await fetchComoSeEntero();
    cacheExpirationTime = currentTime + CACHE_DURATION; // Actualiza el tiempo de expiración del caché
    return cachedComoSeEntero;
  } catch (error) {
    throw error; // El error ya ha sido manejado en `fetchComoSeEntero`
  }
}
