import { updateFotoPerfilAPI } from '@api/medico/updateFotoPerfilAPI';
import { updatePaymentMethodsAPI } from '@api/medico/metodos_pago/updatePaymentMethodsAPI';  
import { updateConsultationCostsAPI } from '@api/medico/consultas/updateConsultationCostsAPI';  
import { updateSpecialtiesAPI } from '@api/medico/especialidades/updateSpecialtiesAPI';  
import { updateScheduleAPI } from '@api/medico/horarios/updateScheduleAPI';
import { MedicoUpdateParams } from '@types/MedicoUpdateParams.types';

class MedicoUpdateGlobalService {

  async update(params: MedicoUpdateParams) {
    
    const { foto, token, dia, de, hasta, efectivo, tarjeta, transferencia, costoConsulta, costoConsultaSubsecuente, specialties } = params;
    const results: Record<string, any> = {};

    try {

      // Validar parámetros requeridos
      if (foto && typeof foto !== 'string') {
        throw new Error('El parámetro "foto" debe ser una cadena.');
      }

      if (dia !== undefined && (de === undefined || hasta === undefined)) {
        throw new Error('Los parámetros "de" y "hasta" son requeridos si "dia" está definido.');
      }

      if (efectivo === undefined && tarjeta === undefined && transferencia === undefined) {
        throw new Error('Al menos uno de los métodos de pago debe ser definido (efectivo, tarjeta, transferencia).');
      }

      if (costoConsulta && typeof costoConsulta !== 'string') {
        throw new Error('El parámetro "costoConsulta" debe ser una cadena.');
      }

      if (costoConsultaSubsecuente && typeof costoConsultaSubsecuente !== 'string') {
        throw new Error('El parámetro "costoConsultaSubsecuente" debe ser una cadena.');
      }

      // Llamar a las APIs
      if (foto) {
        results.fotoPerfil = await updateFotoPerfilAPI(foto);
      }

      if (dia !== undefined && de && hasta) {
        results.horarios = await updateScheduleAPI(dia, de, hasta);
      }

      if (efectivo !== undefined || tarjeta !== undefined || transferencia !== undefined) {
        results.metodosPago = await updatePaymentMethodsAPI(efectivo, tarjeta, transferencia);
      }

      if (costoConsulta && costoConsultaSubsecuente) {
        results.costosConsulta = await updateConsultationCostsAPI(costoConsulta, costoConsultaSubsecuente);
      }

      if (specialties) {
        results.especialidades = await updateSpecialtiesAPI(specialties);
      }

      return results;

    } catch (error) {
      console.error('Error al actualizar los datos del médico:', error);
      throw error; // Propagar el error para manejarlo en el lugar donde se llama a este servicio
    }
  }
}

export default new MedicoUpdateGlobalService();
