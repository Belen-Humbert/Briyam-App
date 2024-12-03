import { useState, useEffect } from 'react';

const usePasswordValidation = (password: string = '', confirmPassword: string = ''): boolean => {
  const [isSubmitEnabled, setIsSubmitEnabled] = useState<boolean>(false);

  useEffect(() => {
    // Verifica que ambos campos estén llenos y las contraseñas coincidan (sin espacios)
    if (
      password.trim() !== '' &&
      confirmPassword.trim() !== '' &&
      password === confirmPassword
    ) {
      setIsSubmitEnabled(true); // Habilita el botón si ambas contraseñas coinciden
    } else {
      setIsSubmitEnabled(false); // Deshabilita el botón si no coinciden o si están vacías
    }
  }, [password, confirmPassword]);

  return isSubmitEnabled;
};

export default usePasswordValidation;
