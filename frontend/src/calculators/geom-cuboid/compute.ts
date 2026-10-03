import type { CalcFunction } from '../../lib/types';
import { read, valid, unit as lengthUnit, dim, exact, add, times, scale, number as rounded, product, INPUT, UNIT, RANGE } from '../../lib/platform/geometryNumericInput';

export const compute: CalcFunction = (inputs) => {
 const fail=(message:string)=>({primary:{label:'Объём',value:'—'},secondary:[{label:'Проверьте данные',value:message,accent:'red' as const}]});
 const u=lengthUnit(inputs.unit === undefined ? 'cm' : inputs.unit);if(!u)return fail(UNIT);
 const a=read(inputs.a),b=read(inputs.b),c=read(inputs.c);if(![a,b,c].every(Number.isFinite))return fail(INPUT);
 if(!valid(a,b,c))return fail('Все рёбра должны быть больше нуля');
 const volume=product(a,b,c),area=rounded(scale(add(times(exact(a),exact(b)),times(exact(a),exact(c)),times(exact(b),exact(c))),1));
 const diagonal=Math.hypot(a,b,c),edges=rounded(scale(add(exact(a),exact(b),exact(c)),2));
 if(!valid(volume,area,diagonal,edges))return fail(RANGE);
 return {primary:{label:'Объём',value:dim(volume)+' '+u+'³'},secondary:[{label:'Площадь поверхности',value:dim(area)+' '+u+'²'},
 {label:'Диагональ',value:dim(diagonal)+' '+u},{label:'Сумма длин рёбер',value:dim(edges)+' '+u}]};
};
