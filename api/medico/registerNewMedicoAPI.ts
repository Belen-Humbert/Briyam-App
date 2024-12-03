import { RegisterMedicoResponse } from './responses/RegisterMedicoResponse';
import { API_BASE_URL } from '@env';

interface RegisterMedicoParams {
  nombres: string;
  apaterno: string;
  amaterno: string;
  telefonoCelular: string;
  especialidad: string;
  subespecialidad: string;
  sucursal: string;
  comoSeEntero: string;
  email: string;
  password: string;
}

export const registerNewMedico = async (params: RegisterMedicoParams): Promise<RegisterMedicoResponse> => {

  try {

    const body = new URLSearchParams(params as any).toString();
    
    const response = await fetch(`${API_BASE_URL}/medico/nuevo`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
      },
      body: body,
    });

    if (!response.ok) {
      const errorBody = await response.text();
      throw new Error(`Error en la solicitud: ${errorBody}`);
    }

    const data: RegisterMedicoResponse = await response.json();
    
    return data;

  } catch (error) {
    
    throw error;
  } finally {
  }
};
