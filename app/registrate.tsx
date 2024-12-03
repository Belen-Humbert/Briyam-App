import React from 'react';
import { ScrollView, View } from 'react-native';
import UserInfoSection from '@components/registrate/UserInfoSection';
import PasswordSection from '@components/registrate/PasswordSection';
import PickerFieldSucursales from '@/components/PickerFieldSucursales';
import PickerFieldEspecialidades from '@/components/PickerFieldEspecialidades';
import PickerFieldComoSeEntero from '@components/registrate/PickerFieldComoSeEntero';
import SubmitButton from '@components/registrate/SubmitButton';
import AlreadyHaveAccountButton from '@components/registrate/AlreadyHaveAccountButton';
import FormFooter from '@components/registrate/FormFooter';
import LoadingDialog from '@components/LoadingDialog';
import { NativeBaseProvider } from 'native-base';
import CustomDialog from '@components/CustomDialog';
import TextField from '@components/TextField';
import Header from '../components/Header';
import useRegistrateScreenLogic from '@hooks/registrate/useRegistrateScreenLogic';
import useEnableButtonRegistrationLogic from '@hooks/registrate/useEnableButtonRegistrationLogic'; 
import styles from '@/styles/registrate/RegistrateScreen.styles';

const RegistrateScreen: React.FC = () => {

    const {
        nombre, setNombre, apellidoPaterno, setApellidoPaterno, apellidoMaterno, setApellidoMaterno,
        telefono, setTelefono, email, setEmail, password, setPassword, confirmPassword, setConfirmPassword,
        sucursal, setSucursal, especialidad, setEspecialidad, subEspecialidad, setSubEspecialidad, fuente, setFuente,
        branchesLoading, loading, dialogVisible, dialogMessage, handleGreenDialogClose, onSubmit, navigateToLogin, isRegistrationSuccessful, setDialogVisible, handleDialogClose
    } = useRegistrateScreenLogic();

    const isButtonEnabled = useEnableButtonRegistrationLogic(
        nombre, apellidoPaterno, apellidoMaterno, telefono, email, password, confirmPassword,
        sucursal, especialidad, subEspecialidad, fuente
    );

    return (
        <NativeBaseProvider>
            <View style={{ flex: 1 }}>
                <Header logoSource={require('@images/logo.png')} />
                <ScrollView contentContainerStyle={styles.scrollViewContainer}>
                    <View style={styles.innerScrollContainer}>
                        <LoadingDialog visible={loading || branchesLoading} title="Cargando..." message="Por favor espera..." />

                        {/* Diálogo personalizado que se muestra para éxito o error según el estado */}
                        <CustomDialog
                            visible={dialogVisible}
                            onClose={handleDialogClose}
                            message={dialogMessage}
                            type={isRegistrationSuccessful ? 'success' : 'error'}
                        />

                        <UserInfoSection nombre={nombre} setNombre={setNombre} apellidoPaterno={apellidoPaterno} setApellidoPaterno={setApellidoPaterno} 
                            apellidoMaterno={apellidoMaterno} setApellidoMaterno={setApellidoMaterno} telefono={telefono} setTelefono={setTelefono} email={email} setEmail={setEmail} />

                        <PasswordSection password={password} setPassword={setPassword} confirmPassword={confirmPassword} setConfirmPassword={setConfirmPassword} />

                        <PickerFieldSucursales label="Sucursal" selectedValue={sucursal} onValueChange={setSucursal} placeholder="Selecciona la sucursal a reservar" />

                        <PickerFieldEspecialidades label="Especialidad" selectedValue={especialidad} onValueChange={setEspecialidad} placeholder="Selecciona la especialidad" />

                        <TextField label="Subespecialidad" value={subEspecialidad} onChangeText={setSubEspecialidad} placeholder="Introduce tu subespecialidad" />

                        <PickerFieldComoSeEntero label="Cómo se enteró de nosotros" selectedValue={fuente} onValueChange={setFuente} placeholder="Selecciona una opción" />

                        <SubmitButton onPress={onSubmit} title="Registrarse" isEnabled={isButtonEnabled} />
                        <AlreadyHaveAccountButton onPress={navigateToLogin} />
                        <FormFooter />
                    </View>
                </ScrollView>
            </View>
        </NativeBaseProvider>
    );
};

export default RegistrateScreen;
