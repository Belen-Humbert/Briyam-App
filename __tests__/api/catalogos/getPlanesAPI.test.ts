// __tests__/getPlanesAPI.test.ts
import { getPlanesAPI } from '@api/catalogos/getPlanesAPI';
import { GetPlanesResponse } from '@api/catalogos/responses/GetPlanesResponse';
import Config from 'react-native-config';

const API_BASE_URL = Config.API_BASE_URL;

describe('getPlanesAPI', () => {
  const token = 'mocked-bearer-token';
  const mockResponse: GetPlanesResponse = {
    error: false,
    message: 'Planes obtenidos correctamente',
    data: [
      { id_plan: '7', wplan: 'Select', horas: '10', monto: '2800', hora_adicional: '250' },
      { id_plan: '8', wplan: 'Center', horas: '18', monto: '3900', hora_adicional: '200' },
      { id_plan: '9', wplan: 'Multisuc', horas: '25', monto: '5500', hora_adicional: '200' },
      { id_plan: '10', wplan: 'VIP', horas: '40', monto: '6800', hora_adicional: '170' },
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

  it('debe obtener los planes correctamente', async () => {
    const response = await getPlanesAPI(token);

    expect(response).toEqual(mockResponse);
    expect(fetch).toHaveBeenCalledWith(`${API_BASE_URL}/cat/planes`, {
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
  
    // Verifica que el error lanzado contiene el mensaje esperado
    await expect(getPlanesAPI(token))
      .rejects.toThrow('Error en la solicitud: Bad Request');
  
    // Verifica que se realizó la llamada a fetch con los parámetros correctos
    expect(fetch).toHaveBeenCalledWith(`${API_BASE_URL}/cat/planes`, {
      method: 'GET',
      headers: {
        'Authorization': `Bearer ${token}`,
      },
    });
  });  
});
