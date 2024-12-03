// api/__tests__/agregarEquipoAPI.test.ts

import { agregarEquipoAPI } from '@api/reservas/agregarEquipoAPI';
import { AgregarEquipoResponse } from '@api/reservas/responses/AgregarEquipoResponse';

global.fetch = jest.fn(() =>
  Promise.resolve({
    ok: true,
    json: () => Promise.resolve({
      error: false,
      message: "Equipo de la reserva agregado correctamente",
      data: {
        reserva: {
          folio: 116250,
          equipo: {
            clave: "ULTRA",
            nombre: "Ultrasonido"
          }
        }
      }
    }),
  })
) as jest.Mock;

describe('agregarEquipoAPI', () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  it('debería agregar equipo a la reserva correctamente', async () => {
    const token = 'token-prueba';

    try {
      const response: AgregarEquipoResponse = await agregarEquipoAPI("116250", "1", "1", token);
      
      expect(response.error).toBe(false);
      expect(response.message).toBe("Equipo de la reserva agregado correctamente");
      expect(response.data.reserva.folio).toBe(116250);
      expect(response.data.reserva.equipo.clave).toBe("ULTRA");
      expect(response.data.reserva.equipo.nombre).toBe("Ultrasonido");
    } catch (error) {
      throw error;
    }
  });
});
