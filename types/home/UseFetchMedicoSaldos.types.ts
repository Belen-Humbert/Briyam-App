import { GetMedicosSaldosResponse } from '@api/saldos/responses/GetMedicosSaldosResponse';

export interface UseFetchMedicoSaldosReturn {
  data: GetMedicosSaldosResponse | null;
  loading: boolean;
  error: string | null;
}
