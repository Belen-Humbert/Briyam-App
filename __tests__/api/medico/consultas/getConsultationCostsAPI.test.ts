// __tests__/getConsultationCostsAPI.test.ts

import { getConsultationCostsAPI } from '@api/medico/consultas/getConsultationCostsAPI';
import { ConsultationCostsResponse } from '@api/medico/consultas/responses/ConsultationCostsResponse';
import Config from 'react-native-config';

const API_BASE_URL = Config.API_BASE_URL;

describe('getConsultationCostsAPI', () => {
  const token = 'mocked-bearer-token';

  const mockResponse: ConsultationCostsResponse = {
    error: false,
    message: 'Costos de consulta obtenidos correctamente',
    data: {
      costos: {
        'costo-consulta': '350',
        'costo-consulta-subsecuente': '200',
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

  it('debe retornar los costos de consulta correctamente', async () => {
    const response = await getConsultationCostsAPI(token);

    expect(response).toEqual(mockResponse);
    expect(fetch).toHaveBeenCalledWith(`${API_BASE_URL}/medico/costos-consulta`, {
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
  
    // Verifica que se lance el error esperado al fallar la solicitud
    await expect(getConsultationCostsAPI(token))
      .rejects.toThrow('Error en la solicitud: Not Found');
  
    // Verifica que se realizó la llamada a fetch con los parámetros correctos
    expect(fetch).toHaveBeenCalledWith(`${API_BASE_URL}/medico/costos-consulta`, {
      method: 'GET',
      headers: {
        'Authorization': `Bearer ${token}`,
        'Content-Type': 'application/json',
      },
    });
  });  
});
