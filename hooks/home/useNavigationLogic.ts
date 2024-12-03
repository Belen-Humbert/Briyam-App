import { useCallback } from 'react';
import { NavigationProp } from '@react-navigation/native';
import { UseNavigationLogicReturn } from '@types/home/UseNavigationLogic.types';

export const useNavigationLogic = (navigation: NavigationProp<any>): UseNavigationLogicReturn => {
    
  const handleNavigation = useCallback((screen: string) => {
    navigation.navigate(screen);
  }, [navigation]);

  const handlePressLog = useCallback((buttonName: string) => {
    
  }, []);

  return {
    handleNavigation,
    handlePressLog,
  };
};
