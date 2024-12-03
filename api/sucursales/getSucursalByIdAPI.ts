// getSucursalByIdAPI.ts
import { API_BASE_URL } from '@env';
import { GetSucursalByIdResponse } from '@api/sucursales/responses/GetSucursalByIdResponse';

export async function getSucursalByIdAPI(token: string, sucursalId: string): Promise<GetSucursalByIdResponse> {
  
  const response = await fetch(`${API_BASE_URL}/cat/sucursal/${sucursalId}`, {
    method: 'GET',
    headers: {
      'Authorization': `Bearer ${token}`,
    },
  });

  if (!response.ok) {
    throw new Error(`Error en la solicitud: ${response.statusText}`);
  }

  const data: GetSucursalByIdResponse = await response.json();
  return data;
}
