// DoctorProfileMenu.types.ts
export interface DoctorProfileMenuProps {
    isEditMode: boolean;
    setIsEditMode: (editMode: boolean) => void;
    title?: string;
    showMenuButton?: boolean;
    marginTop?: string
  }
  