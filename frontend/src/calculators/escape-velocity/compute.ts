import type { CalcFunction } from '../../lib/types';
import { INPUT, RANGE, qty } from '../../lib/platform/measurementScalar';
import { read, exact, times, evaluated, finite, sqrtRatio } from '../../lib/platform/electronicsNumericInput';
const G = 6.6743e-11;
/** Exterior Newtonian point/spherical source and a negligible test mass. */
export const compute: CalcFunction = inputs => {
 const mass24=read(inputs.mass24),radiusKm=read(inputs.radiusKm);
 const fail=(value:string)=>({primary:{label:'Вторая космическая скорость',value:'—'},secondary:[{label:'Проверьте данные',value,accent:'red' as const}]});
 if(!finite(mass24,radiusKm))return fail(INPUT);
 if(!(mass24>0))return fail('Масса должна быть больше нуля');
 if(!(radiusKm>0))return fail('Радиус должен быть больше нуля');
 const gm=times(exact(G),exact(mass24),exact(1e24)),r=times(exact(radiusKm),exact(1000));
 const escape=sqrtRatio(times(exact(2),gm),r),orbital=sqrtRatio(gm,r),acceleration=evaluated(gm,times(r,r));
 if(!finite(escape,orbital,acceleration)||escape<=0||orbital<=0)return fail(RANGE);
 const kmh=evaluated(times(exact(escape),exact(3.6)));
 if(!finite(kmh))return fail(RANGE);
 return {primary:{label:'Вторая космическая скорость',value:`${qty(escape)} м/с`},secondary:[
  {label:'Первая космическая скорость',value:`${qty(orbital)} м/с`},{label:'В километрах в час',value:`${qty(kmh)} км/ч`},
  {label:'Ускорение свободного падения',value:`${qty(acceleration)} м/с²`},{label:'Масса тела',value:`${qty(mass24)}·10²⁴ кг`},
 ]};
};
