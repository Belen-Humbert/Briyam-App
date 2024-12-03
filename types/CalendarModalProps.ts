// types/CalendarModalProps.ts
export interface CalendarModalProps {
  isCalendarVisible: boolean;
  hideCalendar: () => void;
  handleDateSelect: (day: Date) => void; // Cambia DateObject a Date
  markedDates: any; // Ya no es necesario, puedes eliminarlo si no lo necesitas
}
