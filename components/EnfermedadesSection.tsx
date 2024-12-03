import React from 'react';
import { HStack, Text, VStack, FormControl, Pressable, Image } from 'native-base';
import RNikeImage from '@images/r_nike.png';
import { EnfermedadesSectionProps } from '@types/EnfermedadesSectionProps.types'; // Asegúrate de que la ruta sea correcta

const EnfermedadesSection: React.FC<EnfermedadesSectionProps> = ({
  enfermedadesTratadas,
  isEditMode,
  onPress,
}) => {
  return (
    <HStack justifyContent="space-between" alignItems="center" w="100%">
      <Image
        source={require('@images/enfermedades.png')}
        alt="Enfermedades Tratadas"
        width="30%"
        resizeMode="center"
        height="100px"
        marginRight="20px"
      />
      <VStack justifyContent="space-between" alignItems="flex-start" w="80%">
        <Text fontSize="15px" bold color="#0F2661">Enfermedades Tratadas</Text>
        <FormControl.Label variant="outline">
          {enfermedadesTratadas}
        </FormControl.Label>
      </VStack>
      {isEditMode && (
        <Pressable onPress={onPress}>
          <Image
            source={RNikeImage}
            alt="Icono enfermedades tratadas"
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

export default EnfermedadesSection;
