import { useState } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import useFormValidation from './useFormValidation';
import { loginAPI } from '@api/medico/loginAPI';
import { LoginLogic } from '@hooks/login/LoginLogic'; // Importa la interfaz desde el archivo correspondiente
import { NavigationProp } from '@react-navigation/native';

const useLoginLogic = (navigation: NavigationProp<any>): LoginLogic => {

    const [email, setEmail] = useState<string>('');
    const [password, setPassword] = useState<string>('');
    const [isPasswordVisible, setIsPasswordVisible] = useState<boolean>(false);
    const [loading, setLoading] = useState<boolean>(false);
    const [error, setError] = useState<string>('');

    const isButtonEnabled = useFormValidation(email, password);

    const handleLogin = async () => {
        
        setLoading(true);
        setError('');

        try {
            const result = await loginAPI(email, password);
            
            if (result.status === 200 && result.token) {
                await AsyncStorage.setItem('authToken', result.token);
                navigation.navigate('home_navigation');
            } else {
                console.warn('Login fallido: Credenciales incorrectas');
                setError('Credenciales Incorrectas');
            }

        } catch (error: any) {
            console.error('Error en el proceso de login:', error.message || 'Error desconocido');
            setError(error.message || 'Error desconocido');
        } finally {
            setLoading(false);
        }
    };

    const togglePasswordVisibility = () => {
        setIsPasswordVisible((prev) => !prev);
    };

    return {
        email,
        setEmail,
        password,
        setPassword,
        isPasswordVisible,
        togglePasswordVisibility,
        isButtonEnabled,
        handleLogin,
        loading,
        error,
        setLoading,
        setError,
    };
};

export default useLoginLogic;
