// Поля a и b означают разное в разных режимах, поэтому подписи меняются вместе
// с режимом. Логика принадлежит калькулятору: общий остров о комиссии не знает.

import type { Field } from '../../lib/types';
import type { CalculatorContextualField } from '../../lib/platform/types';

const labels = {
  ru: { amount: 'Сумма сделки', commission: 'Сумма комиссии', rate: 'Ставка комиссии, %' },
  en: { amount: 'Deal amount', commission: 'Commission amount', rate: 'Commission rate, %' },
  uk: { amount: 'Сума угоди', commission: 'Сума комісії', rate: 'Ставка комісії, %' },
} as const;

export const contextualField: CalculatorContextualField = (field, values, locale): Field => {
  if (field.name !== 'a' && field.name !== 'b') return field;
  const mode = String(values.mode ?? 'fromAmount');
  const copy = labels[locale === 'ru' || locale === 'uk' ? locale : 'en'];
  if (mode === 'fromCommission') {
    return { ...field, label: field.name === 'a' ? copy.commission : copy.rate };
  }
  if (mode === 'rate') {
    return { ...field, label: field.name === 'a' ? copy.amount : copy.commission };
  }
  return { ...field, label: field.name === 'a' ? copy.amount : copy.rate };
};
