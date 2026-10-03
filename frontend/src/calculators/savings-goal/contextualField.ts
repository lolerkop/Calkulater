import type { CalculatorContextualField } from '../../lib/platform/types';
const help: Record<string, string> = {
  ru: 'Дробные годы допускаются; срок округляется до ближайшего целого месяца, не меньше одного. 0,5 года = 6 месяцев.',
  en: 'Fractional years are supported; the term rounds to the nearest whole month, at least one. 0.5 year = 6 months.',
  uk: 'Дробові роки допустимі; строк округлюється до найближчого цілого місяця, не менше одного. 0,5 року = 6 місяців.',
  de: 'Gebrochene Jahre sind möglich; gerundet wird auf den nächsten ganzen Monat, mindestens einen. 0,5 Jahre = 6 Monate.',
  es: 'Se admiten años fraccionarios; se redondean al mes entero más cercano, como mínimo uno. 0,5 años = 6 meses.',
};
export const contextualField: CalculatorContextualField = (field, _values, locale) => field.name === 'years' ? { ...field, help: help[locale] ?? help.en } : field;
