import React from 'react';
import { View, Image, Text, TouchableOpacity, Dimensions } from 'react-native';
import styles from '@styles/ReservationCard.styles';
import { ReservationCardProps } from '@types/ReservationCard.types';

const ReservationCard: React.FC<ReservationCardProps> = ({ 
    imageSource, 
    title, 
    subtitle, 
    date, 
    times, 
    onViewPress, 
    onAddPress, 
    onCancelPress 
}) => {
    return (
        <View>
            <View style={styles.reservationCard}>
                <Image source={imageSource} style={styles.reservationImage} />
                <View style={styles.reservationDetails}>
                    <Text style={styles.reservationTitle}>{title}</Text>
                    <Text style={styles.reservationSubtitle}>{subtitle}</Text>
                    <Text style={styles.reservationDate}>{date}</Text>
                    <View style={styles.reservationTimes}>
                        {times.map((time, index) => (
                            <Text key={index} style={styles.timeText}>{time}</Text>
                        ))}
                    </View>
                </View>
            </View>
            <View style={styles.flexDirectionRow}>
                <View style={styles.buttonContainer}>
                    <TouchableOpacity style={styles.viewButton} onPress={onViewPress}>
                        <Text style={styles.viewButtonText}>Ver Datos</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.addButton} onPress={onAddPress}>
                        <Text style={styles.addButtonText}>Agregar</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.cancelButton} onPress={onCancelPress}>
                        <Text style={styles.cancelButtonText}>Cancelar</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    );
};

export default React.memo(ReservationCard);
