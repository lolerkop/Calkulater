import type { CalculatorContextualField } from '../../lib/platform/types';
const help: Record<string, string> = {
  ru: 'Годы могут быть дробными; исходный график округляется до ближайшего целого месяца, не меньше одного. 1,5 года = 18 месяцев.',
  en: 'Years may be fractional; the original schedule rounds to the nearest whole month, at least one. 1.5 years = 18 months.',
  uk: 'Роки можуть бути дробовими; початковий графік округлюється до найближчого цілого місяця, не менше одного. 1,5 року = 18 місяців.',
  de: 'Jahre dürfen gebrochen sein; der Ausgangsplan wird auf den nächsten ganzen Monat gerundet, mindestens einen. 1,5 Jahre = 18 Monate.',
  es: 'Los años pueden ser fraccionarios; el calendario original se redondea al mes entero más cercano, como mínimo uno. 1,5 años = 18 meses.',
};
export const contextualField: CalculatorContextualField = (field, _values, locale) => field.name === 'years' ? { ...field, help: help[locale] ?? help.en } : field;
