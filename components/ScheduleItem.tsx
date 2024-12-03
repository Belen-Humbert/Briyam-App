// ScheduleItem.tsx
import React from 'react';
import { Box, Text, VStack, HStack, Switch } from 'native-base';
import { TouchableOpacity } from 'react-native';
import { ScheduleItemProps } from '@types/ScheduleItem.types'; // Importar la interfaz

const ScheduleItem: React.FC<ScheduleItemProps> = ({
  schedule,
  onToggle,
  onSelectStartTime,
  onSelectEndTime,
}) => (
  <Box borderBottomWidth={1} borderColor="gray.200" py={2} h={"150px"}>
    <VStack flex={1}>
      <HStack justifyContent="space-between" alignItems="center">
        <Text fontSize="md" color="black" bold>
          {schedule.day}
        </Text>
        <Switch size="md" isChecked={schedule.isEnabled} onToggle={onToggle} />
      </HStack>
      {schedule.isEnabled && (
        <HStack justifyContent="center" alignItems="center" space={4} mt={2}>
          <VStack alignItems="center">
            <Text fontSize="sm">Inicio:</Text>
            <TouchableOpacity onPress={onSelectStartTime}>
              <Box
                borderWidth={1}
                borderColor="blue.500"
                borderRadius="md"
                paddingX={2}
                paddingY={1}
                minWidth="90px"
                alignItems="center"
                backgroundColor="blue.50"
              >
                <Text fontSize="sm">{schedule.startTime || 'Seleccionar'}</Text>
              </Box>
            </TouchableOpacity>
          </VStack>
          <Text fontSize="sm">a</Text>
          <VStack alignItems="center">
            <Text fontSize="sm">Fin:</Text>
            <TouchableOpacity onPress={onSelectEndTime}>
              <Box
                borderWidth={1}
                borderColor="blue.500"
                borderRadius="md"
                paddingX={2}
                paddingY={1}
                minWidth="90px"
                alignItems="center"
                backgroundColor="blue.50"
              >
                <Text fontSize="sm">{schedule.endTime || 'Seleccionar'}</Text>
              </Box>
            </TouchableOpacity>
          </VStack>
        </HStack>
      )}
    </VStack>
  </Box>
);

export default ScheduleItem;
