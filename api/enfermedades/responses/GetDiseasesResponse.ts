export interface GetDiseasesResponse {
    error: boolean;
    message: string;
    data: {
      enfermedades: {
        enfermedad_1: string;
        enfermedad_2: string;
        enfermedad_3: string;
        enfermedad_4: string;
      };
    };
  }
  