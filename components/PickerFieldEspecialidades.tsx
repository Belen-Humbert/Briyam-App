import React, { useEffect, useState } from 'react';
import { Box, Select, CheckIcon, Text, Spinner } from 'native-base';
import { getSpecialtiesCatalogAPI } from '@/api/catalogos/getSpecialtiesCatalogAPI';
import { SpecialtiesCatalogResponse } from '@/api/medico/especialidades/responses/SpecialtiesCatalogResponse';
import { PickerFieldEspecialidadesProps } from './PickerFieldEspecialidades.types';
import styles from '@styles/pickerfield_especialidades/PickerFieldEspecialidades.styles';

const PickerFieldEspecialidades: React.FC<PickerFieldEspecialidadesProps> = ({
  label,
  selectedValue,
  onValueChange,
  placeholder
}) => {
  const [especialidades, setEspecialidades] = useState<SpecialtiesCatalogResponse>();
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await getSpecialtiesCatalogAPI();
        setEspecialidades(data);
      } catch (err) {
        const errorMessage = (err as Error).message;
        setError('Error al cargar especialidades');
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
        <Text>Cargando especialidades...</Text>
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
        {especialidades?.data?.length ? (
          especialidades?.data.map((especialidad) => {
            return (
              <Select.Item key={especialidad.id} label={especialidad.especialidad} value={especialidad.id} />
            );
          })
        ) : (
          <Select.Item label={`No hay ${label.toLowerCase()} disponibles`} value="" />
        )}
      </Select>
    </Box>
  );
};

export default PickerFieldEspecialidades;
