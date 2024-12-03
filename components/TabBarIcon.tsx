// TabBarIcon.tsx
import React from 'react';
import { View, Text } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import Animated from 'react-native-reanimated';
import { TabBarIconProps } from '@/types/TabBarIconProps.types'; // Importa la interfaz

const TabBarIcon: React.FC<TabBarIconProps> = ({ focused, routeName }) => {

  let iconName: string;

  switch (routeName) {
    case 'Inicio':
      iconName = focused ? 'home' : 'home-outline';
      break;
    case 'Nueva Reserva':
      iconName = focused ? 'add-circle' : 'add-circle-outline';
      break;
    case 'Cargar Saldo':
      iconName = focused ? 'wallet' : 'wallet-outline';
      break;
    default:
      iconName = 'help-outline'; // Icono por defecto
  }

  return (
    <View style={{ alignItems: 'center' }}>
      <Icon name={iconName} size={focused ? 30 : 25} color={focused ? '#007bff' : 'gray'} />
      {/* Efecto de desvanecimiento en la etiqueta */}
      {focused && (
        <Animated.View style={{ opacity: focused ? 1 : 0 }}>
          <Text style={{ color: '#007bff' }}>{routeName}</Text>
        </Animated.View>
      )}
    </View>
  );
};

export default TabBarIcon;
