// interfaces/LogoWithMenuProps.ts
import { MedicoInfoResponse } from '@/api/medico/responses/medicoInfoResponse';
import { NavigationProp } from '@react-navigation/native';

export interface LogoWithMenuProps {
  navigation: NavigationProp<any>;
  medicoInf: MedicoInfoResponse | null;

}
