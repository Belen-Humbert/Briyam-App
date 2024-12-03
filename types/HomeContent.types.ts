// HomeContent.types.ts
import { NavigationProp } from '@react-navigation/native';
import { HomeScreenProps } from '@types/home/HomeScreen.types'; // Importa desde la ubicación correspondiente

export interface HomeContentProps extends HomeScreenProps {
  selectedSucursal: string;
  setSelectedSucursal: React.Dispatch<React.SetStateAction<string>>;
  handlePressLog: (buttonName: string) => void; // Cambia aquí para aceptar un argumento
  navigation: NavigationProp<any>; // Agrega esto para incluir navigation
}
