import { ReestablecerClaveResponse } from '@api/reestablecer/responses/ReestablecerClaveResponse';
import { API_BASE_URL } from '@env';

export async function reestablecerClaveAPI(email: string, password: string, codigo: string): Promise<ReestablecerClaveResponse> {

  const response = await fetch(`${API_BASE_URL}/reestablecer-clave`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded',
    },
    body: new URLSearchParams({
      password,
      email,
      codigo,
    }).toString(),
  });

  if (!response.ok) {
    console.error("Error en la solicitud:", response.statusText);
    throw new Error(`Error en la solicitud: ${response.statusText}`);
  }

  const data: ReestablecerClaveResponse = await response.json();
  
  return data;
}
