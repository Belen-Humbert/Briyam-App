export interface FormacionModalProps {
    isOpen: boolean;
    onClose: () => void;
    selectedFormacion: string[];
    setSelectedFormacion: (formacion: string[]) => void;
    handleUpdate: () => void;
    isEditMode: boolean;
  }
  