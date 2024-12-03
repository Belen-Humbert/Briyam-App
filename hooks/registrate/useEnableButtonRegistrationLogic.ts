import { useState, useEffect } from 'react';

const useEnableButtonRegistrationLogic = (
  nombre: string,
  apellidoPaterno: string,
  apellidoMaterno: string,
  telefono: string,
  email: string,
  password: string,
  confirmPassword: string,
  sucursal: string,
  especialidad: string,
  subEspecialidad: string,
  fuente: string
): boolean => {
  const [isButtonEnabled, setIsButtonEnabled] = useState<boolean>(false);

  useEffect(() => {
    const camposFaltantes: string[] = [];
    const allFieldsFilled = [nombre, apellidoPaterno, apellidoMaterno, telefono, email, password, confirmPassword, sucursal, especialidad, subEspecialidad, fuente]
      .every((field, index) => {
        if (typeof field !== 'string' || field.trim() === '') {
          const nombresCampos = ['Nombre', 'Apellido Paterno', 'Apellido Materno', 'Teléfono', 'Correo Electrónico', 'Contraseña', 'Confirmar Contraseña', 'Sucursal', 'Especialidad', 'Subespecialidad', 'Fuente'];
          camposFaltantes.push(nombresCampos[index]);
        }
        return typeof field === 'string' && field.trim() !== '';
      });

    const passwordsMatch = password === confirmPassword;
    
    const emailIsValid = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
    
    const shouldEnableButton = allFieldsFilled && passwordsMatch && emailIsValid;
    setIsButtonEnabled(shouldEnableButton);
  }, [
    nombre,
    apellidoPaterno,
    apellidoMaterno,
    telefono,
    email,
    password,
    confirmPassword,
    sucursal,
    especialidad,
    subEspecialidad,
    fuente
  ]);

  return isButtonEnabled;
};

export default useEnableButtonRegistrationLogic;
