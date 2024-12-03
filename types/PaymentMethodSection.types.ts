// PaymentMethodSection.types.ts

export interface PaymentMethodSectionProps {
    isEditMode: boolean;
    loading: boolean;
    error: string | null;
    selectedPaymentMethod: string;
    setSelectedPaymentMethod: (method: string) => void;
    paymentMethodImages: { [key: string]: any };
  }
  