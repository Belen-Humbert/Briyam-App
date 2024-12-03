// interfaces/ProximasReservasResponse.ts

export interface Consultorio {
    id: string;
    nombre: string;
    especialidad: string;
  }
  
  export interface Sucursal {
    id: string;
    nombre: string;
  }
  
  export interface ReservaProxima {
    clave: string;
    fecha: string;
    hora: string;
    puede_cancelar: string;
    consultorio: Consultorio;
    sucursal: Sucursal;
  }
  
  export interface ProximasReservasResponse {
    error: boolean;
    message: string;
    data: ReservaProxima[];
  }
  