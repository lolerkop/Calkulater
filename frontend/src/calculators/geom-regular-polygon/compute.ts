import type { CalcFunction } from '../../lib/types';
import { isIntegralNumberText } from '../../lib/format';
import { read, valid, unit as lengthUnit, dim, exact, times, ratio, product, INPUT, UNIT, RANGE } from '../../lib/platform/geometryNumericInput';

export const compute: CalcFunction = (inputs) => {
 const fail=(message:string)=>({primary:{label:'Площадь',value:'—'},secondary:[{label:'Проверьте данные',value:message,accent:'red' as const}]});
 const u=lengthUnit(inputs.unit === undefined ? 'cm' : inputs.unit);if(!u)return fail(UNIT);
 const n=read(inputs.n),a=read(inputs.side);if(![n,a].every(Number.isFinite))return fail(INPUT);
 if(!Number.isSafeInteger(n)||isIntegralNumberText(inputs.n as string|number)!==true||n<3||n>1000)return fail('Число сторон должно быть целым от 3 до 1000');
 if(!(a>0))return fail('Длина стороны должна быть больше нуля');
 const tangent=n===4?1:Math.tan(Math.PI/n),area=ratio(times(exact(n),exact(a),exact(a)),times(exact(4),exact(tangent)));
 const apothem=ratio(exact(a),times(exact(2),exact(tangent))),perimeter=product(n,a),angle=(n-2)*180/n;
 if(!valid(area,apothem,perimeter,angle))return fail(RANGE);
 return {primary:{label:'Площадь',value:dim(area)+' '+u+'²'},secondary:[{label:'Периметр',value:dim(perimeter)+' '+u},
 {label:'Апофема',value:dim(apothem)+' '+u},{label:'Внутренний угол',value:dim(angle)+'°'}]};
};
