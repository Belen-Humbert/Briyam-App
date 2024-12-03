export interface PerfilMedico {
    foto_perfil: string;
    pago_en_efectivo: string;
    pago_con_tarjeta: string;
    pago_con_transferencia: string;
    costo_consulta: string;
    consulta_subsecuente: string;
    especialista_en_01: string;
    especialista_en_02: string;
    especialista_en_03: string;
    especialista_en_04: string;
    enfermedades_tratadas_01: string;
    enfermedades_tratadas_02: string;
    enfermedades_tratadas_03: string;
    enfermedades_tratadas_04: string;
    formacion_academica_01: string;
    formacion_academica_02: string;
    formacion_academica_03: string;
    formacion_academica_04: string;
    lunes_de: string | null;
    lunes_hasta: string | null;
    martes_de: string | null;
    martes_hasta: string | null;
    miercoles_de: string | null;
    miercoles_hasta: string | null;
    jueves_de: string | null;
    jueves_hasta: string | null;
    viernes_de: string | null;
    viernes_hasta: string | null;
    sabado_de: string | null;
    sabado_hasta: string | null;
    domingo_de: string | null;
    domingo_hasta: string | null;
  }