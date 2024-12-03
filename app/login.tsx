import React, { useEffect, useState } from 'react';
import { ScrollView } from 'react-native';
import { VStack } from 'native-base';
import useLoginLogic from '@hooks/login/useLoginLogic';
import LoginHeader from '@components/login/LoginHeader';
import LoginFields from '@components/login/LoginFields';
import { NativeBaseProvider } from 'native-base';
import LoginButtons from '@components/login/LoginButtons';
import LoadingDialog from '@components/LoadingDialog';
import CustomDialog from '@components/CustomDialog';
import { NavigationProp, useNavigation } from '@react-navigation/native';
import styles from '@styles/login/LoginScreen.styles';

const LoginScreen: React.FC = () => {

    const navigation = useNavigation<NavigationProp<any>>();

    const {
        email, setEmail,
        password, setPassword,
        isPasswordVisible, togglePasswordVisibility,
        isButtonEnabled, handleLogin,
        loading, error,
    } = useLoginLogic(navigation);

    const [dialogVisible, setDialogVisible] = useState<boolean>(false);

    useEffect(() => {
        
        // Log de error al detectar un error en el login
        if (error) {
            setDialogVisible(true);
        }

        // Log de limpieza al desmontar el componente
        return () => {
            
        };
    }, [error]);

    return (
        <NativeBaseProvider>
            <ScrollView contentContainerStyle={styles.container}>

                <LoadingDialog visible={loading} title="Cargando..." />
                
                <LoginHeader />

                <VStack space={4} alignItems="center" mt={-15}>
                    <LoginFields
                        email={email}
                        setEmail={setEmail}
                        password={password}
                        setPassword={setPassword}
                        isPasswordVisible={isPasswordVisible}
                        togglePasswordVisibility={togglePasswordVisibility}
                    />

                    <LoginButtons
                        handleLogin={handleLogin}
                        isButtonEnabled={isButtonEnabled}
                    />
                </VStack>

                <CustomDialog type={error ? 'error' : 'success'} visible={dialogVisible} onClose={() => setDialogVisible(false)} message={error} />

            </ScrollView>
        </NativeBaseProvider>
    );
};

export default LoginScreen;
