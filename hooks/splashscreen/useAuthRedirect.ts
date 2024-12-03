import { useEffect } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';

const useAuthRedirect = (navigation: any): void => {
  
  useEffect(() => {
    const checkAuthToken = async () => {
      
      try {
        const authToken = await AsyncStorage.getItem('authToken');
        
        setTimeout(() => {
          if (navigation) {
            if (authToken) {
              navigation.replace('home_navigation');
            } else {
              navigation.replace('login');
            }
          } else {
            
          }
        }, 3000);
      } catch (error) {
        
      }
    };

    checkAuthToken();
  }, [navigation]);
};

export default useAuthRedirect;
