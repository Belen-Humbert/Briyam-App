import { getPaymentMethodsAPI } from '@api/medico/metodos_pago/getPaymentMethodsAPI';
import { PaymentMethodsResponse } from '@api/medico/metodos_pago/responses/PaymentMethodsResponse';
import Config from 'react-native-config';

const API_BASE_URL = Config.API_BASE_URL;

describe('getPaymentMethodsAPI', () => {
  const token = 'mocked-bearer-token';

  const mockResponse: PaymentMethodsResponse = {
    error: false,
    message: 'Métodos de pago obtenidos correctamente',
    data: {
      metodos: {
        efectivo: 1,
        tarjeta: 1,
        transferencia: 1,
      },
    },
  };

  beforeEach(() => {
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

  it('debe retornar los métodos de pago correctamente', async () => {
    const response = await getPaymentMethodsAPI(token);

    expect(response).toEqual(mockResponse);
    expect(fetch).toHaveBeenCalledWith(`${API_BASE_URL}/medico/metodos-pago`, {
      method: 'GET',
      headers: {
        'Authorization': `Bearer ${token}`,
        'Content-Type': 'application/json',
      },
    });
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

    await expect(getPaymentMethodsAPI(token)).rejects.toThrow('Error en la solicitud: Not Found');
  });
});
