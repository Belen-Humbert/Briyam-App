import { getMedicoInfoAPI } from '@api/medico/getMedicoInfoAPI';
import { MedicoInfoResponse } from '@api/medico/responses/medicoInfoResponse';
import Config from 'react-native-config';

const API_BASE_URL = Config.API_BASE_URL;

describe('getMedicoInfoAPI', () => {
  const token = 'mocked-bearer-token';

  beforeEach(() => {
    jest.resetAllMocks();
  });

  it('debe retornar los datos del médico cuando la solicitud es exitosa', async () => {
    const mockResponse: MedicoInfoResponse = {
      error: false,
      message: 'Medico encontrado',
      data: {
        id: '2',
        username: 'marcodiazb@yahoo.com.mx',
        nombre: 'MARCO EDUARDO',
        apellido_paterno: 'DIAZ',
        apellido_materno: 'BASTIEN',
        correo: 'marcodiazb@yahoo.com.mx',
        tel_celular: '5511647290',
        especialidad: '20',
        subespecialidad: '',
        como_se_entero_nosotros: '4',
        fec_alta: '2021-05-03 15:38:07.970',
        multisucursales: '1, 2,3',
        especialidadNombre: {
          id: '20',
          especialidad: 'Homeopatía',
        },
        comoSeEntero: {
          id: '4',
          nombre: 'Facebook',
        },
        perfilMedico: {
          foto_perfil: 'https://www.briyamcoworkingmedico.com/app-dev/bb52a136ef5b/id-20221008-080912-63417678937cf.jpg',
          pago_en_efectivo: '1',
          pago_con_tarjeta: '1',
          pago_con_transferencia: '1',
          costo_consulta: '350',
          consulta_subsecuente: '200',
          especialista_en_01: 'Cardiología',
          especialista_en_02: 'Alergia e Inmunología',
          especialista_en_03: 'Anatomía Patológica',
          especialista_en_04: 'Anestesiología',
          enfermedades_tratadas_01: 'Enfermedad',
          enfermedades_tratadas_02: 'Enfermedad 2',
          enfermedades_tratadas_03: 'Enfermedad 3',
          enfermedades_tratadas_04: '',
          formacion_academica_01: 'Formacion 1',
          formacion_academica_02: '',
          formacion_academica_03: '',
          formacion_academica_04: '',
          lunes_de: '12',
          lunes_hasta: '17',
          martes_de: '7',
          martes_hasta: '17',
          miercoles_de: '1',
          miercoles_hasta: '1',
          jueves_de: '14',
          jueves_hasta: '18',
          viernes_de: '11',
          viernes_hasta: '14',
          sabado_de: null,
          sabado_hasta: null,
          domingo_de: null,
          domingo_hasta: null,
        },
        nombreCompleto: 'Marco Eduardo Diaz Bastien',
        nombreCorto: 'Marco Eduardo Diaz',
        sucursales: [
          { id: '1', nombre: 'Roma' },
          { id: '2', nombre: 'Florida Del Valle' },
          { id: '3', nombre: 'Masaryk' },
        ],
      },
    };

    global.fetch = jest.fn(() =>
      Promise.resolve({
        ok: true,
        status: 200,
        json: () => Promise.resolve(mockResponse),
      })
    ) as jest.Mock;

    const response = await getMedicoInfoAPI();

    expect(fetch).toHaveBeenCalledWith(`${API_BASE_URL}/medico`, {
      method: 'GET',
      headers: {
        'Authorization': `Bearer ${token}`,
        'Content-Type': 'application/json',
      },
    });

    expect(response).toEqual(mockResponse);
  });

  it('debe lanzar un error cuando la solicitud falla', async () => {
    // Mock de fetch para simular una respuesta con error
    global.fetch = jest.fn(() =>
      Promise.resolve({
        ok: false,
        status: 404,
        statusText: 'Not Found',
      })
    ) as jest.Mock;
  
    // Verifica que se lance el error esperado sin Sentry
    await expect(getMedicoInfoAPI()).rejects.toThrow('Error en la solicitud: Not Found');
  
    // Verifica que la llamada a la API se realice correctamente
    expect(fetch).toHaveBeenCalledWith(`${API_BASE_URL}/medico`, {
      method: 'GET',
      headers: {
        'Authorization': `Bearer ${token}`,
        'Content-Type': 'application/json',
      },
    });
  });   
});
