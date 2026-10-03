import type { CalcFunction } from '../../lib/types';
import { fmtNumber } from '../../lib/format';
import { INPUT, RANGE, finite, read, exact, add, times, evaluated, mul, reserve, reserveOnly, decimal, floorDecimal, measure } from '../rafters/buildingWave16Numeric';
// Two assumed mesh layers; no cover, laps, anchorage or automatic far-edge extra bar.
const STEEL_DENSITY=7850;
export const compute:CalcFunction=inputs=>{
 const length=read(inputs.length),width=read(inputs.width),thickness=read(inputs.thickness),step=read(inputs.meshStep),diameter=read(inputs.rebarDiameter),waste=read(inputs.waste);
 const fail=(value:string)=>({primary:{label:'Объём бетона',value:'—'},secondary:[{label:'Проверьте данные',value,accent:'red' as const}]});
 if(!finite(length,width,thickness,step,diameter,waste))return fail(INPUT);
 if(!(length>0)||!(width>0)||!(thickness>0))return fail('Размеры плиты должны быть больше нуля');
 if(!(step>0))return fail('Шаг сетки должен быть больше нуля');
 if(!(diameter>0))return fail('Диаметр арматуры должен быть больше нуля');
 if(waste<0||waste>50)return fail('Запас должен быть от 0 до 50 %');
 const nL=floorDecimal(decimal(width),decimal(step))+1,nW=floorDecimal(decimal(length),decimal(step))+1,count=2*(nL+nW);
 if(!Number.isSafeInteger(nL)||!Number.isSafeInteger(nW)||!Number.isSafeInteger(count))return fail(RANGE);
 const v=times(exact(length),exact(width),exact(thickness));
 const area=mul(length,width),net=evaluated(v),total=reserve(v,waste),extra=reserveOnly(v,waste);
 const steel=times(exact(2),add(times(exact(nL),exact(length)),times(exact(nW),exact(width))));
 const rebarLength=evaluated(steel),mass=evaluated(times(steel,exact(Math.PI),exact(diameter),exact(diameter),exact(STEEL_DENSITY)),exact(4e6));
 if(!finite(area,net,total,extra,rebarLength,mass))return fail(RANGE);
 return {primary:{label:'Объём бетона',value:`${measure(total)} м³`},secondary:[{label:'Площадь плиты',value:`${measure(area)} м²`},{label:'Чистый объём',value:`${measure(net)} м³`},{label:'Запас',value:`${measure(extra)} м³`},{label:'Длина арматуры',value:`${measure(rebarLength)} м`},{label:'Вес арматуры',value:`${measure(mass)} кг`},{label:'Прутков',value:fmtNumber(count,0)}]};
};
