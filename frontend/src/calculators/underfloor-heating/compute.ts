import type { CalcFunction } from '../../lib/types';
import { fmtNumber } from '../../lib/format';
import { INPUT, RANGE, finite, read, exact, add, times, negative, evaluated, decimal, dadd, dminus, ddivide, reserveDecimal, ceilDecimal, measure } from '../rafters/buildingWave16Numeric';
// Continuous A/s estimate in two zones; loop count is a length budget, not a hydraulic design.
export const compute:CalcFunction=inputs=>{
 const area=read(inputs.area),step=read(inputs.step),loopMax=read(inputs.loopMax),edge=read(inputs.edgeZone),edgeStep=read(inputs.edgeStep),waste=read(inputs.waste);
 const fail=(value:string)=>({primary:{label:'Длина трубы',value:'—'},secondary:[{label:'Проверьте данные',value,accent:'red' as const}]});
 if(!finite(area,step,loopMax,edge,edgeStep,waste))return fail(INPUT);
 if(!(area>0))return fail('Площадь должна быть больше нуля');
 if(!(step>0)||!(edgeStep>0))return fail('Шаг укладки должен быть больше нуля');
 if(!(loopMax>0))return fail('Предельная длина петли должна быть больше нуля');
 if(edge<0||edge>=area)return fail('Краевая зона должна быть меньше всей площади');
 if(waste<0||waste>50)return fail('Запас должен быть от 0 до 50 %');
 const main=add(exact(area),negative(exact(edge))),base=add(times(main,exact(edgeStep)),times(exact(edge),exact(step)));
 const denominator=times(exact(step),exact(edgeStep),exact(100));
 const length=evaluated(times(base,add(exact(100),exact(waste))),denominator),mainArea=evaluated(main);
 const baseD=dadd(ddivide(dminus(decimal(area),decimal(edge)),decimal(step)),ddivide(decimal(edge),decimal(edgeStep)));
 const loops=ceilDecimal(reserveDecimal(baseD,waste),decimal(loopMax)),average=Number.isFinite(loops)?evaluated(times(base,add(exact(100),exact(waste))),times(denominator,exact(loops))):NaN;
 if(!finite(length,mainArea,loops,average))return fail(RANGE);
 return {primary:{label:'Длина трубы',value:`${measure(length)} м`},secondary:[{label:'Петель',value:fmtNumber(loops,0)},{label:'На петлю',value:`${measure(average)} м`},{label:'Площадь',value:`${measure(area)} м²`},{label:'Основная зона',value:`${measure(mainArea)} м²`},{label:'Краевая зона',value:`${measure(edge)} м²`}]};
};
