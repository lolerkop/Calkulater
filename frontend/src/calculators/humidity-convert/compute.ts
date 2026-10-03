import type { CalcFunction } from '../../lib/types';
import { INPUT, RANGE, MODE, qty } from '../../lib/platform/measurementScalar';
import { read, mode, exact, add, negative, times, evaluated, sqrtRatio, finite } from '../../lib/platform/electronicsNumericInput';
/** Grams per moist-air volume and per dry-air mass are distinct quantities. */
export const compute:CalcFunction=inputs=>{
 const t=read(inputs.t),rh=read(inputs.rh),p=read(inputs.pressure);
 const fail=(value:string)=>({primary:{label:'Абсолютная влажность',value:'—'},secondary:[{label:'Проверьте данные',value,accent:'red' as const}]});
 if(!finite(t,rh,p))return fail(INPUT);
 if(rh<0||rh>100)return fail('Относительная влажность задаётся от 0 до 100 процентов');
 if(!(p>0))return fail('Атмосферное давление должно быть больше нуля');
 if(!(t>-237.3))return fail('Для выбранной формулы Тетенса температура должна быть выше −237,3 °C');
 const k=t+273.15,es=6.1078*Math.pow(10,evaluated(times(exact(7.5),exact(t)),exact(t+237.3)));
 if(!(Number.isFinite(es)&&es>0))return fail(RANGE);
 const e=evaluated(times(exact(es),exact(rh)),exact(100));if(!finite(e))return fail(RANGE);
 if(e>=p)return fail('Давление пара не ниже атмосферного: проверьте температуру и давление');
 const absolute=evaluated(times(exact(216.7),exact(e)),exact(k)),mix=evaluated(times(exact(621.97),exact(e)),add(exact(p),negative(exact(e)))),maximum=evaluated(times(exact(216.7),exact(es)),exact(k));
 if(!finite(absolute,mix,maximum))return fail(RANGE);
 return {primary:{label:'Абсолютная влажность',value:`${qty(absolute)} г/м³`},secondary:[
 {label:'Давление пара',value:`${qty(e)} гПа`},{label:'Давление насыщения',value:`${qty(es)} гПа`},
 {label:'Влагосодержание',value:`${qty(mix)} г/кг`},{label:'Максимум при этой температуре',value:`${qty(maximum)} г/м³`}]};
};
