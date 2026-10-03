import type { CalcFunction } from '../../lib/types';
import { read, optional, finite, exact, times, add, negative, evaluated, scalar, INPUT, RANGE } from '../../lib/calculators/householdWave17Numeric';
const days=(x:number)=>{const s=scalar(x,1);return s.includes(',')&&!s.includes('·')?s.replace(/0+$/,'').replace(/,$/,''):s;};
export const compute: CalcFunction = inputs => {
 const stock=read(inputs.stock),perDay=read(inputs.perDay),reserve=optional(inputs.reserveDays);
 const fail=(value:string)=>({primary:{label:'Хватит на',value:'—'},secondary:[{label:'Проверьте данные',value,accent:'red' as const}]});
 if(!finite(stock,perDay,reserve))return fail(INPUT);if(stock<0)return fail('Запас не может быть отрицательным');if(perDay<=0)return fail('Расход в сутки должен быть больше нуля');if(reserve<0)return fail('Страховой запас не может быть отрицательным');
 const total=evaluated(exact(stock),exact(perDay));if(!finite(total))return fail(RANGE);
 const secondary=[{label:'Расход в сутки',value:days(perDay)}];
 if(reserve>0){const n=add(exact(stock),negative(times(exact(reserve),exact(perDay))));if(n.coefficient<0n)secondary.push({label:'Заказать через',value:'Страховой запас больше срока — заказывать нужно уже сейчас'});else{const order=evaluated(n,exact(perDay));if(!finite(order))return fail(RANGE);secondary.push({label:'Заказать через',value:`${days(order)} дней`});}}
 return {primary:{label:'Хватит на',value:`${days(total)} дней`},secondary};
};
