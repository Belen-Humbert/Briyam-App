import React from 'react';
import { Text, ActivityIndicator } from 'react-native';
import BalanceItem from '@components/BalanceItem'; 
import { useFetchMonederoSaldos } from '@hooks/home/useFetchMonederoSaldos'; 

const MonederoCenterCard: React.FC = () => {
    
    const { monederoData, loading, error } = useFetchMonederoSaldos(); // Usamos el hook para obtener los datos del monedero

    if (loading) {
        return <ActivityIndicator size="large" color="#0000ff" />; // Indicador de carga
    }

    if (error) {
        return <Text>Error: {error}</Text>; // Mostrar error si lo hay
    }

    // Filtramos el monedero que quieres mostrar (en este caso id_sucursal "2")
    const monedero = monederoData?.data?.monedero?.find((item) => item.id_sucursal === "2");

    if (!monedero) {
        return <Text>No Monedero available</Text>; // Si no hay datos de monedero
    }

    // Formatear el saldo como moneda
    const formattedSaldo = new Intl.NumberFormat('es-MX', {
        style: 'currency',
        currency: 'MXN',
    }).format(monedero.saldo);

    return (
        <BalanceItem
            iconSource={require('@images/monedero.png')}
            title="Monedero"
            subtitle={formattedSaldo} // Mostramos el saldo del monedero en formato de moneda
        />
    );
};

export default MonederoCenterCard;
