import type { CalcFunction } from '../../lib/types';
import { read, finite, positive, exact, times, add, negative, evaluated, measure, INPUT, RANGE } from '../../lib/platform/electronicsNumericInput';
import { fmtNumber } from '../../lib/format';
import { formatStatistic } from '../../lib/platform/measurement';
export const compute: CalcFunction = inputs => {
  const vin=read(inputs.vin), r1=read(inputs.r1), r2=read(inputs.r2);
  const fail=(message:string)=>({primary:{label:'Выходное напряжение',value:'—'},secondary:[{label:'Проверьте данные',value:message,accent:'red' as const}]});
  if (!finite(vin,r1,r2)) return fail(INPUT);
  if (!(r1>0)) return fail('Верхнее сопротивление должно быть больше нуля');
  if (!(r2>0)) return fail('Нижнее сопротивление должно быть больше нуля');
  const total=add(exact(r1),exact(r2));
  const current=evaluated(times(exact(vin),exact(1000)),total), vout=evaluated(times(exact(vin),exact(r2)),total);
  const fraction=evaluated(times(exact(r2),exact(100)),total);
  const power=(r:number)=>evaluated(times(exact(vin),exact(vin),exact(r),exact(1000)),times(total,total));
  const upper=power(r1), lower=power(r2);
  if (!finite(current,vout,fraction,upper,lower) || !(fraction>0)) return fail(RANGE);
  return {primary:{label:'Выходное напряжение',value:`${measure(vout)} В`},secondary:[
    {label:'Ток через делитель',value:`${measure(current)} мА`},{label:'Доля от входного',value:`${formatStatistic(fraction,fmtNumber)} %`},
    {label:'Мощность верхнего плеча',value:`${measure(upper)} мВт`},{label:'Мощность нижнего плеча',value:`${measure(lower)} мВт`},
  ]};
};
