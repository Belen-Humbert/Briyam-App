import { Especialidad } from "@types/especialidad.types";
import { PerfilMedico } from "@types/PerfilMedico.types";

export interface MedicoInfo {
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
  especialidadNombre: Especialidad;
  comoSeEntero: { id: string; nombre: string };
  perfilMedico: PerfilMedico;
  nombreCompleto: string;
  nombreCorto: string;
  sucursales: Array<{ id: string; nombre: string }>;
}