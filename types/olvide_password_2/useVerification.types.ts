import { Dispatch, SetStateAction } from 'react';

export interface UseVerificationProps {
  codigo: string;
  setCodigo: Dispatch<SetStateAction<string>>;
  loading: boolean;
  error: string;
  successMessage: string;
  dialogVisible: boolean;
  setDialogVisible: Dispatch<SetStateAction<boolean>>;
  handleVerification: () => void;
  handleCloseDialog: () => void; // Agregamos handleCloseDialog
}
