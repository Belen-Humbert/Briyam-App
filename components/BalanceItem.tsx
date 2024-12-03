import React from 'react';
import { View, Text, Image } from 'react-native';
import { BalanceItemProps } from '@types/home/BalanceItem.types'; // Importa la interfaz
import styles from '@styles/home/BalanceItem.styles'; // Importa los estilos

const BalanceItem: React.FC<BalanceItemProps> = ({ iconSource, title, subtitle, validity }) => {
  return (
    <View style={styles.cardContainer}>
      <Image source={iconSource} style={styles.icon} />
      <View style={styles.textContainer}>
        <Text style={styles.title}>{title}</Text>
        <Text style={styles.subtitle}>{subtitle}</Text>
        {validity && <Text style={styles.validity}>{validity}</Text>}
      </View>
    </View>
  );
};

export default BalanceItem;
