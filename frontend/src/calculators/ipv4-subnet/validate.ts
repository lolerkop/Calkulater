import { isIntegralNumberText } from '../../lib/format';
import type { CalculatorValidator } from '../../lib/platform/types';
const text: Record<string,string> = {"ru": "Это поле требует безопасного целого числа без округления", "en": "This field requires a safe integer without rounding", "uk": "Це поле потребує безпечного цілого числа без округлення", "de": "Dieses Feld erfordert eine sichere ganze Zahl ohne Rundung", "es": "Este campo requiere un entero seguro sin redondeo"};
export const validate: CalculatorValidator = ({ values, locale, parseNumber }) => {
 const errors: Record<string,string> = {};
 for (const name of ['prefix']) {
  const raw = values[name];
  if (typeof raw !== 'string' && typeof raw !== 'number') continue;
  const n = typeof raw === 'number' ? raw : parseNumber(raw);
  if (n !== null && (!Number.isSafeInteger(n) || isIntegralNumberText(raw, locale) === false)) errors[name] = text[locale] ?? text.en;
 }
 return errors;
};
