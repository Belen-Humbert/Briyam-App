// SpecialtyModal.types.ts
export interface SpecialtyModalProps {
  isOpen: boolean;
  onClose: () => void;
  selectedSpecialties: string[];
  setSelectedSpecialties: (specialties: string[]) => void;
  handleUpdate: () => void;
  isEditMode: boolean; // Añadir esta línea
}
