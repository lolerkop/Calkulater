import type { Field } from '../../lib/types';
import type { CalculatorContextualField } from '../../lib/platform/types';
const labels = {
  ru: { amount: 'Сумма сделки', commission: 'Сумма комиссии', rate: 'Ставка комиссии' },
  en: { amount: 'Deal amount', commission: 'Commission amount', rate: 'Commission rate' },
  uk: { amount: 'Сума угоди', commission: 'Сума комісії', rate: 'Ставка комісії' },
  de: { amount: 'Geschäftsbetrag', commission: 'Provisionsbetrag', rate: 'Provisionssatz' },
  es: { amount: 'Importe de la operación', commission: 'Importe de comisión', rate: 'Porcentaje de comisión' },
} as const;
export const contextualField: CalculatorContextualField = (field, values, locale): Field => {
  if (field.name !== 'a' && field.name !== 'b') return field;
  const copy = labels[locale as keyof typeof labels] ?? labels.en;
  const currency = ({ ru: '₽', en: '$', uk: '₴', de: '€', es: '€' } as Record<string, string>)[locale] ?? field.unit ?? '₽';
  if (values.mode === 'fromCommission') return { ...field, label: field.name === 'a' ? copy.commission : copy.rate, unit: field.name === 'a' ? currency : '%' };
  if (values.mode === 'rate') return { ...field, label: field.name === 'a' ? copy.amount : copy.commission, unit: currency };
  return { ...field, label: field.name === 'a' ? copy.amount : copy.rate, unit: field.name === 'a' ? currency : '%' };
};
