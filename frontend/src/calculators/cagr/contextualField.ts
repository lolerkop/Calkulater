import type { CalculatorContextualField } from '../../lib/platform/types';
const help: Record<string, string> = {
  ru: 'Положительный срок в годах; дробные годы используются без округления. 18 месяцев = 1,5 года.',
  en: 'Positive duration in years; fractional years are used without rounding. 18 months = 1.5 years.',
  uk: 'Додатний строк у роках; дробові роки використовуються без округлення. 18 місяців = 1,5 року.',
  de: 'Positive Dauer in Jahren; gebrochene Jahre werden nicht gerundet. 18 Monate = 1,5 Jahre.',
  es: 'Duración positiva en años; se usan fracciones sin redondear. 18 meses = 1,5 años.',
};
export const contextualField: CalculatorContextualField = (field, _values, locale) => field.name === 'years' ? { ...field, help: help[locale] ?? help.en } : field;
