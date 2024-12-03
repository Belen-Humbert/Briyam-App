import { useState, useEffect } from 'react';
import { getMedicosSaldosAPI } from '@api/saldos/getMedicosSaldosAPI';
import { GetMedicosSaldosResponse } from '@api/saldos/responses/GetMedicosSaldosResponse';
import { UseFetchMedicoSaldosReturn } from '@types/home/UseFetchMedicoSaldosReturn';

export const useFetchMedicoSaldos = (): UseFetchMedicoSaldosReturn => {

    const [data, setData] = useState<GetMedicosSaldosResponse | null>(null);
    const [loading, setLoading] = useState<boolean>(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        const fetchData = async () => {
            setLoading(true);
            try {
                const result = await getMedicosSaldosAPI();
                setData(result);
            } catch (err: any) {
                setError(err.message || 'Unexpected error');
            } finally {
                setLoading(false);
            }
        };

        fetchData();
    }, []);

    return { data, loading, error };
};
