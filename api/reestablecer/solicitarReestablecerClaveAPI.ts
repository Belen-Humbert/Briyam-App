// api/solicitarReestablecerClaveAPI.ts
import { SolicitarReestablecerClaveResponse } from '@api/reestablecer/responses/SolicitarReestablecerClaveResponse';
import { API_BASE_URL } from '@env';

export async function solicitarReestablecerClaveAPI(email: string): Promise<SolicitarReestablecerClaveResponse> {
  
  const tokenEmail = btoa(email);
  
  const url = `${API_BASE_URL}/solicitar-reestablecer-clave?e=${tokenEmail}`;
  
  try {

    const response = await fetch(url, {
      method: 'GET',
    });
    
    if (!response.ok) {
      const errorData = await response.json();
      const errorMessage = errorData.message;
      throw new Error(`Error en la solicitud: ${errorMessage}`);
    }

    const data: SolicitarReestablecerClaveResponse = await response.json();
  
    return data;

  } catch (error) {
    throw error;
  } finally {
    
  }
}
