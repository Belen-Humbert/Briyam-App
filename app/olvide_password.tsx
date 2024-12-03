import React from 'react';
import { ScrollView, TouchableOpacity } from 'react-native';
import { Box, Text, VStack, View } from 'native-base';
import CustomTextInput from '@components/CustomTextInput';
import CustomButton from '@components/CustomButton';
import LoadingDialog from '@components/LoadingDialog';
import CustomDialog from '@components/CustomDialog';
import { NativeBaseProvider } from 'native-base';
import usePasswordReset from '@hooks/olvide_password/usePasswordReset';
import useEmailValidation from '@hooks/olvide_password/useEmailValidation';
import Header from '@components/Header';
import styles from '@styles/olvide_password/OlvidePasswordScreen.styles';
import { NavigationProp, useNavigation } from '@react-navigation/native';

const OlvidePasswordScreen: React.FC = () => {

    const navigation = useNavigation<NavigationProp<any>>();

    const {
        email, setEmail,
        loading, 
        error, 
        successMessage,
        dialogVisible, setDialogVisible,
        handlePasswordReset,
        successReset,
        handleOnCloseCustomDialog,
        handleYaTengoUnCodigo
    } = usePasswordReset({ navigation });

    const isEmailValid = useEmailValidation(email); // Usa el hook para validar el correo

    return (
        <NativeBaseProvider>
            <View style={styles.container}>
                <Header logoSource={require('@images/logo.png')} />
                <ScrollView contentContainerStyle={styles.container2}>
                    <LoadingDialog visible={loading} title="Cargando..." message="Enviando solicitud de restablecimiento..." />
                    <VStack space={4} alignItems="center" mt={4}>
                        <Text fontSize="xl" fontWeight="bold" color="black">
                            Restablecer Contraseña
                        </Text>
                        <Box width="100%">
                            <Text fontSize="md" color="black" mb={1}>
                                Correo Electrónico
                            </Text>
                            <CustomTextInput
                                value={email}
                                onChangeText={setEmail}
                                placeholder="Introduce tu correo electrónico"
                                keyboardType="email-address"
                            />
                        </Box>
                        <CustomButton
                            onPress={handlePasswordReset}
                            title="Enviar"
                            backgroundColor="#158ACA"
                            disabled={!isEmailValid} // Habilita el botón solo si el correo es válido
                        />
                        <TouchableOpacity onPress={handleYaTengoUnCodigo}>
                            <Text style={styles.linkText}>
                                Ya tengo un código
                            </Text>
                        </TouchableOpacity>
                    </VStack>
                    <CustomDialog
                        visible={dialogVisible}
                        onClose={handleOnCloseCustomDialog}
                        message={error || successMessage}
                        type={successReset ? "success" : "error"}
                    />
                </ScrollView>
            </View>
        </NativeBaseProvider>
    );
};

export default OlvidePasswordScreen;
