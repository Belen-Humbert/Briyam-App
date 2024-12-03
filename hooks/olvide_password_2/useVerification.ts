import { useState } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { verificarReestablecerClaveAPI } from '@api/reestablecer/verificarReestablecerClaveAPI';
import { NavigationProp } from '@react-navigation/native';
import { UseVerificationProps } from '@types/olvide_password_2/useVerification.types';

const useVerification = (navigation: NavigationProp<any>, emailParam:string): UseVerificationProps => {

  const [codigo, setCodigo] = useState<string>('');  
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string>('');
  const [successMessage, setSuccessMessage] = useState<string>('');
  const [dialogVisible, setDialogVisible] = useState<boolean>(false);

  const handleCloseDialog = async () => {
    setDialogVisible(false);
    if(!error){
      navigation.navigate('olvide_password_3');
    }
  }

  const handleVerification = async () => {

    setLoading(true);
    setError('');
    setSuccessMessage('');

    try {

        const email = (await AsyncStorage.getItem('email')) || emailParam;
        
        await verificarReestablecerClaveAPI(email || '', codigo);
        await AsyncStorage.setItem('codigo', codigo);
        await AsyncStorage.setItem('email', email);

        setSuccessMessage('El código de verificación es correcto.');
        setDialogVisible(true);
      
    } catch (err: any) {
        setError(err.message || 'Ocurrió un error al intentar verificar el código.');
        setDialogVisible(true);
    } finally {
        setLoading(false);
    }
  };

  return {
    codigo,
    setCodigo, 
    loading,
    error,
    successMessage,
    dialogVisible,
    setDialogVisible,
    handleVerification,
    handleCloseDialog
  };
};

export default useVerification;
