// @types/sucursales/UseGetSucursalesLogicReturn.types.ts
import { Sucursal } from '@types/Sucursal.types';

export interface UseGetSucursalesLogicReturn {
  branches: Sucursal[];
  loading: boolean;
  error: string;
}
