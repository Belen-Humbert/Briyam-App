import React from 'react';
import { Box, Text } from 'native-base';
import CustomTextInput from '@/components/CustomTextInput';
import PasswordInput from '@components/PasswordInput';
import { LoginFieldsProps } from '@/types/login/LoginFields.types';
import styles from '@styles/login/LoginFields.styles';

const LoginFields: React.FC<LoginFieldsProps> = ({
  email,
  setEmail,
  password,
  setPassword,
  isPasswordVisible,
  togglePasswordVisibility,
}) => (
  <>
    {/* Email Field */}
    <Box width="100%">
      <Text style={styles.label}>
        Correo Electrónico
      </Text>
      <CustomTextInput
        value={email}
        onChangeText={setEmail}
        placeholder="Introduce tu correo electrónico"
        keyboardType="email-address"
      />
    </Box>

    {/* Password Field */}
    <Box width="100%">
      <Text style={styles.label}>
        Contraseña
      </Text>
      <PasswordInput
        value={password}
        onChangeText={setPassword}
      />
    </Box>
  </>
);

export default LoginFields;
