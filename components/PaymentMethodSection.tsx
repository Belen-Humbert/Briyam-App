import React from 'react';
import { Box, Text, Image, HStack, Spinner, Alert } from 'native-base';
import RadioButton from '@components/RadioButton';
import { PaymentMethodSectionProps } from '@types/PaymentMethodSection.types';

const PaymentMethodSection: React.FC<PaymentMethodSectionProps> = ({
  isEditMode,
  loading,
  error,
  selectedPaymentMethod,
  setSelectedPaymentMethod,
  paymentMethodImages,
}) => (
  <Box mt={4}>
    <Text color="#0F2661" fontWeight="bold" mb={2}>Métodos de Pago:</Text>
    {loading ? (
      <HStack alignItems="center" justifyContent="center">
        <Spinner color="blue.500" />
        <Text ml={2}>Cargando métodos de pago...</Text>
      </HStack>
    ) : error ? (
      <Alert status="error">
        <Text color="red.600" fontSize="sm">{error}</Text>
      </Alert>
    ) : (
      <HStack alignItems="center" space={4} mt={2}>
        {isEditMode ? (
          <>
            <RadioButton
              options={['Efectivo', 'Transferencia', 'Tarjeta']}
              selectedOption={selectedPaymentMethod}
              onSelect={setSelectedPaymentMethod}
            />
            <Image
              key={selectedPaymentMethod}
              source={paymentMethodImages[selectedPaymentMethod]}
              alt="Método de pago"
              size="sm"
              width={10}
              height={10}
            />
          </>
        ) : (
          <>
            <Text color="#1B7A1B" fontSize="lg" fontWeight="bold">
              {selectedPaymentMethod}
            </Text>
            <Image
              key={selectedPaymentMethod}
              source={paymentMethodImages[selectedPaymentMethod]}
              alt="Método de pago"
              size="md"
              width={10}
              height={10}
            />
          </>
        )}
      </HStack>
    )}
  </Box>
);

export default PaymentMethodSection;
