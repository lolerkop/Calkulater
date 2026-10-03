import type { CalcFunction } from '../../lib/types';
import { INPUT, RANGE, MODE, qty } from '../../lib/platform/measurementScalar';
import { read, mode, exact, add, negative, times, evaluated, sqrtRatio, finite } from '../../lib/platform/electronicsNumericInput';
/** Ideal isolated-rotor mechanical extraction. Betz uses the exact ratio16/27. */
export const compute:CalcFunction=inputs=>{
 const d=read(inputs.d),v=read(inputs.v),cp=read(inputs.cp),rho=read(inputs.rho);
 const fail=(value:string)=>({primary:{label:'Снимаемая мощность',value:'—'},secondary:[{label:'Проверьте данные',value,accent:'red' as const}]});
 if(!finite(d,v,cp,rho))return fail(INPUT);
 if(!(d>0))return fail('Диаметр должен быть больше нуля');
 if(v<0)return fail('Скорость ветра не может быть отрицательной');
 if(!(rho>0))return fail('Плотность воздуха должна быть больше нуля');
 if(!(cp>0)||add(times(exact(cp),exact(27)),exact(-16)).coefficient>0n)return fail('Коэффициент использования должен быть больше нуля и не превышать 16/27');
 const a=times(exact(Math.PI),exact(d),exact(d)),flow=times(exact(rho),a,exact(v),exact(v),exact(v));
 const area=evaluated(a,exact(4)),kw=evaluated(flow,exact(8000)),useful=evaluated(times(flow,exact(cp)),exact(8000)),betz=evaluated(times(flow,exact(16)),exact(216000)),day=evaluated(times(flow,exact(cp),exact(24)),exact(8000));
 if(!finite(area,kw,useful,betz,day))return fail(RANGE);
 return {primary:{label:'Снимаемая мощность',value:`${qty(useful)} кВт`},secondary:[{label:'Мощность потока',value:`${qty(kw)} кВт`},
 {label:'Ометаемая площадь',value:`${qty(area)} м²`},{label:'Предел Бетца',value:`${qty(betz)} кВт`},{label:'Выработка за сутки',value:`${qty(day)} кВт·ч`}]};
};
