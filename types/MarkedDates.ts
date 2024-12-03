// @types/MarkedDates.ts
export interface MarkedDates {
    [date: string]: {
        selected?: boolean;
        marked?: boolean;
        dotColor?: string;
        selectedColor?: string;
        selectedTextColor?: string;
        disabled?: boolean;  // Agrega esta línea
        disableTouchEvent?: boolean;  // Y esta línea también
    };
}
