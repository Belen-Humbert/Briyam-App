// api/updateEducationalFormationAPI.ts

import { UpdateEducationalFormationResponse } from '@/api/medico/formacion/responses/UpdateEducationalFormationResponse';
import { API_BASE_URL } from '@env';

export const updateEducationalFormationAPI = async (
  token: string,
  formacion1: string,
  formacion2: string,
  formacion3: string,
  formacion4: string
): Promise<UpdateEducationalFormationResponse> => {
  const url = `${API_BASE_URL}/medico/experiencia/formacion/modificar`;
  
  const body = new URLSearchParams();
  body.append('formacion_1', formacion1);
  body.append('formacion_2', formacion2);
  body.append('formacion_3', formacion3);
  body.append('formacion_4', formacion4);

  try {
    const response = await fetch(url, {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${token}`,
        'Content-Type': 'application/x-www-form-urlencoded',
      },
      body: body.toString(),
    });

    if (!response.ok) {
      throw new Error(`Error en la solicitud: ${response.statusText}`);
    }

    const data: UpdateEducationalFormationResponse = await response.json();
    
    return data;

  } catch (error) {
    throw error;
  } finally {
    
  }
};
