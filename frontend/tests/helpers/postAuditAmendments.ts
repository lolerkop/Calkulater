import amendments from '../postAuditCopyAmendments.json';
import type { Field } from '../../src/lib/types';

// Bounded reviewed copy changes, recorded separately from immutable historical
// reports. No runtime/definition imports and no derived numerical expectations.
export function postAuditCopy<T extends object>(id: string, locale: string, baseline: T): T {
  const change = (amendments as Record<string, object>)[`${id}/${locale}`];
  return change ? { ...baseline, ...change } : baseline;
}

export const ingredientDefaults: Record<string, string> = {
  ru: 'вода 68\nсоль 2\nдрожжи 1,2',
  en: 'water 68\nsalt 2\nyeast 1.2',
  uk: 'вода 68\nсіль 2\nдріжджі 1,2',
  de: 'Wasser 68\nSalz 2\nHefe 1,2',
  es: 'agua 68\nsal 2\nlevadura 1,2',
};

export function postAuditField(id: string, locale: string, baseline: Field): Field {
  if (id === 'bmi-calculator' && ['height', 'weight'].includes(baseline.name)
    || id === 'convert-temperature' && baseline.name === 'value') {
    return { ...baseline, preserveDecimalText: true };
  }
  if (id === 'bakers-percentage' && baseline.name === 'ingredients') {
    return { ...baseline, defaultValue: ingredientDefaults[locale] };
  }
  if (id === 'one-rep-max-calculator' && locale === 'uk' && baseline.name === 'weight') {
    return { ...baseline, label: 'Робоча маса снаряда' };
  }
  if (id === 'car-depreciation' && baseline.name === 'price' && ['en','uk'].includes(locale)) {
    return { ...baseline, label: locale === 'en' ? 'Purchase price' : 'Ціна купівлі' };
  }
  return baseline;
}

export function postAuditDefaults<T extends object>(id: string, locale: string, baseline: T): T {
  return id === 'bakers-percentage' ? { ...baseline, ingredients: ingredientDefaults[locale] } : baseline;
}
