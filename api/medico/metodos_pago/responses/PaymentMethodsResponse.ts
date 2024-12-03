export interface PaymentMethodsResponse {
    error: boolean;
    message: string;
    data: {
      metodos: {
        efectivo: number;
        tarjeta: number;
        transferencia: number;
      };
    };
  }
  