// api/getEducationalFormationAPI.ts

import { EducationalFormationResponse } from '@/api/medico/formacion/responses/EducationalFormationResponse';
import { API_BASE_URL } from '@env';

export const getEducationalFormationAPI = async (): Promise<EducationalFormationResponse> => {
  
  const url = `${API_BASE_URL}/medico/experiencia/formacion`;
  
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

    const data: EducationalFormationResponse = await response.json();
    
    return data;

  } catch (error) {
    throw error;
  } finally {
    
  }
};
