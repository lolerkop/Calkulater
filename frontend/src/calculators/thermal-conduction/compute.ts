import type { CalcFunction } from '../../lib/types';
import { INPUT, RANGE, qty } from '../../lib/platform/measurementScalar';
import { read, exact, times, evaluated, finite } from '../../lib/platform/electronicsNumericInput';
/** Steady 1D plane-layer conduction. Signed ΔT defines the chosen positive flow direction. */
export const compute:CalcFunction=inputs=>{
 const area=read(inputs.area),thickness=read(inputs.thickness),k=read(inputs.k),dt=read(inputs.dt);
 const fail=(value:string)=>({primary:{label:'Тепловой поток',value:'—'},secondary:[{label:'Проверьте данные',value,accent:'red' as const}]});
 if(!finite(area,thickness,k,dt))return fail(INPUT);
 if(!(area>0))return fail('Площадь должна быть больше нуля');
 if(!(thickness>0))return fail('Толщина слоя должна быть больше нуля');
 if(!(k>0))return fail('Теплопроводность должна быть больше нуля');
 const numerator=times(exact(k),exact(dt)),denominator=exact(thickness),powerNumerator=times(numerator,exact(area));
 const resistance=evaluated(exact(thickness),exact(k)),coefficient=evaluated(exact(k),denominator),flux=evaluated(numerator,denominator),power=evaluated(powerNumerator,denominator),dayEnergy=evaluated(times(powerNumerator,exact(24)),times(denominator,exact(1000)));
 if(!finite(resistance,coefficient,flux,power,dayEnergy))return fail(RANGE);
 const q=(n:number,unit:string)=>`${qty(n)} ${unit}`;
 return {primary:{label:'Тепловой поток',value:q(power,'Вт')},secondary:[
  {label:'Плотность потока',value:q(flux,'Вт/м²')},{label:'Сопротивление слоя',value:q(resistance,'м²·К/Вт')},
  {label:'Коэффициент теплопередачи',value:q(coefficient,'Вт/(м²·К)')},{label:'За сутки',value:q(dayEnergy,'кВт·ч')},
 ]};
};
