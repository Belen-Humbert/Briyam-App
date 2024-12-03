// interfaces/GetSucursalesResponse.ts

export interface Sucursal {
    id: string;
    clave: string;
    nombre: string;
  }
  
  export interface GetSucursalesResponse {
    error: boolean;
    message: string;
    data: Sucursal[];
  }
  