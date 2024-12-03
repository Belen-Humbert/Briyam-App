import { GestureResponderEvent, ImageSourcePropType } from 'react-native';

export interface ReservationCardProps {
  imageSource: ImageSourcePropType;
  title: string;
  subtitle: string;
  date: string;
  times: string[];
  onViewPress: (event: GestureResponderEvent) => void;
  onAddPress: (event: GestureResponderEvent) => void;
  onCancelPress: (event: GestureResponderEvent) => void;
}
