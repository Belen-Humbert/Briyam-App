import React from 'react';
import { VStack, Text, Input } from 'native-base';
import { FormacionInputProps } from '@types/FormacionInputProps.types'; // Asegúrate de ajustar la ruta

const FormacionInput: React.FC<FormacionInputProps> = ({ index, value, onChange }) => {
  return (
    <VStack space={2}>
      <Text fontSize="md">{`Formación ${index + 1}:`}</Text>
      <Input
        value={value} // Muestra el valor de la formación correspondiente
        onChangeText={(text) => onChange(text, index)} // Maneja el cambio de valor
        placeholder={`Editar Formación ${index + 1}`}
        width="100%"
      />
    </VStack>
  );
};

export default FormacionInput;
