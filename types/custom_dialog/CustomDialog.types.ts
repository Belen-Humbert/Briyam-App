// CustomDialog.types.ts
export interface CustomDialogProps {
  visible: boolean;
  onClose: () => void;
  message: string;
  type: 'error' | 'success';
}
