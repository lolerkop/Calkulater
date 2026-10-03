import type { CalcFunction } from '../../lib/types';
import { fmtNumber } from '../../lib/format';
import { angleDegrees, INPUT, RANGE, finite, read, mul, plus, quotient, decimal, ceilDecimal, measure } from '../rafters/buildingWave16Numeric';
// Chosen riser ceiling and a 0.60–0.65 m product heuristic, not code compliance.
export const compute:CalcFunction=inputs=>{
 const rise=read(inputs.rise_total),tread=read(inputs.tread),maxRiser=read(inputs.max_riser);
 const fail=(value:string)=>({primary:{label:'Подступенков',value:'—'},secondary:[{label:'Проверьте данные',value,accent:'red' as const}]});
 if(!finite(rise,tread,maxRiser))return fail(INPUT);
 if(!(rise>0))return fail('Общий подъём должен быть больше нуля');
 if(!(tread>0))return fail('Проступь должна быть больше нуля');
 if(!(maxRiser>0))return fail('Предельная высота ступени должна быть больше нуля');
 const n=ceilDecimal(decimal(rise),decimal(maxRiser)),h=quotient([rise],[n]),run=mul(n-1,tread),step=plus(mul(2,h),tread),angle=angleDegrees(h,tread);
 if(!finite(n,h,run,step,angle)||h<=0||angle<=0)return fail(RANGE);
 const q=(x:number)=>`${measure(x)} м`,within=step>=0.6&&step<=0.65;
 return {primary:{label:'Подступенков',value:`${fmtNumber(n,0)} шт`},secondary:[{label:'Высота подступенка',value:q(h)},{label:'Проступей',value:`${fmtNumber(n-1,0)} шт`},{label:'Длина марша',value:q(run)},{label:'Угол наклона',value:`${measure(angle)}°`},{label:'Формула удобства 2h + b',value:q(step)},{label:'Оценка шага',value:within?'в диапазоне модели':'вне диапазона модели 0,60–0,65 м',accent:within?'green' as const:'red' as const}]};
};
