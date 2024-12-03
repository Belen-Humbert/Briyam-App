// hooks/sucursales/useFetchSucursales.ts
import { useState, useEffect } from 'react';
import { getSucursalesAPI } from '@api/sucursales/getSucursalesAPI';

export const useFetchSucursales = () => {
    
  const [items, setItems] = useState<{ id: string; nombre: string }[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchSucursales = async () => {
      try {
        const response = await getSucursalesAPI();
        setItems(response.data);
      } catch (error) {
      } finally {
        setLoading(false);
      }
    };

    fetchSucursales();
  }, []);

  return { items, loading };
};
