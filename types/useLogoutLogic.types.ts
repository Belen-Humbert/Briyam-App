// useLogoutLogic.types.ts

export interface UseLogoutLogicReturn {
    handleLogout: () => Promise<void>;
    loading: boolean;
    error: string;
  }
  