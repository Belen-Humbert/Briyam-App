// api/__tests__/eliminarEquipoAPI.test.ts

import { eliminarEquipoAPI } from '@api/reservas/eliminarEquipoAPI';
import { EliminarEquipoResponse } from '@api/reservas/responses/EliminarEquipoResponse';

global.fetch = jest.fn(() =>
  Promise.resolve({
    ok: true,
    json: () => Promise.resolve({
      error: false,
      message: "Equipo de la reserva eliminado correctamente",
      data: {
        reserva: {
          folio: 116250,
          equipo: null
        }
      }
    }),
  })
) as jest.Mock;

describe('eliminarEquipoAPI', () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  it('debería eliminar equipo de la reserva correctamente', async () => {
    const token = 'token-prueba';

    const response: EliminarEquipoResponse = await eliminarEquipoAPI("116250", token);
    
    expect(response.error).toBe(false);
    expect(response.message).toBe("Equipo de la reserva eliminado correctamente");
    expect(response.data.reserva.folio).toBe(116250);
    expect(response.data.reserva.equipo).toBeNull();
  });
});
