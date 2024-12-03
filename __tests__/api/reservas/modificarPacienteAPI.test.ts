// api/__tests__/modificarPacienteAPI.test.ts

import { modificarPacienteAPI } from '@api/reservas/modificarPacienteAPI';
import { ModificarPacienteResponse } from '@api/reservas/responses/ModificarPacienteResponse';

global.fetch = jest.fn((url, options) => {
  if (options?.body.includes('nombre=daniel&apellidos=vargas')) {
    return Promise.resolve({
      ok: false,
      status: 400,
      json: () => Promise.resolve({
        error: true,
        message: "La reserva ya tiene un paciente asignado",
        data: {
          reserva: {
            folio: 116250,
            nombre: "daniel",
            apellidos: "becerra",
            telefono: "2471388524",
            email: null,
            recordatorio_sms: null,
            recordatorio_email: null,
          }
        }
      })
    }) as jest.Mocked<any>;
  }

  return Promise.resolve({
    ok: true,
    json: () => Promise.resolve({
      error: false,
      message: "Datos del paciente actualizados correctamente",
      data: {
        reserva: {
          folio: 116250,
          nombre: "daniel",
          apellidos: "vargas",
          telefono: "2471388524",
          email: null,
          recordatorio_sms: null,
          recordatorio_email: null,
        }
      }
    })
  }) as jest.Mocked<any>;
}) as jest.Mock;

describe('modificarPacienteAPI', () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  it('debería manejar el caso cuando el paciente ya está asignado', async () => {
    const token = 'token-prueba';

    await expect(modificarPacienteAPI("116250", "daniel", "vargas", "2471388524", token)).rejects.toThrow("La reserva ya tiene un paciente asignado");
    
  });

  xit('debería modificar los datos del paciente correctamente', async () => {
    
    const token = 'token-prueba';

    const response: ModificarPacienteResponse = await modificarPacienteAPI("116250", "daniel", "vargas", "2471388524", token);
    
    expect(response.error).toBe(false);
    expect(response.message).toBe("Datos del paciente actualizados correctamente");
    expect(response.data.reserva.folio).toBe(116250);
    expect(response.data.reserva.nombre).toBe("daniel");
    expect(response.data.reserva.apellidos).toBe("vargas");
  });
});
