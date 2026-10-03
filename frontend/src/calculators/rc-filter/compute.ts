import type { CalcFunction } from '../../lib/types';
import { read, finite, positive, exact, times, add, negative, evaluated, measure, INPUT, RANGE } from '../../lib/platform/electronicsNumericInput';
// First-order unloaded ideal RC: R in Ω, C in nF. 5τ is99.326%, not full charge.
export const compute: CalcFunction = inputs => {
  const r=read(inputs.r), c=read(inputs.c);
  const fail=(message:string)=>({primary:{label:'Частота среза',value:'—'},secondary:[{label:'Проверьте данные',value:message,accent:'red' as const}]});
  if (!finite(r,c)) return fail(INPUT);
  if (!(r>0)) return fail('Сопротивление должно быть больше нуля');
  if (!(c>0)) return fail('Ёмкость должна быть больше нуля');
  const rc=times(exact(r),exact(c));
  const tau=evaluated(rc,exact(1e9)), fiveTau=evaluated(times(rc,exact(5)),exact(1e9));
  const cutoff=evaluated(exact(1e9),times(exact(2*Math.PI),rc));
  if (!positive(tau,fiveTau,cutoff)) return fail(RANGE);
  return {primary:{label:'Частота среза',value:`${measure(cutoff)} Гц`},secondary:[
    {label:'Постоянная времени',value:`${measure(tau)} с`},{label:'Заряд почти до конца',value:`${measure(fiveTau)} с`},
    {label:'Сопротивление',value:`${measure(r)} Ом`},{label:'Ёмкость',value:`${measure(c)} нФ`},
  ]};
};
