import React from 'react';
import { Menu, Pressable, HStack, Text, Icon, Image, Box } from 'native-base';
import { MaterialIcons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native'; // Importa el hook de navegación
import { DoctorProfileMenuProps } from '@types/DoctorProfileMenu.types'; // Asegúrate de que la ruta sea correcta
import { NativeBaseProvider } from 'native-base';

const DoctorProfileMenu: React.FC<DoctorProfileMenuProps> = ({
  isEditMode,
  setIsEditMode,
  title = 'Perfil del Doctor',
  showMenuButton = true,
  marginTop = "0"
}) => {
    
  const navigation = useNavigation(); // Obtén el objeto de navegación

  const toggleEditMode = () => {
    setIsEditMode(!isEditMode);
  };

  return (
    <NativeBaseProvider>
      <HStack justifyContent="space-between" alignItems="center" h="10" w="100%" mt={marginTop}>
        
        {/* Botón de retroceso */}
        <Pressable onPress={() => navigation.goBack()}>
          <Image
            source={require('@images/back_button.png')}
            alt="Back Button"
            size={6}
            resizeMode="contain"
          />
        </Pressable>

        {/* Título centrado */}
        <Text fontSize="lg" bold color="#123e6c" textAlign="center" flex={1}>
          {title}
        </Text>

        {/* Mostrar el menú solo si showMenuButton es true */}
        {showMenuButton ? (
          <Menu 
            trigger={(triggerProps) => (
              <Pressable accessibilityLabel="More options menu" {...triggerProps}>
                <Icon as={MaterialIcons} name="more-vert" size={6} />
              </Pressable>
            )}
          >
            <Menu.Item onPress={toggleEditMode}>
              <HStack alignItems="center">
                <Icon as={MaterialIcons} name="edit" size={4} mr={2} />
                {/* Cambia el texto dependiendo del estado de edición */}
                <Text>{isEditMode ? 'Solo Ver perfil' : 'Modificar perfil'}</Text>
              </HStack>
            </Menu.Item>
          </Menu>
        ) : (
          <Box w={6} /> 
        )}
      </HStack>
    </NativeBaseProvider>
  );
};

export default DoctorProfileMenu;
