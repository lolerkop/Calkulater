// Валидация, принадлежащая калькулятору процентов.
//
// Раньше эти две проверки жили веткой `if (calculatorId === 'percent-calculator')`
// внутри общего `validation.ts`. Ветка перенесена сюда дословно: те же режимы,
// те же поля, те же тексты по локалям. Общий слой теперь вызывает валидатор
// обобщённо и про проценты ничего не знает.

import type { Locale } from '../../lib/clientI18n';
import type { CalculatorValidator } from '../../lib/platform/types';

// Тексты перенесены из общего `validation.ts` дословно. Локали, для которых
// сайт не собирается, получают английский вариант — ровно так же, как это
// делала прежняя тернарная цепочка.
const ZERO_ERROR: Partial<Record<Locale, string>> = {
  ru: 'Значение не может быть равно нулю.',
  uk: 'Значення не може дорівнювати нулю.',
  en: 'The value cannot be zero.',
};

export const validatePercent: CalculatorValidator = ({ values, locale, parseNumber }) => {
  const errors: Record<string, string> = {};
  const zeroError = ZERO_ERROR[locale] ?? ZERO_ERROR.en!;
  const mode = String(values.mode ?? 'of');
  // Доля от целого: целое в знаменателе, ноль делает результат неопределённым.
  if (mode === 'what' && parseNumber(String(values.b ?? '')) === 0) errors.b = zeroError;
  // Процентное изменение: исходное значение — база сравнения, ноль её разрушает.
  if (mode === 'change' && parseNumber(String(values.a ?? '')) === 0) errors.a = zeroError;
  return errors;
};

export { validatePercent as validate };
