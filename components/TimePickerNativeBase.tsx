import React from 'react'; 
import { Box, Button, Actionsheet, Text, VStack } from 'native-base';
import { TimePickerProps } from '@types/TimePickerNativeBase.types';
import { validateTime } from '@/utils/timeValidationUtils';
import TimeSelect from '@components/TimeSelect';

const TimePickerNativeBase: React.FC<TimePickerProps> = ({
  isOpen,
  onConfirm,
  onCancel,
  initialHour = null,
  initialMinute = null,
  initialPeriod = null
}) => {
    
  const currentHour = new Date().getHours();
  const currentMinute = new Date().getMinutes();

  const { validHour, validMinute, validPeriod } = validateTime(initialHour, initialMinute, initialPeriod, currentHour, currentMinute);

  const [selectedHour, setSelectedHour] = React.useState(validHour);
  const [selectedMinute, setSelectedMinute] = React.useState(validMinute);
  const [selectedPeriod, setSelectedPeriod] = React.useState(validPeriod);

  const confirmTime = () => {
    onConfirm(selectedHour, selectedMinute, selectedPeriod);
  };

  return (
    <Box>
      <Actionsheet isOpen={isOpen} onClose={onCancel}>
        <Actionsheet.Content>
          <Text fontSize="lg" bold color="primary.500">Seleccionar Hora</Text>

          <VStack space={6} alignItems="center" mt={4} w="100%">
            <TimeSelect 
              title="Hora"
              selectedValue={selectedHour}
              onValueChange={setSelectedHour}
              options={Array.from({ length: 12 }, (_, i) => `${i === 0 ? 12 : (i < 10 ? '0' : '')}${i}`)}
            />

            <TimeSelect 
              title="Minutos"
              selectedValue={selectedMinute}
              onValueChange={setSelectedMinute}
              options={Array.from({ length: 60 }, (_, i) => `${i < 10 ? '0' : ''}${i}`)}
            />

            <TimeSelect 
              title="Periodo"
              selectedValue={selectedPeriod}
              onValueChange={setSelectedPeriod}
              options={['AM', 'PM']}
            />
          </VStack>

          <Button
            mt={6}
            onPress={confirmTime}
            _text={{ color: 'white', fontWeight: 'bold' }}
            backgroundColor="primary.500"
            borderRadius="full"
            _pressed={{ bg: 'primary.700' }}
            alignSelf="center"
            width="70%"
          >
            Confirmar
          </Button>
        </Actionsheet.Content>
      </Actionsheet>
    </Box>
  );
};

export default TimePickerNativeBase;
