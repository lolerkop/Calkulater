import type { CalculatorContextualField } from '../../lib/platform/types';
const index:Record<string,number>={ru:0,en:1,uk:2,de:3,es:4};
const units:Record<string,readonly string[]>={kwhPrice:['₽/кВт·ч','$/kWh','₴/кВт·год','€/kWh','€/kWh'],wearPerHour:['₽/ч','$/h','₴/год','€/h','€/h']};
export const contextualField:CalculatorContextualField=(field,_values,locale)=>units[field.name]?{...field,unit:units[field.name][index[locale]??1]}:field;
