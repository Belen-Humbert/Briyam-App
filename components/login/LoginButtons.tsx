import React from 'react';
import { TouchableOpacity } from 'react-native';
import { Text } from 'native-base';
import CustomButton from '@components/CustomButton';
import { NavigationProp, useNavigation } from '@react-navigation/native';
import { LoginButtonsProps } from '@/types/login/LoginButtons.types';
import styles from '@styles/login/LoginButtons.styles';

const LoginButtons: React.FC<LoginButtonsProps> = ({
  handleLogin,
  isButtonEnabled,
}) => {
  
  const navigation = useNavigation<NavigationProp<any>>();

  return (
    <>
      <TouchableOpacity onPress={() => navigation.navigate('olvide_password')}>
        <Text style={styles.linkText}>
          ¿Olvidaste tu contraseña?
        </Text>
      </TouchableOpacity>

      <CustomButton
        onPress={handleLogin}
        title="Iniciar Sesión"
        disabled={!isButtonEnabled}
      />

      <CustomButton
        onPress={() => navigation.navigate('registrate')}
        title="¿Aún no te registraste?"
        backgroundColor="#ffffff"
        borderColor="#158ACA"
        textColor="#158ACA"
        fontWeight="normal"
        style={styles.customButton}
      />
    </>
  );
};

export default LoginButtons;
