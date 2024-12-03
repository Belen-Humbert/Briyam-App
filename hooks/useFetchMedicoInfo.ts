import { useState, useEffect } from 'react';
import { getMedicoInfoAPI } from '@api/medico/getMedicoInfoAPI'; // Ajusta la ruta de importación según tu estructura de carpetas
import { MedicoInfoResponse } from '@api/medico/responses/medicoInfoResponse';

export const useFetchMedicoInfo = () => {

  const [medicoInfo, setMedicoInfo] = useState<MedicoInfoResponse | null>(null); // Estado para almacenar la información del médico
  const [loading, setLoading] = useState<boolean>(true);        // Estado de carga
  const [error, setError] = useState<string | null>(null);      // Estado para almacenar errores

  useEffect(() => {

    const fetchData = async () => {
      
      try {
        setLoading(true);  // Inicia la carga
        
        const data = await getMedicoInfoAPI();  // Llama a la función API
        
        if (!data || Object.keys(data).length === 0) {
          setError('La respuesta de la API está vacía o no tiene datos válidos.');
          return;
        }

        setMedicoInfo(data);  // Guarda la información del médico en el estado

      } catch (err) {
        const errorMessage = err instanceof Error ? err.message : 'Error desconocido';
        setError(errorMessage); // Manejo de errores
        console.error('Error fetching data:', errorMessage);
      } finally {
        setLoading(false);  // Finaliza la carga
      }
    };

    fetchData();  // Llama a la función para obtener la información al montar el componente

    return () => {
    };
  }, []);

  return { medicoInfo, loading, error };  // Retorna el estado
};
