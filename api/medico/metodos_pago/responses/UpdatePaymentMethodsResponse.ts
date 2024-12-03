export interface UpdatePaymentMethodsResponse {
    error: boolean;
    message: string;
    data: {
      efectivo: number;
      tarjeta: number;
      transferencia: number;
    };
  }
  