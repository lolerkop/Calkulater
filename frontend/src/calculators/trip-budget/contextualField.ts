import type { CalculatorContextualField } from '../../lib/platform/types';
const index:Record<string,number>={ru:0,en:1,uk:2,de:3,es:4};
const units:Record<string,readonly string[]>={nights:['ночей','nights','ночей','Nächte','noches'],days:['дней','days','днів','Tage','días'],people:['чел.','people','осіб','Personen','personas'],hotelPerNight:['₽/ночь','$/night','₴/ніч','€/Nacht','€/noche'],foodPerDayPerPerson:['₽/(чел.·день)','$/person/day','₴/особу/день','€/Person/Tag','€/persona/día']};
export const contextualField:CalculatorContextualField=(field,_values,locale)=>units[field.name]?{...field,unit:units[field.name][index[locale]??1]}:field;
