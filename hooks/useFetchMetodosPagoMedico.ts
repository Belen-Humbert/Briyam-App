import { useState, useEffect } from 'react';
import { getPaymentMethodsAPI } from '@api/medico/metodos_pago/getPaymentMethodsAPI';
import { MetodosPago, FetchError } from '@types/MetodosPago.types';
import { PaymentMethodsResponse } from '@api/medico/metodos_pago/responses/PaymentMethodsResponse';

export const useFetchMetodosPagoMedico = () => {
  
  const [metodosPago, setMetodosPago] = useState<MetodosPago>({
    efectivo: 0,
    tarjeta: 0,
    transferencia: 0,
  });

  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<FetchError>(null);

  useEffect(() => {
    
    const fetchMetodosPago = async () => {
      try {
        setLoading(true);
        
        const result: PaymentMethodsResponse = await getPaymentMethodsAPI();
        
        // Verifica que los datos sean válidos
        if (!result || !result.data.metodos) {
          throw new Error('Formato de respuesta inesperado');
        }

        // Actualizar el estado con los métodos de pago obtenidos
        setMetodosPago(result.data.metodos);
        
      } catch (err: unknown) {
        const errorMessage = err instanceof Error ? err.message : 'Error desconocido';
        setError(errorMessage);
      } finally {
        setLoading(false);
      }
    };

    fetchMetodosPago();
  }, []);

  return { metodosPago, loading, error };
};
