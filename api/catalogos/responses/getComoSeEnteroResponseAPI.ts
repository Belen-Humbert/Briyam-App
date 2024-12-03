// interfaces/GetComoSeEnteroResponse.ts

export interface Opcion {
    id: string;
    nombre: string;
  }
  
  export interface GetComoSeEnteroResponse {
    error: boolean;
    message: string;
    data: Opcion[];
  }
  