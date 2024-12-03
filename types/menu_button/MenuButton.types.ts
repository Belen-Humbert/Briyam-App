// MenuButton.types.ts

import { GestureResponderEvent, ImageSourcePropType, ViewStyle } from 'react-native';

export interface MenuButtonProps {
  onPress: (event: GestureResponderEvent) => void;
  iconSource: ImageSourcePropType;
  label: string;
  style?: ViewStyle;
}
