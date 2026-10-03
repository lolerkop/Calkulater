import type { CalcFunction } from '../../lib/types';
import { read, finite, positive, exact, times, add, negative, evaluated, measure, sqrtRatio, INPUT, RANGE } from '../../lib/platform/electronicsNumericInput';
// Inputs are µH/nF. rho is the capacitor peak-voltage/current-amplitude ratio, not input Z.
export const compute: CalcFunction = inputs => {
  const l=read(inputs.l), c=read(inputs.c);
  const fail=(message:string)=>({primary:{label:'Резонансная частота',value:'—'},secondary:[{label:'Проверьте данные',value:message,accent:'red' as const}]});
  if (!finite(l,c)) return fail(INPUT);
  if (!(l>0)) return fail('Индуктивность должна быть больше нуля');
  if (!(c>0)) return fail('Ёмкость должна быть больше нуля');
  const product=times(exact(l),exact(c));
  const freq=sqrtRatio(exact(1e15),times(exact(2*Math.PI),exact(2*Math.PI),product));
  const period=sqrtRatio(times(exact(2*Math.PI),exact(2*Math.PI),product),exact(1e15));
  const khz=evaluated(exact(freq),exact(1000));
  const rho=sqrtRatio(times(exact(l),exact(1000)),exact(c));
  if (!positive(freq,period,khz,rho)) return fail(RANGE);
  return {primary:{label:'Резонансная частота',value:`${measure(freq)} Гц`},secondary:[
    {label:'В килогерцах',value:`${measure(khz)} кГц`},{label:'Период',value:`${measure(period)} с`},
    {label:'Волновое сопротивление',value:`${measure(rho)} Ом`},{label:'Индуктивность',value:`${measure(l)} мкГн`},
  ]};
};
