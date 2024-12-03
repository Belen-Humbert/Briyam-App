import React from 'react';
import { Box } from 'native-base';
import LoadingError from '@components/LoadingError';
import FormacionList from '@components/FormacionList';
import useFormacion from '@hooks/useFormacion'; // Asegúrate de ajustar la ruta
import { FormacionModalContentContainerProps } from '@types/FormacionModalContentContainer.types'; // Ajusta la ruta

const FormacionModalContentContainer: React.FC<FormacionModalContentContainerProps> = ({
  selectedFormacion,
  setSelectedFormacion,
}) => {
  const { loading, error } = useFormacion(setSelectedFormacion);

  return (
    <Box width="100%">
      <LoadingError loading={loading} error={error} />
      <FormacionList
        selectedFormacion={selectedFormacion}
        handleInputChange={(value, index) => {
          const updatedFormacion = [...selectedFormacion];
          updatedFormacion[index] = value;
          setSelectedFormacion(updatedFormacion);
        }}
      />
    </Box>
  );
};

export default FormacionModalContentContainer;
