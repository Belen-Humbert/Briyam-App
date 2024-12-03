// ErrorMessage.tsx
import React from 'react';
import { Text } from 'native-base';

const ErrorMessage: React.FC<{ error: string }> = ({ error }) => (
  <Text color="red.500">{error}</Text>
);

export default ErrorMessage;
