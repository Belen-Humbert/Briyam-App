export interface LoginResponse {
  error: boolean;
  message: string;
  status: number;
  usuario: number; // ID del usuario
  token: string;
  issuedAt: number;
  expiresAt: number;
}
