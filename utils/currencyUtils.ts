// src/utils/currencyUtils.ts

export const formatCurrency = (value: number, locale: string = 'es-MX', currency: string = 'MXN') => {
    return new Intl.NumberFormat(locale, {
      style: 'currency',
      currency: currency,
    }).format(value);
  };
  