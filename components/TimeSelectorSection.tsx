import React, { useState, useEffect } from 'react';
import { View, TouchableOpacity, Text } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import styles from '@styles/TimeSelectorSection.styles';

interface TimeSelectorSectionProps {
    selectedTime: string;
    setSelectedTime: (time: string) => void;
    availableTimeSlots: string[];
}

const TimeSelectorSection: React.FC<TimeSelectorSectionProps> = ({ selectedTime, setSelectedTime, availableTimeSlots }) => {
    const [filteredSlots, setFilteredSlots] = useState<string[]>([]);
    const [currentIndex, setCurrentIndex] = useState<number>(0);

    useEffect(() => {
        setFilteredSlots(availableTimeSlots);
    }, [availableTimeSlots]);

    const convertTo12HourFormat = (time24: string): string => {
        let [hours, minutes] = time24.split(':');
        let hourNum = parseInt(hours, 10);

        const period = hourNum >= 12 ? 'PM' : 'AM';
        hourNum = hourNum % 12 || 12;

        return `${hourNum}:${minutes} ${period}`;
    };

    const handleNext = () => {
        if (currentIndex + 3 < filteredSlots.length) {
            setCurrentIndex(currentIndex + 3);
        }
    };

    const handlePrev = () => {
        if (currentIndex > 0) {
            setCurrentIndex(currentIndex - 3);
        }
    };

    const handleTimeSelect = (timeRange: string) => {
        const firstTime = timeRange.split(' - ')[0];
        const convertedTime = convertTo12HourFormat(firstTime);
        setSelectedTime(convertedTime);
    };

    return (
        <View style={styles.timeContainer}>
            <Text style={styles.subTitle}>Hora de reserva</Text>
            <View style={styles.navigationContainer}>
                <TouchableOpacity onPress={handlePrev} disabled={currentIndex === 0}>
                    <Ionicons name="chevron-back" size={24} color={currentIndex === 0 ? "#ccc" : "#007bff"} />
                </TouchableOpacity>

                <View style={styles.timeGrid}>
                    {filteredSlots.slice(currentIndex, currentIndex + 3).map((timeRange) => (
                        <TouchableOpacity
                            key={timeRange}
                            style={[
                                styles.timeButton,
                                selectedTime === convertTo12HourFormat(timeRange.split(' - ')[0]) && styles.timeButtonSelected,
                            ]}
                            onPress={() => handleTimeSelect(timeRange)}
                        >
                            <Text style={styles.timeText}>{timeRange}</Text>
                        </TouchableOpacity>
                    ))}
                </View>

                <TouchableOpacity onPress={handleNext} disabled={currentIndex + 3 >= filteredSlots.length}>
                    <Ionicons name="chevron-forward" size={24} color={currentIndex + 3 >= filteredSlots.length ? "#ccc" : "#007bff"} />
                </TouchableOpacity>
            </View>
        </View>
    );
};

export default TimeSelectorSection;
