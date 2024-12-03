import React from 'react';
import { Image } from 'react-native';
import { Center, Text } from 'native-base';
import { LoginHeaderProps } from '@/types/login/LoginHeader.types';
import styles from '@styles/login/LoginHeader.styles';

const logoSource = require('@images/logo.png');

const LoginHeader: React.FC<LoginHeaderProps> = () => (
  <Center>
    <Image source={logoSource} style={styles.logoImage} />
    <Text style={styles.text}>
      Iniciar Sesión
    </Text>
  </Center>
);

export default LoginHeader;
