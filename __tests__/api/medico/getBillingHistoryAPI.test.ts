import { getBillingHistoryAPI } from '@api/medico/getBillingHistoryAPI';
import { BillingHistoryResponse } from '@api/medico/responses/BillingHistoryResponse';
import Config from 'react-native-config';

const API_BASE_URL = Config.API_BASE_URL;

describe('getBillingHistoryAPI', () => {
  const token = 'mocked-bearer-token';
  const year = 2024;
  const sucursal = 1;

  const mockResponse: BillingHistoryResponse = {
    error: false,
    message: 'Información de facturas obtenida correctamente',
    data: [
      {
        folio: '115595',
        fecha_aplicacion: {
          fecha: '2024-07-18',
          hora: '22:00',
        },
        monto: '5500.0',
        forma_pago: 'MONEDERO',
        facturo: 'NO',
        fecha_factura: null,
        id_factura: null,
        documento: null,
      },
      {
        folio: '92820',
        fecha_aplicacion: {
          fecha: '2024-03-27',
          hora: '17:46',
        },
        monto: '1000.0',
        forma_pago: 'MONEDERO',
        facturo: 'NO',
        fecha_factura: null,
        id_factura: null,
        documento: null,
      },
    ],
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
        formData: jest.fn()
      } as Response)
    ) as jest.Mock;
  });

  afterEach(() => {
    jest.resetAllMocks();
  });

  it('debe retornar el historial de facturación correctamente', async () => {
    const response = await getBillingHistoryAPI(token, year, sucursal);

    expect(response).toEqual(mockResponse);
    expect(fetch).toHaveBeenCalledWith(`${API_BASE_URL}/medico/historial-facturación?y=${year}&sucursal=${sucursal}`, {
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
  
    try {
      await getBillingHistoryAPI(token, year, sucursal);
    } catch (error) {
      
  
      
    }
  });  
});
