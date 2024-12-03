import { UpdateFotoPerfilResponse } from '@types/updateFotoPerfilResponse';
import AsyncStorage from '@react-native-async-storage/async-storage';
import Config from 'react-native-config';

const API_BASE_URL = Config.API_BASE_URL;

export async function updateFotoPerfilAPI(foto: File): Promise<UpdateFotoPerfilResponse> {
  
    const token = await AsyncStorage.getItem('token'); // Asegúrate de que la clave del token sea la correcta

    if (!token) {
        throw new Error('Error: Token de autenticación no encontrado');
    }

    const formData = new FormData();
    formData.append('foto', foto);

    const response = await fetch(`${API_BASE_URL}/api/v2/medico/foto-perfil`, {
        method: 'POST',
        body: formData,
        headers: {
            'Accept': 'application/json',
            'Authorization': `Bearer ${token}`,
        },
    });

    if (!response.ok) {
        const errorResponse = await response.json();
        throw new Error(`Error en la solicitud: ${errorResponse.message || response.statusText}`);
    }

    return await response.json();
}
