// LoadingOrError.tsx
import React from 'react';
import { Spinner, Text } from 'native-base';
import { LoadingOrErrorProps } from '@types/LoadingOrError.types'; // Asegúrate de ajustar la ruta según tu estructura de carpetas

const LoadingOrError: React.FC<LoadingOrErrorProps> = ({ loading, error }) => {
    
  if (loading) {
    return <Spinner />;
  }
  
  if (error) {
    return <Text color="red.500">{error}</Text>;
  }

  return null; // Si no hay carga ni error, no renderiza nada
};

export default LoadingOrError;
