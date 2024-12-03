// api/__tests__/nuevaReservaAPI.test.ts

import { nuevaReservaAPI } from '@api/reservas/nuevaReservaAPI';
import { NuevaReservaResponse } from '@api/reservas/responses/nuevaReservaResponse';

global.fetch = jest.fn(() =>
  Promise.resolve({
    ok: true,
    json: () => Promise.resolve({
      error: false,
      message: "Reserva generada correctamente",
      data: {
        reservacion: {
          folio: 116250,
          fecha: "2024-10-16",
          hora: "06:00",
          consultorio: {
            id: "1",
            nombre: "Consultorio 1",
          },
        },
      },
    }),
  })
) as jest.Mock;

describe('nuevaReservaAPI', () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  it('debería crear una reserva correctamente', async () => {
    const token = 'token-prueba';

    try {
      const response: NuevaReservaResponse = await nuevaReservaAPI("2024-10-16", "06:00", "1", "2", token);
      
      expect(response.error).toBe(false);
      expect(response.message).toBe("Reserva generada correctamente");
      expect(response.data.reservacion.folio).toBe(116250);
      expect(response.data.reservacion.fecha).toBe("2024-10-16");
      expect(response.data.reservacion.hora).toBe("06:00");
      expect(response.data.reservacion.consultorio.id).toBe("1");
      expect(response.data.reservacion.consultorio.nombre).toBe("Consultorio 1");
    } catch (error) {
      throw error;
    }
  });
});
