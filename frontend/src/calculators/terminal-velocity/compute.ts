import type { CalcFunction } from '../../lib/types';
import { INPUT, RANGE, MODE, qty } from '../../lib/platform/measurementScalar';
import { read, mode, exact, add, negative, times, evaluated, sqrtRatio, finite } from '../../lib/platform/electronicsNumericInput';
/** Constant quadratic drag and g, release from rest, no buoyancy. The 95% rows are finite fractions of an asymptotic speed. */
export const compute:CalcFunction=inputs=>{
 const m=read(inputs.m),a=read(inputs.a),cd=read(inputs.cd),rho=read(inputs.rho);
 const fail=(value:string)=>({primary:{label:'Предельная скорость',value:'—'},secondary:[{label:'Проверьте данные',value,accent:'red' as const}]});
 if(!finite(m,a,cd,rho))return fail(INPUT);
 if(!(m>0))return fail('Масса должна быть больше нуля');
 if(!(a>0))return fail('Площадь должна быть больше нуля');
 if(!(cd>0))return fail('Коэффициент сопротивления должен быть больше нуля');
 if(!(rho>0))return fail('Плотность воздуха должна быть больше нуля');
 const g=exact(9.80665),den=times(exact(rho),exact(a),exact(cd)),speed=sqrtRatio(times(exact(2),exact(m),g),den);
 if(!finite(speed)||!(speed>0))return fail(RANGE);
 const alpha=Math.atanh(.95),kmh=evaluated(times(exact(speed),exact(3.6))),force=evaluated(times(exact(m),g)),time=evaluated(times(exact(speed),exact(alpha)),g),distance=evaluated(times(exact(2),exact(m),exact(Math.log(Math.cosh(alpha)))),den);
 if(!finite(kmh,force,time,distance))return fail(RANGE);
 const q=(n:number,u:string)=>`${qty(n)} ${u}`;
 return {primary:{label:'Предельная скорость',value:q(speed,'м/с')},secondary:[{label:'В километрах в час',value:q(kmh,'км/ч')},{label:'Сила сопротивления при этой скорости',value:q(force,'Н')},{label:'Время разгона до 95 процентов',value:q(time,'с')},{label:'Путь до 95 процентов',value:q(distance,'м')}]};
};
