import { useState, useEffect } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { reestablecerClaveAPI } from '@api/reestablecer/reestablecerClaveAPI';
import { UsePasswordResetProps } from '@types/olvide_password_3/usePasswordReset.types';

const usePasswordReset = ({ navigation }: UsePasswordResetProps) => {

  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [confirmPassword, setConfirmPassword] = useState<string>('');
  const [codigo, setCodigo] = useState<string>('');
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string>('');
  const [successMessage, setSuccessMessage] = useState<string>('');
  const [dialogVisible, setDialogVisible] = useState<boolean>(false);

  const [isPasswordVisible, setIsPasswordVisible] = useState<boolean>(false);
  const [isConfirmPasswordVisible, setIsConfirmPasswordVisible] = useState<boolean>(false);

  const togglePasswordVisibility = () => {
    setIsPasswordVisible(!isPasswordVisible);
  };

  const toggleConfirmPasswordVisibility = () => {
    setIsConfirmPasswordVisible(!isConfirmPasswordVisible);
  };

  useEffect(() => {
    const fetchEmailAndCodigoFromStorage = async () => {
      const storedEmail = await AsyncStorage.getItem('email');
      const storedCodigo = await AsyncStorage.getItem('codigo');
      if (storedEmail) {
        setEmail(storedEmail);
      }
      if (storedCodigo) {
        setCodigo(storedCodigo);
      }
    };
    fetchEmailAndCodigoFromStorage();
  }, []);

  const handleOnCloseDialog = async () => {
    setDialogVisible(false);
    if(!error){
      navigation.navigate('login');
    }
  };

  const handlePasswordReset = async () => {

    setLoading(true);
    setError('');
    setSuccessMessage('');
  
    try {

      const response = await reestablecerClaveAPI(email, password, codigo);
      
      if (response.error) {
        setError(response.message);
      } else {
        setSuccessMessage('Se ha restablecido la contraseña.');
      }

      setDialogVisible(true);

    } catch (err: any) {
      setError(err.message || 'Ocurrió un error al intentar restablecer la contraseña. Inténtalo nuevamente.');
      setDialogVisible(true);
    } finally {
      setLoading(false);
    }
  };

  return {
    email, setEmail,
    password, setPassword,
    confirmPassword, setConfirmPassword,
    codigo, setCodigo,
    loading, error, successMessage,
    dialogVisible, setDialogVisible,
    handlePasswordReset,
    isPasswordVisible, togglePasswordVisibility,
    isConfirmPasswordVisible, toggleConfirmPasswordVisibility,
    handleOnCloseDialog
  };
};

export default usePasswordReset;
