import type { CalcFunction } from '../../lib/types';
import { read, finite, exact, times, add, evaluated, measure, INPUT, RANGE } from '../../lib/calculators/householdWave17Numeric';
export const compute: CalcFunction = inputs => {
 const w=read(inputs.photoWidth),h=read(inputs.photoHeight),b=read(inputs.border),e=read(inputs.bottomExtra);
 const fail=(value:string)=>({primary:{label:'Внешний размер паспарту',value:'—'},secondary:[{label:'Проверьте данные',value,accent:'red' as const}]});
 if(!finite(w,h,b,e))return fail(INPUT);
 if(w<=0)return fail('Ширина видимого окна должна быть больше нуля');
 if(h<=0)return fail('Высота видимого окна должна быть больше нуля');
 if(b<=0)return fail('Поле паспарту должно быть больше нуля');
 if(e<0)return fail('Утяжеление нижнего поля не может быть отрицательным');
 const widthD=add(exact(w),times(exact(2),exact(b))),heightD=add(exact(h),times(exact(2),exact(b)),exact(e));
 // Expanded border area avoids subtracting two almost equal rectangles.
 const areaD=add(times(exact(2),exact(b),add(exact(w),exact(h))),times(exact(4),exact(b),exact(b)),times(exact(e),widthD));
 const width=evaluated(widthD),height=evaluated(heightD),bottom=evaluated(add(exact(b),exact(e))),area=evaluated(areaD),aspect=evaluated(widthD,heightD);
 if(!finite(width,height,bottom,area,aspect))return fail(RANGE);
 return {primary:{label:'Внешний размер паспарту',value:`${measure(width)}×${measure(height)} см`},secondary:[
 {label:'Нижнее поле',value:`${measure(bottom)} см`},{label:'Верх и бока',value:`${measure(b)} см`},
 {label:'Площадь паспарту',value:`${measure(area)} см²`},{label:'Соотношение сторон паспарту',value:measure(aspect)}]};
};
