import type { CalculatorContextualField } from '../../lib/platform/types';
const units = {"size": "ГБ", "speed": "Мбит/с"};
const native: Record<string, readonly string[]> = {"ГБ": ["ГБ", "GB", "ГБ", "GB", "GB"], "Мбит/с": ["Мбит/с", "Mbit/s", "Мбіт/с", "Mbit/s", "Mbit/s"]};
const localeIndex: Record<string,number> = {ru:0,en:1,uk:2,de:3,es:4};
const dynamic: Record<string, readonly [string,Record<string,string>]> = {"size": ["sizeUnit", {"kb": "KB", "mb": "MB", "gb": "GB", "tb": "TB", "kib": "KiB", "mib": "MiB", "gib": "GiB", "tib": "TiB"}], "speed": ["speedUnit", {"kbit": "kbit/s", "mbit": "Mbit/s", "gbit": "Gbit/s", "mbyte": "MB/s"}]};
export const contextualField: CalculatorContextualField = (field, values, locale) => {
 const i = localeIndex[locale] ?? 1;
 const pair = dynamic[field.name];
 if (pair) { const key = values[pair[0]]; const unit = typeof key === 'string' && Object.hasOwn(pair[1],key) ? pair[1][key] : undefined; return {...field,unit}; }
 const unit = units[field.name as keyof typeof units];
 return unit ? {...field,unit:native[unit]?.[i] ?? unit} : field;
};
