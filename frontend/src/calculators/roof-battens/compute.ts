import type { CalcFunction } from '../../lib/types';
import { fmtNumber } from '../../lib/format';
import { INPUT, RANGE, finite, read, exact, add, times, evaluated, quotient, decimal, ddivide, reserveDecimal, ceilDecimal, measure } from '../rafters/buildingWave16Numeric';
// Continuous area/spacing estimate; discrete end rows and cutting layout are not modeled.
export const compute:CalcFunction=inputs=>{
 const area=read(inputs.area),step=read(inputs.step),battenLength=read(inputs.battenLength),sectionWidth=read(inputs.sectionWidth),sectionHeight=read(inputs.sectionHeight),waste=read(inputs.waste);
 const fail=(value:string)=>({primary:{label:'Погонных метров',value:'—'},secondary:[{label:'Проверьте данные',value,accent:'red' as const}]});
 if(!finite(area,step,battenLength,sectionWidth,sectionHeight,waste))return fail(INPUT);
 if(!(area>0))return fail('Площадь крыши должна быть больше нуля');
 if(!(step>0))return fail('Шаг обрешётки должен быть больше нуля');
 if(!(battenLength>0))return fail('Длина бруска должна быть больше нуля');
 if(!(sectionWidth>0)||!(sectionHeight>0))return fail('Сечение бруска должно быть больше нуля');
 if(waste<0||waste>50)return fail('Запас должен быть от 0 до 50 %');
 const running=evaluated(times(exact(area),add(exact(100),exact(waste))),times(exact(step),exact(100)));
 const pieces=ceilDecimal(reserveDecimal(ddivide(decimal(area),decimal(step)),waste),decimal(battenLength));
 const volume=evaluated(times(exact(area),add(exact(100),exact(waste)),exact(sectionWidth),exact(sectionHeight)),times(exact(step),exact(100),exact(1e6)));
 const metres=quotient([1],[step]);
 if(!finite(running,pieces,volume,metres))return fail(RANGE);
 return {primary:{label:'Погонных метров',value:`${measure(running)} м`},secondary:[{label:'Брусков',value:fmtNumber(pieces,0)},{label:'Объём древесины',value:`${measure(volume)} м³`},{label:'Площадь крыши',value:`${measure(area)} м²`},{label:'Шаг обрешётки',value:`${measure(step)} м`},{label:'Метров на квадратный метр',value:measure(metres)}]};
};
