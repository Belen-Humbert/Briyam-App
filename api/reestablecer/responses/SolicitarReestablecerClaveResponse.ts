// interfaces/SolicitarReestablecerClaveResponse.ts

export interface SolicitarReestablecerClaveResponse {
    error: boolean;
    message: string;
    data: {
      email: string;
    };
  }
  