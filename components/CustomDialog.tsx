import React from 'react';
import { Modal } from 'react-native';
import { Button, Center, Text, VStack, HStack, Icon } from 'native-base';
import { Ionicons } from '@expo/vector-icons';
import { CustomDialogProps } from '@/types/custom_dialog/CustomDialog.types';

const CustomDialog: React.FC<CustomDialogProps> = ({ visible, onClose, message, type }) => {
    
  const dialogColor = type === 'error' ? 'red.600' : 'green.600';
  const dialogIcon = type === 'error' ? 'close-circle' : 'checkmark-circle';
  const dialogTitle = type === 'error' ? 'Error' : 'Éxito';

  return (
    <Modal
      transparent={true}
      visible={visible}
      animationType="fade"
      onRequestClose={onClose}
    >
      <Center style={{ flex: 1, backgroundColor: 'rgba(0, 0, 0, 0.5)' }}>
        <VStack 
          w="80%" 
          p={6} 
          bg="white" 
          borderRadius="md" 
          alignItems="center" 
          shadow={2}
        >
          <HStack space={2} alignItems="center">
            <Icon as={Ionicons} name={dialogIcon} size="lg" color={dialogColor} />
            <Text fontSize="xl" fontWeight="bold" color={dialogColor}>
              {dialogTitle}
            </Text>
          </HStack>
          <Text textAlign="center" mt={3} mb={5}>
            {message}
          </Text>
          <Button onPress={onClose} colorScheme={type === 'error' ? 'red' : 'green'}>
            OK
          </Button>
        </VStack>
      </Center>
    </Modal>
  );
};

export default CustomDialog;
