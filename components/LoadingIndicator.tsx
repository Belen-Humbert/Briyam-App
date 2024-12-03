// LoadingIndicator.tsx
import React from 'react';
import { Spinner, Text } from 'native-base';

const LoadingIndicator: React.FC = () => (
  <>
    <Spinner />
    <Text>Cargando especialidades...</Text>
  </>
);

export default LoadingIndicator;
