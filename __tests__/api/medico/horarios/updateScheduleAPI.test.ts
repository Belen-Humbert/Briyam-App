import { updateScheduleAPI } from '@api/medico/horarios/updateScheduleAPI';
import { UpdateScheduleResponse } from '@api/medico/horarios/responses/UpdateScheduleResponse';
import AsyncStorage from '@react-native-async-storage/async-storage';
import Config from 'react-native-config';

const API_BASE_URL = Config.API_BASE_URL;

describe('updateScheduleAPI', () => {
  const dia = 1;
  const de = '12:00';
  const hasta = '12:30';

  const mockResponse: UpdateScheduleResponse = {
    error: false,
    message: 'Horario actualizado correctamente',
    data: {
      dia: '1',
      de: '12:00',
      hasta: '12:30',
    },
  };

  beforeEach(() => {
    // Mockear AsyncStorage
    AsyncStorage.setItem = jest.fn().mockResolvedValue(undefined);
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

  it('debe actualizar el horario correctamente', async () => {
    const response = await updateScheduleAPI(dia, de, hasta);
  
    // Valida que la respuesta obtenida sea igual al mockResponse esperado
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

    await expect(updateScheduleAPI(dia, de, hasta)).rejects.toThrow('Error en la solicitud: Not Found');
  });
});
