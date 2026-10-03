import type { CalculatorContextualField } from '../../lib/platform/types';
const units = {"prefix": "бит"};
const native: Record<string, readonly string[]> = {"бит": ["бит", "bits", "біт", "Bit", "bits"]};
const localeIndex: Record<string,number> = {ru:0,en:1,uk:2,de:3,es:4};
const dynamic: Record<string, readonly [string,Record<string,string>]> = {};
export const contextualField: CalculatorContextualField = (field, values, locale) => {
 const i = localeIndex[locale] ?? 1;
 const pair = dynamic[field.name];
 if (pair) { const key = values[pair[0]]; const unit = typeof key === 'string' && Object.hasOwn(pair[1],key) ? pair[1][key] : undefined; return {...field,unit}; }
 const unit = units[field.name as keyof typeof units];
 return unit ? {...field,unit:native[unit]?.[i] ?? unit} : field;
};
