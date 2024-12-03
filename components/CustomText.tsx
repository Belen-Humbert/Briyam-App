import { Platform } from 'react-native';
import React, { ReactNode, CSSProperties } from 'react';

interface CustomTextProps {
  children: ReactNode;
  style?: CSSProperties;
}

const CustomText: React.FC<CustomTextProps> = ({ children, style }) => {
  return <div style={style}>{children}</div>;
};

export default CustomText;
