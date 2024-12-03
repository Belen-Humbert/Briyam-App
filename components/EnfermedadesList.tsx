// EnfermedadesList.tsx
import React from 'react';
import { VStack, Text, Input } from 'native-base';
import { EnfermedadesListProps } from '@types/EnfermedadesList.types'; // Asegúrate de ajustar la ruta según tu estructura de carpetas

const EnfermedadesList: React.FC<EnfermedadesListProps> = ({
  enfermedades,
  selectedEnfermedades,
  setSelectedEnfermedades,
}) => {
  const handleInputChange = (value: string, index: number) => {
    const updatedEnfermedades = [...selectedEnfermedades];
    updatedEnfermedades[index] = value;
    setSelectedEnfermedades(updatedEnfermedades);
  };

  return (
    <>
      {enfermedades.map((enfermedad, index) => (
        <VStack key={index} space={2}>
          <Text fontSize="md">{`Enfermedad ${index + 1}:`}</Text>
          <Input
            value={selectedEnfermedades[index]}
            onChangeText={(value) => handleInputChange(value, index)}
            placeholder={`Editar Enfermedad ${index + 1}`}
            width="100%"
          />
        </VStack>
      ))}
    </>
  );
};

export default EnfermedadesList;
