import type { CalcFunction } from '../../lib/types';
import { INPUT, RANGE, MODE, qty } from '../../lib/platform/measurementScalar';
import { read, mode, exact, add, negative, times, evaluated, sqrtRatio, finite } from '../../lib/platform/electronicsNumericInput';
/** Pressure-form steady Bernoulli energy along one incompressible, inviscid streamline. p is absolute. */
export const compute:CalcFunction=inputs=>{
 const p=read(inputs.p1),v1=read(inputs.v1),v2=read(inputs.v2),h1=read(inputs.h1),h2=read(inputs.h2),rho=read(inputs.rho);
 const fail=(value:string)=>({primary:{label:'Давление во втором сечении',value:'—'},secondary:[{label:'Проверьте данные',value,accent:'red' as const}]});
 if(!finite(p,v1,v2,h1,h2,rho))return fail(INPUT);
 if(!(rho>0))return fail('Плотность должна быть больше нуля');
 if(v1<0||v2<0)return fail('Скорость не может быть отрицательной');
 if(p<0)return fail('Давление в первом сечении не может быть отрицательным');
 const dyn1=times(exact(.5),exact(rho),exact(v1),exact(v1)),dyn2=times(exact(.5),exact(rho),exact(v2),exact(v2));
 // Standard g is exact decimal 980665/100000; retain this ratio until final pressure conversion.
 const elevation=times(exact(rho),exact(980665),add(exact(h1),negative(exact(h2))));
 const change=add(times(add(dyn1,negative(dyn2)),exact(100000)),elevation),p2=add(times(exact(p),exact(100000000)),change);
 if(p2.coefficient<0n)return fail('При таких данных давление во втором сечении отрицательно');
 const total=add(times(exact(p),exact(100000000)),times(dyn1,exact(100000)),times(exact(rho),exact(980665),exact(h1)));
 const values=[p2,change,times(dyn1,exact(100000)),times(dyn2,exact(100000)),total].map(n=>evaluated(n,exact(100000000)));
 if(!finite(...values))return fail(RANGE);
 const q=(n:number)=>`${qty(n)} кПа`;
 return {primary:{label:'Давление во втором сечении',value:q(values[0])},secondary:[
 {label:'Изменение давления',value:q(values[1])},{label:'Динамический напор в первом сечении',value:q(values[2])},
 {label:'Динамический напор во втором сечении',value:q(values[3])},{label:'Полный напор',value:q(values[4])}]};
};
