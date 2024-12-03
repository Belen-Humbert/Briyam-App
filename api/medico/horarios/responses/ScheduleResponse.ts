export interface ScheduleResponse {
    error: boolean;
    message: string;
    data: {
      horarios: {
        lunes: {
          de: string | number;
          hasta: string | number;
        };
        martes: {
          de: string | number;
          hasta: string | number;
        };
        miercoles: {
          de: string | number;
          hasta: string | number;
        };
        jueves: {
          de: string | number;
          hasta: string | number;
        };
        viernes: {
          de: string | number;
          hasta: string | number;
        };
        sabado: {
          de: string | number | null;
          hasta: string | number | null;
        };
        domingo: {
          de: string | number | null;
          hasta: string | number | null;
        };
      };
    };
  }
  