// api/getStatisticsAPI.ts
import { StatisticsResponse } from '@api/medico/responses/StatisticsResponse';
import { API_BASE_URL } from '@env';

export const getStatisticsAPI = async (token: string): Promise<StatisticsResponse> => {
  const url = `${API_BASE_URL}/medico/estadisticas`;
  
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

    const data: StatisticsResponse = await response.json();
    
    return data;

  } catch (error) {
    throw error;
  } finally {
    
  }
};
