import type { CalculatorContextualField } from '../../lib/platform/types';
const index:Record<string,number>={ru:0,en:1,uk:2,de:3,es:4};
const units:Record<string,readonly string[]>={stock:['общая единица','same chosen unit','спільна одиниця','gleiche Einheit','misma unidad'],perDay:['общая единица/сутки','same unit/day','спільна одиниця/добу','gleiche Einheit/Tag','misma unidad/día'],reserveDays:['дней','days','днів','Tage','días']};
export const contextualField:CalculatorContextualField=(field,_values,locale)=>units[field.name]?{...field,unit:units[field.name][index[locale]??1]}:field;
