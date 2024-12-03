import { API_BASE_URL } from '@env';
import { GetMedicosSaldosResponse } from '@api/saldos/responses/GetMedicosSaldosResponse';
import AsyncStorage from '@react-native-async-storage/async-storage';

export async function getMedicosSaldosAPI(): Promise<GetMedicosSaldosResponse> {
    const url = `${API_BASE_URL}/medico/saldos`;

    try {
        // Obtener el token Bearer de AsyncStorage
        const token = await AsyncStorage.getItem('authToken');

        // Configurar los encabezados, incluyendo el token Bearer
        const headers = {
            Authorization: `Bearer ${token}`, // Agregar el token Bearer aquí
        };

        const response = await fetch(url, {
            method: 'GET',
            headers: headers,
        });

        if (!response.ok) {
            throw new Error(`Error en la solicitud: ${response.statusText}`);
        }

        const data: GetMedicosSaldosResponse = await response.json();
        return data;
    } catch (error) {
        throw error; // Vuelve a lanzar el error para manejarlo en otro lugar si es necesario
    }
}
