import type { CalcFunction } from '../../lib/types';
import { fmtNumber } from '../../lib/format';
import { INPUT, RANGE, finite, read, exact, times, evaluated, mul, reserve, reserveOnly, measure } from '../rafters/buildingWave16Numeric';
// Equivalent non-overlapping length of a constant rectangular section.
export const compute:CalcFunction=inputs=>{
 const length=read(inputs.perimeter),width=read(inputs.width),depth=read(inputs.depth),waste=read(inputs.waste);
 const fail=(value:string)=>({primary:{label:'Объём бетона',value:'—'},secondary:[{label:'Проверьте данные',value,accent:'red' as const}]});
 if(!finite(length,width,depth,waste))return fail(INPUT);
 if(!(length>0))return fail('Длина ленты должна быть больше нуля');
 if(!(width>0))return fail('Ширина ленты должна быть больше нуля');
 if(!(depth>0))return fail('Глубина ленты должна быть больше нуля');
 if(waste<0)return fail('Запас не может быть отрицательным');
 if(waste>50)return fail('Запас больше 50 % не рассчитывается');
 const v=times(exact(length),exact(width),exact(depth)),clean=evaluated(v),total=reserve(v,waste),extra=reserveOnly(v,waste),section=mul(width,depth);
 if(!finite(clean,total,extra,section))return fail(RANGE);
 const m3=(x:number)=>`${measure(x)} м³`;
 return {primary:{label:'Объём бетона',value:m3(total)},secondary:[{label:'Чистый объём',value:m3(clean)},...(waste>0?[{label:'Запас',value:m3(extra)}]:[]),{label:'Площадь сечения ленты',value:`${measure(section)} м²`}]};
};
