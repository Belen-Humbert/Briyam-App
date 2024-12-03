// api/verificarReestablecerClaveAPI.ts
import { VerificarReestablecerClaveResponse } from '@api/reestablecer/responses/VerificarReestablecerClaveResponse';
import { API_BASE_URL } from '@env';

export async function verificarReestablecerClaveAPI(email: string, codigo: string): Promise<VerificarReestablecerClaveResponse> {
  
  try {

    const tokenEmail = btoa(email);
    
    const response = await fetch(`${API_BASE_URL}/verificar-reestablecer-clave?e=${tokenEmail}&c=${codigo}`, {
      method: 'GET',
    });

    // Intenta obtener el JSON de la respuesta incluso si hay un error
    const data = await response.json();

    if (!response.ok) {
      
      // Captura y registra en Sentry el mensaje de error detallado
      const errorMessage = data.message || 'Error desconocido';
      
      throw new Error(errorMessage);
    }

    return data as VerificarReestablecerClaveResponse;

  } catch (error: any) {
    throw new Error(error.message || 'Error al procesar la solicitud.');
  }
}
