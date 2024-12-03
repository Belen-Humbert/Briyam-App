import { NavigationProp, useNavigation } from '@react-navigation/native';
import useRegisterForm from '@hooks/registrate/useRegisterForm';
import useRegisterMedico from '@hooks/registrate/useRegisterMedico';
import { Dimensions } from 'react-native';

const useRegistrateScreenLogic = () => {
  
  const navigation = useNavigation<NavigationProp<any>>();

  const {
    nombre, setNombre, apellidoPaterno, setApellidoPaterno, apellidoMaterno, setApellidoMaterno,
    telefono, setTelefono, email, setEmail, password, setPassword, confirmPassword, setConfirmPassword,
    sucursal, setSucursal, especialidad, setEspecialidad, subEspecialidad, setSubEspecialidad, fuente, setFuente,
    branches, branchesLoading, branchesError
  } = useRegisterForm();

  const {
    loading, dialogVisible, setDialogVisible, dialogMessage, handleRegister, isRegistrationSuccessful
  } = useRegisterMedico();

  const screenHeight = Dimensions.get('window').height;

  const handleDialogClose = () => {
    setDialogVisible(false);
    // Si el registro fue exitoso, navega a la pantalla de Login
    if (isRegistrationSuccessful) {
        navigation.navigate('login');
    }
  };

  const handleGreenDialogClose = () => {
    setDialogVisible(false);
    if (isRegistrationSuccessful) {
      navigateToLogin();
    }
  };

  const onSubmit = () => {
    handleSubmit();
  };

  const navigateToLogin = () => {
    navigation.navigate('login');
  };

  const handleSubmit = () => {
    const params = {
      nombres: nombre,
      apaterno: apellidoPaterno,
      amaterno: apellidoMaterno,
      telefonoCelular: telefono,
      email,
      password,
      especialidad,
      subespecialidad: subEspecialidad,
      sucursal,
      comoSeEntero: fuente,
    };
    
    handleRegister(params);
  };

  return {
    nombre, setNombre, apellidoPaterno, setApellidoPaterno, apellidoMaterno, setApellidoMaterno,
    telefono, setTelefono, email, setEmail, password, setPassword, confirmPassword, setConfirmPassword,
    sucursal, setSucursal, especialidad, setEspecialidad, subEspecialidad, setSubEspecialidad, fuente, setFuente,
    branches, branchesLoading, branchesError, loading, dialogVisible, setDialogVisible, dialogMessage,
    handleGreenDialogClose, onSubmit, navigateToLogin, screenHeight, isRegistrationSuccessful, handleDialogClose
  };
};

export default useRegistrateScreenLogic;
