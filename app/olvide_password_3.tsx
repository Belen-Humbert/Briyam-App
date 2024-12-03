import React from 'react';
import { ScrollView, StyleSheet } from 'react-native';
import { Box, Text, VStack, View } from 'native-base';
import PasswordInput from '../components/PasswordInput';
import CustomButton from '@components/CustomButton';
import LoadingDialog from '@components/LoadingDialog';
import CustomDialog from '@components/CustomDialog';
import usePasswordReset from '@hooks/olvide_passwod_3/usePasswordReset';
import usePasswordValidation from '@hooks/olvide_passwod_3/usePasswordValidation';
import { NativeBaseProvider } from 'native-base';
import Header from '../components/Header';
import { NavigationProp, useNavigation } from '@react-navigation/native';
import styles from '@styles/olvide_password_3/OlvidePassword3Screen.styles';

const OlvidePassword3Screen: React.FC = () => {

  const navigation = useNavigation<NavigationProp<any>>();

  const {
    password, setPassword,
    confirmPassword, setConfirmPassword,
    loading, error, successMessage,
    dialogVisible, setDialogVisible,
    handlePasswordReset,
    handleOnCloseDialog
  } = usePasswordReset({ navigation });

  const isSubmitEnabled = usePasswordValidation(password, confirmPassword);

  return (
    <NativeBaseProvider>
        <View>
        <Header logoSource={require('@images/logo.png')} />
        <ScrollView contentContainerStyle={styles.container}>
            <LoadingDialog visible={loading} title="Cargando..." message="Enviando solicitud de restablecimiento..." />

            <VStack space={4} alignItems="center" mt={4}>
            <Text fontSize="xl" fontWeight="bold" color="black">
                Restablecer Contraseña
            </Text>

            <Box width="100%">
                <Text fontSize="md" color="black" mb={1}>
                Contraseña
                </Text>
                <PasswordInput
                    value={password}
                    onChangeText={setPassword}
                />
            </Box>

            <Box width="100%">
                <Text fontSize="md" color="black" mb={1}>
                Repite Contraseña
                </Text>
                <PasswordInput
                    value={confirmPassword}
                    onChangeText={setConfirmPassword}
                />
            </Box>

            <CustomButton
                onPress={handlePasswordReset}
                title="Enviar"
                backgroundColor="#158ACA"
                disabled={!isSubmitEnabled}
            />
            </VStack>

            <CustomDialog
                visible={dialogVisible}
                onClose={handleOnCloseDialog}
                message={error || successMessage}
                type={successMessage ? 'success' : 'error'}
            />
        </ScrollView>
        </View>
    </NativeBaseProvider>
  );
};

export default OlvidePassword3Screen;
