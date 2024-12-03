// __tests__/updateConsultationCostsAPI.test.ts

import { updateConsultationCostsAPI } from '@api/medico/consultas/updateConsultationCostsAPI';
import { UpdateConsultationCostsResponse } from '@api/medico/consultas/responses/UpdateConsultationCostsResponse';
import AsyncStorage from '@react-native-async-storage/async-storage';
import Config from 'react-native-config';

const API_BASE_URL = Config.API_BASE_URL;

describe('updateConsultationCostsAPI', () => {
  const costoConsulta = '100';
  const costoConsultaSubsecuente = '80';

  const mockResponse: UpdateConsultationCostsResponse = {
    error: false,
    message: 'Costos de consulta actualizados correctamente',
    data: {
      'costo-consulta': costoConsulta,
      'costo-consulta-subsecuente': costoConsultaSubsecuente,
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

  it('debe actualizar los costos de consulta correctamente', async () => {
    const response = await updateConsultationCostsAPI(costoConsulta, costoConsultaSubsecuente);

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

    await expect(updateConsultationCostsAPI(costoConsulta, costoConsultaSubsecuente))
      .rejects.toThrow('Error en la solicitud: Not Found');
  });
});
