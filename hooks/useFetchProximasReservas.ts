import { useState, useEffect } from 'react';
import { getProximasReservasAPI } from '@api/reservas/getProximasReservasAPI';
import { ProximasReservasResponse } from '@api/reservas/responses/ProximasReservasResponse';

export const useFetchProximasReservas = (sucursal: string) => {
    const [items, setItems] = useState<ProximasReservasResponse['data']>([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchReservas = async () => {
            setLoading(true); // Indicamos que la carga ha comenzado

            try {
                const response = await getProximasReservasAPI(sucursal);

                if (!response.error) {
                    setItems(response.data);
                } else {
                    // Manejo de error en la respuesta de la API si es necesario
                }
            } catch (error) {
                // Manejo de error en la obtención de reservas si es necesario
            } finally {
                setLoading(false); // Indicamos que la carga ha finalizado
            }
        };

        fetchReservas();
        
    }, [sucursal]);

    return { items, loading };
};
