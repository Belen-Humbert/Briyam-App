// RadioButton.types.ts
export interface RadioButtonProps {
    options: string[];
    selectedOption: string;
    onSelect: (option: string) => void;
  }
  