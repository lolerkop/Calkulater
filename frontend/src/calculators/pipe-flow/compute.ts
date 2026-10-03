import type { CalcFunction } from '../../lib/types';
import { INPUT, RANGE, qty } from '../../lib/platform/measurementScalar';
import { read, exact, times, evaluated, finite } from '../../lib/platform/electronicsNumericInput';
/** Q/A is the cross-section mean velocity at the entered volume-flow conditions. */
export const compute:CalcFunction=inputs=>{
 const flow=read(inputs.flow),diameter=read(inputs.diameter);
 const fail=(value:string)=>({primary:{label:'Скорость потока',value:'—'},secondary:[{label:'Проверьте данные',value,accent:'red' as const}]});
 if(!finite(flow,diameter))return fail(INPUT);
 if(!(flow>0))return fail('Расход должен быть больше нуля');
 if(!(diameter>0))return fail('Внутренний диаметр должен быть больше нуля');
 const area=times(exact(Math.PI),exact(diameter),exact(diameter));
 const speed=evaluated(times(exact(flow),exact(4e6)),times(exact(3600),area));
 const squareMm=evaluated(area,exact(4)),lps=evaluated(times(exact(flow),exact(1000)),exact(3600)),lpm=evaluated(times(exact(flow),exact(1000)),exact(60));
 if(!finite(speed,squareMm,lps,lpm))return fail(RANGE);
 return {primary:{label:'Скорость потока',value:`${qty(speed)} м/с`},secondary:[
  {label:'Площадь сечения',value:`${qty(squareMm)} мм²`},{label:'Расход в литрах в секунду',value:`${qty(lps)} л/с`},
  {label:'Расход в литрах в минуту',value:`${qty(lpm)} л/мин`},{label:'Внутренний диаметр',value:`${qty(diameter)} мм`},
 ]};
};
