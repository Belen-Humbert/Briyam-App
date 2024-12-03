// HomeScreen.tsx
import React from 'react';
import { View } from 'react-native';
import LogoWithMenu from '@components/LogoWithMenu';
import { useNavigationLogic } from '@hooks/home/useNavigationLogic';
import HomeContent from '@components/HomeContent'; // Componente nuevo
import { useFetchMedicoInfo } from '@hooks/useFetchMedicoInfo';
import { HomeScreenProps } from '@/types/home/HomeScreen.types';

const HomeScreen: React.FC<HomeScreenProps> = ({ navigation }) => {

  const { medicoInfo, loading, error } = useFetchMedicoInfo();
  const { handlePressLog } = useNavigationLogic(navigation);

  // Estado y manejador para la sucursal seleccionada
  const [selectedSucursal, setSelectedSucursal] = React.useState('');

  return (
    <View style={{ backgroundColor: "white" }}>
      <LogoWithMenu navigation={navigation} medicoInf={medicoInfo} />
      <HomeContent 
        selectedSucursal={selectedSucursal} 
        setSelectedSucursal={setSelectedSucursal} 
        handlePressLog={handlePressLog} 
        navigation={navigation} // Pasa la navegación aquí
      />
    </View>
  );
};

export default HomeScreen;
