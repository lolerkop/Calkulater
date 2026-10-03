import type { CalcFunction } from '../../lib/types';
import { read, valid, unit as lengthUnit, dim, exact, add, times, number as rounded, product, INPUT, UNIT, RANGE } from '../../lib/platform/geometryNumericInput';

export const compute: CalcFunction = (inputs) => {
 const fail=(message:string)=>({primary:{label:'Объём',value:'—'},secondary:[{label:'Проверьте данные',value:message,accent:'red' as const}]});
 const u=lengthUnit(inputs.unit === undefined ? 'cm' : inputs.unit);if(!u)return fail(UNIT);
 const r=read(inputs.r),h=read(inputs.h);if(![r,h].every(Number.isFinite))return fail(INPUT);
 if(!valid(r,h))return fail('Радиус и высота должны быть больше нуля');
 const base=product(Math.PI,r,r),volume=product(Math.PI,r,r,h),lateral=product(2,Math.PI,r,h);
 const total=rounded(times(exact(2),exact(Math.PI),exact(r),add(exact(r),exact(h))));
 if(!valid(base,volume,lateral,total))return fail(RANGE);
 return {primary:{label:'Объём',value:dim(volume)+' '+u+'³'},secondary:[{label:'Боковая поверхность',value:dim(lateral)+' '+u+'²'},
 {label:'Полная поверхность',value:dim(total)+' '+u+'²'},{label:'Площадь основания',value:dim(base)+' '+u+'²'}]};
};
