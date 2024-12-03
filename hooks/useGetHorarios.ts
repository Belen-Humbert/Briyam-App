import { useState, useEffect } from 'react';
import { getHorariosAPI } from '@api/medico/horarios/getHorariosAPI';
import { Horario } from '@types/Horario.types';
import { UseGetHorariosReturn } from '@types/UseGetHorariosReturn.types';

const useGetHorarios = (
  fecha: string | null,
  sucursal: string | null,
  consultorio: string | null
): UseGetHorariosReturn => {
  const [horarios, setHorarios] = useState<Horario[]>([]);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchHorarios = async () => {
      if (!fecha || !sucursal || !consultorio) return;

      setLoading(true);
      setError(null);

      try {
        const horariosData: Horario[] = await getHorariosAPI(fecha, sucursal, consultorio);
        setHorarios(horariosData);
      } catch (err) {
        setError('Error al obtener los horarios.');
        console.error(err);
      } finally {
        setLoading(false);
      }
    };

    fetchHorarios();
  }, [fecha, sucursal, consultorio]);

  return { horarios, loading, error };
};

export default useGetHorarios;
