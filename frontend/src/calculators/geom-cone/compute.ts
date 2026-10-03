import type { CalcFunction } from '../../lib/types';
import { read, valid, unit as lengthUnit, dim, exact, add, times, number as rounded, ratio, product, INPUT, UNIT, RANGE } from '../../lib/platform/geometryNumericInput';

// Right circular cone: vertical height and radius meet at the base centre.
export const compute: CalcFunction = (inputs) => {
 const fail=(message:string)=>({primary:{label:'Объём',value:'—'},secondary:[{label:'Проверьте данные',value:message,accent:'red' as const}]});
 const u=lengthUnit(inputs.unit === undefined ? 'cm' : inputs.unit);if(!u)return fail(UNIT);
 const r=read(inputs.r),h=read(inputs.h);if(![r,h].every(Number.isFinite))return fail(INPUT);
 if(!valid(r,h))return fail('Радиус и высота должны быть больше нуля');
 const l=Math.hypot(r,h),volume=ratio(times(exact(Math.PI),exact(r),exact(r),exact(h)),exact(3));
 if(!valid(l))return fail(RANGE);
 const lateral=product(Math.PI,r,l),total=rounded(times(exact(Math.PI),exact(r),add(exact(r),exact(l))));
 if(!valid(l,volume,lateral,total))return fail(RANGE);
 return {primary:{label:'Объём',value:dim(volume)+' '+u+'³'},secondary:[{label:'Образующая',value:dim(l)+' '+u},
 {label:'Боковая поверхность',value:dim(lateral)+' '+u+'²'},{label:'Полная поверхность',value:dim(total)+' '+u+'²'}]};
};
