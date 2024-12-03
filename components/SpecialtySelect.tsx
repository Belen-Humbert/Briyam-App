// SpecialtySelect.tsx
import React from 'react';
import { HStack } from 'native-base';
import { useFetchEspecialidades } from '@hooks/useFetchEspecialidades';
import LoadingIndicator from '@components/LoadingIndicator';
import ErrorMessage from '@components/ErrorMessage';
import SelectSpecialty from '@components/SelectSpecialty';
import { SpecialtySelectProps } from '@types/SpecialtySelect.types'; // Importa la interfaz

const SpecialtySelect: React.FC<SpecialtySelectProps> = ({ selectedSpecialty, setSelectedSpecialty }) => {
  const { especialidades, loading, error } = useFetchEspecialidades();

  return (
    <HStack space={2} alignItems="center" mt={4} width="100%">
      {loading ? (
        <LoadingIndicator />
      ) : error ? (
        <ErrorMessage error={error} />
      ) : (
        <SelectSpecialty
          selectedSpecialty={selectedSpecialty}
          setSelectedSpecialty={setSelectedSpecialty}
          especialidades={especialidades}
        />
      )}
    </HStack>
  );
};

export default SpecialtySelect;
