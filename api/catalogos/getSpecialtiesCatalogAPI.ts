// api/getSpecialtiesCatalogAPI.ts

import { SpecialtiesCatalogResponse } from '@/api/medico/especialidades/responses/SpecialtiesCatalogResponse';
import { API_BASE_URL } from '@env';

// Variables de caché y su expiración
let cachedSpecialties: SpecialtiesCatalogResponse | null = null;
let cacheExpirationTime: number | null = null;
const CACHE_DURATION = 10 * 60 * 1000; // Duración del caché de 10 minutos

async function fetchSpecialtiesCatalog(): Promise<SpecialtiesCatalogResponse> {
  const url = `${API_BASE_URL}/cat/especialidades`;
  
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
    throw error; // Re-lanza el error después de manejarlo
  }
}

function handleFetchError(error: unknown) {
  const errorMessage = error instanceof Error ? error.message : 'Error desconocido';
  console.error('Error al obtener el catálogo de especialidades:', errorMessage);
}

export const getSpecialtiesCatalogAPI = async (): Promise<SpecialtiesCatalogResponse> => {
  const currentTime = Date.now();

  if (cachedSpecialties && cacheExpirationTime && currentTime < cacheExpirationTime) {
    return cachedSpecialties;
  }

  try {
    cachedSpecialties = await fetchSpecialtiesCatalog();
    cacheExpirationTime = currentTime + CACHE_DURATION; // Actualiza la expiración del caché
    return cachedSpecialties;
  } catch (error) {
    throw error; // El error ya ha sido manejado en `fetchSpecialtiesCatalog`
  }
};
