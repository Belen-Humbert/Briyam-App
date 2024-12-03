// api/__tests__/actualizarPacienteAPI.test.ts

import { actualizarPacienteAPI } from '@/api/reservas/agregarPacienteAPI';
import { ActualizarPacienteResponse } from '@/api/reservas/responses/AgregarPacienteResponse';

global.fetch = jest.fn(() =>
  Promise.resolve({
    ok: true,
    json: () => Promise.resolve({
      error: false,
      message: "Datos del paciente actualizados correctamente",
      data: {
        reserva: {
          folio: 116250,
          nombre: "daniel",
          apellidos: "becerra",
          telefono: "2471388524",
          email: null,
          recordatorio_sms: null,
          recordatorio_email: null
        }
      }
    }),
  })
) as jest.Mock;

describe('actualizarPacienteAPI', () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  it('debería actualizar los datos del paciente correctamente', async () => {
    const token = 'token-prueba';

    try {
      const response: ActualizarPacienteResponse = await actualizarPacienteAPI("116250", "daniel", "becerra", "2471388524", "0", token);
      
      expect(response.error).toBe(false);
      expect(response.message).toBe("Datos del paciente actualizados correctamente");
      expect(response.data.reserva.folio).toBe(116250);
      expect(response.data.reserva.nombre).toBe("daniel");
      expect(response.data.reserva.apellidos).toBe("becerra");
      expect(response.data.reserva.telefono).toBe("2471388524");
    } catch (error) {
      throw error;
    }
  });
});
