import React from 'react';
import { VStack, HStack, Text, Avatar, Button, Icon, Box, Divider } from 'native-base';
import { MaterialIcons } from '@expo/vector-icons';
import useImagePicker from '@hooks/useImagePicker';
import { DoctorProfileSectionProps } from '@types/DoctorProfileSection.types';

const DoctorProfileSection: React.FC<DoctorProfileSectionProps> = ({ 
  isEditMode = false, 
  especialidad, 
  foto_perfil, 
  nombreCompleto, 
  marginTop = "0" 
}) => {
  
  const { selectedImage, pickImage } = useImagePicker();

  return (
    <Box
      bg="white"
      rounded="lg"
      shadow={3}
      w="100%"
      mx="auto"
      mt={marginTop}
      alignItems="center"
    >
      <HStack justifyContent="space-between" alignItems="center" w="100%">
        
        <Avatar
          bg="gray.500"
          source={selectedImage
            ? { uri: selectedImage }
            : foto_perfil
              ? { uri: foto_perfil }
              : require('@images/doctor.png')}
          size="100px"
          borderRadius={50}
          borderColor="gray.300"
          borderWidth={2}
          shadow={2}
        />

        <VStack alignItems="center" w="60%">
          <Text fontSize="xl" bold color="#000000">
            {nombreCompleto || 'Nombre del Médico'}
          </Text>
          <Text fontSize="md" color="#6B7280">
            {especialidad || 'Especialidad'}
          </Text>
        </VStack>

      </HStack>

      <Divider my={4} bg="#E5E7EB" />

      {isEditMode && (
        <Button
          variant="solid"
          colorScheme="blue"
          size="sm"
          mt={2}
          mb={2}
          leftIcon={<Icon as={MaterialIcons} name="photo-camera" size="sm" />}
          onPress={pickImage}
          rounded="full"
        >
          Cargar Foto de perfil
        </Button>
      )}
    </Box>
  );
};

export default DoctorProfileSection;
