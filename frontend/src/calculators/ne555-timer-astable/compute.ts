import type { CalcFunction } from '../../lib/types';
import { read, finite, positive, exact, times, add, negative, evaluated, measure, INPUT, RANGE } from '../../lib/platform/electronicsNumericInput';
// Nominal thresholds 1/3 and 2/3 Vcc; times are derived with ln2, not rounded1.44.
export const compute: CalcFunction = inputs => {
  const r1=read(inputs.r1), r2=read(inputs.r2), c=read(inputs.c);
  const fail=(message:string)=>({primary:{label:'Частота',value:'—'},secondary:[{label:'Проверьте данные',value:message,accent:'red' as const}]});
  if (!finite(r1,r2,c)) return fail(INPUT);
  if (!(r1>0) || !(r2>0)) return fail('Сопротивление должно быть больше нуля');
  if (!(c>0)) return fail('Ёмкость должна быть больше нуля');
  const highR=add(exact(r1),exact(r2)), totalR=add(exact(r1),times(exact(2),exact(r2)));
  const timing=times(exact(Math.LN2),exact(c));
  const periodMs=evaluated(times(timing,totalR),exact(1000));
  const highMs=evaluated(times(timing,highR),exact(1000)), lowMs=evaluated(times(timing,exact(r2)),exact(1000));
  const frequency=evaluated(exact(1e6),times(timing,totalR)), duty=evaluated(times(highR,exact(100)),totalR);
  if (!positive(periodMs,highMs,lowMs,frequency,duty)) return fail(RANGE);
  return {primary:{label:'Частота',value:`${measure(frequency)} Гц`},secondary:[
    {label:'Период',value:`${measure(periodMs)} мс`},{label:'Время высокого уровня',value:`${measure(highMs)} мс`},
    {label:'Время низкого уровня',value:`${measure(lowMs)} мс`},{label:'Доля высокого уровня',value:`${measure(duty)} %`},
  ]};
};
