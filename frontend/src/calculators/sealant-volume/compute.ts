import type { CalcFunction } from '../../lib/types';
import { fmtNumber } from '../../lib/format';
import { INPUT, RANGE, finite, read, exact, times, mul, quotient, reserve, decimal, dproduct, reserveDecimal, ceilDecimal, measure } from '../rafters/buildingWave16Numeric';
// mm × mm × m = mL; rectangular section only.
export const compute:CalcFunction=inputs=>{
 const width=read(inputs.width),depth=read(inputs.depth),length=read(inputs.length),cart=read(inputs.cart),waste=read(inputs.waste);
 const fail=(value:string)=>({primary:{label:'Нужно герметика',value:'—'},secondary:[{label:'Проверьте данные',value,accent:'red' as const}]});
 if(!finite(width,depth,length,cart,waste))return fail(INPUT);
 if(!(width>0))return fail('Ширина шва должна быть больше нуля');
 if(!(depth>0))return fail('Глубина шва должна быть больше нуля');
 if(!(length>0))return fail('Длина шва должна быть больше нуля');
 if(!(cart>0))return fail('Объём картриджа должен быть больше нуля');
 if(waste<0)return fail('Запас не может быть отрицательным');
 const section=mul(width,depth),net=mul(width,depth,length),total=reserve(times(exact(width),exact(depth),exact(length)),waste),coverage=quotient([cart],[width,depth]);
 const carts=ceilDecimal(reserveDecimal(dproduct(width,depth,length),waste),decimal(cart));
 if(!finite(section,net,total,coverage,carts))return fail(RANGE);
 return {primary:{label:'Нужно герметика',value:`${measure(total)} мл`},secondary:[{label:'Без запаса',value:`${measure(net)} мл`},{label:'Картриджей',value:`${carts} шт`},{label:'Метров из одного картриджа',value:`${measure(coverage)} м`},{label:'Сечение шва',value:`${measure(section)} мм²`}]};
};
