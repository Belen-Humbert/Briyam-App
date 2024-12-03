// __tests__/getDiseasesAPI.test.ts

import { getDiseasesAPI } from '@api/enfermedades/getDiseasesAPI';
import { GetDiseasesResponse } from '@api/enfermedades/responses/GetDiseasesResponse';
import Config from 'react-native-config';

const API_BASE_URL = Config.API_BASE_URL;

describe('getDiseasesAPI', () => {
  const token = 'mocked-bearer-token';

  const mockResponse: GetDiseasesResponse = {
    error: false,
    message: 'Enfermedades tratadas obtenidas correctamente',
    data: {
      enfermedades: {
        enfermedad_1: 'Enfermedad',
        enfermedad_2: 'Enfermedad 2',
        enfermedad_3: 'Enfermedad 3',
        enfermedad_4: '',
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

  it('debe obtener las enfermedades tratadas correctamente', async () => {
    const response = await getDiseasesAPI();

    expect(response).toEqual(mockResponse);
    expect(fetch).toHaveBeenCalledWith(`${API_BASE_URL}/medico/experiencia/enfermedades`, {
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
      json: jest.fn(), // Asegura que json está presente aunque no se use aquí
    } as Response);
  
    await expect(getDiseasesAPI()).rejects.toThrow('Error en la solicitud: Not Found');
  });  
});
