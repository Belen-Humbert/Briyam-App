// UpcomingReservations.tsx
import React from 'react';
import { View, Text, ActivityIndicator } from 'react-native';
import ReservationCard from './ReservationCard'; // Importa el componente ReservationCard
import { UpcomingReservationsProps } from '@types/UpcomingReservations.types';
import { useFetchProximasReservas } from '@hooks/useFetchProximasReservas';
import styles from '@styles/UpcomingReservations.styles'; // Importa el archivo de estilos

const UpcomingReservations: React.FC<UpcomingReservationsProps> = ({ handlePressLog, sucursal }) => {
    
    const { items, loading } = useFetchProximasReservas(sucursal);

    return (
        <View style={styles.reservationContainer}>
            <Text style={styles.sectionTitle}>Próximas Reservas</Text>
            {loading ? (
                <ActivityIndicator size="large" color="#0000ff" />
            ) : items.length === 0 ? ( // Verifica si no hay reservas
                <Text style={styles.noReservationsText}>No hay próximas reservas. ¡Vuelve pronto!</Text> // Mensaje bonito
            ) : (
                items.map((reservation) => (
                    <ReservationCard 
                        key={reservation.clave}
                        imageSource={require('@images/lofsala.png')}
                        title={reservation.consultorio.nombre}
                        subtitle={reservation.consultorio.especialidad}
                        date={reservation.fecha}
                        times={[reservation.hora]}
                        onViewPress={() => handlePressLog('Ver Datos')}
                        onAddPress={() => handlePressLog('Agregar')}
                        onCancelPress={() => handlePressLog('Cancelar')}
                    />
                ))
            )}
        </View>
    );
};

export default UpcomingReservations;
