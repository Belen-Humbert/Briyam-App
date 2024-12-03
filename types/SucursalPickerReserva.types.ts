export interface SucursalPickerReservaProps {
  selectedBranch: string;
  loading: boolean;
  handleSucursalSelect: (id: string, nombre: string) => void;
}
