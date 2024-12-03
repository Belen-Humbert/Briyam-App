import { useState, useEffect } from 'react';
import { getMedicosSaldosAPI } from '@api/saldos/getMedicosSaldosAPI';
import { GetMedicosSaldosResponse } from '@/api/saldos/responses/GetMedicosSaldosResponse';
import { UseFetchMonederoSaldosReturn } from '@/types/home/useFetchMonederoSaldos.types';

export const useFetchMonederoSaldos = (): UseFetchMonederoSaldosReturn => {
    const [monederoData, setMonederoData] = useState<GetMedicosSaldosResponse | null>(null);
    const [loading, setLoading] = useState<boolean>(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        const fetchData = async () => {
            setLoading(true);
            try {
                const result: GetMedicosSaldosResponse = await getMedicosSaldosAPI();
                setMonederoData(result); // Guardamos solo los datos del monedero
            } catch (err: any) {
                setError(err.message || 'Unexpected error');
            } finally {
                setLoading(false);
            }
        };

        fetchData();
    }, []);

    return { monederoData, loading, error };
};
