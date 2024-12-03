import React from 'react';
import PasswordField from '@components/PasswordField';
import { PasswordSectionProps } from '@/types/password_section/PasswordSection.types';

const PasswordSection: React.FC<PasswordSectionProps> = ({ 
  password, 
  setPassword, 
  confirmPassword, 
  setConfirmPassword 
}) => {
  const handlePasswordChange = (value: string) => {
    setPassword(value);
  };

  const handleConfirmPasswordChange = (value: string) => {
    setConfirmPassword(value);
  };

  return (
    <>
      <PasswordField
        label="Contraseña"
        value={password}
        onChangeText={handlePasswordChange}
        placeholder="Introduce tu contraseña"
      />
      <PasswordField
        label="Confirmar Contraseña"
        value={confirmPassword}
        onChangeText={handleConfirmPasswordChange}
        placeholder="Vuelve a escribir tu contraseña"
      />
    </>
  );
};

export default PasswordSection;
