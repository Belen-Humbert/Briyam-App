// SelectSpecialty.tsx
import React from 'react';
import { Select } from 'native-base';
import { Especialidad } from '@types/especialidad.types';

const SelectSpecialty: React.FC<{
  selectedSpecialty: string;
  setSelectedSpecialty: (value: string) => void;
  especialidades: Especialidad[];
}> = ({ selectedSpecialty, setSelectedSpecialty, especialidades }) => (
  <Select
    selectedValue={selectedSpecialty}
    width="100%"
    placeholder="Seleccionar especialidad"
    onValueChange={(value) => setSelectedSpecialty(value)}
    accessibilityLabel="Seleccionar especialidad"
  >
    <Select.Item label="Seleccionar ninguna" value="" key="none" />
    {especialidades.map((specialty) => (
      <Select.Item label={specialty.nombre} value={specialty.id} key={specialty.id} />
    ))}
  </Select>
);

export default SelectSpecialty;
