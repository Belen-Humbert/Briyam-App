import React from 'react';
import { HStack, Text, VStack, FormControl, Pressable, Image } from 'native-base';
import RNikeImage from '@images/r_nike.png';
import { SpecialtySectionProps } from '@types/SpecialtySectionProps.types'; // Asegúrate de que la ruta sea correcta

const SpecialtySection: React.FC<SpecialtySectionProps> = ({
  especialidadMedico,
  isEditMode,
  onPress,
}) => {
  return (
    <HStack justifyContent="space-between" alignItems="center" w="100%">
      <Image
        source={require('@images/especializacion.png')}
        alt="Especialización"
        width="30%"
        height="100px"
        resizeMode="center"
        marginRight="20px"
      />
      <VStack justifyContent="space-between" alignItems="flex-start" w="80%">
        <Text fontSize="15px" bold color="#0F2661">Especialización</Text>
        <FormControl.Label variant="outline">
          {especialidadMedico}
        </FormControl.Label>
      </VStack>
      {isEditMode && (
        <Pressable onPress={onPress}>
          <Image
            source={RNikeImage}
            alt="Icono especialización"
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

export default SpecialtySection;
