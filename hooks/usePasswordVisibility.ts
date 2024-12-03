import { useState } from 'react';

const usePasswordVisibility = () => {
  const [passwordVisible, setPasswordVisible] = useState<boolean>(false);

  const togglePasswordVisibility = () => {
    setPasswordVisible(prevState => !prevState);
  };

  return {
    passwordVisible,
    togglePasswordVisibility,
  };
};

export default usePasswordVisibility;
