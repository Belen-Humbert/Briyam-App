// ExperienciaInfoSectionProps.ts
import { MedicoInfoResponse } from '@/api/medico/responses/medicoInfoResponse';

export interface ExperienciaInfoSectionProps {
  isEditMode: boolean;
  medicoInf: MedicoInfoResponse | null;
  marginTop?:Number
}
