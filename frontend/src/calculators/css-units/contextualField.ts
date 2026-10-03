import type { CalculatorContextualField } from '../../lib/platform/types';
const units = {"value": "px", "rootSize": "px", "parentSize": "px"};
const native: Record<string, readonly string[]> = {};
const localeIndex: Record<string,number> = {ru:0,en:1,uk:2,de:3,es:4};
const dynamic: Record<string, readonly [string,Record<string,string>]> = {"value": ["fromUnit", {"px": "px", "rem": "rem", "em": "em", "pt": "pt", "pc": "pc", "in": "in", "cm": "cm", "mm": "mm"}]};
export const contextualField: CalculatorContextualField = (field, values, locale) => {
 const i = localeIndex[locale] ?? 1;
 const pair = dynamic[field.name];
 if (pair) { const key = values[pair[0]]; const unit = typeof key === 'string' && Object.hasOwn(pair[1],key) ? pair[1][key] : undefined; return {...field,unit}; }
 const unit = units[field.name as keyof typeof units];
 return unit ? {...field,unit:native[unit]?.[i] ?? unit} : field;
};
