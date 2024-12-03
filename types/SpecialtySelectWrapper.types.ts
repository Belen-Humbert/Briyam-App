// SpecialtySelectWrapper.types.ts
export interface SpecialtySelectWrapperProps {
    selectedSpecialty: string;
    index: number;
    setSelectedSpecialties: (specialties: string[]) => void;
    selectedSpecialties: string[];
  }
  