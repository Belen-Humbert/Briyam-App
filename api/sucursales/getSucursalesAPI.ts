// getSucursalesAPI.ts
import { API_BASE_URL } from '@env';
import { GetSucursalesResponse } from '@api/sucursales/responses/GetSucursalesResponse';

// Variable de caché local
let cachedSucursales: GetSucursalesResponse | null = null;

export async function getSucursalesAPI(): Promise<GetSucursalesResponse> {
  
  // Si hay datos en caché, los devuelve inmediatamente sin hacer una nueva solicitud
  if (cachedSucursales) {
    return cachedSucursales;
  }

  try {
    const response = await fetch(`${API_BASE_URL}/cat/sucursales`, {
      method: 'GET',
      headers: {
        // Headers adicionales si son necesarios
      },
    });

    if (!response.ok) {
      throw new Error(`Error en la solicitud: ${response.statusText}`);
    }

    const data: GetSucursalesResponse = await response.json();

    // Almacena los datos en caché para futuros llamados
    cachedSucursales = data;

    return data;
  } catch (error) {
    // Consola solo en caso de error, útil para depuración
    console.error("Error al obtener sucursales:", error);
    throw error;
  }
}
