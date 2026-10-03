// Select values are inspected without coercion. The fallback applies only to
// an omitted field; a supplied unknown enum is an explicit input error.
export const choice = <T extends string>(value: unknown, choices: readonly T[], fallback: T): T | null =>
  value === undefined ? fallback : typeof value === 'string' && choices.includes(value as T) ? value as T : null;

// Thirteen independent owned field-help maps need the same immutable lookup.
// This helper contains no calculator-specific thresholds or public copy.
import type { CalculatorContextualField } from './types';
import type { Locale } from '../clientI18n';
export function createFieldHelp(helps: Readonly<Partial<Record<Locale, Readonly<Record<string, string>>>>>): CalculatorContextualField {
  return (field, _values, locale) => ({ ...field, help: helps[locale]?.[field.name] ?? helps.en?.[field.name] ?? field.help });
}
