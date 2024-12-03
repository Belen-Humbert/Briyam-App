// interfaces/VerificarReestablecerClaveResponse.ts

export interface VerificarReestablecerClaveResponse {
    error: boolean;
    message: string;
    data: {
      email: string;
      codigo: string;
    };
  }
  