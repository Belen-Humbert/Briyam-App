// interfaces/GetMedicosSaldosResponse.ts

export interface SucursalSaldo {
    id_sucursal: string;
    saldo: string;
  }
  
  export interface GetMedicosSaldosResponse {
    error: boolean;
    message: string;
    data: {
      plan: any[];
      monedero: SucursalSaldo[];
    };
  }
  