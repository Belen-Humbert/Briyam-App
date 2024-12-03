// SpecialtySelectSection.tsx
import React from 'react';
import { VStack, Box, Text } from 'native-base';
import SpecialtySelectWrapper from '@components/SpecialtySelectWrapper';
import { SpecialtySelectSectionProps } from '@types/SpecialtySelectSection.types'; // Importa la interfaz

const SpecialtySelectSection: React.FC<SpecialtySelectSectionProps> = ({
  selectedSpecialties,
  setSelectedSpecialties,
}) => {
  return (
    <VStack space={4}>
      <Box width="100%" alignItems="center">
        {selectedSpecialties.map((selectedSpecialty, index) => (
          <Box key={index} width="100%" mb={4}>
            <Text fontSize="md" bold>
              Especialidad {index + 1}:
            </Text>
            <SpecialtySelectWrapper
              selectedSpecialty={selectedSpecialty}
              index={index}
              setSelectedSpecialties={setSelectedSpecialties}
              selectedSpecialties={selectedSpecialties}
            />
          </Box>
        ))}
      </Box>
    </VStack>
  );
};

export default SpecialtySelectSection;
