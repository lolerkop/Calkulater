import type { Field } from './types';
import { isIntegralNumberText, parseLocalizedNumber, type NumberLocale } from './format';
import { isFieldVisible } from './fieldVisibility';

export type ShareFormValues = Record<string, string | number | boolean>;

const SCIENTIFIC_NUMBER = /^[+-]?(?:\d+(?:\.\d*)?|\.\d+)[eE][+-]?\d+$/;
function integralScientificText(raw: string): boolean {
  const [mantissa, exponent] = raw.split(/[eE]/);
  const places = (mantissa.split('.')[1] ?? '').length;
  const digits = mantissa.replace(/[+.-]/g, '');
  const removed = places - Number(exponent);
  // Inspect decimal digits; never allocate10 raised to an unbounded exponent.
  return removed <= 0 || (removed >= digits.length
    ? !/[1-9]/.test(digits) : !/[1-9]/.test(digits.slice(-removed)));
}

// Календарная дата в часовом поясе пользователя. toISOString() здесь не годится:
// он отдаёт дату по UTC, поэтому вечером в UTC+ и утром в UTC- пользователь
// получал бы соседний день.
export function toLocalIsoDate(date: Date): string {
  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, '0');
  const day = String(date.getDate()).padStart(2, '0');
  return `${year}-${month}-${day}`;
}

export function defaultValueForField(field: Field): string | number | boolean {
  if (field.defaultValue !== undefined) return field.defaultValue;
  if (field.type === 'date' && typeof window !== 'undefined') {
    const today = new Date();
    if (field.name === 'startDate' || field.name === 'calcDate' || field.name === 'operationDate') {
      return toLocalIsoDate(today);
    }
    if (field.name === 'endDate') {
      today.setDate(today.getDate() + 30);
      return toLocalIsoDate(today);
    }
  }
  if (field.type === 'checkbox' || field.type === 'toggle') {
    return field.options?.[0]?.value ?? false;
  }
  if (field.type === 'number') return 0;
  return '';
}

export function buildInitialValues(fields: Field[]): ShareFormValues {
  return Object.fromEntries(fields.map((field) => [field.name, defaultValueForField(field)]));
}

// Значения самого первого рендера. Сервер не знает ни текущей даты пользователя,
// ни его часового пояса, поэтому автоматические даты остаются пустыми — и клиент
// обязан отрендерить ровно то же самое, иначе React не сможет гидрировать
// разметку и перерисует остров целиком. Реальная дата подставляется уже после
// монтирования, через buildInitialValues.
export function buildHydrationValues(fields: Field[]): ShareFormValues {
  return Object.fromEntries(fields.map((field) => [
    field.name,
    field.defaultValue === undefined && field.type === 'date' ? '' : defaultValueForField(field),
  ]));
}

function parseUrlValue(
  field: Field,
  raw: string,
  locale: NumberLocale,
): string | number | boolean | undefined {
  if (field.type === 'number') {
    if (raw.trim() === '') return raw;
    // Number.toString() uses exponent notation for finite small/large values.
    // Links produced from those numbers must restore the same value.
    if (SCIENTIFIC_NUMBER.test(raw)) {
      const number = Number(raw);
      if (!Number.isFinite(number)) return undefined;
      // Retain an underflowing nonzero query as invalid input for the visible
      // validator; zero mantissas remain valid even with a large exponent.
      return (number === 0 && /[1-9]/.test(raw.split(/[eE]/)[0]))
        || (Number.isInteger(number) && !integralScientificText(raw)) ? raw : number;
    }
    const parsed = parseLocalizedNumber(raw, locale);
    if (parsed === null) return undefined;
    // Preserve a decimal fraction rounded onto an integer, so an owned
    // integer validator can inspect its actual text instead of accepting1.
    return Number.isInteger(parsed) && isIntegralNumberText(raw, locale) === false ? raw : parsed;
  }
  if (field.type === 'checkbox') {
    if (raw === '1' || raw === 'true') return true;
    if (raw === '0' || raw === 'false') return false;
    return undefined;
  }
  if (field.type === 'select' || field.type === 'toggle') {
    const allowed = field.options?.map((option) => String(option.value));
    if (allowed && !allowed.includes(raw)) return undefined;
  }
  return raw;
}

export function readValuesFromSearch(
  fields: Field[],
  defaults: ShareFormValues,
  search: string,
  locale: NumberLocale,
): ShareFormValues {
  const params = new URLSearchParams(search);
  if ([...params.keys()].length === 0) return defaults;

  const values = { ...defaults };
  for (const field of fields) {
    // Pinned currency pairs and other fixed fields are part of the page's
    // contract; URL parameters cannot silently replace their disabled values.
    if (field.readOnly) continue;
    const raw = params.get(field.name);
    if (raw === null) continue;
    const parsed = parseUrlValue(field, raw, locale);
    if (parsed !== undefined) values[field.name] = parsed;
  }
  return values;
}

export function buildCalculatorQueryString(
  fields: Field[],
  values: ShareFormValues,
  locale: NumberLocale,
): string {
  const params = new URLSearchParams();
  for (const field of fields) {
    if (!isFieldVisible(field, values)) continue;

    const rawValue = values[field.name];
    if (field.type === 'number' && typeof rawValue === 'boolean') continue;
    const numericBlank = field.type === 'number' && typeof rawValue === 'string' && rawValue.trim() === '';
    const parsedValue = field.type === 'number' && typeof rawValue !== 'boolean'
      ? (numericBlank ? rawValue : typeof rawValue === 'number' ? (Number.isFinite(rawValue) ? rawValue : null) : parseLocalizedNumber(String(rawValue), locale))
      : rawValue;
    const roundedFraction = field.type === 'number' && typeof rawValue === 'string'
      && typeof parsedValue === 'number' && Number.isInteger(parsedValue)
      && isIntegralNumberText(rawValue, locale) === false;
    const precisionLostExponent = field.type === 'number' && typeof rawValue === 'string'
      && SCIENTIFIC_NUMBER.test(rawValue) && Number.isFinite(Number(rawValue))
      && Number.isInteger(Number(rawValue)) && !integralScientificText(rawValue);
    const value = roundedFraction || precisionLostExponent ? rawValue : parsedValue;
    const defaultValue = defaultValueForField(field);
    if ((value === '' && !['number', 'textarea', 'date'].includes(field.type)) || value === undefined || value === null || value === defaultValue) continue;

    params.set(field.name, typeof value === 'boolean' ? (value ? '1' : '0') : String(value));
  }

  const query = params.toString();
  return query ? `?${query}` : '';
}
