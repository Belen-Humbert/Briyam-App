// components/PickerFieldSucursales.tsx
import React from 'react';
import { Box, Select, CheckIcon, Text } from 'native-base';
import { useFetchSucursales } from '@hooks/useFetchSucursales';
import styles from '@styles/sucursales/PickerFieldSucursales.styles';
import { PickerFieldSucursalesProps } from '@components/PickerFieldSucursales.types';

const PickerFieldSucursales: React.FC<PickerFieldSucursalesProps> = ({
  label,
  selectedValue,
  onValueChange,
  placeholder
}) => {
  
  const { items, loading } = useFetchSucursales(); // Usamos el hook para obtener los datos

  return (
    <Box style={styles.inputContainer}>
      <Text style={styles.label}>{label}:</Text>
      <Select
        selectedValue={selectedValue}
        minWidth="90%"
        backgroundColor="white"
        accessibilityLabel={placeholder}
        placeholder={loading ? "Cargando sucursales..." : placeholder}
        _selectedItem={{
          bg: "teal.600",
          endIcon: <CheckIcon size="2" />,
          _text: { color: "white" }
        }}
        mt={1}
        onValueChange={(itemValue) => {
          onValueChange(itemValue);
        }}
      >
        {items.length > 0 ? (
          items.map((item) => (
            <Select.Item key={item.id} label={item.nombre} value={item.id} />
          ))
        ) : (
          <Select.Item label={`No hay ${label.toLowerCase()} disponibles`} value="" />
        )}
      </Select>
    </Box>
  );
};

export default PickerFieldSucursales;
