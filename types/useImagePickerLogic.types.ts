// useImagePickerLogic.types.ts

export interface UseImagePickerLogic {
    selectedImage: string | null;
    pickImage: () => Promise<void>;
  }
  