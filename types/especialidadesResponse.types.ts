// types/especialidadesResponse.types.ts
export interface EspecialidadesResponse {
    error: boolean;
    message: string;
    data: {
      especialidades: Record<string, string>; // Clave: nombre de la especialidad
    };
  }
  