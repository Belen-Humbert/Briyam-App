// __tests__/getSucursalByIdAPI.test.ts
import { getSucursalByIdAPI } from '@api/sucursales/getSucursalByIdAPI';
import { GetSucursalByIdResponse } from '@api/sucursales/responses/GetSucursalByIdResponse';
import Config from 'react-native-config';

const API_BASE_URL = Config.API_BASE_URL;

describe('getSucursalByIdAPI', () => {
  const token = 'mocked-bearer-token';
  const sucursalId = '1';
  const mockResponse: GetSucursalByIdResponse = {
    error: false,
    message: 'Sucursal obtenida correctamente',
    data: {
      id: '1',
      clave: 'ROM',
      nombre: 'Roma',
    },
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

  it('debe obtener la sucursal correctamente', async () => {
    const response = await getSucursalByIdAPI(token, sucursalId);
    expect(response).toEqual(mockResponse);
  });

  it('debe lanzar un error si la solicitud falla', async () => {
    (fetch as jest.MockedFunction<typeof fetch>).mockResolvedValueOnce({
      ok: false,
      status: 400,
      statusText: 'Bad Request',
    } as Response);

    await expect(getSucursalByIdAPI(token, sucursalId)).rejects.toThrow('Error en la solicitud: Bad Request');
  });
});
