// __tests__/getEducationalFormationAPI.test.ts

import { getEducationalFormationAPI } from '@/api/medico/formacion/getEducationalFormationAPI';
import { EducationalFormationResponse } from '@/api/medico/formacion/responses/EducationalFormationResponse';
import Config from 'react-native-config';

const API_BASE_URL = Config.API_BASE_URL;

describe('getEducationalFormationAPI', () => {
  const token = 'mocked-bearer-token';

  const mockResponse: EducationalFormationResponse = {
    error: false,
    message: 'Formación académica obtenida correctamente',
    data: {
      formacion: {
        formacion_1: 'Formacion 1',
        formacion_2: '',
        formacion_3: '',
        formacion_4: '',
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

  it('debe obtener la formación académica correctamente', async () => {
    const response = await getEducationalFormationAPI();

    expect(response).toEqual(mockResponse);
    expect(fetch).toHaveBeenCalledWith(`${API_BASE_URL}/medico/experiencia/formacion`, {
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
    await expect(getEducationalFormationAPI())
      .rejects.toThrow('Error en la solicitud: Not Found');
  });  
});
