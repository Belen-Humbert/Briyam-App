// TabNavigator.tsx
import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeScreen from '@app/home';
import NuevaReservaScreen from '@app/nueva_reserva';
import CargarSaldoScreen from '@app/carga_saldo';
import TabBarIcon from './TabBarIcon'; // Asegúrate de que la ruta sea correcta

const Tab = createBottomTabNavigator();

const TabNavigator: React.FC = () => {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused }) => (
          <TabBarIcon focused={focused} routeName={route.name} />
        ),
        tabBarActiveTintColor: '#007bff',
        tabBarInactiveTintColor: 'gray',
        tabBarShowLabel: false,
        headerShown: false,
        tabBarStyle: {
          backgroundColor: '#e0e0e0',
          borderTopWidth: 0,
          elevation: 5,
          shadowOpacity: 0.3,
          height: 70,
          borderTopLeftRadius: 35,
          borderTopRightRadius: 35,
          borderBottomLeftRadius: 35,  // Añadir para esquinas inferiores
          borderBottomRightRadius: 35,  // Añadir para esquinas inferiores
          position: 'absolute',
          left: 10,
          right: 10,
          bottom: 10,  // Ajusta el margen para levantarlo
          paddingBottom: 5,
          overflow: 'hidden',  // Asegúrate de que no se recorten los bordes
        },
      })}
    >
      <Tab.Screen name="Inicio" component={HomeScreen} options={{ title: '' }} />
      <Tab.Screen name="Nueva Reserva" component={NuevaReservaScreen} options={{ title: '' }} />
      <Tab.Screen name="Cargar Saldo" component={CargarSaldoScreen} options={{ title: '' }} />
    </Tab.Navigator>
  );
};

export default TabNavigator;
