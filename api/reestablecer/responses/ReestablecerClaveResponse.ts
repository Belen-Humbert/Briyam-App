// interfaces/ReestablecerClaveResponse.ts

export interface ReestablecerClaveResponse {
    error: boolean;
    message: string;
    data: {
      email: string;
    };
  }
  