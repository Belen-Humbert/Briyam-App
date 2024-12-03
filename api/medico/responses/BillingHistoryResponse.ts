export interface BillingHistoryResponse {
    error: boolean;
    message: string;
    data: Array<{
      folio: string;
      fecha_aplicacion: {
        fecha: string;
        hora: string;
      };
      monto: string;
      forma_pago: string;
      facturo: string;
      fecha_factura: string | null;
      id_factura: string | null;
      documento: string | null;
    }>;
  }
  