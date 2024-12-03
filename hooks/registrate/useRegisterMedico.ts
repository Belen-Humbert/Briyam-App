import { useState } from 'react';
import { registerNewMedico } from '@api/medico/registerNewMedicoAPI'; // Asegúrate de que este archivo contiene la lógica para el POST.
import { RegisterMedicoResponse } from '@api/medico/responses/RegisterMedicoResponse';
import { RegisterMedicoParams } from '@hooks/registrate/RegisterMedicoParams';

const useRegisterMedico = () => {
  const [loading, setLoading] = useState<boolean>(false);
  const [dialogVisible, setDialogVisible] = useState<boolean>(false);
  const [dialogMessage, setDialogMessage] = useState<string>('');
  const [isRegistrationSuccessful, setIsRegistrationSuccessful] = useState<boolean>(false);

  const handleRegister = async (params: RegisterMedicoParams): Promise<void> => {
    setLoading(true);

    try {
      const response: RegisterMedicoResponse = await registerNewMedico(params);
      
      if (!response.error) {
        setIsRegistrationSuccessful(true);
        setDialogMessage("¡Registro exitoso!");
      } 
    } catch (error: any) {
        let messageError;
        if(error.message.includes("El usuario ya existe")){
            messageError = "El usuario ya existe";
        } else {
            messageError = error.message;
        }
        setDialogMessage(messageError);
        setIsRegistrationSuccessful(false);
        setDialogMessage(messageError);
    } finally {
      setLoading(false);
      setDialogVisible(true);
    }
  };

  return {
    loading,
    dialogVisible,
    setDialogVisible,
    dialogMessage,
    isRegistrationSuccessful,
    handleRegister,
  };
};

export default useRegisterMedico;
