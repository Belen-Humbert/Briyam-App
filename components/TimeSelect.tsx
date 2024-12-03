// TimeSelect.tsx

import React from 'react';
import { VStack, Text, Select } from 'native-base';
import { TimeSelectProps } from '@types/TimeSelect.types'; // Asegúrate de que la ruta sea correcta

const TimeSelect: React.FC<TimeSelectProps> = ({ title, selectedValue, onValueChange, options }) => (
  <VStack space={4} w="80%" alignItems="center">
    <Text>{title}</Text>
    <Select
      selectedValue={selectedValue}
      minWidth="85%"
      onValueChange={onValueChange}
      accessibilityLabel={`Seleccionar ${title.toLowerCase()}`}
      variant="filled"
    >
      {options.map((option, index) => (
        <Select.Item label={option} value={option} key={index} />
      ))}
    </Select>
  </VStack>
);

export default TimeSelect;
