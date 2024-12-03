import { useState, useEffect } from 'react';
import { getSucursalesAPI } from '@api/sucursales/getSucursalesAPI';
import { Sucursal } from '@types/Sucursal.types';
import { UseGetSucursalesLogicReturn } from '@/types/UseGetSucursalesLogicReturn.types';

export const useGetSucursalesLogic = (): UseGetSucursalesLogicReturn => {

  const [branches, setBranches] = useState<Sucursal[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string>('');

  useEffect(() => {

    const fetchBranches = async () => {

      try {
        
        const data = await getSucursalesAPI();
        
        setBranches(data.data);
        setError('');
      } catch (err: any) {
        setError('Error al obtener las sucursales.');
      } finally {
        setLoading(false);
      }
    };

    fetchBranches();

  }, []);

  return { branches, loading, error };
};

export default useGetSucursalesLogic;
