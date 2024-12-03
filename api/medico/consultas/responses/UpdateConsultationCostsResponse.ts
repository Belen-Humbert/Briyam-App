export interface UpdateConsultationCostsResponse {
    error: boolean;
    message: string;
    data: {
      'costo-consulta': string;
      'costo-consulta-subsecuente': string;
    };
  }
  