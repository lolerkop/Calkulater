import type { CalcFunction } from '../../lib/types';
import { INPUT, RANGE, qty } from '../../lib/platform/measurementScalar';
import { read, exact, times, evaluated, finite, sqrtRatio } from '../../lib/platform/electronicsNumericInput';
const G=6.6743e-11;
/** Circular Newtonian test-mass orbit; r is centre distance, not altitude. */
export const compute:CalcFunction=inputs=>{
 const mass24=read(inputs.mass24),radiusKm=read(inputs.radiusKm);
 const fail=(value:string)=>({primary:{label:'Период обращения',value:'—'},secondary:[{label:'Проверьте данные',value,accent:'red' as const}]});
 if(!finite(mass24,radiusKm))return fail(INPUT);
 if(!(mass24>0))return fail('Масса центрального тела должна быть больше нуля');
 if(!(radiusKm>0))return fail('Радиус орбиты должен быть больше нуля');
 const gm=times(exact(G),exact(mass24),exact(1e24)),r=times(exact(radiusKm),exact(1000));
 const period=sqrtRatio(times(exact(2),exact(Math.PI),exact(2),exact(Math.PI),r,r,r),gm),speed=sqrtRatio(gm,r);
 if(!finite(period,speed)||period<=0||speed<=0)return fail(RANGE);
 const hours=evaluated(exact(period),exact(3600)),orbits=evaluated(exact(86400),exact(period));
 if(!finite(hours,orbits))return fail(RANGE);
 return {primary:{label:'Период обращения',value:`${qty(period)} с`},secondary:[
  {label:'В часах',value:`${qty(hours)} ч`},{label:'Орбитальная скорость',value:`${qty(speed)} м/с`},
  {label:'Оборотов в сутки',value:qty(orbits)},{label:'Радиус орбиты',value:`${qty(radiusKm)} км`},
 ]};
};
