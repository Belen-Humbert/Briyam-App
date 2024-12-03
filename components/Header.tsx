import React from 'react';
import { View, Image, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import { NavigationProp } from '@react-navigation/native';
import { HeaderProps } from '@/types/header/Header.types'; // Importa la interfaz
import styles from '@styles/header/Header.styles'; // Importa los estilos

const Header: React.FC<HeaderProps> = ({ logoSource }) => {
  const navigation = useNavigation<NavigationProp<any>>();

  const handleBackPress = () => {
    navigation.goBack();
  };

  return (
    <View style={styles.headerContainer}>
      <TouchableOpacity style={styles.backButton} onPress={handleBackPress}>
        <Ionicons name="arrow-back" size={24} color="black" />
      </TouchableOpacity>
      <Image source={logoSource} style={styles.logoImage} />
    </View>
  );
};

export default Header;
