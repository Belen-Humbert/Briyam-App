// CustomTextInput.types.ts
import { TextInputProps } from 'react-native';

export interface CustomTextInputProps extends TextInputProps {
  value: string;
  onChangeText: (text: string) => void;
  placeholder: string;
  secureTextEntry?: boolean;
  keyboardType?: TextInputProps['keyboardType'];
  uppercase?: boolean;
}
