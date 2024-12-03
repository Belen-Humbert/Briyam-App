// __tests__/getSpecialtiesAPI.test.ts

import { getSpecialtiesAPI } from '@/api/medico/especialidades/getMedicoSpecialtiesAPI';
import { SpecialtiesResponse } from '@/api/medico/especialidades/responses/SpecialtiesMedicoResponse';
import Config from 'react-native-config';

const API_BASE_URL = Config.API_BASE_URL;

describe('getSpecialtiesAPI', () => {
  const token = 'mocked-bearer-token';

  const mockResponse: SpecialtiesResponse = {
    error: false,
    message: 'Especialidades obtenidas correctamente',
    data: {
      especialidades: {
        especialidad_1: 'Cardiología',
        especialidad_2: 'Alergia e Inmunología',
        especialidad_3: 'Anatomía Patológica',
        especialidad_4: 'Anestesiología',
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

  it('debe retornar las especialidades correctamente', async () => {
    const response = await getSpecialtiesAPI();

    expect(response).toEqual(mockResponse);

  });

  it('debe lanzar un error si la solicitud falla', async () => {
    // Mock de fetch con un Response que indica un error
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
  
    // Intenta ejecutar la función y atrapar el error
    await expect(getSpecialtiesAPI()).rejects.toThrow('Error en la solicitud: Not Found');
  
  });      
});
