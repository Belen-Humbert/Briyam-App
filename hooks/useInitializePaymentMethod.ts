import { useEffect, useState } from 'react';
import { MetodosPago } from '@types/MetodosPago.types'; // Ajusta la ruta según la ubicación de la interfaz

export const useInitializePaymentMethod = (costo_consulta?: string, consulta_subsecuente?: string, metodosPago?: MetodosPago) => {
    
  const [selectedPaymentMethod, setSelectedPaymentMethod] = useState<string>("Efectivo");
  const [firstConsultationCost, setFirstConsultationCost] = useState<string>("0");
  const [followUpConsultationCost, setFollowUpConsultationCost] = useState<string>("0");

  useEffect(() => {
    
    setFirstConsultationCost(costo_consulta || "0");
    setFollowUpConsultationCost(consulta_subsecuente || "0");

    // Inicializa el método de pago basado en los datos del API de métodos de pago
    if (metodosPago?.efectivo === 1) {
      setSelectedPaymentMethod('Efectivo');
    } else if (metodosPago?.tarjeta === 1) {
      setSelectedPaymentMethod('Tarjeta');
    } else if (metodosPago?.transferencia === 1) {
      setSelectedPaymentMethod('Transferencia');
    }
  }, [metodosPago]);

  return {
    selectedPaymentMethod,
    setSelectedPaymentMethod,
    firstConsultationCost,
    setFirstConsultationCost, // Agregado
    followUpConsultationCost,
    setFollowUpConsultationCost, // Agregado
  };
};
