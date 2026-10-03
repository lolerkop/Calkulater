import { isIntegralNumberText } from '../../lib/format';
import type { CalculatorValidator } from '../../lib/platform/types';
import { buildingWave13Messages } from './buildingWave13Messages';
export function integerValidator(fields: readonly string[], active?: (field:string,values:Record<string,unknown>)=>boolean): CalculatorValidator {
  return ({values,locale,parseNumber}):Record<string,string> => {
    const errors:Record<string,string>={};
    for(const field of fields) {
      if(active && !active(field,values)) continue;
      const raw=values[field];
      if(typeof raw !== 'number' && typeof raw !== 'string') continue;
      const n=typeof raw==='number' ? (Number.isFinite(raw)?raw:null) : parseNumber(raw);
      if(n===null || (Number.isSafeInteger(n) && isIntegralNumberText(raw,locale)!==false)) continue;
      const key='Введите целые числа в допустимом диапазоне';
      errors[field]=locale==='ru'?key:buildingWave13Messages[locale as keyof typeof buildingWave13Messages]?.[key]??buildingWave13Messages.en[key];
    }
    return errors;
  };
}
