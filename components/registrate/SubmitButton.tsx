import React from 'react';
import { TouchableOpacity, Text } from 'react-native';
import styles from '@styles/submitbutton/SubmitButton.styles'; // Importa los estilos
import { SubmitButtonProps } from '@/types/submitbutton/SubmitButton.types'; // Importa la interfaz

const SubmitButton: React.FC<SubmitButtonProps> = ({ onPress, title, isEnabled }) => {
  const handlePress = () => {
    onPress();
  };

  return (
    <TouchableOpacity
      style={[styles.button, { opacity: isEnabled ? 1 : 0.5 }]}
      onPress={handlePress}
      disabled={!isEnabled}
    >
      <Text style={styles.buttonText}>{title}</Text>
    </TouchableOpacity>
  );
};

export default SubmitButton;
