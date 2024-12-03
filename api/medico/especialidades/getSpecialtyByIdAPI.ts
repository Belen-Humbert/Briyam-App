// api/getSpecialtyByIdAPI.ts

import { GetSpecialtyByIdResponse } from '@/api/medico/especialidades/responses/GetSpecialtyByIdResponse';import { API_BASE_URL } from '@env';

export const getSpecialtyByIdAPI = async (
  token: string,
  specialtyId: string
): Promise<GetSpecialtyByIdResponse> => {
  const url = `${API_BASE_URL}/cat/especialidad/${specialtyId}`;
  
  try {
    const response = await fetch(url, {
      method: 'GET',
      headers: {
        'Authorization': `Bearer ${token}`,
        'Content-Type': 'application/json',
      },
    });

    if (!response.ok) {
      throw new Error(`Error en la solicitud: ${response.statusText}`);
    }

    const data: GetSpecialtyByIdResponse = await response.json();
    
    return data;

  } catch (error) {
    throw error;
  } finally {
    
  }
};
