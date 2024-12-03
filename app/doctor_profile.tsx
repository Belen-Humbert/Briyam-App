import { ScrollView } from 'react-native';
import { VStack, Button, Text, Spinner, Divider } from 'native-base'; // Importa Divider
import DoctorProfileSection from '@components/DoctorProfileSection';
import GeneralInfoSection from '@components/GeneralInfoSection';
import DoctorScheduleSection from '@components/DoctorScheduleSection';
import ExperienciaInfoSection from '@components/ExperienciaInfoSection';
import DoctorProfileMenu from '@components/DoctorProfileMenu';
import React, { useState } from 'react';
import { NativeBaseProvider } from 'native-base';
import { RouteProp, useRoute } from '@react-navigation/native'; // Importa `useRoute` para acceder a los parámetros
import { MedicoInfoResponse } from '@/api/medico/responses/medicoInfoResponse';

type DoctorProfileRouteProp = RouteProp<{ doctor_profile: { medicoInfo: MedicoInfoResponse } }, 'doctor_profile'>;

const PerfilDoctorScreen: React.FC = () => {
    
  const route = useRoute<DoctorProfileRouteProp>(); // Obtén la ruta con los parámetros
  const { medicoInfo } = route.params; // Extrae el parámetro `medicoInfo`

  const [isEditMode, setIsEditMode] = useState<boolean>(false); // Modo edición

  return (
    <NativeBaseProvider>
        <VStack space={1} paddingX={4} marginTop={4}>
          <DoctorProfileMenu isEditMode={isEditMode} setIsEditMode={(mode: boolean) => setIsEditMode(mode)} />
          <DoctorProfileSection marginTop={"10"} isEditMode={isEditMode} especialidad={medicoInfo?.data?.especialidadNombre?.especialidad} foto_perfil={medicoInfo?.data?.perfilMedico?.foto_perfil} nombreCompleto={medicoInfo?.data?.nombre} />
          <ScrollView contentContainerStyle={{ paddingVertical: 0, paddingHorizontal: 0, flexGrow: 1, height: isEditMode ? 2900 : 1600 }}
            showsVerticalScrollIndicator={false}
            showsHorizontalScrollIndicator={false}>
            <VStack space={8}>
              <GeneralInfoSection marginTop={"0"} isEditMode={isEditMode} />
              <ExperienciaInfoSection marginTop={0} medicoInf={medicoInfo} isEditMode={isEditMode} />
              <DoctorScheduleSection marginTop={50} isEditMode={isEditMode} />
              {isEditMode && (
                <Button variant="solid" colorScheme="blue" size="sm">
                  Actualizar
                </Button>
              )}
            </VStack>
          </ScrollView>
        </VStack>
    </NativeBaseProvider>

  );
};

export default PerfilDoctorScreen;
