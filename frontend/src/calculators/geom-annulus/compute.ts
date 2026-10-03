import type { CalcFunction } from '../../lib/types';
import { read, valid, unit as lengthUnit, dim, exact, add, times, scale, negative, number as rounded, product, INPUT, UNIT, RANGE } from '../../lib/platform/geometryNumericInput';

export const compute: CalcFunction = (inputs) => {
 const fail=(message:string)=>({primary:{label:'Площадь',value:'—'},secondary:[{label:'Проверьте данные',value:message,accent:'red' as const}]});
 const u=lengthUnit(inputs.unit === undefined ? 'cm' : inputs.unit); if(!u)return fail(UNIT);
 const R=read(inputs.R),r=read(inputs.r);if(![R,r].every(Number.isFinite))return fail(INPUT);
 if(!(R>0&&r>=0&&r<R))return fail('Внешний радиус должен быть положительным, внутренний — от нуля до внешнего');
 const difference=add(exact(R),negative(exact(r))), total=add(exact(R),exact(r));
 const area=rounded(times(exact(Math.PI),difference,total)),width=rounded(difference),outer=product(2,Math.PI,R),inner=product(2,Math.PI,r),mean=rounded(scale(total,-1));
 if(!valid(area,width,outer,mean)||!Number.isFinite(inner)||(r>0&&inner===0))return fail(RANGE);
 return {primary:{label:'Площадь',value:dim(area)+' '+u+'²'},secondary:[
 {label:'Ширина кольца',value:dim(width)+' '+u},{label:'Внешняя окружность',value:dim(outer)+' '+u},
 {label:'Внутренняя окружность',value:dim(inner)+' '+u},{label:'Средний радиус',value:dim(mean)+' '+u}]};
};
