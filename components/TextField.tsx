import React from 'react';
import { Box, Input, Text } from 'native-base';
import { TextFieldProps } from '@/types/textfield/TextField.types'; // Importa la interfaz
import styles from '@styles/textfield/TextField.styles'; // Importa los estilos

const TextField: React.FC<TextFieldProps> = ({ label, value, onChangeText, placeholder }) => {
  const handleChangeText = (text: string) => {
    onChangeText(text);
  };

  return (
    <Box style={styles.inputContainer}>
      <Text style={styles.label}>{label}:</Text>
      <Input
        value={value}
        backgroundColor="white"
        onChangeText={handleChangeText}
        placeholder={placeholder}
        placeholderTextColor="#b0b0b0"
      />
    </Box>
  );
};

export default TextField;
