import React, { useEffect, useState } from 'react';
import { Box, Select, CheckIcon, Text, Spinner } from 'native-base';
import { getComoSeEnteroAPI } from '@api/catalogos/getComoSeEnteroAPI';
import { GetComoSeEnteroResponse } from '@/api/catalogos/responses/getComoSeEnteroResponseAPI';
import { PickerFieldComoSeEnteroProps } from '@/types/pickerfield_como_se_entero/PickerFieldComoSeEntero.types';
import styles from '@styles/pickerfield_como_se_entero/PickerFieldComoSeEntero.styles';

const PickerFieldComoSeEntero: React.FC<PickerFieldComoSeEnteroProps> = ({
  label,
  selectedValue,
  onValueChange,
  placeholder
}) => {
  const [comoSeEntero, setComoSeEntero] = useState<GetComoSeEnteroResponse>();
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data : GetComoSeEnteroResponse = await getComoSeEnteroAPI();
        setComoSeEntero(data);
      } catch (err) {
        const errorMessage = (err as Error).message;
        setError('Error al cargar opciones: ' + errorMessage);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  if (loading) {
    return (
      <Box style={styles.inputContainer} alignItems="center">
        <Spinner size="lg" />
        <Text>Cargando opciones...</Text>
      </Box>
    );
  }

  if (error) {
    return (
      <Box style={styles.inputContainer} alignItems="center">
        <Text color="red.500">{error}</Text>
      </Box>
    );
  }

  return (
    <Box style={styles.inputContainer}>
      <Text style={styles.label}>{label}:</Text>
      <Select
        selectedValue={selectedValue}
        minWidth="200"
        backgroundColor="white"
        accessibilityLabel={placeholder}
        placeholder={placeholder}
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
        {comoSeEntero?.data?.length ? (
          comoSeEntero?.data.map((option) => {
            return (
              <Select.Item key={option.id} label={option.nombre} value={option.id} />
            );
          })
        ) : (
          <Select.Item label={`No hay ${label.toLowerCase()} disponibles`} value="" />
        )}
      </Select>
    </Box>
  );
};

export default PickerFieldComoSeEntero;
