import type { CalculatorContextualField } from '../../lib/platform/types';
const units: Record<string,string> = {"r": "Ом", "c": "нФ"};
const native: Record<string,readonly string[]> = {"мм": ["мм", "mm", "мм", "mm", "mm"], "Вт": ["Вт", "W", "Вт", "W", "W"], "В": ["В", "V", "В", "V", "V"], "Ом": ["Ом", "Ω", "Ом", "Ω", "Ω"], "мкГн": ["мкГн", "µH", "мкГн", "µH", "µH"], "нФ": ["нФ", "nF", "нФ", "nF", "nF"], "кОм": ["кОм", "kΩ", "кОм", "kΩ", "kΩ"], "А": ["А", "A", "А", "A", "A"], "мА": ["мА", "mA", "мА", "mA", "mA"], "дБ": ["дБ", "dB", "дБ", "dB", "dB"], "мВт": ["мВт", "mW", "мВт", "mW", "mW"], "витков": ["витков", "turns", "витків", "Windungen", "espiras"]};
const help: Record<string,readonly string[]> = {};
const index: Record<string,number> = {ru:0,en:1,uk:2,de:3,es:4};
export const contextualField: CalculatorContextualField = (field,values,locale) => {
 const i=index[locale]??1; let unit=units[field.name];
 return {...field, ...(unit?{unit:native[unit]?.[i]??unit}:field.name==='current'?{unit:undefined}:{}), ...(help[field.name]?{help:help[field.name][i]}:{})};
};
