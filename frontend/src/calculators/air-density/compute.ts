import type { CalcFunction } from '../../lib/types';
import { INPUT, RANGE, MODE, qty } from '../../lib/platform/measurementScalar';
import { read, mode, exact, add, negative, times, evaluated, sqrtRatio, finite } from '../../lib/platform/electronicsNumericInput';
import { fmtNumber } from '../../lib/format';
import { formatStatistic } from '../../lib/platform/measurement';
/** Ideal dry-air/water-vapour mixture. Tetens liquid-water approximation, not an ice model. */
export const compute:CalcFunction=inputs=>{
 const t=read(inputs.t),p=read(inputs.pressure),rh=read(inputs.humidity);
 const fail=(value:string)=>({primary:{label:'Плотность воздуха',value:'—'},secondary:[{label:'Проверьте данные',value,accent:'red' as const}]});
 if(!finite(t,p,rh))return fail(INPUT);
 if(!(p>0))return fail('Атмосферное давление должно быть больше нуля');
 if(rh<0||rh>100)return fail('Относительная влажность задаётся от 0 до 100 процентов');
 if(!(t>-237.3))return fail('Для выбранной формулы Тетенса температура должна быть выше −237,3 °C');
 const k=t+273.15,es=6.1078*Math.pow(10,evaluated(times(exact(7.5),exact(t)),exact(t+237.3)));
 if(!(Number.isFinite(es)&&es>0))return fail(RANGE);
 const e=evaluated(times(exact(es),exact(rh)),exact(100));if(!finite(e))return fail(RANGE);
 if(e>p)return fail('Давление пара выше атмосферного: проверьте температуру и давление');
 const dryP=add(exact(p),negative(exact(e)));
 const rho=evaluated(times(exact(100),add(times(dryP,exact(461.495)),times(exact(e),exact(287.058)))),times(exact(287.058),exact(461.495),exact(k)));
 const dry=evaluated(times(exact(100),exact(p)),times(exact(287.058),exact(k)));
 const deviation=evaluated(times(add(exact(rho),negative(exact(1.225))),exact(100)),exact(1.225));
 if(!finite(rho,dry,deviation))return fail(RANGE);
 return {primary:{label:'Плотность воздуха',value:`${qty(rho)} кг/м³`},secondary:[
 {label:'Плотность сухого воздуха',value:`${qty(dry)} кг/м³`},{label:'Давление водяного пара',value:`${qty(e)} гПа`},
 {label:'Давление насыщения',value:`${qty(es)} гПа`},{label:'Отклонение от 1,225',value:`${formatStatistic(deviation,fmtNumber)} %`}]};
};
