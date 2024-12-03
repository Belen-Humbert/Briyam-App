// @types/Horario.types.ts

export interface Horario {
    id: string;             // ID del horario
    fecha: string;          // Fecha del horario en formato "YYYY-MM-DD"
    hora: string;           // Hora del horario en formato "HH:mm"
    disponible: boolean;    // Indicador de disponibilidad
    consultorio: string;    // ID del consultorio (puede ser opcional)
    sucursal: string;       // ID de la sucursal (puede ser opcional)
    // Agrega otros campos necesarios según los datos que recibes de la API
  }
  