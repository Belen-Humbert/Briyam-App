// api/getSpecialtiesAPI.ts

import { SpecialtiesResponse } from '@/api/medico/especialidades/responses/SpecialtiesMedicoResponse';
import { API_BASE_URL } from '@env';

export const getSpecialtiesAPI = async (): Promise<SpecialtiesResponse> => {
  
  const url = `${API_BASE_URL}/medico/experiencia/especialidades`;
  
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

    const data: SpecialtiesResponse = await response.json();
    
    return data;

  } catch (error) {
    throw error;
  } finally {
    
  }
};
