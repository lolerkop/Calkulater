import type { CalcFunction } from '../../lib/types';
import { fmtNumber } from '../../lib/format';
import { angleDegrees, INPUT, RANGE, finite, read, plus, quotient, measure, scalar } from './buildingWave16Numeric';
// Equal-pitch symmetric gable model. Overhang is measured ALONG the rafter.
export const compute:CalcFunction=inputs=>{
 const span=read(inputs.span),rise=read(inputs.rise),overhang=read(inputs.overhang);
 const fail=(value:string)=>({primary:{label:'Длина стропила',value:'—'},secondary:[{label:'Проверьте данные',value,accent:'red' as const}]});
 if(!finite(span,rise,overhang))return fail(INPUT);
 if(!(span>0))return fail('Пролёт должен быть больше нуля');
 if(!(rise>0))return fail('Подъём должен быть больше нуля');
 if(overhang<0)return fail('Свес не может быть отрицательным');
 const run=quotient([span],[2]);
 const base=Math.hypot(run,rise),length=plus(base,overhang);
 const angle=angleDegrees(rise,run),slope=quotient([rise,100],[run]);
 if(!finite(run,length,angle,slope)||run<=0||angle<=0||slope<=0)return fail(RANGE);
 return {primary:{label:'Длина стропила',value:`${measure(length)} м`},secondary:[
 {label:'Угол наклона',value:`${measure(angle)}°`},{label:'Заложение',value:`${measure(run)} м`},{label:'Уклон',value:`${scalar(slope,2)}%`} ]};
};
