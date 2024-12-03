// interfaces/GetSaldoMedicoSucursalResponse.ts

export interface Plan {
    id_sucursal: string | null;
    horas: string | null;
    fecha_fin: string | null;
    plan: string | null;
    horas_usadas: string | null;
    horas_incluidas: string | null;
    hora_adicional: string | null;
  }
  
  export interface Monedero {
    id_sucursal: string;
    saldo: string;
  }
  
  export interface GetSaldoMedicoSucursalResponse {
    error: boolean;
    message: string;
    data: {
      plan: Plan;
      monedero: Monedero;
    };
  }
  