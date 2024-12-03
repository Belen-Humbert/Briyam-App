import { useState, useEffect } from 'react';
import { getScheduleAPI } from '@api/medico/horarios/getScheduleAPI';
import useGetSucursalesLogic from '@/hooks/useGetSucursalesLogic';
import { getConsultoriosPorSucursalAPI } from '@api/consultorios/getConsultoriosPorSucursalAPI';
import useGetHorariosAPI from '@hooks/useGetHorarios';
import { DateObject } from '@types/DateObject';
import { MarkedDates } from '@types/MarkedDates';

interface NuevaReservaLogicReturn {
    selectedBranch: string;
    setSelectedBranch: React.Dispatch<React.SetStateAction<string>>;
    selectedBranchId: string | null;
    setSelectedBranchId: React.Dispatch<React.SetStateAction<string | null>>;
    consultorios: any[];
    setSelectedConsultorio: React.Dispatch<React.SetStateAction<string>>;
    selectedConsultorio: string;
    selectedDate: Date | null;
    setSelectedDate: React.Dispatch<React.SetStateAction<Date | null>>;
    selectedTime: string;
    setSelectedTime: React.Dispatch<React.SetStateAction<string>>;
    isCalendarVisible: boolean;
    showCalendar: () => void;
    hideCalendar: () => void;
    availableTimeSlots: any;
    filteredTimeSlots: string[];
    markedDates: MarkedDates;
    branches: any[];
    loading: boolean;
    error: string | null;
    handleSucursalSelect: (branchId: string, branchName: string) => Promise<void>;
    handleDateSelect: (day: DateObject) => void;
    isFormValid: boolean;
}

const useNuevaReservaLogic = (): NuevaReservaLogicReturn => {
    const [selectedBranch, setSelectedBranch] = useState<string>("");
    const [selectedBranchId, setSelectedBranchId] = useState<string | null>(null); 
    const [consultorios, setConsultorios] = useState<any[]>([]); 
    const [selectedConsultorio, setSelectedConsultorio] = useState<string>(""); 
    const [selectedDate, setSelectedDate] = useState<Date | null>(null); 
    const [selectedTime, setSelectedTime] = useState<string>(""); 
    const [isCalendarVisible, setCalendarVisible] = useState<boolean>(false);
    const [availableTimeSlots, setAvailableTimeSlots] = useState<any>({});
    const [filteredTimeSlots, setFilteredTimeSlots] = useState<string[]>([]); 
    const [markedDates, setMarkedDates] = useState<MarkedDates>({}); 

    const { branches, loading, error } = useGetSucursalesLogic();
    
    const showCalendar = () => setCalendarVisible(true);
    const hideCalendar = () => setCalendarVisible(false);

    useEffect(() => {
        const fetchHorarios = async () => {
            try {
                const horarios = await getScheduleAPI();
                setAvailableTimeSlots(horarios);
                markAvailableDates(horarios); 
            } catch (err) {
                console.error('Error al obtener los horarios:', err);
            }
        };
        fetchHorarios();
    }, []);

    const { horarios } = useGetHorariosAPI(
        selectedDate ? selectedDate.toISOString().split('T')[0] : null, 
        selectedBranchId, 
        selectedConsultorio
    );

    useEffect(() => {
        if (horarios) {
            const availableSlots = Object.values(horarios).filter((horario: any) => horario.disponible).map((horario: any) => horario.hora);
            setFilteredTimeSlots(availableSlots);
        }
    }, [horarios]);

    const markAvailableDates = (timeSlots: any) => {
        const enabledDays: MarkedDates = {};
        const daysOfWeek = {
            lunes: 1,
            martes: 2,
            miercoles: 3,
            jueves: 4,
            viernes: 5,
            sabado: 6,
            domingo: 0
        };
        
        const today = new Date();
        today.setHours(0, 0, 0, 0);
        
        const totalDaysToCheck = 365;
        for (let i = -365; i <= totalDaysToCheck; i++) {
            const currentDate = new Date();
            currentDate.setDate(today.getDate() + i);
            currentDate.setHours(0, 0, 0, 0);
            const currentDayOfWeek = currentDate.getDay();
            
            const dayKey = Object.keys(daysOfWeek).find(
                key => daysOfWeek[key as keyof typeof daysOfWeek] === currentDayOfWeek
            ) as keyof typeof daysOfWeek | undefined;

            const formattedDate = formatDate(currentDate);

            if (currentDate.getTime() < today.getTime()) {
                enabledDays[formattedDate] = { disabled: true, disableTouchEvent: true };
            } else if (dayKey && timeSlots[dayKey] && timeSlots[dayKey].de !== 'NO DISPONIBLE') {
                enabledDays[formattedDate] = { selected: false, marked: true, dotColor: 'green' };
            } else {
                enabledDays[formattedDate] = { disabled: true, disableTouchEvent: true };
            }
        }
        
        setMarkedDates(enabledDays);
    };

    const formatDate = (date: Date): string => {
        return date.toISOString().split('T')[0];
    };

    const handleSucursalSelect = async (branchId: string) => {
        const branchName = branches.find(branch => branch.id === branchId)?.nombre || '';
        setSelectedBranch(branchName);
        setSelectedBranchId(branchId);
        try {
            const consultoriosDisponibles = await getConsultoriosPorSucursalAPI(branchId);
            setConsultorios(consultoriosDisponibles);
        } catch (error) {
            console.error('Error al obtener los consultorios:', error);
        }
    };    

    const handleDateSelect = (day: DateObject) => {
        const date = new Date(day.dateString + 'T00:00:00');
        setSelectedDate(date);
        hideCalendar();
    };

    const isFormValid = !!(selectedBranchId && selectedConsultorio && selectedDate && selectedTime);

    return {
        selectedBranch,
        setSelectedBranch,
        selectedBranchId,
        setSelectedBranchId,
        consultorios,
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
    };
};

export default useNuevaReservaLogic;
