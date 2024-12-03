export interface LoginLogic {
  email: string;
  setEmail: React.Dispatch<React.SetStateAction<string>>;
  password: string;
  setPassword: React.Dispatch<React.SetStateAction<string>>;
  isPasswordVisible: boolean;
  togglePasswordVisibility: () => void;
  isButtonEnabled: boolean;
  handleLogin: () => Promise<void>;
  loading: boolean;
  error: string;
  setLoading: React.Dispatch<React.SetStateAction<boolean>>;
  setError: React.Dispatch<React.SetStateAction<string>>;
}
  