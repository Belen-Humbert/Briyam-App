import { getStatisticsAPI } from '@api/medico/getStatisticsAPI';
import { StatisticsResponse } from '@api/medico/responses/StatisticsResponse';
import Config from 'react-native-config';

const API_BASE_URL = Config.API_BASE_URL;

describe('getStatisticsAPI', () => {
  const token = 'mocked-bearer-token';

  const mockResponse: StatisticsResponse = {
    error: false,
    message: 'Estadísticas obtenidas correctamente',
    data: {
      saldo_monedero: "6,400",
      saldo_plan: "0",
      monto_gasto: "264,200",
      horas_anual: "1,626",
      dataMonto: [
        { label: "Nov-23", value: "3900", color: "#51C2EC" },
        { label: "Dic-23", value: "76600", color: "#51C2EC" },
        // más datos...
      ],
      dataMontoAcumulado: [
        { label: "Nov-23", value: "3900", color: "#1E3D7F" },
        { label: "Dic-23", value: "80500", color: "#1E3D7F" },
        // más datos...
      ],
      dataHoras: [
        { label: "Nov-23", value: "260", color: "#51C2EC" },
        { label: "Dic-23", value: "486", color: "#51C2EC" },
        // más datos...
      ],
      dataHorasAcumulado: [
        { label: "Nov-23", value: "260", color: "#1E3D7F" },
        { label: "Dic-23", value: "746", color: "#1E3D7F" },
        // más datos...
      ],
      productos: [
        { label: "Reservas", value: "264200" },
        { label: "Material", value: "0" },
        { label: "Productos", value: "0" }
      ]
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
        formData: jest.fn()
      } as Response)
    ) as jest.Mock;
  });

  afterEach(() => {
    jest.resetAllMocks();
  });

  it('debe retornar las estadísticas correctamente', async () => {
    const response = await getStatisticsAPI(token);

    expect(response).toEqual(mockResponse);
    expect(fetch).toHaveBeenCalledWith(`${API_BASE_URL}/medico/estadisticas`, {
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
  
    // Utiliza `rejects.toThrow` para validar el error lanzado
    await expect(getStatisticsAPI(token)).rejects.toThrow('Error en la solicitud: Not Found');
  
    // Verifica que fetch se haya llamado con los parámetros correctos
    expect(fetch).toHaveBeenCalledWith(`${API_BASE_URL}/medico/estadisticas`, {
      method: 'GET',
      headers: {
        'Authorization': `Bearer ${token}`,
        'Content-Type': 'application/json',
      },
    });
  });    
});
