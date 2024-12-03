// getSucursalesAPI.test.ts
import { getSucursalesAPI } from '@api/sucursales/getSucursalesAPI';
import { GetSucursalesResponse } from '@api/sucursales/responses/GetSucursalesResponse';
import Config from 'react-native-config';

const API_BASE_URL = Config.API_BASE_URL;

describe('getSucursalesAPI', () => {
  const token = 'mocked-bearer-token';

  const mockResponse: GetSucursalesResponse = {
    error: false,
    message: 'Sucursales obtenidas correctamente',
    data: [
      { id: '1', clave: 'ROM', nombre: 'Roma' },
      { id: '2', clave: 'FLO', nombre: 'Florida Del Valle' },
      { id: '3', clave: 'MAS', nombre: 'Masaryk' },
    ],
  };

  beforeEach(() => {
    global.fetch = jest.fn(() =>
      Promise.resolve({
        ok: true,
        status: 200,
        json: () => Promise.resolve(mockResponse),
      } as Response)
    ) as jest.Mock;
  });

  afterEach(() => {
    jest.resetAllMocks();
  });

  it('debe obtener las sucursales correctamente', async () => {
    const response = await getSucursalesAPI(token);

    expect(response).toEqual(mockResponse);
    expect(fetch).toHaveBeenCalledWith(`${API_BASE_URL}/cat/sucursales`, {
      method: 'GET',
      headers: {
        'Authorization': `Bearer ${token}`,
      },
    });
  });

  it('debe lanzar un error si la solicitud falla', async () => {
    (fetch as jest.MockedFunction<typeof fetch>).mockResolvedValueOnce({
      ok: false,
      status: 400,
      statusText: 'Bad Request',
      json: jest.fn(),
    } as Response);

    await expect(getSucursalesAPI(token)).rejects.toThrow('Error en la solicitud: Bad Request');
  });
});
