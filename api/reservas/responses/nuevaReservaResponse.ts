// interfaces/nuevaReservaResponse.ts

export interface Consultorio {
    id: string;
    nombre: string;
  }
  
  export interface Reservacion {
    folio: number;
    fecha: string;
    hora: string;
    consultorio: Consultorio;
  }
  
  export interface NuevaReservaResponse {
    error: boolean;
    message: string;
    data: {
      reservacion: Reservacion;
    };
  }
  