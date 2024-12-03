import useEnableButtonRegistrationLogic from "@hooks/registrate/useEnableButtonRegistrationLogic";
import useGetSucursalesLogic from "@hooks/registrate/useGetSucursalesLogic";
import useRegisterUserLogic from "@hooks/registrate/useRegisterLogic";
import { UseRegisterFormProps } from "@/types/registrate/useRegisterForm.types";
import { NavigationProp, useNavigation } from '@react-navigation/native';

const useRegisterForm = (): UseRegisterFormProps => {

    const navigation = useNavigation<NavigationProp<any>>();

    const {
        nombre, setNombre, apellidoPaterno, setApellidoPaterno, apellidoMaterno, setApellidoMaterno, 
        telefono, setTelefono, email, setEmail, password, setPassword, confirmPassword, setConfirmPassword, 
        sucursal, setSucursal, especialidad, setEspecialidad, subEspecialidad, setSubEspecialidad, fuente, setFuente, 
        loading, dialogVisible, setDialogVisible, dialogMessage, handleRegister, isRegistrationSuccessful
    } = useRegisterUserLogic(navigation);

    // Aseguramos que branches tenga un valor por defecto de [] en caso de ser undefined
    const { branches, loading: branchesLoading, error: branchesError } = useGetSucursalesLogic();

    const isButtonEnabled = useEnableButtonRegistrationLogic(
        nombre, apellidoPaterno, apellidoMaterno, telefono, email, password, confirmPassword, sucursal, especialidad, subEspecialidad, fuente
    );

    return {
        nombre, setNombre, apellidoPaterno, setApellidoPaterno, apellidoMaterno, setApellidoMaterno, telefono, setTelefono, email, setEmail, 
        password, setPassword, confirmPassword, setConfirmPassword, sucursal, setSucursal, especialidad, setEspecialidad, subEspecialidad, 
        setSubEspecialidad, fuente, setFuente, loading, dialogVisible, setDialogVisible, dialogMessage, handleRegister, isRegistrationSuccessful, 
        branches, branchesLoading, branchesError, isButtonEnabled
    };
};

export default useRegisterForm;