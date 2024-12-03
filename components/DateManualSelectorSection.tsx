import React, { useState } from 'react';
import { View, TouchableOpacity, Text } from 'react-native';
import styles from '@styles/DateManualSelectorSection.styles';

interface DateManualSelectorSectionProps {
  selectedDate: Date | null;
  setSelectedDate: (date: Date) => void;
  availableDates: {
    [key: string]: { de: string | null };
  };
}

const DateManualSelectorSection: React.FC<DateManualSelectorSectionProps> = ({ selectedDate, setSelectedDate, availableDates }) => {
  const [dayOffset, setDayOffset] = useState(0);

  const daysOfWeekMap = ['domingo', 'lunes', 'martes', 'miércoles', 'jueves', 'viernes', 'sábado'];

  const getNextAvailableDays = () => {
    const today = new Date();
    const availableDays: Date[] = [];

    for (let i = 0; i < 60; i++) {
      const day = new Date();
      day.setDate(today.getDate() + i);
      const dayOfWeek = daysOfWeekMap[day.getDay()];

      if (availableDates[dayOfWeek]?.de && availableDates[dayOfWeek].de !== 'NO DISPONIBLE') {
        availableDays.push(day);
      }
    }
    return availableDays;
  };

  const availableDays = getNextAvailableDays();

  const handleManualDateSelect = (day: Date) => {
    setSelectedDate(day);
  };

  const handleNextDays = () => {
    if (dayOffset + 2 < availableDays.length) {
      setDayOffset(dayOffset + 2);
    }
  };

  const handlePreviousDays = () => {
    if (dayOffset > 0) {
      setDayOffset(dayOffset - 2);
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.label}>Seleccione manualmente un día:</Text>

      <View style={styles.navigationButtons}>
        <TouchableOpacity onPress={handlePreviousDays} disabled={dayOffset === 0}>
          <Text style={styles.arrow}>{'<'}</Text>
        </TouchableOpacity>

        <View style={styles.daysContainer}>
          {availableDays.slice(dayOffset, dayOffset + 2).map((day, index) => (
            <TouchableOpacity
              key={index}
              style={[
                styles.dayButton,
                selectedDate && selectedDate.getTime() === day.getTime() && styles.selectedDayButton,
              ]}
              onPress={() => handleManualDateSelect(day)}
            >
              <Text style={styles.dayText}>
                {day.toLocaleDateString('es-ES', { weekday: 'short', day: 'numeric', month: 'short' })}
              </Text>
            </TouchableOpacity>
          ))}
        </View>

        <TouchableOpacity onPress={handleNextDays} disabled={(dayOffset + 2) >= availableDays.length}>
          <Text style={styles.arrow}>{'>'}</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default DateManualSelectorSection;
