import React from 'react';
import { HStack, Text, VStack, FormControl, Pressable, Image } from 'native-base';
import RNikeImage from '@images/r_nike.png';
import { EducacionSectionProps } from '@/types/EducacionSectionProps.types'; // Asegúrate de que la ruta sea correcta

const EducacionSection: React.FC<EducacionSectionProps> = ({
  isEditMode,
  onPress,
}) => {
  return (
    <HStack justifyContent="space-between" alignItems="center" w="100%">
      <Image
        source={require('@images/educacion.png')}
        alt="Educación"
        width="30%"
        resizeMode="center"
        height="100px"
        marginRight="20px"
      />
      <VStack justifyContent="space-between" alignItems="flex-start" w="80%">
        <Text fontSize="15px" bold color="#0F2661">Educación</Text>
        <FormControl.Label variant="outline">
          Completa tu educación
        </FormControl.Label>
      </VStack>
      {isEditMode && (
        <Pressable onPress={onPress}>
          <Image
            source={RNikeImage}
            alt="Icono educación"
            width={6}
            height={6}
            resizeMode="contain"
            pr={5}
          />
        </Pressable>
      )}
    </HStack>
  );
};

export default EducacionSection;
