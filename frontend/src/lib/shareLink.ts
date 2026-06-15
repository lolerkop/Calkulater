import type { Field } from './types';
import { parseLocalizedNumber, type NumberLocale } from './format';

export type ShareFormValues = Record<string, string | number | boolean>;

export function defaultValueForField(field: Field): string | number | boolean {
  if (field.defaultValue !== undefined) return field.defaultValue;
  if (field.type === 'date' && typeof window !== 'undefined') {
    const today = new Date();
    if (field.name === 'startDate' || field.name === 'calcDate' || field.name === 'operationDate') {
      return today.toISOString().slice(0, 10);
    }
    if (field.name === 'endDate') {
      today.setDate(today.getDate() + 30);
      return today.toISOString().slice(0, 10);
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

function parseUrlValue(
  field: Field,
  raw: string,
  locale: NumberLocale,
): string | number | boolean | undefined {
  if (field.type === 'number') return parseLocalizedNumber(raw, locale) ?? undefined;
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
    if (field.showIf && values[field.showIf.field] !== field.showIf.equals) continue;

    const rawValue = values[field.name];
    const value = field.type === 'number' && typeof rawValue !== 'boolean'
      ? parseLocalizedNumber(String(rawValue), locale)
      : rawValue;
    const defaultValue = defaultValueForField(field);
    if (value === '' || value === undefined || value === null || value === defaultValue) continue;

    params.set(field.name, typeof value === 'boolean' ? (value ? '1' : '0') : String(value));
  }

  const query = params.toString();
  return query ? `?${query}` : '';
}
