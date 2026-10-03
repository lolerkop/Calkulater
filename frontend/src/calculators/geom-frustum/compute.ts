import type { CalcFunction } from '../../lib/types';
import { read, valid, unit as lengthUnit, dim, exact, add, times, number as rounded, ratio, INPUT, UNIT, RANGE } from '../../lib/platform/geometryNumericInput';

// Coaxial circular bases of a right cone; R > r, including the cone limit r=0.
export const compute: CalcFunction = (inputs) => {
 const fail=(message:string)=>({primary:{label:'Объём',value:'—'},secondary:[{label:'Проверьте данные',value:message,accent:'red' as const}]});
 const u=lengthUnit(inputs.unit === undefined ? 'cm' : inputs.unit);if(!u)return fail(UNIT);
 const R=read(inputs.R),r=read(inputs.r),h=read(inputs.h);if(![R,r,h].every(Number.isFinite))return fail(INPUT);
 if(!(R>0&&r>=0&&r<R&&h>0))return fail('Требуются R > r ≥ 0 и положительная высота');
 const l=Math.hypot(h,R-r),squares=add(times(exact(R),exact(R)),times(exact(R),exact(r)),times(exact(r),exact(r)));
 const volume=ratio(times(exact(Math.PI),exact(h),squares),exact(3));
 if(!valid(l))return fail(RANGE);
 const lateralDyadic=times(exact(Math.PI),add(exact(R),exact(r)),exact(l));
 const lateral=rounded(lateralDyadic),total=rounded(add(lateralDyadic,times(exact(Math.PI),exact(R),exact(R)),times(exact(Math.PI),exact(r),exact(r))));
 if(!valid(volume,l,lateral,total))return fail(RANGE);
 return {primary:{label:'Объём',value:dim(volume)+' '+u+'³'},secondary:[{label:'Образующая',value:dim(l)+' '+u},
 {label:'Боковая поверхность',value:dim(lateral)+' '+u+'²'},{label:'Полная поверхность',value:dim(total)+' '+u+'²'}]};
};
