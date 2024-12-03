// __tests__/verificarReestablecerClaveAPI.test.ts
import { verificarReestablecerClaveAPI } from '@api/reestablecer/verificarReestablecerClaveAPI';
import { VerificarReestablecerClaveResponse } from '@api/reestablecer/responses/VerificarReestablecerClaveResponse';
import Config from 'react-native-config';

const API_BASE_URL = Config.API_BASE_URL;

describe('verificarReestablecerClaveAPI', () => {
  const token = 'mocked-token';
  const codigo = 'P5NUK1';
  const mockResponse: VerificarReestablecerClaveResponse = {
    error: false,
    message: 'Código de verificación correcto',
    data: {
      email: 'coritocorito@hotmail.com',
      codigo: 'P5NUK1',
    },
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

  it('debe verificar el código de reestablecimiento correctamente', async () => {
    const response = await verificarReestablecerClaveAPI(token, codigo);
    expect(response).toEqual(mockResponse);
    expect(fetch).toHaveBeenCalledWith(`${API_BASE_URL}/verificar-reestablecer-clave?e=${token}&c=${codigo}`, {
      method: 'GET',
    });
  });

  it('debe lanzar un error si la solicitud falla', async () => {
    (fetch as jest.MockedFunction<typeof fetch>).mockResolvedValueOnce({
      ok: false,
      status: 400,
      statusText: 'Bad Request',
    } as Response);

    await expect(verificarReestablecerClaveAPI(token, codigo)).rejects.toThrow('Error en la solicitud: Bad Request');
  });
});
