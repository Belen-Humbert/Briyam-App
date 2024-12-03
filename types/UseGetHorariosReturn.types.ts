// @types/UseGetHorariosReturn.types.ts

import { Horario } from './Horario.types';

export interface UseGetHorariosReturn {
  horarios: Horario[];
  loading: boolean;
  error: string | null;
}
