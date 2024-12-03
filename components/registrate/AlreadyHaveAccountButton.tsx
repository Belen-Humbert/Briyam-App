import React from 'react';
import { TouchableOpacity, Text } from 'react-native';
import styles from '@styles/already_have_an_account/AlreadyHaveAccountButton.styles'; // Importa los estilos
import { AlreadyHaveAccountButtonProps } from '@/types/already_have_an_account/AlreadyHaveAccountButton.types'; // Importa la interfaz

const AlreadyHaveAccountButton: React.FC<AlreadyHaveAccountButtonProps> = ({ onPress }) => {
  const handlePress = () => {
    onPress();
  };

  return (
    <TouchableOpacity style={styles.button} onPress={handlePress}>
      <Text style={styles.buttonText}>¿Ya tienes una cuenta?</Text>
    </TouchableOpacity>
  );
};

export default AlreadyHaveAccountButton;
