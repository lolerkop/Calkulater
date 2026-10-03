import { isIntegralNumberText } from '../../lib/format';
import type { CalculatorValidator } from '../../lib/platform/types';
const message:Record<string,string>={ru:'Число витков должно быть положительным безопасным целым',en:'Turn counts must be positive safe integers',uk:'Кількість витків має бути додатним безпечним цілим числом',de:'Windungszahlen müssen positive sichere Ganzzahlen sein',es:'Las espiras deben ser enteros positivos seguros'};
export const validate:CalculatorValidator=({values,locale,parseNumber})=>{
 if(values.mode==='turnsRatio')return {};
 const errors:Record<string,string>={};
 for(const name of ['n1','n2']){const raw=values[name];if(typeof raw!=='number'&&typeof raw!=='string')continue;const n=typeof raw==='number'?raw:parseNumber(raw);if(n!==null&&(!Number.isSafeInteger(n)||n<=0||isIntegralNumberText(raw,locale)===false))errors[name]=message[locale]??message.en;}
 return errors;
};
