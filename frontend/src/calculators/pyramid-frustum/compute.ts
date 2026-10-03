import type { CalcFunction } from '../../lib/types';
import { read, valid, dim, exact, add, times, number as rounded, ratio, INPUT, RANGE } from '../../lib/platform/geometryNumericInput';

// Similar, centred square bases; integrate [a+(b-a)z/h]^2 over the vertical height.
export const compute: CalcFunction = (inputs) => {
 const fail=(message:string)=>({primary:{label:'Объём',value:'—'},secondary:[{label:'Проверьте данные',value:message,accent:'red' as const}]});
 const a=read(inputs.a),b=read(inputs.b),h=read(inputs.h);if(![a,b,h].every(Number.isFinite))return fail(INPUT);
 if(!valid(a,b))return fail('Сторона основания должна быть больше нуля');if(!(h>0))return fail('Высота должна быть больше нуля');
 if(a===b)return fail('При равных основаниях это призма, а не усечённая пирамида');
 const s1=times(exact(a),exact(a)),s2=times(exact(b),exact(b));
 const volume=ratio(times(exact(h),add(s1,times(exact(a),exact(b)),s2)),exact(3));
 const apothem=Math.hypot(h,(a-b)/2);if(!valid(apothem))return fail(RANGE);
 const lateralDyadic=times(exact(2),add(exact(a),exact(b)),exact(apothem));
 const lateral=rounded(lateralDyadic),total=rounded(add(lateralDyadic,s1,s2)),area1=rounded(s1),area2=rounded(s2);
 if(!valid(volume,apothem,lateral,total,area1,area2))return fail(RANGE);
 return {primary:{label:'Объём',value:dim(volume)+' см³'},secondary:[{label:'Апофема',value:dim(apothem)+' см'},
 {label:'Боковая поверхность',value:dim(lateral)+' см²'},{label:'Полная поверхность',value:dim(total)+' см²'},
 {label:'Площади оснований',value:dim(area1)+' и '+dim(area2)},{label:'Единица площадей оснований',value:'см²'}]};
};
