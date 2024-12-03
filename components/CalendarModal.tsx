import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import Modal from 'react-native-modal';
import DatePicker from 'react-native-date-picker';
import { CalendarModalProps } from '@types/CalendarModalProps';

const CalendarModal: React.FC<CalendarModalProps> = ({
  isCalendarVisible,
  hideCalendar,
  handleDateSelect,
  markedDates, // Ya no se necesita con react-native-date-picker
}) => {
  const [selectedDate, setSelectedDate] = React.useState<Date>(new Date());

  const onConfirm = () => {
    handleDateSelect(selectedDate); // Llama a la función con la fecha seleccionada
    hideCalendar(); // Cierra el modal después de confirmar
  };

  return (
    <Modal isVisible={isCalendarVisible} onBackdropPress={hideCalendar}>
      <View style={{ backgroundColor: 'white', padding: 20 }}>
        <Text style={{ fontSize: 18, marginBottom: 10 }}>Selecciona una fecha</Text>
        <DatePicker
          date={selectedDate}
          onDateChange={setSelectedDate} // Actualiza la fecha seleccionada en tiempo real
          mode="date" // Puedes cambiar a "datetime" si necesitas seleccionar hora también
        />
        <TouchableOpacity onPress={onConfirm} style={{ marginTop: 20, alignItems: 'center' }}>
          <Text style={{ color: '#007BFF', fontSize: 16 }}>Confirmar</Text>
        </TouchableOpacity>
      </View>
    </Modal>
  );
};

export default CalendarModal;
