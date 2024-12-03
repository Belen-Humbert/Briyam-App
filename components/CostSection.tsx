// src/components/CostSection.tsx
import React from 'react';
import { VStack, Text, Input } from 'native-base';
import { CostSectionProps } from '@types/CostSection.types'; // Ajusta la ruta según la ubicación del archivo
import { formatCurrency } from '@utils/currencyUtils'; // Ajusta la ruta según la ubicación del archivo

const CostSection: React.FC<CostSectionProps> = ({ title, cost, isEditMode, onChange }) => {
  
  const handleInputChange = (value: string) => {
    // Convertir el valor a número, manejando NaN
    const numericValue = parseFloat(value.replace(/[^0-9.-]+/g, '')); // Elimina caracteres no numéricos
    onChange(isNaN(numericValue) ? 0 : numericValue); // Cambia a 0 si no es un número válido
  };

  return (
    <VStack w="100%" space={2}>
      <Text color="#0F2661" fontWeight="bold">{title}</Text>
      {isEditMode ? (
        <Input
          value={cost ? cost.toString() : ''} // Asegúrate de convertir el costo a string
          onChangeText={handleInputChange} // Usa la función manejadora
          placeholder="$0.00"
          keyboardType="numeric"
          width="100%" // Cambia a 100% para que el input ocupe todo el ancho
        />
      ) : (
        <Text color="#0F2661" variant="outline">
          {formatCurrency(cost)} {/* Formatea el costo */}
        </Text>
      )}
    </VStack>
  );
};

export default CostSection;
