// api/__tests__/getProximasReservasAPI.test.ts

import { getProximasReservasAPI } from '@api/reservas/getProximasReservasAPI';
import { ProximasReservasResponse } from '@api/reservas/responses/ProximasReservasResponse';

global.fetch = jest.fn(() =>
  Promise.resolve({
    ok: true,
    json: () => Promise.resolve({
      error: false,
      message: "Reservas obtenidas correctamente",
      data: [
        {
          clave: "116250",
          fecha: "2024-10-16",
          hora: "06:00 AM",
          puede_cancelar: "SI",
          consultorio: {
            id: "1",
            nombre: "Consultorio 1",
            especialidad: "General"
          },
          sucursal: {
            id: "2",
            nombre: "Florida Del Valle"
          }
        }
      ]
    }),
  })
) as jest.Mock;

describe('getProximasReservasAPI', () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  it('debería obtener las próximas reservas correctamente', async () => {
    const token = 'token-prueba';

    try {
      const response: ProximasReservasResponse = await getProximasReservasAPI("2", "50", token);
      
      expect(response.error).toBe(false);
      expect(response.message).toBe("Reservas obtenidas correctamente");
      expect(response.data.length).toBeGreaterThan(0);
      expect(response.data[0].clave).toBe("116250");
      expect(response.data[0].consultorio.nombre).toBe("Consultorio 1");
    } catch (error) {
      throw error;
    }
  });
});
