// hooks/olvide_password_2/useEnableButtonVerification.ts
import { useState, useEffect } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';

const validateEmail = (email: string) => {
  // Expresión regular simple para validar el formato de un correo electrónico
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
};

const useEnableButtonVerification = (codigo: string, email: string): boolean => {

  const [isButtonEnabled, setIsButtonEnabled] = useState<boolean>(false);

  useEffect(() => {

    const checkConditions = async () => {

      const yatengouncodigo = await AsyncStorage.getItem("yatengouncodigo");
      
      if (yatengouncodigo === "true") {
        const validateE = validateEmail(email);
        setIsButtonEnabled(codigo.length === 6 && validateE);
      } else {
        setIsButtonEnabled(codigo.length === 6);
      }
    };

    checkConditions();

  }, [codigo, email]);

  return isButtonEnabled;
};

export default useEnableButtonVerification;
