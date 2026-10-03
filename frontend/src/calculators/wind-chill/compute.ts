import type { CalcFunction } from '../../lib/types';
import { INPUT, RANGE, MODE, qty } from '../../lib/platform/measurementScalar';
import { read, mode, exact, add, negative, times, evaluated, sqrtRatio, finite } from '../../lib/platform/electronicsNumericInput';
/** Rounded metric wind-chill equation; inherited product screen 10C/4.8kmh. */
export const compute:CalcFunction=inputs=>{
 const t=read(inputs.t),v=read(inputs.v);
 const fail=(value:string)=>({primary:{label:'Ощущаемая температура',value:'—'},secondary:[{label:'Проверьте данные',value,accent:'red' as const}]});
 if(!finite(t,v))return fail(INPUT);
 if(!(t>-273.15))return fail('Температура должна быть выше абсолютного нуля');
 if(t>10)return fail('Формула работает при температуре не выше 10 °C');
 if(v<4.8)return fail('Формула работает при ветре не слабее 4,8 км/ч');
 const p=Math.pow(v,.16),chill=evaluated(add(exact(13.12),times(exact(.6215),exact(t)),times(add(exact(-11.37),times(exact(.3965),exact(t))),exact(p))));
 const delta=chill-t,f=evaluated(add(times(exact(chill),exact(9)),exact(160)),exact(5));if(!finite(chill,delta,f))return fail(RANGE);
 return {primary:{label:'Ощущаемая температура',value:`${qty(chill)} °C`},secondary:[
 {label:'Разница с термометром',value:`${qty(delta)} °C`},{label:'Температура воздуха',value:`${qty(t)} °C`},
 {label:'Скорость ветра',value:`${qty(v)} км/ч`},{label:'Ощущаемая в градусах Фаренгейта',value:`${qty(f)} °F`}]};
};
