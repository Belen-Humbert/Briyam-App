// fetchSchedules.ts

import { Schedule } from '@types/Schedule.types';
import { getScheduleAPI } from '@api/medico/horarios/getScheduleAPI';
import { ScheduleResponse } from '@/api/medico/horarios/responses/ScheduleResponse';

export const useFetchSchedules = async (): Promise<Schedule[]> => {
  
  try {
    
    const horariosData: ScheduleResponse = await getScheduleAPI();
    
    // Asegurarse de que no haya errores en la respuesta del API
    if (horariosData.error) {
      throw new Error(horariosData.message);
    }

    // Formatear los horarios a partir de la respuesta del API
    const formattedSchedules: Schedule[] = Object.keys(horariosData.data.horarios).map(day => {

      const { de, hasta } = horariosData.data.horarios[day as keyof typeof horariosData.data.horarios];
      const isEnabled = de !== null && de !== 'NO DISPONIBLE';
      const startTime = de ? `${de}:00` : null;
      const endTime = hasta ? `${hasta}:00` : null;

      return {
        day: capitalizeFirstLetter(day),
        isEnabled,
        startTime,
        endTime,
      };
    });

    return formattedSchedules;
  } catch (err) {
    throw new Error('Error al obtener los horarios: ' + err);
  }
};

const capitalizeFirstLetter = (string: string) => {
  return string.charAt(0).toUpperCase() + string.slice(1);
};
