// interfaces/EliminarEquipoResponse.ts

export interface ReservaEquipo {
    folio: number;
    equipo: null;
  }
  
  export interface EliminarEquipoResponse {
    error: boolean;
    message: string;
    data: {
      reserva: ReservaEquipo;
    };
  }
  