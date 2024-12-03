// __tests__/getSpecialtiesCatalogAPI.test.ts

import { getSpecialtiesCatalogAPI } from '@/api/catalogos/getSpecialtiesCatalogAPI';
import { SpecialtiesCatalogResponse } from '@/api/medico/especialidades/responses/SpecialtiesCatalogResponse';
import Config from 'react-native-config';

const API_BASE_URL = Config.API_BASE_URL;

describe('getSpecialtiesCatalogAPI', () => {
  const token = 'mocked-bearer-token';

  const mockResponse: SpecialtiesCatalogResponse = {
    error: false,
    message: 'Especialidades obtenidas correctamente',
    data: [
      { id: '1', especialidad: 'Alergia e Inmunología' },
      { id: '2', especialidad: 'Algología' },
      { id: '50', especialidad: 'Anatomía Patológica' },
      { id: '3', especialidad: 'Anestesiología' },
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
        formData: jest.fn(),
      } as Response)
    ) as jest.Mock;
  });

  afterEach(() => {
    jest.resetAllMocks();
  });

  it('debe retornar el catálogo de especialidades correctamente', async () => {
    const response = await getSpecialtiesCatalogAPI();

    expect(response).toEqual(mockResponse);
    expect(fetch).toHaveBeenCalledWith(`${API_BASE_URL}/cat/especialidades`, {
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
  
    // Valida que el error lanzado sea el esperado, basado en el response
    await expect(getSpecialtiesCatalogAPI()).rejects.toThrow('Error en la solicitud: Not Found');

  });  
});
