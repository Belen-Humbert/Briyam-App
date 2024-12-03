// api/fetchProfilePhotoAPI.ts

import { ProfilePhotoResponse } from '@api/medico/responses/ProfilePhotoResponse';
import { API_BASE_URL } from '@env';

export const fetchProfilePhotoAPI = async (token: string): Promise<ProfilePhotoResponse> => {
  
  try {
    // Send the GET request
    const response = await fetch(`${API_BASE_URL}/medico/foto-perfil`, {
      method: 'GET',
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });

    if (!response.ok) {
      throw new Error('Failed to fetch profile photo');
    }

    // Parse and return JSON response
    const data: ProfilePhotoResponse = await response.json();
    
    return data;

  } catch (error) {
    throw error;
  } finally {
    
  }
};
