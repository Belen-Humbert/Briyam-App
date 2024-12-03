export interface ConsultationCostsResponse {
    error: boolean;
    message: string;
    data: {
      costos: {
        'costo-consulta': string;
        'costo-consulta-subsecuente': string;
      };
    };
  }
  