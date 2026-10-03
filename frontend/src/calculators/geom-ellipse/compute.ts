import type { CalcFunction } from '../../lib/types';
import { read, valid, unit as lengthUnit, dim, exact, add, times, negative, sqrt, product, INPUT, UNIT, RANGE } from '../../lib/platform/geometryNumericInput';

// Keep the first Ramanujan approximation; its model error is independent of display rounding.
export const compute: CalcFunction = (inputs) => {
 const fail=(message:string)=>({primary:{label:'Площадь',value:'—'},secondary:[{label:'Проверьте данные',value:message,accent:'red' as const}]});
 const u=lengthUnit(inputs.unit === undefined ? 'cm' : inputs.unit);if(!u)return fail(UNIT);
 const first=read(inputs.a),second=read(inputs.b);if(![first,second].every(Number.isFinite))return fail(INPUT);
 if(!valid(first,second))return fail('Обе полуоси должны быть больше нуля');
 const a=Math.max(first,second),b=Math.min(first,second),q=b/a;
 const area=product(Math.PI,a,b),perimeter=product(Math.PI,a,3*(1+q)-Math.sqrt((3+q)*(1+3*q)));
 const focusSquared=times(add(exact(a),negative(exact(b))),add(exact(a),exact(b)));
 const halfFocus=sqrt(focusSquared),focus=product(2,halfFocus),eccentricity=halfFocus/a;
 if(!valid(area,perimeter)||![focus,eccentricity].every(Number.isFinite)||(a!==b&&(focus===0||eccentricity===0)))return fail(RANGE);
 return {primary:{label:'Площадь',value:dim(area)+' '+u+'²'},secondary:[{label:'Периметр (Рамануджан)',value:dim(perimeter)+' '+u},
 {label:'Эксцентриситет',value:dim(eccentricity)},{label:'Расстояние между фокусами',value:dim(focus)+' '+u},
 {label:'Большая полуось',value:dim(a)+' '+u},{label:'Малая полуось',value:dim(b)+' '+u}]};
};
