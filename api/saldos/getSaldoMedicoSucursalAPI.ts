// getSaldoMedicoSucursalAPI.ts
import { API_BASE_URL } from '@env';
import { GetSaldoMedicoSucursalResponse } from '@api/saldos/responses/GetSaldoMedicoSucursalResponse';

export async function getSaldoMedicoSucursalAPI(token: string, sucursalId: string): Promise<GetSaldoMedicoSucursalResponse> {
  
  const response = await fetch(`${API_BASE_URL}/medico/saldo/${sucursalId}`, {
    method: 'GET',
    headers: {
      'Authorization': `Bearer ${token}`,
    },
  });

  if (!response.ok) {
    throw new Error(`Error en la solicitud: ${response.statusText}`);
  }

  const data: GetSaldoMedicoSucursalResponse = await response.json();
  return data;
}
