import AsyncStorage from '@react-native-async-storage/async-storage';
import { Horario } from '@types/Horario.types'; // Ajusta el import según la ubicación de tu tipo Horario
import { API_BASE_URL } from '@env';

/**
 * Obtiene los horarios disponibles para una fecha, sucursal y consultorio específicos.
 * @param {string} fecha - Fecha en formato "YYYY-MM-DD" para consultar los horarios.
 * @param {string} sucursal - ID de la sucursal para consultar los horarios.
 * @param {string} [consultorio='0'] - ID del consultorio para consultar los horarios, o '0' para todos los consultorios.
 * @returns {Promise<Horario[]>} - Promesa que se resuelve con los horarios disponibles.
 * @throws {Error} - Si ocurre un error durante la solicitud o si la respuesta no es exitosa.
 */
export const getHorariosAPI = async (fecha: string, sucursal: string, consultorio: string = '0'): Promise<Horario[]> => {
    
    try {
        const token = await AsyncStorage.getItem('authToken');
        
        if (!token) {
            throw new Error('Token de autenticación no encontrado');
        }

        const url = `${API_BASE_URL}/cat/horarios?fecha=${fecha}&sucursal=${sucursal}&consultorio=${consultorio}`;
        
        const response = await fetch(url, {
            headers: {
                'Authorization': `Bearer ${token}`,
                'Content-Type': 'application/json'
            }
        });

        const result = await response.json();

        if (!response.ok) {
            console.error('[getHorariosAPI] - La respuesta no es OK. Estado:', response.status);
            console.error('[getHorariosAPI] - Mensaje de error recibido:', result.message);
            throw new Error(result.message || 'Error desconocido');
        }

        return result.data as Horario[]; // Aseguramos el tipo de retorno

    } catch (err: any) {
        throw err;
    }
};
