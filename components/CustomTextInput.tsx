import React, { useState } from 'react';
import { TextInput } from 'react-native';
import { CustomTextInputProps } from '@types/custom_text_input/CustomTextInput.types';
import styles from '@styles/custom_text_input/CustomTextInput.styles';

interface CustomTextInputPropsExtended extends CustomTextInputProps {
  maxLength?: number; // Nuevo prop para limitar la cantidad de caracteres
}

const CustomTextInput: React.FC<CustomTextInputPropsExtended> = ({
  onChangeText,
  placeholder,
  secureTextEntry = false,
  keyboardType = 'email-address', // Define el teclado como email-address
  uppercase = false,
  maxLength = 50,
  ...rest
}) => {
  const [textValue, setTextValue] = useState('');

  const handleChangeText = (text: string) => {
    const processedText = uppercase ? text.toUpperCase() : text;
    setTextValue(processedText);
    onChangeText(processedText);
  };

  return (
    <TextInput
      style={styles.input}
      onChangeText={handleChangeText}
      placeholder={placeholder}
      secureTextEntry={secureTextEntry}
      keyboardType={keyboardType} // Mantén el keyboardType fijo para email
      autoCapitalize={uppercase ? 'characters' : 'none'}
      placeholderTextColor="#B0B0B0"
      maxLength={maxLength}
      {...rest}
    />
  );
};

export default CustomTextInput;
