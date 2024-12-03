import { getScheduleAPI } from '@api/medico/horarios/getScheduleAPI';
import { ScheduleResponse } from '@api/medico/horarios/responses/ScheduleResponse';
import Config from 'react-native-config';

const API_BASE_URL = Config.API_BASE_URL;

describe('getScheduleAPI', () => {
  const token = 'mocked-bearer-token';

  const mockResponse: ScheduleResponse = {
    error: false,
    message: 'Horarios obtenidos correctamente',
    data: {
      horarios: {
        lunes: { de: 12, hasta: 17 },
        martes: { de: 7, hasta: 17 },
        miercoles: { de: "NO DISPONIBLE", hasta: "NO DISPONIBLE" },
        jueves: { de: 14, hasta: 18 },
        viernes: { de: 11, hasta: 14 },
        sabado: { de: null, hasta: null },
        domingo: { de: null, hasta: null },
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

  it('debe retornar los horarios correctamente', async () => {
    // Llama a la función y espera la respuesta
    const response = await getScheduleAPI();
  
    // Verifica que la respuesta sea la esperada
    expect(response).toEqual(mockResponse);
  
    // Verifica que fetch haya sido llamado con la URL y los headers correctos
    expect(fetch).toHaveBeenCalledWith(`${API_BASE_URL}/medico/horarios`, {
      method: 'GET',
      headers: {
        'Authorization': `Bearer ${token}`,
        'Content-Type': 'application/json',
      },
    });
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
  
    // Verificar que se lance el error correcto
    await expect(getScheduleAPI()).rejects.toThrow('Error en la solicitud: Not Found');
    
    // Verificar que se haya llamado fetch con los parámetros correctos
    expect(fetch).toHaveBeenCalledWith(`${API_BASE_URL}/medico/horarios`, {
      method: 'GET',
      headers: {
        'Authorization': `Bearer ${token}`,
        'Content-Type': 'application/json',
      },
    });
  });  
});
