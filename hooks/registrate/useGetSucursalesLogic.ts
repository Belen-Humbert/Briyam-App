import { useState, useEffect } from 'react';
import { getSucursalesAPI } from '@api/sucursales/getSucursalesAPI'; // Asegúrate de importar correctamente
import { GetSucursalesResponse } from '@/api/sucursales/responses/GetSucursalesResponse';

export const useGetSucursalesLogic = () => {
  const [branches, setBranches] = useState<GetSucursalesResponse>(); // Estado para las sucursales
  const [loading, setLoading] = useState<boolean>(true); // Estado de carga
  const [error, setError] = useState<string>(''); // Estado de error

  useEffect(() => {

    const fetchBranches = async () => {
      
      try {
        
        const data = await getSucursalesAPI(); // Llama a la API

        setBranches(data); // Establece los datos de sucursales en el estado
        setError(''); // Resetea el error si todo va bien
        
      } catch (err: any) {
        
        // Log del error en caso de fallo
        console.error('[useGetSucursalesLogic] - Error al obtener sucursales:', err.message);
        
        setError('Error al obtener las sucursales.'); // Establece el error en el estado

      } finally {
        
        setLoading(false); // Detiene el estado de carga
      }
    };

    fetchBranches(); // Ejecuta la función al montar el componente

  }, []); // Solo ejecuta la función una vez al montar el componente

  // Retorna las sucursales, estado de carga y estado de error
  return { branches, loading, error };
};

export default useGetSucursalesLogic;
