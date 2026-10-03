import type { CalculatorValidator } from '../../lib/platform/types';
import { isIntegralNumberText } from '../../lib/format';
const messages:Record<string,string>={ru:'Введите целое число в допустимом диапазоне',en:'Enter a whole number within the allowed range',uk:'Введіть ціле число в допустимому діапазоні',de:'Geben Sie eine ganze Zahl im zulässigen Bereich ein',es:'Introduce un entero dentro del intervalo permitido'};
export const validate:CalculatorValidator=({values,locale,parseNumber})=>{
 const errors:Record<string,string>={};for(const key of ['people','nights']){const raw=values[key];if(typeof raw!=='number'&&typeof raw!=='string'){errors[key]=messages[locale]??messages.en;continue;}const n=typeof raw==='number'?raw:typeof raw==='string'?parseNumber(raw):null;
 if(n===null||!Number.isSafeInteger(n)||n<(key==='people'?1:0)||isIntegralNumberText(raw,locale)===false)errors[key]=messages[locale]??messages.en;}return errors;
};
