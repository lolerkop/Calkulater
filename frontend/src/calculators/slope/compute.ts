import type { CalcFunction } from '../../lib/types';
import { fmtNumber } from '../../lib/format';
import { read, dim, exact, times, ratio, INPUT, RANGE } from '../../lib/platform/geometryNumericInput';

import { formatStatistic } from '../../lib/platform/measurement';
// Signed one-axis gradient: atan(rise/run), not a bearing around the full circle.
export const compute: CalcFunction = (inputs) => {
 const fail=(message:string)=>({primary:{label:'Уклон',value:'—'},secondary:[{label:'Проверьте данные',value:message,accent:'red' as const}]});
 const rise=read(inputs.rise),run=read(inputs.run);if(![rise,run].every(Number.isFinite))return fail(INPUT);
 if(run===0)return fail('Заложение не может быть нулевым: вертикаль не имеет конечного уклона');
 const gradient=ratio(exact(rise),exact(run)),percent=ratio(times(exact(rise),exact(100)),exact(run)),angle=Math.atan(gradient)*180/Math.PI,length=Math.hypot(rise,run);
 if(![gradient,percent,angle,length].every(Number.isFinite)||!(length>0)||(rise!==0&&(gradient===0||percent===0||angle===0)))return fail(RANGE);
 const percentText=percent!==0&&(Math.abs(percent)<0.005||Math.abs(percent)>=1e12)?dim(percent):fmtNumber(percent,2);
 const statistic=(v:number)=>v!==0&&(Math.abs(v)<1e-7||Math.abs(v)>=1e12)?dim(v):formatStatistic(v,fmtNumber);
 return {primary:{label:'Уклон',value:percentText+'%'},secondary:[{label:'Угол',value:dim(angle)+'°'},
 {label:'Отношение',value:statistic(gradient)},{label:'Длина наклона',value:dim(length)+' м'}]};
};
