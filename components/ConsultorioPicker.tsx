import React, { useState, useEffect } from 'react';
import { VStack, Spinner, View, Text } from 'native-base';
import { Picker } from '@react-native-picker/picker';
import styles from '@styles/ConsultorioPicker.styles';
import { ConsultorioPickerProps } from '@types/ConsultorioPickerProps.types';
import { getConsultoriosPorSucursalAPI } from '@api/consultorios/getConsultoriosPorSucursalAPI';
import { Consultorio } from '@types/Consultorio.types';

const ConsultorioPicker: React.FC<ConsultorioPickerProps> = ({
  idSucursal,
  selectedConsultorio,
  setSelectedConsultorio,
}) => {
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);
  const [consultorios, setConsultorios] = useState<Consultorio[]>([]);

  useEffect(() => {
    if (!idSucursal) return; // Evitar llamadas si no hay sucursal seleccionada

    const fetchConsultorios = async () => {
      setLoading(true);
      setError(null);
      try {
        const consultorios = await getConsultoriosPorSucursalAPI(idSucursal);
        setConsultorios(consultorios);
      } catch (err: any) {
        setError('Error al obtener consultorios');
        console.error(err);
      } finally {
        setLoading(false);
      }
    };

    fetchConsultorios();
  }, [idSucursal]);

  return (
    <VStack justifyContent="space-between" alignItems="left" w="100%">
      <Text style={styles.label}>Consultorio</Text>
      <View>
        {loading ? (
          <Spinner color="blue.500" />
        ) : (
          <Picker
            selectedValue={selectedConsultorio}
            style={styles.picker}
            onValueChange={(itemValue) => {
              const selected = consultorios.find(c => c.id_consultorio === itemValue);
              setSelectedConsultorio(selected?.id_consultorio || "");
            }}
          >
            <Picker.Item label="Seleccione un consultorio" value="" />
            {consultorios.map((consultorio) => (
              <Picker.Item key={consultorio.id_consultorio} label={consultorio.nombre} value={consultorio.id_consultorio} />
            ))}
          </Picker>
        )}
        {error && <Text style={{ color: 'red' }}>{error}</Text>}
      </View>
    </VStack>
  );
};

export default ConsultorioPicker;
