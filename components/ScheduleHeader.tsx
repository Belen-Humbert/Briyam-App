// ScheduleHeader.tsx
import React from 'react';
import { Text } from 'native-base';

const ScheduleHeader = ({ isEditMode }: { isEditMode: boolean }) => {
  return (
    <Text fontSize="lg" bold color="#0F2661" mb={"45"}>
      {isEditMode ? 'Modificar Horarios' : 'Horarios Disponibles'}
    </Text>
  );
};

export default ScheduleHeader;
