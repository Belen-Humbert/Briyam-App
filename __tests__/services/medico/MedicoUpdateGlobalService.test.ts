import MedicoUpdateGlobalService from '@/services/medico/MedicoUpdateGlobalService'; // Ajusta la ruta según tu estructura
import { updateFotoPerfilAPI } from '@api/medico/updateFotoPerfilAPI';
import { updatePaymentMethodsAPI } from '@api/medico/metodos_pago/updatePaymentMethodsAPI';  
import { updateConsultationCostsAPI } from '@api/medico/consultas/updateConsultationCostsAPI';  
import { updateSpecialtiesAPI } from '@api/medico/especialidades/updateSpecialtiesAPI';  
import { updateScheduleAPI } from '@api/medico/horarios/updateScheduleAPI';

// Mock de las APIs
jest.mock('@api/medico/updateFotoPerfilAPI');
jest.mock('@api/medico/metodos_pago/updatePaymentMethodsAPI');  
jest.mock('@api/medico/consultas/updateConsultationCostsAPI');  
jest.mock('@api/medico/especialidades/updateSpecialtiesAPI');  
jest.mock('@api/medico/horarios/updateScheduleAPI');

describe('MedicoUpdateGlobalService', () => {

  const mockFoto = 'mocked-foto-url';
  const mockToken = 'mocked-token';
  const mockDia = '2024-10-20';
  const mockDe = '09:00';
  const mockHasta = '17:00';
  const mockEfectivo = true;
  const mockTarjeta = false;
  const mockTransferencia = false;
  const mockCostoConsulta = '100';
  const mockCostoConsultaSubsecuente = '80';
  const mockSpecialties = {
    especialidad_1: 'Especialidad 1',
    especialidad_2: 'Especialidad 2',
  };

  beforeEach(() => {
    jest.clearAllMocks();
  });

  it('debe actualizar correctamente todos los parámetros', async () => {
    // Simular respuestas de las APIs
    (updateFotoPerfilAPI as jest.Mock).mockResolvedValue({ success: true });
    (updatePaymentMethodsAPI as jest.Mock).mockResolvedValue({ success: true });
    (updateConsultationCostsAPI as jest.Mock).mockResolvedValue({ success: true });
    (updateSpecialtiesAPI as jest.Mock).mockResolvedValue({ success: true });
    (updateScheduleAPI as jest.Mock).mockResolvedValue({ success: true });

    const params = {
      foto: mockFoto,
      token: mockToken,
      dia: mockDia,
      de: mockDe,
      hasta: mockHasta,
      efectivo: mockEfectivo,
      tarjeta: mockTarjeta,
      transferencia: mockTransferencia,
      costoConsulta: mockCostoConsulta,
      costoConsultaSubsecuente: mockCostoConsultaSubsecuente,
      specialties: mockSpecialties,
    };

    const result = await MedicoUpdateGlobalService.update(params);

    expect(result).toEqual({
      fotoPerfil: { success: true },
      horarios: { success: true },
      metodosPago: { success: true },
      costosConsulta: { success: true },
      especialidades: { success: true },
    });
  });

  it('debe lanzar un error si el parámetro "foto" no es una cadena', async () => {
    const params = {
      foto: 12345, // Tipo incorrecto
      token: mockToken,
      dia: mockDia,
      de: mockDe,
      hasta: mockHasta,
      efectivo: mockEfectivo,
      tarjeta: mockTarjeta,
      transferencia: mockTransferencia,
      costoConsulta: mockCostoConsulta,
      costoConsultaSubsecuente: mockCostoConsultaSubsecuente,
      specialties: mockSpecialties,
    };

    await expect(MedicoUpdateGlobalService.update(params))
      .rejects.toThrow('El parámetro "foto" debe ser una cadena.');
  });

  it('debe lanzar un error si "dia" está definido pero faltan "de" o "hasta"', async () => {
    const params = {
      foto: mockFoto,
      token: mockToken,
      dia: mockDia,
      de: undefined, // Faltante
      hasta: mockHasta,
      efectivo: mockEfectivo,
      tarjeta: mockTarjeta,
      transferencia: mockTransferencia,
      costoConsulta: mockCostoConsulta,
      costoConsultaSubsecuente: mockCostoConsultaSubsecuente,
      specialties: mockSpecialties,
    };

    await expect(MedicoUpdateGlobalService.update(params))
      .rejects.toThrow('Los parámetros "de" y "hasta" son requeridos si "dia" está definido.');
  });

  it('debe lanzar un error si no se definen métodos de pago', async () => {
    const params = {
      foto: mockFoto,
      token: mockToken,
      dia: mockDia,
      de: mockDe,
      hasta: mockHasta,
      efectivo: undefined, // Faltante
      tarjeta: undefined, // Faltante
      transferencia: undefined, // Faltante
      costoConsulta: mockCostoConsulta,
      costoConsultaSubsecuente: mockCostoConsultaSubsecuente,
      specialties: mockSpecialties,
    };

    await expect(MedicoUpdateGlobalService.update(params))
      .rejects.toThrow('Al menos uno de los métodos de pago debe ser definido (efectivo, tarjeta, transferencia).');
  });

  it('debe lanzar un error si "costoConsulta" no es una cadena', async () => {
    const params = {
      foto: mockFoto,
      token: mockToken,
      dia: mockDia,
      de: mockDe,
      hasta: mockHasta,
      efectivo: mockEfectivo,
      tarjeta: mockTarjeta,
      transferencia: mockTransferencia,
      costoConsulta: 100, // Tipo incorrecto
      costoConsultaSubsecuente: mockCostoConsultaSubsecuente,
      specialties: mockSpecialties,
    };

    await expect(MedicoUpdateGlobalService.update(params))
      .rejects.toThrow('El parámetro "costoConsulta" debe ser una cadena.');
  });

  it('debe lanzar un error si "costoConsultaSubsecuente" no es una cadena', async () => {
    const params = {
      foto: mockFoto,
      token: mockToken,
      dia: mockDia,
      de: mockDe,
      hasta: mockHasta,
      efectivo: mockEfectivo,
      tarjeta: mockTarjeta,
      transferencia: mockTransferencia,
      costoConsulta: mockCostoConsulta,
      costoConsultaSubsecuente: 80, // Tipo incorrecto
      specialties: mockSpecialties,
    };

    await expect(MedicoUpdateGlobalService.update(params))
      .rejects.toThrow('El parámetro "costoConsultaSubsecuente" debe ser una cadena.');
  });

});
