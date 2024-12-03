import { updateFotoPerfilAPI } from '@api/medico/updateFotoPerfilAPI';
import { UpdateFotoPerfilResponse } from '@types/updateFotoPerfilResponse';
import AsyncStorage from '@react-native-async-storage/async-storage';
import Config from 'react-native-config';

const API_BASE_URL = Config.API_BASE_URL;

describe('updateFotoPerfilAPI', () => {
  const mockFoto = new File(['(⌐□_□)'], 'foto.png', { type: 'image/png' });

  const mockResponse: UpdateFotoPerfilResponse = {
    error: false,
    message: 'Foto actualizada correctamente',
  };

  beforeEach(() => {
    global.fetch = jest.fn(() =>
      Promise.resolve({
        ok: true,
        status: 200,
        statusText: 'OK',
        json: () => Promise.resolve(mockResponse),
      })
    ) as jest.Mock;

    AsyncStorage.getItem = jest.fn(() => Promise.resolve('mocked-bearer-token'));
  });

  afterEach(() => {
    jest.resetAllMocks();
  });

  it('debe actualizar la foto de perfil correctamente', async () => {
    const response = await updateFotoPerfilAPI(mockFoto);

    expect(response).toEqual(mockResponse);
    expect(fetch).toHaveBeenCalledWith(`${API_BASE_URL}/api/v2/medico/foto-perfil`, {
      method: 'POST',
      body: expect.any(FormData),
      headers: {
        'Accept': 'application/json',
        'Authorization': 'Bearer mocked-bearer-token',
      },
    });
  });

  it('debe lanzar un error si la solicitud falla', async () => {
    (fetch as jest.MockedFunction<typeof fetch>).mockResolvedValueOnce({
      ok: false,
      status: 404,
      statusText: 'Not Found',
      json: jest.fn(() => Promise.resolve({ message: 'Not Found' })),
    } as Response);

    await expect(updateFotoPerfilAPI(mockFoto)).rejects.toThrow('Error en la solicitud: Not Found');
  });

  it('debe lanzar un error si no hay token', async () => {
    AsyncStorage.getItem = jest.fn(() => Promise.resolve(null));

    await expect(updateFotoPerfilAPI(mockFoto)).rejects.toThrow('Error: Token de autenticación no encontrado');
  });
});
