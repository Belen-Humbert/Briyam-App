// api/__tests__/getHistorialReservasAPI.test.ts

import { getHistorialReservasAPI } from '@api/reservas/getHistorialReservasAPI';
import { HistorialReservasResponse } from '@api/reservas/responses/HistorialReservasResponse';
  
global.fetch = jest.fn(() =>
  Promise.resolve({
    ok: true,
    json: () => Promise.resolve({
      error: false,
      message: "Reservas obtenidas correctamente",
      data: [
        {
          clave: "116225",
          fecha: "2024-10-08",
          hora: "07:00 PM",
          estatus: "CANCELADA",
          pasada: "SI",
          consultorio: {
            id: "5",
            nombre: "Consultorio 5",
            especialidad: "General"
          },
          sucursal: {
            id: "2",
            nombre: "Florido Del Valle"
          }
        }
      ]
    }),
  })
) as jest.Mock;

describe('getHistorialReservasAPI', () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  it('debería obtener el historial de reservas correctamente', async () => {
    const token = 'token-prueba';

    try {
      const response: HistorialReservasResponse = await getHistorialReservasAPI("2", "50", token);
      
      expect(response.error).toBe(false);
      expect(response.message).toBe("Reservas obtenidas correctamente");
      expect(response.data.length).toBeGreaterThan(0);
      expect(response.data[0].clave).toBe("116225");
      expect(response.data[0].consultorio.nombre).toBe("Consultorio 5");
    } catch (error) {
      throw error;
    }
  });
});
