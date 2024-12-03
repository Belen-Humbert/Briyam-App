// api/getBranchScheduleAPI.ts

import { BranchScheduleResponse } from '@api/medico/horarios/responses/BranchScheduleResponse';
import { API_BASE_URL } from '@env';

export const getBranchScheduleAPI = async (token: string, fecha: string, sucursal: number, consultorio: number): Promise<BranchScheduleResponse> => {
  const url = `${API_BASE_URL}/cat/horarios?fecha=${fecha}&sucursal=${sucursal}&consultorio=${consultorio}`;
  
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

    const data: BranchScheduleResponse = await response.json();
    
    return data;

  } catch (error) {
    throw error;
  } finally {
    
  }
};
