import { ImageSourcePropType } from 'react-native';

export interface BalanceItemProps {
  iconSource: ImageSourcePropType;
  title: string;
  subtitle: string;
  validity?: string;
}
