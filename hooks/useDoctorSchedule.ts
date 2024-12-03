// useDoctorSchedule.ts
import { useEffect, useState } from 'react';
import { useFetchSchedules } from '@hooks/useFetchSchedules';
import { Schedule } from '@types/Schedule.types';

const useDoctorSchedule = () => {
  
  const [schedules, setSchedules] = useState<Schedule[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [visible, setVisible] = useState(false);
  const [selectedDay, setSelectedDay] = useState<string | null>(null);
  const [isSelectingStartTime, setIsSelectingStartTime] = useState(false);
  const [selectedSchedule, setSelectedSchedule] = useState<Schedule | null>(null);

  useEffect(() => {
    const fetchHorarios = async () => {
      try {
        const horariosData = await useFetchSchedules();
        setSchedules(horariosData);
      } catch (err) {
        setError('Error al obtener los horarios');
      } finally {
        setLoading(false);
      }
    };

    fetchHorarios();
  }, []);

  const showTimePicker = (schedule: Schedule, selectingStartTime: boolean) => {
    setSelectedDay(schedule.day);
    setSelectedSchedule(schedule);
    setIsSelectingStartTime(selectingStartTime);
    setVisible(true);
  };

  const handleConfirmTime = (selectedHour: string, selectedMinute: string, selectedPeriod: string) => {
    const selectedTime = `${selectedHour}:${selectedMinute} ${selectedPeriod}`;
    setSchedules((prevSchedules) =>
      prevSchedules.map((schedule) =>
        schedule.day === selectedDay
          ? {
              ...schedule,
              startTime: isSelectingStartTime ? selectedTime : schedule.startTime,
              endTime: !isSelectingStartTime ? selectedTime : schedule.endTime,
            }
          : schedule
      )
    );
    setVisible(false);
  };

  return {
    schedules,
    loading,
    error,
    visible,
    selectedSchedule,
    isSelectingStartTime,
    showTimePicker,
    handleConfirmTime,
    setVisible,
    setSchedules, // Añade esto para exportar setSchedules
  };
};

export default useDoctorSchedule;
