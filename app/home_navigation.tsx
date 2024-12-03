// HomeNavigationScreen.tsx
import React from 'react';
import { NativeBaseProvider } from 'native-base';
import TabNavigator from '@components/TabNavigator'; // Asegúrate de que la ruta sea correcta

const HomeNavigationScreen: React.FC = () => {
  return (
    <NativeBaseProvider>
      <TabNavigator />
    </NativeBaseProvider>
  );
};

export default HomeNavigationScreen;
