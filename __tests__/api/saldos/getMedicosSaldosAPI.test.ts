// __tests__/getMedicosSaldosAPI.test.ts
import { getMedicosSaldosAPI } from '@api/saldos/getMedicosSaldosAPI';
import { GetMedicosSaldosResponse } from '@api/saldos/responses/GetMedicosSaldosResponse';
import Config from 'react-native-config';

const API_BASE_URL = Config.API_BASE_URL;

describe('getMedicosSaldosAPI', () => {
  const token = 'mocked-bearer-token';
  const mockResponse: GetMedicosSaldosResponse = {
    error: false,
    message: 'Saldo obtenido correctamente',
    data: {
      plan: [],
      monedero: [
        {
          id_sucursal: '1',
          saldo: '2050.0',
        },
        {
          id_sucursal: '2',
          saldo: '88674.0',
        },
        {
          id_sucursal: '3',
          saldo: '0.0',
        },
      ],
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

  it('debe obtener el saldo de los médicos correctamente', async () => {
    const response = await getMedicosSaldosAPI(token);
    expect(response).toEqual(mockResponse);
    expect(fetch).toHaveBeenCalledWith(`${API_BASE_URL}/medico/saldos`, {
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
    } as Response);

    await expect(getMedicosSaldosAPI(token)).rejects.toThrow('Error en la solicitud: Bad Request');
  });
});
