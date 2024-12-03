// __tests__/solicitarReestablecerClaveAPI.test.ts
import { solicitarReestablecerClaveAPI } from '@api/reestablecer/solicitarReestablecerClaveAPI';
import { SolicitarReestablecerClaveResponse } from '@api/reestablecer/responses/SolicitarReestablecerClaveResponse';
import Config from 'react-native-config';

const API_BASE_URL = Config.API_BASE_URL;

describe('solicitarReestablecerClaveAPI', () => {
  const token = 'mocked-token';
  const mockResponse: SolicitarReestablecerClaveResponse = {
    error: false,
    message: 'Código de verificación enviado correctamente',
    data: {
      email: 'coritocorito@hotmail.com',
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

  it('debe enviar el código de verificación correctamente', async () => {
    const response = await solicitarReestablecerClaveAPI(token);
    expect(response).toEqual(mockResponse);
    expect(fetch).toHaveBeenCalledWith(`${API_BASE_URL}/solicitar-reestablecer-clave?e=${token}`, {
      method: 'GET',
    });
  });

  it('debe lanzar un error si la solicitud falla', async () => {
    (fetch as jest.MockedFunction<typeof fetch>).mockResolvedValueOnce({
      ok: false,
      status: 400,
      statusText: 'Bad Request',
    } as Response);

    await expect(solicitarReestablecerClaveAPI(token)).rejects.toThrow('Error en la solicitud: Bad Request');
  });
});
