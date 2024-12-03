import React from 'react';
import { Box, Input, IconButton, Icon, Text } from 'native-base';
import { Ionicons } from '@expo/vector-icons';
import usePasswordVisibility from '@hooks/usePasswordVisibility';

interface PasswordFieldProps {
  label: string;
  value: string;
  onChangeText: (text: string) => void;
  placeholder: string;
}

const PasswordField: React.FC<PasswordFieldProps> = ({ label, value, onChangeText, placeholder }) => {
  const { passwordVisible, togglePasswordVisibility } = usePasswordVisibility();

  return (
    <Box marginBottom={5}>
      <Text fontSize="md" marginBottom={2} fontFamily="Inter_400Regular">{label}</Text>
      <Box flexDirection="row" alignItems="center">
        <Input
          flex={1}
          height={10}
          borderColor="coolGray.300"
          borderWidth={1}
          paddingX={3}
          value={value}
          backgroundColor="white"
          onChangeText={onChangeText}
          placeholder={placeholder}
          secureTextEntry={!passwordVisible}
          _focus={{
            borderColor: 'coolGray.500',
          }}
        />
        <IconButton
          icon={
            <Icon
              as={Ionicons}
              name={passwordVisible ? 'eye' : 'eye-off'}
              size="md"
              color="coolGray.600"
            />
          }
          onPress={togglePasswordVisibility}
        />
      </Box>
    </Box>
  );
};

export default PasswordField;
