import { useState } from 'react';
import { Schedule } from '@types/Schedule.types'; // Asegúrate de ajustar la ruta según tu estructura de carpetas

export const useSchedules = () => {
  const [schedules, setSchedules] = useState<Schedule[]>([
    { day: 'Lunes', isEnabled: true, startTime: '08:00 AM', endTime: '02:00 PM' },
    { day: 'Martes', isEnabled: true, startTime: '', endTime: '' },
    { day: 'Miércoles', isEnabled: true, startTime: '08:00 AM', endTime: '02:00 PM' },
    { day: 'Jueves', isEnabled: false, startTime: '', endTime: '' },
    { day: 'Viernes', isEnabled: false, startTime: '', endTime: '' },
    { day: 'Sábado', isEnabled: false, startTime: '', endTime: '' },
    { day: 'Domingo', isEnabled: false, startTime: '', endTime: '' },
  ]);

  const toggleSwitch = (day: string) => {
    setSchedules(prevSchedules =>
      prevSchedules.map(schedule =>
        schedule.day === day ? { ...schedule, isEnabled: !schedule.isEnabled } : schedule
      )
    );
  };

  return {
    schedules,
    toggleSwitch,
  };
};
