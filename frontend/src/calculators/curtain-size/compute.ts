import type { CalcFunction } from '../../lib/types';
import { read, finite, exact, times, add, evaluated, decimal, dmul, ceiling, measure, INPUT, RANGE } from '../../lib/calculators/householdWave17Numeric';
export const compute: CalcFunction = inputs => {
 const w=read(inputs.windowWidth),f=read(inputs.fullness),fw=read(inputs.fabricWidth),h=read(inputs.height),hem=read(inputs.hem);
 const fail=(value:string)=>({primary:{label:'Ткани потребуется',value:'—'},secondary:[{label:'Проверьте данные',value,accent:'red' as const}]});
 if(!finite(w,f,fw,h,hem))return fail(INPUT);
 if(w<=0)return fail('Ширина карниза должна быть больше нуля');
 if(f<=0)return fail('Коэффициент сборки должен быть больше нуля');
 if(fw<=0)return fail('Ширина полотна должна быть больше нуля');
 if(h<=0)return fail('Готовая высота должна быть больше нуля');
 if(hem<0)return fail('Припуск не может быть отрицательным');
 const needed=evaluated(times(exact(w),exact(f))),panels=ceiling(dmul(decimal(w),decimal(f)),decimal(fw));
 if(!Number.isFinite(panels))return fail(RANGE);
 const cutD=add(exact(h),exact(hem)),cut=evaluated(cutD),fabric=evaluated(times(exact(panels),cutD),exact(100));
 if(!finite(needed,cut,fabric))return fail(RANGE);
 return {primary:{label:'Ткани потребуется',value:`${measure(fabric)} м`},secondary:[
 {label:'Полотнищ',value:`${measure(panels)} шт`},{label:'Ширина ткани до сборки',value:`${measure(needed)} см`},
 {label:'Длина отреза',value:`${measure(cut)} см`},{label:'Коэффициент сборки',value:measure(f)}]};
};
