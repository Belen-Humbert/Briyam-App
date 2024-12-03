// FormacionFields.tsx
import React from 'react';
import { VStack, Text, Spinner } from 'native-base';
import FormacionInput from '@components/FormacionInput'; // Ajusta la ruta según tu estructura
import { FormacionFieldsProps } from '@types/FormacionFields.types'; // Ajusta la ruta según tu estructura

const FormacionFields: React.FC<FormacionFieldsProps> = ({
  loading,
  error,
  selectedFormacion,
  handleInputChange,
}) => {
  if (loading) {
    return <Spinner />;
  }

  if (error) {
    return <Text color="red.500">{error}</Text>;
  }

  if (Array.isArray(selectedFormacion) && selectedFormacion.length > 0) {
    return (
      <VStack space={4}>
        {selectedFormacion.map((formacion, index) => (
          <FormacionInput
            key={index}
            index={index}
            value={formacion}
            onChange={handleInputChange}
          />
        ))}
      </VStack>
    );
  }

  return <Text>No hay formación académica disponible.</Text>;
};

export default FormacionFields;
