import { useState, useEffect } from 'react';
import { getEducationalFormationAPI } from '@/api/medico/formacion/getEducationalFormationAPI'; // Asegúrate de ajustar la ruta
import { EducationalFormationResponse } from '@/api/medico/formacion/responses/EducationalFormationResponse';

export const useFetchFormacionAcademica = () => {

  const [formacion, setFormacion] = useState<EducationalFormationResponse | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    
    let isMounted = true; // Para prevenir fugas de memoria si el componente se desmonta

    const fetchFormacion = async () => {
      try {
        const formacionData = await getEducationalFormationAPI();
        if (isMounted) {
          setFormacion(formacionData);
          setLoading(false);
        }
      } catch (err: any) {
        if (isMounted) {
          setError(err.message);
          setLoading(false);
        }
      }
    };

    fetchFormacion();

    // Cleanup function para prevenir fugas de memoria
    return () => {
      isMounted = false;
    };
  }, []);

  return { formacion, loading, error };
};
