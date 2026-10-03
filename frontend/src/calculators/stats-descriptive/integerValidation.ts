import { isIntegralNumberText } from '../../lib/format';
import type { CalculatorValidator } from '../../lib/platform/types';
import { statisticsMessages } from './statisticsMessages';
import { INTEGER } from './statisticsNumeric';

export function integerValidation(fields: (values: Record<string, unknown>) => readonly string[]): CalculatorValidator {
  return ({ values, locale, parseNumber }): Record<string, string> => {
    const errors: Record<string, string> = {};
    const message = locale === 'ru' ? INTEGER : statisticsMessages[locale as keyof typeof statisticsMessages]?.[INTEGER] ?? statisticsMessages.en[INTEGER];
    for (const name of fields(values)) {
      const raw = values[name];
      if (typeof raw !== 'number' && typeof raw !== 'string') continue;
      const parsed = typeof raw === 'number' ? (Number.isFinite(raw) ? raw : null) : parseNumber(raw);
      // Let the shared parser explain incomplete/malformed input. Inspect the
      // original decimal before Number can round a tiny fractional part away.
      if (parsed !== null && (!Number.isSafeInteger(parsed) || isIntegralNumberText(raw, locale) === false)) errors[name] = message;
    }
    return errors;
  };
}
