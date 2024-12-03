// HomeContent.tsx
import React from 'react';
import { View, ScrollView } from 'react-native';
import styles from '@styles/home/Home.styles';
import PickerFieldSucursales from '@components/PickerFieldSucursales';
import MenuButtonsGroup from '@components/MenuButtonsGroup'; // Componente nuevo
import BalanceSection from '@components/BalanceSection';
import UpcomingReservations from '@components/UpcomingReservations';
import { HomeContentProps } from '@types/HomeContent.types'; // Ajusta la ruta según sea necesario

const HomeContent: React.FC<HomeContentProps> = ({ selectedSucursal, setSelectedSucursal, handlePressLog, navigation }) => {

  const handleNavigation = (screen: string) => {
    navigation.navigate(screen); // Usa la navegación aquí
  };

  return (
    <ScrollView contentContainerStyle={styles.container} showsVerticalScrollIndicator={false} showsHorizontalScrollIndicator={false}>
      <View style={{ alignItems: 'center', marginTop: 10 }}>
        <PickerFieldSucursales
          label="Selecciona la Sucursal"
          selectedValue={selectedSucursal}
          onValueChange={(value) => setSelectedSucursal(value)}
          placeholder="Selecciona una sucursal"
        />
      </View>
      <MenuButtonsGroup handleNavigation={handleNavigation} />
      <BalanceSection />
      <UpcomingReservations styles={styles} sucursal={selectedSucursal} handlePressLog={handlePressLog} />
    </ScrollView>
  );
};

export default HomeContent;
