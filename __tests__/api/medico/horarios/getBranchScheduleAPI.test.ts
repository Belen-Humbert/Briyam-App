// __tests__/getBranchScheduleAPI.test.ts

import { getBranchScheduleAPI } from '@api/medico/horarios/getBranchScheduleAPI';
import { BranchScheduleResponse } from '@api/medico/horarios/responses/BranchScheduleResponse';
import Config from 'react-native-config';

const API_BASE_URL = Config.API_BASE_URL;

describe('getBranchScheduleAPI', () => {
  const token = 'mocked-bearer-token';
  const fecha = '2024-10-16';
  const sucursal = 1;
  const consultorio = 1;

  const mockResponse: BranchScheduleResponse = {
    error: false,
    message: 'Horarios obtenidos correctamente',
    data: {
      "8": { hora: "08:00 - 09:00", disponible: true },
      "9": { hora: "09:00 - 10:00", disponible: true },
      "10": { hora: "10:00 - 11:00", disponible: true },
    }
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

  it('debe retornar los horarios de sucursal correctamente', async () => {
    const response = await getBranchScheduleAPI(token, fecha, sucursal, consultorio);

    expect(response).toEqual(mockResponse);
    expect(fetch).toHaveBeenCalledWith(`${API_BASE_URL}/cat/horarios?fecha=${fecha}&sucursal=${sucursal}&consultorio=${consultorio}`, {
      method: 'GET',
      headers: {
        'Authorization': `Bearer ${token}`,
        'Content-Type': 'application/json',
      },
    });

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
    await expect(getBranchScheduleAPI(token, fecha, sucursal, consultorio))
      .rejects.toThrow('Error en la solicitud: Not Found');
  });  
});
