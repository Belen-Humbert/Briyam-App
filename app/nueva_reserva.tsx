import React from 'react';
import { ScrollView, TouchableOpacity, Text, StyleSheet } from 'react-native';
import { HStack, Image } from 'native-base';
import DateManualSelectorSection from '../components/DateManualSelectorSection';
import TimeSelectorSection from '../components/TimeSelectorSection';
import SucursalPicker from '@components/PickerFieldSucursales';
import ConsultorioPicker from '@components/ConsultorioPicker';
import CalendarModal from '@components/CalendarModal';
import useNuevaReservaLogic from '@hooks/useNuevaReservaLogic';
import { NuevaReservaScreenProps } from '@types/NuevaReservaScreenProps';
import styles from '@styles/NuevaReservaScreen.styles';

const NuevaReservaScreen: React.FC<NuevaReservaScreenProps> = ({ navigation }) => {
    const {
        selectedBranch,
        setSelectedBranch,
        selectedBranchId,
        selectedConsultorio,
        setSelectedConsultorio,
        selectedDate,
        setSelectedDate,
        selectedTime,
        setSelectedTime,
        isCalendarVisible,
        showCalendar,
        hideCalendar,
        availableTimeSlots,
        filteredTimeSlots,
        markedDates,
        branches,
        loading,
        error,
        handleSucursalSelect,
        handleDateSelect,
        isFormValid
    } = useNuevaReservaLogic();

    return (
        <ScrollView contentContainerStyle={styles.container}>
            <HStack justifyContent="space-between" alignItems="center" w="100%" p={3}>
                <Text style={styles.title}>Nueva Reserva</Text>
            </HStack>
            <SucursalPicker
                label="Seleccione una Sucursal" 
                placeholder="Elija su sucursal"
                selectedValue={selectedBranch}
                onValueChange={(branchId) => {
                    const branchName = branches.find(branch => branch.id === branchId)?.nombre || '';
                    handleSucursalSelect(branchId, branchName);
                }}
            />

            <ConsultorioPicker
                selectedConsultorio={selectedConsultorio}
                loading={loading}
                idSucursal={"1"}
                setSelectedConsultorio={setSelectedConsultorio}
            />
            <HStack justifyContent="space-between" alignItems="center" w="100%" p={3} style={styles.imageContainer}>
                <Image source={require('@images/consultorio.png')} style={styles.image} />
                <Image source={require('@images/wifi.png')} style={styles.icon} />
                <Image source={require('@images/cafe.png')} style={styles.icon} />
                <Image source={require('@images/impresora.png')} style={styles.icon} />
            </HStack>
            <HStack justifyContent="space-between" alignItems="center" w="100%" p={3}>
                <Text style={styles.sectionTitle}>Día de reserva</Text>
                <HStack justifyContent="flex-end" alignItems="center" w="60%">
                    <TouchableOpacity onPress={showCalendar} style={styles.calendarButton}>
                        <Image source={require('@images/calendar.png')} style={styles.iconCalendar} />
                    </TouchableOpacity>
                    <Text style={styles.dateText}>
                        {selectedDate
                            ? selectedDate.toLocaleDateString("es-ES", { year: 'numeric', month: 'long' })
                            : "Seleccione una fecha"}
                    </Text>
                </HStack>
            </HStack>
            <CalendarModal
                isCalendarVisible={isCalendarVisible}
                hideCalendar={hideCalendar}
                handleDateSelect={handleDateSelect}
                markedDates={markedDates}
            />
            <HStack w="100%" p={3}>
                <DateManualSelectorSection
                    selectedDate={selectedDate}
                    setSelectedDate={setSelectedDate}
                    availableDates={availableTimeSlots}
                />
            </HStack>
            <HStack w="100%">
                <TimeSelectorSection
                    selectedTime={selectedTime}
                    setSelectedTime={setSelectedTime}
                    availableTimeSlots={filteredTimeSlots}
                />
            </HStack>
            <TouchableOpacity
                style={[styles.continueButton, !isFormValid && styles.disabledButton]}
                onPress={() => navigation.navigate('FinalizarReservaScreen', {
                    selectedBranchId,
                    selectedBranch,
                    selectedConsultorio,
                    selectedDate: selectedDate!.toISOString().split('T')[0],
                    selectedTime
                })}
                disabled={!isFormValid}
            >
                <Text style={styles.continueButtonText}>Continuar Reserva</Text>
            </TouchableOpacity>
        </ScrollView>
    );
};

export default NuevaReservaScreen;