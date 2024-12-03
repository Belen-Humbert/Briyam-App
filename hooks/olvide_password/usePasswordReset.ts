import { useState, useEffect } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { solicitarReestablecerClaveAPI } from '@api/reestablecer/solicitarReestablecerClaveAPI';
import { UsePasswordResetProps } from '@props/olvide_password/UsePasswordResetProps'; // Importa la interfaz desde el archivo separado

const usePasswordReset = ({ navigation }: UsePasswordResetProps) => {

  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>(''); 
  const [confirmPassword, setConfirmPassword] = useState<string>('');
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string>(''); 
  const [successMessage, setSuccessMessage] = useState<string>('');
  const [successReset, setSuccessReset] = useState(false);
  const [dialogVisible, setDialogVisible] = useState<boolean>(false);

  const [isPasswordVisible, setIsPasswordVisible] = useState<boolean>(false);
  const [isConfirmPasswordVisible, setIsConfirmPasswordVisible] = useState<boolean>(false);

  const togglePasswordVisibility = () => {
    setIsPasswordVisible(!isPasswordVisible);
  };

  const toggleConfirmPasswordVisibility = () => {
    setIsConfirmPasswordVisible(!isConfirmPasswordVisible);
  };

  const handleYaTengoUnCodigo = () => {
    AsyncStorage.setItem("yatengouncodigo","true");
    navigation.navigate('olvide_password_2');
  };

  useEffect(() => {

    AsyncStorage.setItem("yatengouncodigo","false");
    AsyncStorage.removeItem("email");

    const fetchEmailFromStorage = async () => {
      const storedEmail = await AsyncStorage.getItem('email');
      if (storedEmail) {
        setEmail(storedEmail);
      }
    };

    fetchEmailFromStorage();
  }, []);

  const handleOnCloseCustomDialog = async () => {
    setDialogVisible(false);
    if(successReset){
      navigation.navigate('olvide_password_2'); 
    }
  };

  const handlePasswordReset = async () => {

    setLoading(true);
    setError('');
    setSuccessMessage('');

    try {
        
      const response = await solicitarReestablecerClaveAPI(email);

      await AsyncStorage.setItem('email', email);

      setSuccessMessage('Se ha enviado un enlace de restablecimiento de contraseña a tu correo.');
      setSuccessReset(true);
      setDialogVisible(true);

    } catch (err: any) {
      setSuccessReset(false);
      setError(err.message || 'Ocurrió un error al intentar enviar el correo. Inténtalo nuevamente.');
      setDialogVisible(true);
    } finally {
      setLoading(false);
    }
  };

  return {
    email, setEmail,
    password, setPassword,
    confirmPassword, setConfirmPassword,
    loading, error, successMessage,
    dialogVisible, setDialogVisible,
    handlePasswordReset,
    successReset,
    handleYaTengoUnCodigo,
    handleOnCloseCustomDialog,
    isPasswordVisible, togglePasswordVisibility,
    isConfirmPasswordVisible, toggleConfirmPasswordVisibility
  };
};

export default usePasswordReset;
