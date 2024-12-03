import React from 'react';
import { VStack, Box, Text } from 'native-base';
import FormacionInput from '@components/FormacionInput';
import { FormacionListProps } from '@types/FormacionList.types'; // Ajusta la ruta según tu estructura

const FormacionList: React.FC<FormacionListProps> = ({ selectedFormacion, handleInputChange }) => {
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

export default FormacionList;
