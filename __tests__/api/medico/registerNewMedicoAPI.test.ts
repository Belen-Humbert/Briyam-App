// __tests__/registerNewMedico.test.ts

import { registerNewMedico } from '@/api/medico/registerNewMedicoAPI';
import Config from 'react-native-config';

const API_BASE_URL = Config.API_BASE_URL;

describe('registerNewMedico', () => {
  const mockParams = {
    nombres: 'Juan',
    apaterno: 'Perez',
    amaterno: 'Perez',
    telefonoCelular: '5555555555',
    especialidad: '1',
    subespecialidad: 'Médico',
    sucursal: '3',
    comoSeEntero: '4',
    email: 'jperez3@domain.com',
    password: '123456789',
  };

  const mockResponse = {
    error: false,
    message: 'Usuario registrado correctamente',
    data: {},
  };

  beforeEach(() => {
    global.fetch = jest.fn(() =>
      Promise.resolve({
        ok: true,
        status: 201,
        json: () => Promise.resolve(mockResponse),
      } as Response)
    ) as jest.Mock;
  });

  afterEach(() => {
    jest.resetAllMocks();
  });

  it('debe registrar un nuevo médico correctamente', async () => {
    const response = await registerNewMedico(mockParams);

    expect(response).toEqual(mockResponse);
    expect(fetch).toHaveBeenCalledWith(`${API_BASE_URL}/medico/nuevo`, expect.any(Object));

  });

  it('debe lanzar un error si la solicitud falla', async () => {
    (fetch as jest.MockedFunction<typeof fetch>).mockResolvedValueOnce({
      ok: false,
      status: 400,
      statusText: 'Bad Request',
    } as Response);

    try {
      await registerNewMedico(mockParams);
    } catch (error) {
      expect(error).toEqual(new Error('Error en la solicitud: Bad Request'));
    }
  });
});
