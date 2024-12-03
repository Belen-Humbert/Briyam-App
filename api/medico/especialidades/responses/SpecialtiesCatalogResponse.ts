export interface SpecialtiesCatalogResponse {
    error: boolean;
    message: string;
    data: Array<{
      id: string;
      especialidad: string;
    }>;
  }
  