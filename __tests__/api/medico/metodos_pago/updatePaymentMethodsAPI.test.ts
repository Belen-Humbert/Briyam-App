import { updatePaymentMethodsAPI } from '@api/medico/metodos_pago/updatePaymentMethodsAPI';
import { UpdatePaymentMethodsResponse } from '@api/medico/metodos_pago/responses/UpdatePaymentMethodsResponse';
import AsyncStorage from '@react-native-async-storage/async-storage';
import Config from 'react-native-config';

const API_BASE_URL = Config.API_BASE_URL;

jest.mock('@env', () => ({
  API_BASE_URL: 'https://www.briyamcoworkingmedico.com/app-dev/api/v2',
}));

describe('updatePaymentMethodsAPI', () => {
  const efectivo = false;
  const tarjeta = false;
  const transferencia = true;

  const mockResponse: UpdatePaymentMethodsResponse = {
    error: false,
    message: 'Métodos de pago actualizados correctamente',
    data: {
      efectivo: 0,
      tarjeta: 0,
      transferencia: 1,
    },
  };

  beforeEach(() => {
    // Mockear AsyncStorage
    AsyncStorage.getItem = jest.fn().mockResolvedValue('mocked-bearer-token');

    // Mockear fetch
    global.fetch = jest.fn(() =>
      Promise.resolve({
        ok: true,
        status: 200,
        statusText: 'OK',
        json: () => Promise.resolve(mockResponse),
        headers: new Headers(),
        redirected: false,
        type: 'basic',
        url: '',
        clone: jest.fn(),
        text: jest.fn(),
        body: null,
        bodyUsed: false,
        arrayBuffer: jest.fn(),
        blob: jest.fn(),
        formData: jest.fn(),
      } as Response)
    ) as jest.Mock;
  });

  afterEach(() => {
    jest.resetAllMocks();
  });

  it('debe actualizar los métodos de pago correctamente', async () => {
    const response = await updatePaymentMethodsAPI(efectivo, tarjeta, transferencia);

    expect(response).toEqual(mockResponse);
  });

  it('debe lanzar un error si la solicitud falla', async () => {
    (fetch as jest.MockedFunction<typeof fetch>).mockResolvedValueOnce({
      ok: false,
      status: 404,
      statusText: 'Not Found',
      json: jest.fn(),
      headers: new Headers(),
      redirected: false,
      type: 'basic',
      url: '',
      clone: jest.fn(),
      text: jest.fn(),
      body: null,
      bodyUsed: false,
      arrayBuffer: jest.fn(),
      blob: jest.fn(),
      formData: jest.fn(),
    } as Response);

    await expect(updatePaymentMethodsAPI(efectivo, tarjeta, transferencia))
      .rejects.toThrow('Error en la solicitud: Not Found');
  });
});
