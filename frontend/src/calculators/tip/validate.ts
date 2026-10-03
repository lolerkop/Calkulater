import type { CalculatorValidator } from '../../lib/platform/types';
import { isIntegralNumberText } from '../../lib/format';
const messages:Record<string,string>={ru:'Введите целое число в допустимом диапазоне',en:'Enter a whole number within the allowed range',uk:'Введіть ціле число в допустимому діапазоні',de:'Geben Sie eine ganze Zahl im zulässigen Bereich ein',es:'Introduce un entero dentro del intervalo permitido'};
export const validate:CalculatorValidator=({values,locale,parseNumber}):Record<string,string>=>{
 const raw=values.people;if(typeof raw!=='number'&&typeof raw!=='string')return {people:messages[locale]??messages.en};const n=typeof raw==='number'?raw:typeof raw==='string'?parseNumber(raw):null;
 return n!==null&&Number.isSafeInteger(n)&&n>=1&&isIntegralNumberText(raw,locale)!==false?{}:{people:messages[locale]??messages.en};
};
