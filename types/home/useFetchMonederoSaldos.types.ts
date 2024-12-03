// useFetchMonederoSaldos.types.ts

import { GetMedicosSaldosResponse } from '@/api/saldos/responses/GetMedicosSaldosResponse';

export interface UseFetchMonederoSaldosReturn {
    monederoData: GetMedicosSaldosResponse | null;
    loading: boolean;
    error: string | null;
}
