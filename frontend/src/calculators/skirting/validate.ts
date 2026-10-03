import { isIntegralNumberText } from '../../lib/format';
import type { CalculatorValidator } from '../../lib/platform/types';
import { buildingWave16Messages } from '../rafters/buildingWave16Messages';
export const validate:CalculatorValidator=({values,locale,parseNumber}):Record<string,string>=>{
 const raw=values.doors;
 if(typeof raw!=='number'&&typeof raw!=='string')return {};
 const n=typeof raw==='number'?(Number.isFinite(raw)?raw:null):parseNumber(raw);
 if(n===null||(Number.isSafeInteger(n)&&isIntegralNumberText(raw,locale)!==false))return {};
 const key='Введите целые числа в допустимом диапазоне';
 return {doors:locale==='ru'?key:buildingWave16Messages[locale as keyof typeof buildingWave16Messages]?.[key]??buildingWave16Messages.en[key]};
};
