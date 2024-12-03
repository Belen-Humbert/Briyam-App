// MenuButtonsGroup.tsx
import React from 'react';
import { View } from 'react-native';
import MenuButton from '@components/MenuButton';
import styles from '@styles/MenuButtonsGroup.styles';
import { MenuButtonsGroupProps } from '@types/MenuButtonsGroup.types';

const MenuButtonsGroup: React.FC<MenuButtonsGroupProps> = ({ handleNavigation }) => {
  return (
    <View style={styles.menuContainer}>
      <MenuButton 
        onPress={() => handleNavigation('MisReservasScreen')}
        iconSource={require('@images/mis_reservas.png')}
        label="Mis Reservas"
        style={styles.menuButton} // Aplicar estilo de botón
      />
      <MenuButton 
        onPress={() => handleNavigation('Analisis')}
        iconSource={require('@images/analisis.png')}
        label="Análisis"
        style={styles.menuButton}
      />
      <MenuButton 
        onPress={() => handleNavigation('Facturacion')}
        iconSource={require('@images/facturacion.png')}
        label="Facturación"
        style={styles.menuButton}
      />
    </View>
  );
};

export default MenuButtonsGroup;
