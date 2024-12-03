import { useState } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { NavigationProp } from '@react-navigation/native';
import { UseLogoutLogicReturn } from '@types/useLogoutLogic.types';

const useLogoutLogic = (navigation: NavigationProp<any>): UseLogoutLogicReturn => {

  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string>('');

  const handleLogout = async () => {
    
    setLoading(true);
    setError('');

    try {
        
      await AsyncStorage.removeItem('authToken');
      
      navigation.navigate('login');
      
    } catch (error) {
      setError('Error al cerrar sesión. Inténtalo de nuevo.');
    } finally {
      setLoading(false);
    }
  };

  return {
    handleLogout,
    loading,
    error,
  };
};

export default useLogoutLogic;
