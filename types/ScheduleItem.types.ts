// ScheduleItem.types.ts
import { Schedule } from '@types/Schedule.types'; // Asegúrate de ajustar la ruta según tu estructura de carpetas

export interface ScheduleItemProps {
  schedule: Schedule;
  onToggle: () => void;
  onSelectStartTime: () => void;
  onSelectEndTime: () => void;
}
