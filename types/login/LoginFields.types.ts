export interface LoginFieldsProps {
    email: string;
    setEmail: (text: string) => void;
    password: string;
    setPassword: (text: string) => void;
    isPasswordVisible: boolean;
    togglePasswordVisibility: () => void;
  }
  