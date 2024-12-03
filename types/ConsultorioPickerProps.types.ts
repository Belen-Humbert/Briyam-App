import { Consultorio } from '@types/Consultorio.types';

export interface ConsultorioPickerProps {
  selectedConsultorio: string;
  loading: boolean;
  idSucursal: string;
  setSelectedConsultorio: (id: string) => void;
}
