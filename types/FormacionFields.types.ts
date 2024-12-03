// FormacionFields.types.ts
export interface FormacionFieldsProps {
    loading: boolean;
    error: string | null;
    selectedFormacion: string[];
    handleInputChange: (value: string, index: number) => void;
  }
  