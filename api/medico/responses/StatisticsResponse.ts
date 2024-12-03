export interface StatisticsResponse {
    error: boolean;
    message: string;
    data: {
      saldo_monedero: string;
      saldo_plan: string;
      monto_gasto: string;
      horas_anual: string;
      dataMonto: Array<{
        label: string;
        value: string;
        color: string;
      }>;
      dataMontoAcumulado: Array<{
        label: string;
        value: string;
        color: string;
      }>;
      dataHoras: Array<{
        label: string;
        value: string;
        color: string;
      }>;
      dataHorasAcumulado: Array<{
        label: string;
        value: string;
        color: string;
      }>;
      productos: Array<{
        label: string;
        value: string;
      }>;
    };
  }
  