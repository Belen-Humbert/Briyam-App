// TimeSelect.types.ts

export interface TimeSelectProps {
    title: string;
    selectedValue: string;
    onValueChange: (value: string) => void;
    options: string[];
  }
  