// interfaces/GetPlanesResponse.ts

export interface Plan {
    id_plan: string;
    wplan: string;
    horas: string;
    monto: string;
    hora_adicional: string;
  }
  
  export interface GetPlanesResponse {
    error: boolean;
    message: string;
    data: Plan[];
  }
  