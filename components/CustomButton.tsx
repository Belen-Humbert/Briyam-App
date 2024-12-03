import React from 'react';
import { TouchableOpacity, Text, StyleSheet, TouchableOpacityProps, TextStyle, ViewStyle } from 'react-native';

interface CustomButtonProps extends TouchableOpacityProps {
  title: string;
  backgroundColor?: string;
  borderColor?: string;
  textColor?: string;
  fontWeight?: TextStyle['fontWeight'];
  style?: ViewStyle;
}

const CustomButton: React.FC<CustomButtonProps> = ({
  onPress,
  title,
  disabled = false,
  style,
  backgroundColor,
  borderColor,
  textColor,
  fontWeight = 'bold',
  ...props
}) => {
  return (
    <TouchableOpacity
      style={[
        styles.button,
        style,
        {
          backgroundColor: disabled ? 'gray' : backgroundColor || '#007bff',
          borderColor: borderColor || 'transparent',
          borderWidth: borderColor ? 1 : 0,
        },
      ]}
      onPress={onPress}
      disabled={disabled}
      {...props}
    >
      <Text style={[styles.buttonText, { color: textColor || 'white', fontWeight }]}>{title}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    padding: 10,
    width: '100%',
    borderRadius: 5,
    alignItems: 'center',
    marginTop: 0,
  },
  buttonText: {
    fontSize: 16,
  },
});

export default CustomButton;
