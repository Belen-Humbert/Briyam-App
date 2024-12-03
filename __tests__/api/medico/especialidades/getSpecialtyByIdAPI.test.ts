// __tests__/getSpecialtyByIdAPI.test.ts

import { getSpecialtyByIdAPI } from '@/api/medico/especialidades/getSpecialtyByIdAPI';
import { GetSpecialtyByIdResponse } from '@/api/medico/especialidades/responses/GetSpecialtyByIdResponse';
import Config from 'react-native-config';

const API_BASE_URL = Config.API_BASE_URL;

describe('getSpecialtyByIdAPI', () => {
  const token = 'mocked-bearer-token';
  const specialtyId = '1';

  const mockResponse: GetSpecialtyByIdResponse = {
    error: false,
    message: 'Especialidad obtenida correctamente',
    data: {
      id: '1',
      especialidad: 'Alergia e Inmunología',
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

  it('debe obtener la especialidad correctamente por ID', async () => {
    const response = await getSpecialtyByIdAPI(token, specialtyId);

    expect(response).toEqual(mockResponse);
    expect(fetch).toHaveBeenCalledWith(`${API_BASE_URL}/cat/especialidad/${specialtyId}`, {
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
    await expect(getSpecialtyByIdAPI(token, specialtyId))
      .rejects.toThrow('Error en la solicitud: Not Found');
  });  
});
