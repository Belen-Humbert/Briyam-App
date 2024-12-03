export interface EnfermedadesModalProps {
    isOpen: boolean;
    onClose: () => void;
    selectedEnfermedades: string[];
    setSelectedEnfermedades: (enfermedades: string[]) => void;
    handleUpdate: () => void;
    isEditMode: boolean;
  }
  