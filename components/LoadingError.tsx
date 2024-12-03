// LoadingError.tsx
import React from 'react';
import { Spinner, Text } from 'native-base';

const LoadingError = ({ loading, error }: { loading: boolean; error: string | null }) => {
    
  if (loading) {
    return <Spinner color="blue.500" size="lg" />;
  }

  if (error) {
    return <Text color="red.500">{error}</Text>;
  }

  return null; // Si no hay error ni carga, no renderiza nada
};

export default LoadingError;
