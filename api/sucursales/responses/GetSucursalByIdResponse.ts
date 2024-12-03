// interfaces/GetSucursalByIdResponse.ts

export interface Sucursal {
    id: string;
    clave: string;
    nombre: string;
  }
  
  export interface GetSucursalByIdResponse {
    error: boolean;
    message: string;
    data: Sucursal;
  }
  