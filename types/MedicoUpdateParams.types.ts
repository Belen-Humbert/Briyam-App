// @types/MedicoUpdateParams.ts

export interface MedicoUpdateParams {
    foto?: File;
    token: string;
    dia?: number;
    de?: string;
    hasta?: string;
    efectivo?: boolean;
    tarjeta?: boolean;
    transferencia?: boolean;
    costoConsulta?: string;
    costoConsultaSubsecuente?: string;
    specialties?: {
      especialidad_1: string;
      especialidad_2: string;
      especialidad_3: string;
      especialidad_4: string;
    };
  }
  