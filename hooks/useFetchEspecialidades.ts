import { useState, useEffect } from 'react';
import { getSpecialtiesAPI } from '@/api/medico/especialidades/getMedicoSpecialtiesAPI';
import { Especialidad } from '@types/especialidad.types';
import { EspecialidadesResponse } from '@types/especialidadesResponse.types';

export const useFetchEspecialidades = () => {
  
  const [especialidades, setEspecialidades] = useState<Especialidad[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const getEspecialidades = async () => {
      try {
        setLoading(true);
        const response: EspecialidadesResponse = await getSpecialtiesAPI();
        
        if (!response.data || Object.keys(response.data.especialidades).length === 0) {
          setError('No se encontraron especialidades.');
        } else {
          const especialidadesArray = Object.entries(response.data.especialidades).map(([id, nombre]) => ({
            id,
            nombre,
          }));
          setEspecialidades(especialidadesArray);
        }
      } catch {
        setError('Error al obtener especialidades');
      } finally {
        setLoading(false);
      }
    };

    getEspecialidades();
  }, []);

  return { especialidades, loading, error };
};
