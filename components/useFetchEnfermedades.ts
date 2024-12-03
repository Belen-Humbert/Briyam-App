// useFetchEnfermedades.ts
import { useState, useEffect } from 'react';
import { getDiseasesAPI } from '@api/enfermedades/getDiseasesAPI'; // Ajusta la ruta de importación según corresponda
import { GetDiseasesResponse } from '@api/enfermedades/responses/GetDiseasesResponse';

export const useFetchEnfermedades = () => {

  const [enfermedades, setEnfermedades] = useState<string[]>();
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchEnfermedades = async () => {
      
      try {
        setLoading(true);

        const response: GetDiseasesResponse = await getDiseasesAPI();

        // Asegurándose de que la respuesta es adecuada
        if (!response || !response.data || !response.data.enfermedades) {
          console.error('[useFetchEnfermedades] - Formato de respuesta inesperado:', response);
          throw new Error('Formato de respuesta inesperado');
        }

        const enfermedadesData = Object.values(response.data.enfermedades);
        
        setEnfermedades(enfermedadesData);
      } catch (err: any) { // Cambiar a "any" para obtener el mensaje de error
        console.error('[useFetchEnfermedades] - Error al obtener las enfermedades:', err.message);
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchEnfermedades();
  }, []);

  return { enfermedades, loading, error };
};
