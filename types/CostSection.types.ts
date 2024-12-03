// CostSection.types.ts

export interface CostSectionProps {
    title: string;
    cost: string;
    isEditMode: boolean;
    onChange: (value: string) => void;
  }
  