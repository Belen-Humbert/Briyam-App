import { useState, useEffect } from 'react';
import { NavigationProp } from '@react-navigation/native';
import { UseRegisterLogicReturn } from '@hooks/registrate/UseRegisterLogicReturn';

const useRegisterUserLogic = (navigation: NavigationProp<any>): UseRegisterLogicReturn => {
  const [nombre, setNombre] = useState<string>('');
  const [apellidoPaterno, setApellidoPaterno] = useState<string>('');
  const [apellidoMaterno, setApellidoMaterno] = useState<string>('');
  const [telefono, setTelefono] = useState<string>('');
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [confirmPassword, setConfirmPassword] = useState<string>('');
  const [sucursal, setSucursal] = useState<string>('');
  const [especialidad, setEspecialidad] = useState<string>('');
  const [subEspecialidad, setSubEspecialidad] = useState<string>('');
  const [fuente, setFuente] = useState<string>('');
  const [loading, setLoading] = useState<boolean>(false);
  const [dialogVisible, setDialogVisible] = useState<boolean>(false);
  const [dialogMessage, setDialogMessage] = useState<string>('');
  const [isRegistrationSuccessful, setIsRegistrationSuccessful] = useState<boolean>(false);

  // Añadimos los estados para especialidades y fuentes
  const [especialidades, setEspecialidades] = useState<any[]>([]);
  const [especialidadesLoading, setEspecialidadesLoading] = useState<boolean>(true);
  const [especialidadesError, setEspecialidadesError] = useState<Error | null>(null);

  const [fuentes, setFuentes] = useState<any[]>([]);
  const [fuentesLoading, setFuentesLoading] = useState<boolean>(true);
  const [fuentesError, setFuentesError] = useState<Error | null>(null);

  // Simular la carga de datos (esto puedes reemplazarlo por un fetch real)
  useEffect(() => {
    setEspecialidadesLoading(true);
    setFuentesLoading(true);
    setTimeout(() => {
      setEspecialidades(['Especialidad 1', 'Especialidad 2']);
      setFuentes(['Fuente 1', 'Fuente 2']);
      setEspecialidadesLoading(false);
      setFuentesLoading(false);
    }, 2000);
  }, []);

  const handleRegister = () => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setDialogVisible(true);
      setIsRegistrationSuccessful(true);
      setDialogMessage('¡Registro exitoso!');
      navigation.navigate('HomeNavigationScreen');
    }, 3000);
  };

  return {
    nombre,
    setNombre,
    apellidoPaterno,
    setApellidoPaterno,
    apellidoMaterno,
    setApellidoMaterno,
    telefono,
    setTelefono,
    email,
    setEmail,
    password,
    setPassword,
    confirmPassword,
    setConfirmPassword,
    sucursal,
    setSucursal,
    especialidad,
    setEspecialidad,
    subEspecialidad,
    setSubEspecialidad,
    fuente,
    setFuente,
    loading,
    dialogVisible,
    setDialogVisible,
    dialogMessage,
    isRegistrationSuccessful,
    handleRegister,
    especialidades,
    especialidadesLoading,
    especialidadesError,
    fuentes,
    fuentesLoading,
    fuentesError,
  };
};

export default useRegisterUserLogic;
