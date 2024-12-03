export interface BranchScheduleResponse {
    error: boolean;
    message: string;
    data: {
      [key: string]: {
        hora: string;
        disponible: boolean;
      };
    };
  }
  