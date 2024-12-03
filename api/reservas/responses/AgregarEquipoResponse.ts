// interfaces/AgregarEquipoResponse.ts

export interface Equipo {
    clave: string;
    nombre: string;
  }
  
  export interface ReservaEquipo {
    folio: number;
    equipo: Equipo;
  }
  
  export interface AgregarEquipoResponse {
    error: boolean;
    message: string;
    data: {
      reserva: ReservaEquipo;
    };
  }
  