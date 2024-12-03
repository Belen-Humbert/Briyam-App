// __tests__/reestablecerClaveAPI.test.ts
import { reestablecerClaveAPI } from '@api/reestablecer/reestablecerClaveAPI';
import { ReestablecerClaveResponse } from '@api/reestablecer/responses/ReestablecerClaveResponse';
import Config from 'react-native-config';

const API_BASE_URL = Config.API_BASE_URL;

describe('reestablecerClaveAPI', () => {
  const password = 'qwertyui';
  const email = 'coritocorito@hotmail.com';
  const codigo = 'P5NUK1';
  const mockResponse: ReestablecerClaveResponse = {
    error: false,
    message: 'Contraseña reestablecida correctamente',
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

  it('debe reestablecer la contraseña correctamente', async () => {
    const response = await reestablecerClaveAPI(password, email, codigo);
    expect(response).toEqual(mockResponse);
    expect(fetch).toHaveBeenCalledWith(`${API_BASE_URL}/reestablecer-clave`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
      },
      body: `password=${encodeURIComponent(password)}&email=${encodeURIComponent(email)}&codigo=${encodeURIComponent(codigo)}`,
    });
  });

  it('debe lanzar un error si la solicitud falla', async () => {
    (fetch as jest.MockedFunction<typeof fetch>).mockResolvedValueOnce({
      ok: false,
      status: 400,
      statusText: 'Bad Request',
    } as Response);

    await expect(reestablecerClaveAPI(password, email, codigo)).rejects.toThrow('Error en la solicitud: Bad Request');
  });
});
