// __tests__/loginAPI.test.ts

import { loginAPI } from '@api/medico/loginAPI';
import { LoginResponse } from '@api/medico/responses/loginResponse';
import Config from 'react-native-config';

const API_BASE_URL = Config.API_BASE_URL;

describe('loginAPI', () => {
  beforeEach(() => {
    jest.resetAllMocks();
  });

  it('debe retornar los datos del usuario y el token cuando el login es exitoso', async () => {
    const mockResponse: LoginResponse = {
      error: false,
      message: 'Usuario identificado correctamente',
      status: 200,
      usuario: 2,
      token: 'mocked-jwt-token',
      issuedAt: 1728447061,
      expiresAt: 1731039061,
    };

    global.fetch = jest.fn(() =>
      Promise.resolve({
        ok: true,
        status: 200,
        json: () => Promise.resolve(mockResponse),
      })
    ) as jest.Mock;

    const response = await loginAPI('username', 'password');

    expect(fetch).toHaveBeenCalledWith(`${API_BASE_URL}/login`, expect.anything());
    expect(response).toEqual(mockResponse);

  });

  it('debe lanzar un error cuando el login falla', async () => {
    global.fetch = jest.fn(() =>
      Promise.resolve({
        ok: false,
        status: 401,
        json: () => Promise.resolve({ error: true, message: 'Unauthorized' }),
      })
    ) as jest.Mock;
  
    await expect(loginAPI('username', 'password')).rejects.toThrow('Error en el inicio de sesión');
  });  
});
