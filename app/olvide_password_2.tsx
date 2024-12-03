import React, { useState, useEffect } from 'react';
import { ScrollView } from 'react-native';
import { Box, Text, VStack, View } from 'native-base';
import CustomTextInput from '@components/CustomTextInput';
import CustomButton from '@components/CustomButton';
import LoadingDialog from '@components/LoadingDialog';
import CustomDialog from '@components/CustomDialog';
import Header from '@components/Header';
import { NativeBaseProvider } from 'native-base';
import useVerification from '@hooks/olvide_password_2/useVerification';
import useEnableButtonVerification from '@hooks/olvide_password_2/useEnableButtonVerification';
import { NavigationProp, useNavigation } from '@react-navigation/native';
import styles from '@styles/olvide_password_2/OlvidePassword2Screen.styles';
import AsyncStorage from '@react-native-async-storage/async-storage';

const OlvidePassword2Screen: React.FC = () => {

  const navigation = useNavigation<NavigationProp<any>>();
  const [showEmailField, setShowEmailField] = useState(false);
  const [email, setEmail] = useState('');

  const {
    codigo,
    setCodigo,
    loading,
    error,
    successMessage,
    dialogVisible,
    handleVerification,
    handleCloseDialog
  } = useVerification(navigation, email);

  const isButtonEnabled = useEnableButtonVerification(codigo,email);

  // Efecto para verificar si existe 'yatengouncodigo' en AsyncStorage
  useEffect(() => {
    const checkStorage = async () => {
      const yatengouncodigo = await AsyncStorage.getItem("yatengouncodigo");
      setShowEmailField(yatengouncodigo==="true"); // Muestra el campo de correo si 'yatengouncodigo' tiene valor
    };

    checkStorage();
  }, []);

  return (
    <NativeBaseProvider>
      <View style={styles.container}>
        <Header logoSource={require('@images/logo.png')} />
        <ScrollView contentContainerStyle={styles.container2}>
          <LoadingDialog visible={loading} title="Cargando..." message="Verificando el código de verificación..." />

          <VStack space={4} alignItems="center" mt={4} style={styles.container2}>
            <Text fontSize="xl" fontWeight="bold" color="black">
              Restablecer Contraseña
            </Text>

            {showEmailField && (
              <Box width="100%">
                <Text fontSize="md" color="black" mb={1}>
                  Correo Electrónico
                </Text>
                <CustomTextInput
                  value={email}
                  onChangeText={setEmail}
                  placeholder="Introduce tu correo electrónico"
                  keyboardType="email-address"
                  maxLength={50}
                />
              </Box>
            )}

            <Box width="100%">
              <Text fontSize="md" color="black" mb={1}>
                Código de Verificación
              </Text>
              <CustomTextInput
                value={codigo}
                onChangeText={setCodigo}
                placeholder="Introduce tu código de verificación"
                keyboardType="default"
                uppercase={true}
                maxLength={6}
              />
            </Box>

            <CustomButton
              onPress={handleVerification}
              title="Enviar"
              backgroundColor="#158ACA"
              disabled={!isButtonEnabled || loading}
            />
          </VStack>

          <CustomDialog
            visible={dialogVisible}
            onClose={handleCloseDialog}
            message={error || successMessage}
            type={error ? 'error' : 'success'}
          />
        </ScrollView>
      </View>
    </NativeBaseProvider>
  );
};

export default OlvidePassword2Screen;
