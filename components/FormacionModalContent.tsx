import React from 'react';
import { ScrollView } from 'native-base';
import FormacionModalContentContainer from './FormacionModalContentContainer'; // Ajusta la ruta
import { FormacionModalContentContainerProps } from '@/types/FormacionModalContentContainer.types';

const FormacionModalContent: React.FC<FormacionModalContentContainerProps> = ({
  selectedFormacion,
  setSelectedFormacion,
}) => {
  return (
    <ScrollView>
      <FormacionModalContentContainer
        selectedFormacion={selectedFormacion}
        setSelectedFormacion={setSelectedFormacion}
      />
    </ScrollView>
  );
};

export default FormacionModalContent;
