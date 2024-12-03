export interface EducationalFormationResponse {
    error: boolean;
    message: string;
    data: {
      formacion: {
        formacion_1: string;
        formacion_2: string;
        formacion_3: string;
        formacion_4: string;
      };
    };
  }
  