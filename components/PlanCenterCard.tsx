import React from 'react';
import { Text, ActivityIndicator } from 'react-native';
import BalanceItem from '@components/BalanceItem'; // Importamos el componente BalanceItem
import { useFetchMedicoSaldos } from '@hooks/home/useFetchMedicoSaldos'; // Importamos el hook

const PlanCenterCard: React.FC = () => {
    
    const { data, loading, error } = useFetchMedicoSaldos(); // Usamos el hook para obtener los datos

    if (loading) {
        return <ActivityIndicator size="large" color="#0000ff" />; // Indicador de carga
    }

    if (error) {
        return <Text>Error: {error}</Text>; // Mostrar error si lo hay
    }

    // Aseguramos que accedemos correctamente a la propiedad `plan` dentro de `data`
    const plan = data?.data?.plan?.[0]; // Accedemos al primer plan del array

    if (!plan) {
        return <Text>No plan available</Text>; // Si no hay datos de plan
    }

    // Formatear las horas a miles
    const formattedHoras = new Intl.NumberFormat('es-MX').format(plan.horas);

    return (
        <BalanceItem
            iconSource={require('@images/plan_center.png')}
            title={`Plan ${plan.plan}`} // Plan name
            subtitle={`${formattedHoras} hs`} // Horas del plan formateadas
            validity={`Vigencia ${new Date(plan.fecha_fin).toLocaleDateString('es-ES')}`} // Formato de la fecha
        />
    );
};

export default PlanCenterCard;
