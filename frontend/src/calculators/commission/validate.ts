// Знаменатель зависит от режима: в одном нулевой быть не может ставка,
// в другом — сумма сделки. Проверка принадлежит калькулятору.

import type { Locale } from '../../lib/clientI18n';
import type { CalculatorValidator } from '../../lib/platform/types';

const ZERO: Partial<Record<Locale, string>> = {
  ru: 'Значение не может быть равно нулю.',
  uk: 'Значення не може дорівнювати нулю.',
  en: 'The value cannot be zero.',
};

export const validate: CalculatorValidator = ({ values, locale, parseNumber }) => {
  const errors: Record<string, string> = {};
  const message = ZERO[locale] ?? ZERO.en!;
  const mode = String(values.mode ?? 'fromAmount');
  if (mode === 'fromCommission' && parseNumber(String(values.b ?? '')) === 0) errors.b = message;
  if (mode === 'rate' && parseNumber(String(values.a ?? '')) === 0) errors.a = message;
  return errors;
};
