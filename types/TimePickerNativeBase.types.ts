// TimePickerNativeBase.types.ts
export interface TimePickerProps {
  isOpen: boolean;
  onConfirm: (hour: string, minute: string, period: string) => void;
  onCancel: () => void;
  initialHour?: number | null;
  initialMinute?: number | null;
  initialPeriod?: 'AM' | 'PM' | null;
  isSelectingStartTime?: boolean; // Agregar esta línea
}
