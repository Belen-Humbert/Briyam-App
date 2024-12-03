import React, { useState } from 'react';
import { View, TextInput, TouchableOpacity, Image, StyleSheet, TextInputProps } from 'react-native';

interface PasswordInputProps extends TextInputProps {
  value: string;
  onChangeText: (text: string) => void;
}

const PasswordInput: React.FC<PasswordInputProps> = ({ value, onChangeText, ...rest }) => {
  
  const [isPasswordVisible, setIsPasswordVisible] = useState(false);

  const togglePasswordVisibility = () => {
    setIsPasswordVisible(!isPasswordVisible);
  };

  return (
    <View style={styles.inputContainer}>
      <TextInput
        style={[styles.input, { flexGrow: 1 }]}
        onChangeText={onChangeText}
        value={value}
        placeholder="Introduce tu contraseña"
        secureTextEntry={!isPasswordVisible}
        placeholderTextColor="#B0B0B0"
        {...rest}
      />
      <TouchableOpacity onPress={togglePasswordVisibility} style={styles.eyeButton}>
        <Image
          source={
            isPasswordVisible 
              ? require('@images/ojo_cerrado.png') 
              : require('@images/ojo_abierto.png')
          }
          style={styles.eyeIcon}
        />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    width: '100%',
    marginBottom: 10,
  },
  input: {
    padding: 10,
    fontSize: 16,
    borderColor: 'lightgray',
    borderWidth: 1,
    borderRadius: 5,
    backgroundColor: 'white',
  },
  eyeButton: {
    padding: 10,
    marginLeft: -40,
  },
  eyeIcon: {
    width: 25,
    height: 25,
    resizeMode: 'contain',
  },
});

export default PasswordInput;
