import React from 'react';
import { Box, Image, Text, Menu, HStack, Pressable, Spinner, Icon, VStack } from 'native-base';
import { MaterialIcons } from '@expo/vector-icons'; // Importa los íconos de MaterialIcons
import useLogoWithMenuLogic from '@hooks/useLogoWithMenuLogic';
import { LogoWithMenuProps } from '@props/LogoWithMenuProps';

const LogoWithMenu: React.FC<LogoWithMenuProps> = ({ navigation, medicoInf }) => {
    const {
        handleLogout,
        logoutLoading,
        logoutError,
    } = useLogoWithMenuLogic(navigation);

    return (
        <Box 
            bg="#ffffff" 
            justifyContent="center" 
            h={120} 
            p={5}
            mt={10} 
            borderRadius={10} 
            shadow={2}
            ml={4}
            mr={4}
            borderColor="gray.200" 
            borderWidth={1}
            mb={1} 
        >
            <HStack p={0} h={20} bg="#ffffff">
                <HStack alignItems="center" flex={2} justifyContent="flex-start">
                    <Image 
                        source={require('@images/logo.png')} 
                        alt="Logo"
                        width="100%"
                        height="300px"
                        resizeMode='contain' // Cambiado a 'contain' para mejor ajuste
                        marginTop="10px" // Reducido para mejor alineación
                    />
                </HStack>
                <HStack flex={1} justifyContent="flex-end" alignItems="center">
                    <Menu 
                        w="100%" 
                        trigger={(triggerProps) => (
                            <Pressable alignItems="center" {...triggerProps}>
                                {!medicoInf?.data?.perfilMedico?.foto_perfil ? (
                                    <Spinner color="primary.500" />
                                ) : (
                                    <>
                                        <Image 
                                            source={medicoInf?.data?.perfilMedico?.foto_perfil 
                                                ? { uri: medicoInf.data.perfilMedico.foto_perfil } 
                                                : require('@images/doctor.png')}  
                                            alt="Profile Image" 
                                            width="80px"
                                            height="80px"
                                            borderRadius={50} 
                                            borderColor="primary.500" 
                                            borderWidth={2}
                                        />
                                        <VStack marginLeft={2} alignItems="flex-start">
                                            <Text fontSize="sm" fontWeight="bold">Dr. {medicoInf?.data?.nombre.split(" ")[0]}</Text>
                                            <Text fontSize="sm" color="gray.500">{medicoInf?.data?.especialidadNombre?.especialidad}</Text>
                                        </VStack>
                                    </>
                                )}
                            </Pressable>
                        )}
                    >
                        <Menu.Item 
                            onPress={() => {
                                navigation.navigate('doctor_profile', {medicoInfo: medicoInf});
                            }}
                        >
                            <HStack space={2} alignItems="center">
                                <Icon as={MaterialIcons} name="account-circle" size="sm" color="primary.500" />
                                <Text>Mi perfil médico</Text>
                            </HStack>
                        </Menu.Item>
                        <Menu.Item 
                            onPress={() => {
                                handleLogout();
                            }}
                        >
                            <HStack space={2} alignItems="center">
                                <Icon as={MaterialIcons} name="logout" size="sm" color="primary.500" />
                                <Text>Cerrar sesión</Text>
                            </HStack>
                        </Menu.Item>
                    </Menu>
                </HStack>
            </HStack>

            {logoutLoading && <Spinner color="primary.500" />}
            {logoutError && <Text color="red.500" fontWeight="bold">{logoutError}</Text>}
        </Box>
    );
};

export default LogoWithMenu;
