// interfaces/HistorialReservasResponse.ts

export interface Consultorio {
    id: string;
    nombre: string;
    especialidad: string;
  }
  
  export interface Sucursal {
    id: string;
    nombre: string;
  }
  
  export interface ReservaHistorial {
    clave: string;
    fecha: string;
    hora: string;
    estatus: string;
    pasada: string;
    consultorio: Consultorio;
    sucursal: Sucursal;
  }
  
  export interface HistorialReservasResponse {
    error: boolean;
    message: string;
    data: ReservaHistorial[];
  }
  