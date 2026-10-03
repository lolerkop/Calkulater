import { isIntegralNumberText } from '../format';
import type { CalculatorValidator } from '../platform/types';
import { utcOffsetMinutes } from './dateTimeNumeric';

const integerMessages: Record<string, string> = {
  ru: 'Введите целое число в допустимом диапазоне', en: 'Enter a whole number within the allowed range',
  uk: 'Введіть ціле число в допустимому діапазоні', de: 'Gib eine ganze Zahl im zulässigen Bereich ein', es: 'Introduce un número entero dentro del intervalo permitido',
};
const modeMessages: Record<string, string> = {
  ru: 'Выберите допустимый режим', en: 'Select an available mode', uk: 'Оберіть допустимий режим', de: 'Wähle einen verfügbaren Modus', es: 'Selecciona un modo disponible',
};
const offsetMessages: Record<string, string> = {
  ru: 'Смещение UTC от −12 до +14 должно соответствовать целому числу минут', en: 'The UTC offset from −12 to +14 must represent a whole number of minutes',
  uk: 'Зміщення UTC від −12 до +14 має відповідати цілій кількості хвилин', de: 'Der UTC-Versatz von −12 bis +14 muss einer ganzen Anzahl Minuten entsprechen', es: 'El desplazamiento UTC de −12 a +14 debe representar un número entero de minutos',
};

export function validateWholeFields(context: Parameters<CalculatorValidator>[0], specs: readonly (readonly [string, number, number])[], blankZero = false): Record<string, string> {
  const errors: Record<string, string> = {};
  for (const [name, min, max] of specs) {
    const raw = context.values[name];
    if (blankZero && (raw === undefined || typeof raw === 'string' && raw.trim() === '')) continue;
    const value = typeof raw === 'number' ? raw : typeof raw === 'string' ? context.parseNumber(raw) : null;
    if (value === null || !Number.isSafeInteger(value) || value < min || value > max || (typeof raw === 'string' && isIntegralNumberText(raw, context.locale) !== true)) errors[name] = integerMessages[context.locale] ?? integerMessages.en;
  }
  return errors;
}
export function validateMode(context: Parameters<CalculatorValidator>[0], name: string, allowed: readonly string[], fallback: string): Record<string, string> {
  const raw = context.values[name] === undefined ? fallback : context.values[name];
  return typeof raw === 'string' && allowed.includes(raw) ? {} : { [name]: modeMessages[context.locale] ?? modeMessages.en };
}
export const validateOffsets: CalculatorValidator = context => {
  const errors: Record<string, string> = {};
  for (const name of ['fromOffset', 'toOffset']) {
    const raw = context.values[name];
    const value = typeof raw === 'number' ? raw : typeof raw === 'string' ? context.parseNumber(raw) : null;
    if (value === null || value < -12 || value > 14 || utcOffsetMinutes(raw) === null) errors[name] = offsetMessages[context.locale] ?? offsetMessages.en;
  }
  return errors;
};
