import React, { useState } from 'react';
import { TouchableOpacity, Image, Text, StyleSheet, GestureResponderEvent, ImageSourcePropType } from 'react-native';
import styles from '@styles/menu_button/MenuButton.styles';
import { MenuButtonProps } from '@types/menu_button/MenuButton.types';

const MenuButton: React.FC<MenuButtonProps> = ({ onPress, iconSource, label, style }) => {

  const [isHovered, setIsHovered] = useState(false);

  return (
    <TouchableOpacity
      style={[style]}
      onPress={onPress}
    >
      <Image source={iconSource} style={styles.menuIcon} />
      <Text style={styles.menuText}>{label}</Text>
    </TouchableOpacity>
  );
};

export default React.memo(MenuButton);