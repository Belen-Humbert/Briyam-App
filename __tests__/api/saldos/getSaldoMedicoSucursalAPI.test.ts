// __tests__/getSaldoMedicoSucursalAPI.test.ts
import { getSaldoMedicoSucursalAPI } from '@api/saldos/getSaldoMedicoSucursalAPI';
import { GetSaldoMedicoSucursalResponse } from '@api/saldos/responses/GetSaldoMedicoSucursalResponse';
import Config from 'react-native-config';

const API_BASE_URL = Config.API_BASE_URL;

describe('getSaldoMedicoSucursalAPI', () => {
  const token = 'mocked-bearer-token';
  const sucursalId = '1';
  const mockResponse: GetSaldoMedicoSucursalResponse = {
    error: false,
    message: 'Saldo obtenido correctamente',
    data: {
      plan: {
        id_sucursal: null,
        horas: null,
        fecha_fin: null,
        plan: null,
        horas_usadas: null,
        horas_incluidas: null,
        hora_adicional: null,
      },
      monedero: {
        id_sucursal: '1',
        saldo: '2050.0',
      },
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

  it('debe obtener el saldo del médico en una sucursal correctamente', async () => {
    const response = await getSaldoMedicoSucursalAPI(token, sucursalId);
    expect(response).toEqual(mockResponse);
    expect(fetch).toHaveBeenCalledWith(`${API_BASE_URL}/medico/saldo/${sucursalId}`, {
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

    await expect(getSaldoMedicoSucursalAPI(token, sucursalId)).rejects.toThrow('Error en la solicitud: Bad Request');
  });
});
