import React, { useEffect } from 'react';
import { Box, HStack, Text } from 'native-base';
import PaymentMethodSection from '@components/PaymentMethodSection';
import CostSection from '@components/CostSection';
import { GeneralInfoSectionProps } from '@types/GeneralInfoSection.types';
import { useInitializePaymentMethod } from '@hooks/useInitializePaymentMethod';
import { useFetchMetodosPagoMedico } from '@hooks/useFetchMetodosPagoMedico';
import paymentMethodImages from '@props/paymentMethodImages';

const GeneralInfoSection: React.FC<GeneralInfoSectionProps> = ({ marginTop, isEditMode, medicoInfo }) => {

  const { metodosPago, loading, error } = useFetchMetodosPagoMedico();
  const {
    selectedPaymentMethod,
    setSelectedPaymentMethod,
    firstConsultationCost,
    followUpConsultationCost,
    setFirstConsultationCost,
    setFollowUpConsultationCost,
  } = useInitializePaymentMethod(medicoInfo?.perfilMedico?.costo_consulta, medicoInfo?.perfilMedico?.consulta_subsecuente, metodosPago);

  useEffect(() => {
    // Aquí puedes añadir logs si lo necesitas
  }, [selectedPaymentMethod, firstConsultationCost, followUpConsultationCost]);

  return (
    <Box
      bg="#f5f5f5"
      w="90%"
      mx="auto"
      mt={marginTop}
      style={{
        borderRadius: 12,
        padding: 50,
        shadowOpacity: 0.2,
        shadowRadius: 5,
        elevation: 0, // Más elevación para un efecto de tarjeta flotante
      }}
    >
      <HStack justifyContent="center" alignItems="center" mb={8}>
        <Text fontSize="2xl" bold color="#0F2661">
          Información General
        </Text>
      </HStack>

      <PaymentMethodSection
        isEditMode={isEditMode}
        loading={loading}
        error={error}
        selectedPaymentMethod={selectedPaymentMethod}
        setSelectedPaymentMethod={setSelectedPaymentMethod}
        paymentMethodImages={paymentMethodImages}
      />

      <CostSection
        title="Costo Primera Consulta"
        cost={firstConsultationCost}
        isEditMode={isEditMode}
        onChange={setFirstConsultationCost}
      />

      <CostSection
        title="Costo Consulta Subsecuente"
        cost={followUpConsultationCost}
        isEditMode={isEditMode}
        onChange={setFollowUpConsultationCost}
      />
    </Box>
  );
};

export default GeneralInfoSection;
