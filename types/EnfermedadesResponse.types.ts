// EnfermedadesResponse.types.ts
import { Enfermedad } from './Enfermedad.types'; // Importa la interfaz Enfermedad

export interface EnfermedadesResponse {
  data: {
    enfermedades: Record<string, Enfermedad>; // Clave: enfermedad
  };
}
