// __tests__/getComoSeEnteroAPI.test.ts
import { getComoSeEnteroAPI } from '@api/catalogos/getComoSeEnteroAPI';
import { GetComoSeEnteroResponse } from '@api/catalogos/responses/getComoSeEnteroResponseAPI';
import Config from 'react-native-config';

const API_BASE_URL = Config.API_BASE_URL;

describe('getComoSeEnteroAPI', () => {
  const token = 'mocked-bearer-token';
  const mockResponse: GetComoSeEnteroResponse = {
    error: false,
    message: 'Opciones obtenidas correctamente',
    data: [
      { id: '1', nombre: 'Representante Médico' },
      { id: '2', nombre: 'Correo Electrónico' },
      { id: '3', nombre: 'Doctoralia' },
      { id: '4', nombre: 'Facebook' },
      { id: '5', nombre: 'Google' },
      { id: '6', nombre: 'Instagram' },
      { id: '7', nombre: 'Linkedin' },
      { id: '8', nombre: 'Recomendación de un colega' },
      { id: '9', nombre: 'Revista' },
      { id: '10', nombre: 'Volante' },
    ],
  };

  beforeEach(() => {
    global.fetch = jest.fn(() =>
      Promise.resolve({
        ok: true,
        status: 200,
        json: () => Promise.resolve(mockResponse),
      } as Response)
    ) as jest.Mock;
  });

  afterEach(() => {
    jest.resetAllMocks();
  });

  it('debe obtener las opciones correctamente', async () => {
    const response = await getComoSeEnteroAPI();

    expect(response).toEqual(mockResponse);
    expect(fetch).toHaveBeenCalledWith(`${API_BASE_URL}/cat/como-se-entero`, {
      method: 'GET',
      headers: {
        'Authorization': `Bearer ${token}`,
      },
    });
  });

  it('debe lanzar un error si la solicitud falla', async () => {
    (fetch as jest.MockedFunction<typeof fetch>).mockResolvedValueOnce({
      ok: false,
      status: 400,
      statusText: 'Bad Request',
    } as Response);
  
    try {
      await getComoSeEnteroAPI();
    } catch (error) {

      // Verifica que el error lanzado tiene el mensaje correcto
      expect(error).toEqual(new Error('Error en la solicitud: Bad Request'));
    }
  });    
});
