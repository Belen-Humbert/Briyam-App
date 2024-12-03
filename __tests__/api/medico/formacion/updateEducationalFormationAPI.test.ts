// __tests__/updateEducationalFormationAPI.test.ts

import { updateEducationalFormationAPI } from '@/api/medico/formacion/updateEducationalFormationAPI';
import { UpdateEducationalFormationResponse } from '@/api/medico/formacion/responses/UpdateEducationalFormationResponse';
import Config from 'react-native-config';

const API_BASE_URL = Config.API_BASE_URL;

describe('updateEducationalFormationAPI', () => {
  const token = 'mocked-bearer-token';
  const formacion1 = 'Formación Escolar 1';
  const formacion2 = 'Formación Escolar 2';
  const formacion3 = 'Formación Escolar 3';
  const formacion4 = 'Formación Escolar 4';

  const mockResponse: UpdateEducationalFormationResponse = {
    error: false,
    message: 'Formación académica actualizada correctamente',
    data: {
      formacion: {
        formacion_1: formacion1,
        formacion_2: formacion2,
        formacion_3: formacion3,
        formacion_4: formacion4,
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

  it('debe actualizar la formación académica correctamente', async () => {
    const response = await updateEducationalFormationAPI(token, formacion1, formacion2, formacion3, formacion4);

    expect(response).toEqual(mockResponse);
    expect(fetch).toHaveBeenCalledWith(`${API_BASE_URL}/medico/experiencia/formacion/modificar`, {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${token}`,
        'Content-Type': 'application/x-www-form-urlencoded',
      },
      body: `formacion_1=${encodeURIComponent(formacion1).replace(/%20/g, '+')}&formacion_2=${encodeURIComponent(formacion2).replace(/%20/g, '+')}&formacion_3=${encodeURIComponent(formacion3).replace(/%20/g, '+')}&formacion_4=${encodeURIComponent(formacion4).replace(/%20/g, '+')}`,
    });

  });

  it('debe lanzar un error si la solicitud falla', async () => {
    (fetch as jest.MockedFunction<typeof fetch>).mockResolvedValueOnce({
      ok: false,
      status: 400,
      statusText: 'Bad Request',
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
  
    // Valida que el mensaje de error lanzado es el esperado
    await expect(updateEducationalFormationAPI(token, formacion1, formacion2, formacion3, formacion4)).rejects.toThrow('Error en la solicitud: Bad Request');
  
  });  
});
