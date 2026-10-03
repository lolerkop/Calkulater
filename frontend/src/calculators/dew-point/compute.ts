import type { CalcFunction } from '../../lib/types';
import { INPUT, RANGE, MODE, qty } from '../../lib/platform/measurementScalar';
import { read, mode, exact, add, negative, times, evaluated, sqrtRatio, finite } from '../../lib/platform/electronicsNumericInput';
/** Magnus pair a=17.27,b=237.7; input screen is not an accuracy guarantee. */
export const compute:CalcFunction=inputs=>{
 const t=read(inputs.t),rh=read(inputs.rh);
 const fail=(value:string)=>({primary:{label:'Точка росы',value:'—'},secondary:[{label:'Проверьте данные',value,accent:'red' as const}]});
 if(!finite(t,rh))return fail(INPUT);
 if(!(rh>0))return fail('Влажность должна быть больше нуля');
 if(rh>100)return fail('Влажность не может быть больше 100 %');
 if(t< -60||t>60)return fail('Температура вне диапазона от −60 до 60 °C');
 const log=rh===100?0:rh>50?Math.log1p((rh-100)/100):Math.log(rh)-Math.log(100);
 const gamma=log+17.27*t/(237.7+t),den=17.27-gamma;
 const spread=evaluated(times(exact(-(237.7+t)),exact(log)),exact(den));
 const dew=t-spread,f=evaluated(add(times(exact(dew),exact(9)),exact(160)),exact(5));
 if(!finite(dew,spread,f)||!(den>0))return fail(RANGE);
 const q=(n:number)=>`${qty(n)} °C`;
 return {primary:{label:'Точка росы',value:q(dew)},secondary:[{label:'Разрыв с температурой',value:q(spread)},
 {label:'Температура воздуха',value:q(t)},{label:'Относительная влажность',value:`${qty(rh)} %`},
 {label:'Точка росы в градусах Фаренгейта',value:`${qty(f)} °F`}]};
};
