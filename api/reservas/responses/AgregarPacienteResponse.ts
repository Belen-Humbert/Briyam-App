// interfaces/ActualizarPacienteResponse.ts

export interface ReservaPaciente {
    folio: number;
    nombre: string;
    apellidos: string;
    telefono: string;
    email: string | null;
    recordatorio_sms: string | null;
    recordatorio_email: string | null;
  }
  
  export interface ActualizarPacienteResponse {
    error: boolean;
    message: string;
    data: {
      reserva: ReservaPaciente;
    };
  }
  