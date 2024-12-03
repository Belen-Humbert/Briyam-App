import { GetSucursalesResponse } from "@/api/sucursales/responses/GetSucursalesResponse";

export interface UseRegisterFormProps {
    nombre: string;
    setNombre: React.Dispatch<React.SetStateAction<string>>;
    apellidoPaterno: string;
    setApellidoPaterno: React.Dispatch<React.SetStateAction<string>>;
    apellidoMaterno: string;
    setApellidoMaterno: React.Dispatch<React.SetStateAction<string>>;
    telefono: string;
    setTelefono: React.Dispatch<React.SetStateAction<string>>;
    email: string;
    setEmail: React.Dispatch<React.SetStateAction<string>>;
    password: string;
    setPassword: React.Dispatch<React.SetStateAction<string>>;
    confirmPassword: string;
    setConfirmPassword: React.Dispatch<React.SetStateAction<string>>;
    sucursal: string;
    setSucursal: React.Dispatch<React.SetStateAction<string>>;
    especialidad: string;
    setEspecialidad: React.Dispatch<React.SetStateAction<string>>;
    subEspecialidad: string;
    setSubEspecialidad: React.Dispatch<React.SetStateAction<string>>;
    fuente: string;
    setFuente: React.Dispatch<React.SetStateAction<string>>;
    loading: boolean;
    dialogVisible: boolean;
    setDialogVisible: React.Dispatch<React.SetStateAction<boolean>>;
    dialogMessage: string;
    handleRegister: () => void;
    isRegistrationSuccessful: boolean;
    branches: GetSucursalesResponse | undefined;
    branchesLoading: boolean;
    branchesError: string | null;
    isButtonEnabled: boolean;
}
