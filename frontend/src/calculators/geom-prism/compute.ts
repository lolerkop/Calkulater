import type { CalcFunction } from '../../lib/types';
import { isIntegralNumberText } from '../../lib/format';
import { read, valid, unit as lengthUnit, dim, exact, times, ratio, product, sum, INPUT, UNIT, RANGE } from '../../lib/platform/geometryNumericInput';

export const compute: CalcFunction = (inputs) => {
 const fail=(message:string)=>({primary:{label:'Объём',value:'—'},secondary:[{label:'Проверьте данные',value:message,accent:'red' as const}]});
 const u=lengthUnit(inputs.unit === undefined ? 'cm' : inputs.unit);if(!u)return fail(UNIT);
 const n=read(inputs.sides),a=read(inputs.side),h=read(inputs.height);if(![n,a,h].every(Number.isFinite))return fail(INPUT);
 if(!Number.isSafeInteger(n)||isIntegralNumberText(inputs.sides as string|number)!==true||n<3||n>100)return fail('Число сторон основания должно быть целым от 3 до 100');
 if(!valid(a,h))return fail('Сторона и высота должны быть больше нуля');
 const tangent=n===4?1:Math.tan(Math.PI/n),apothem=ratio(exact(a),times(exact(2),exact(tangent)));
 const base=ratio(times(exact(n),exact(a),exact(a)),times(exact(4),exact(tangent)));
 const volume=ratio(times(exact(n),exact(a),exact(a),exact(h)),times(exact(4),exact(tangent)));
 const perimeter=product(n,a),lateral=product(n,a,h),total=sum(product(2,base),lateral);
 if(!valid(apothem,base,volume,perimeter,lateral,total))return fail(RANGE);
 return {primary:{label:'Объём',value:dim(volume)+' '+u+'³'},secondary:[{label:'Площадь основания',value:dim(base)+' '+u+'²'},
 {label:'Боковая поверхность',value:dim(lateral)+' '+u+'²'},{label:'Полная поверхность',value:dim(total)+' '+u+'²'},
 {label:'Периметр основания',value:dim(perimeter)+' '+u}]};
};
