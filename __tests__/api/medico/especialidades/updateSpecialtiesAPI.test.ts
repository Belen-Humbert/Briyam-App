// __tests__/updateSpecialtiesAPI.test.ts

import { updateSpecialtiesAPI } from '@/api/medico/especialidades/updateSpecialtiesAPI';
import { UpdateSpecialtiesResponse } from '@/api/medico/especialidades/responses/UpdateSpecialtiesResponse';
import AsyncStorage from '@react-native-async-storage/async-storage';
import Config from 'react-native-config';

const API_BASE_URL = Config.API_BASE_URL;

describe('updateSpecialtiesAPI', () => {
  const specialties = {
    especialidad_1: 'Especialidad 1',
    especialidad_2: 'Especialidad 2',
    especialidad_3: 'Especialidad 3',
    especialidad_4: 'Especialidad 4',
  };

  const mockResponse: UpdateSpecialtiesResponse = {
    error: false,
    message: 'Especialidades actualizadas correctamente',
    data: {
      especialidades: {
        especialidad_1: 'Especialidad 1',
        especialidad_2: 'Especialidad 2',
        especialidad_3: 'Especialidad 3',
        especialidad_4: 'Especialidad 4',
      },
    },
  };

  beforeEach(() => {
    // Mockear AsyncStorage para simular el token
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

  it('debe actualizar las especialidades correctamente', async () => {
    const response = await updateSpecialtiesAPI(specialties); // Llamada sin el token explícito

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
  
    // Valida que la función lanza el mensaje de error esperado
    await expect(updateSpecialtiesAPI(specialties)).rejects.toThrow('Error en la solicitud: Not Found');
  });
});
