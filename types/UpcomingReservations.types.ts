import { StyleProp, ViewStyle, TextStyle } from 'react-native';

export interface UpcomingReservationsProps {
    styles: {
        reservationContainer: StyleProp<ViewStyle>;
        sectionTitle: StyleProp<TextStyle>;
    };
    handlePressLog: (buttonName: string) => void;
    sucursal:string;
}
