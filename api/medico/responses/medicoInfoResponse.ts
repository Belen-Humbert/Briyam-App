// medicoInfoResponse.ts

import { PerfilMedico } from "@/types/PerfilMedico.types";

export interface MedicoInfoResponse {
    error: boolean;
    message: string;
    data: {
      id: string;
      username: string;
      nombre: string;
      apellido_paterno: string;
      apellido_materno: string;
      correo: string;
      tel_celular: string;
      especialidad: string;
      subespecialidad: string;
      como_se_entero_nosotros: string;
      fec_alta: string;
      multisucursales: string;
      especialidadNombre: {
        id: string;
        especialidad: string;
      };
      comoSeEntero: {
        id: string;
        nombre: string;
      };
      perfilMedico: PerfilMedico;
      nombreCompleto: string;
      nombreCorto: string;
      sucursales: Array<{
        id: string;
        nombre: string;
      }>;
    };
  }
      