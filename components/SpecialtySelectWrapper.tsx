// SpecialtySelectWrapper.tsx
import React from 'react';
import SpecialtySelect from '@components/SpecialtySelect';
import { Box } from 'native-base';
import { SpecialtySelectWrapperProps } from '@types/SpecialtySelectWrapper.types'; // Importa la interfaz

const SpecialtySelectWrapper: React.FC<SpecialtySelectWrapperProps> = ({
  selectedSpecialty,
  index,
  setSelectedSpecialties,
  selectedSpecialties,
}) => {
  const handleSelectChange = (value: string) => {
    const updatedSelectedSpecialties = [...selectedSpecialties];
    updatedSelectedSpecialties[index] = value;
    setSelectedSpecialties(updatedSelectedSpecialties);
  };

  return (
    <Box width="100%">
      <SpecialtySelect
        selectedSpecialty={selectedSpecialty}
        setSelectedSpecialty={handleSelectChange}
      />
    </Box>
  );
};

export default SpecialtySelectWrapper;
