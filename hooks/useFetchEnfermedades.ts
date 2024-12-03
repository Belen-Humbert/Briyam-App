import { useState, useEffect } from 'react';
import { getDiseasesAPI } from '@api/enfermedades/getDiseasesAPI';  // Ajusta la ruta de importación según corresponda
import { GetDiseasesResponse } from '@api/enfermedades/responses/GetDiseasesResponse';

export const useFetchEnfermedades = () => {
    
  const [enfermedades, setEnfermedades] = useState<string[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchEnfermedades = async () => {
      try {
        setLoading(true);

        const response: GetDiseasesResponse = await getDiseasesAPI();

        // Asegurándose de que la respuesta es adecuada
        if (!response || !response.data || !response.data.enfermedades) {
          throw new Error('Formato de respuesta inesperado');
        }

        const enfermedadesData = Object.values(response.data.enfermedades);
        setEnfermedades(enfermedadesData);
      } catch (err: any) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchEnfermedades();
  }, []);

  return { enfermedades, loading, error };
};
