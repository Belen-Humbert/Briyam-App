// hooks/olvide_password/useEmailValidation.ts
import { useState, useEffect } from 'react';

const useEmailValidation = (email: string): boolean => {
  const [isEmailValid, setIsEmailValid] = useState<boolean>(false);

  useEffect(() => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    setIsEmailValid(emailRegex.test(email));
  }, [email]);

  return isEmailValid;
};

export default useEmailValidation;
