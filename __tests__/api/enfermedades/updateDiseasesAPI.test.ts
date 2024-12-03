// __tests__/updateDiseasesAPI.test.ts

import { updateDiseasesAPI } from '@api/enfermedades/updateDiseasesAPI';
import { UpdateDiseasesResponse } from '@api/enfermedades/responses/UpdateDiseasesResponse';
import Config from 'react-native-config';

const API_BASE_URL = Config.API_BASE_URL;

describe('updateDiseasesAPI', () => {
  const token = 'mocked-bearer-token';
  const enfermedad1 = 'Enfermedad 1';
  const enfermedad2 = 'Enfermedad 2';
  const enfermedad3 = 'Enfermedad 3';
  const enfermedad4 = 'Enfermedad 4';

  const mockResponse: UpdateDiseasesResponse = {
    error: false,
    message: 'Enfermedades tratadas actualizadas correctamente',
    data: {
      enfermedades: {
        enfermedad_1: enfermedad1,
        enfermedad_2: enfermedad2,
        enfermedad_3: enfermedad3,
        enfermedad_4: enfermedad4,
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

  it('debe actualizar las enfermedades tratadas correctamente', async () => {
    const response = await updateDiseasesAPI(token, enfermedad1, enfermedad2, enfermedad3, enfermedad4);

    expect(response).toEqual(mockResponse);
    expect(fetch).toHaveBeenCalledWith(`${API_BASE_URL}/medico/experiencia/enfermedades/modificar`, {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${token}`,
        'Content-Type': 'application/x-www-form-urlencoded',
      },
      body: new URLSearchParams({
        enfermedad_1: enfermedad1,
        enfermedad_2: enfermedad2,
        enfermedad_3: enfermedad3,
        enfermedad_4: enfermedad4,
      }),
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
    await expect(updateDiseasesAPI(token, enfermedad1, enfermedad2, enfermedad3, enfermedad4))
      .rejects.toThrow('Error en la solicitud: Not Found');
  });  
});
