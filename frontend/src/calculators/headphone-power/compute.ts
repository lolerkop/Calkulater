import type { CalcFunction } from '../../lib/types';
import { read, finite, positive, exact, times, add, negative, evaluated, measure, sqrtRatio, INPUT, RANGE } from '../../lib/platform/electronicsNumericInput';
// Declared sensitivity is SPL at 1mW; electrical estimates use a resistive RMS model.
export const compute: CalcFunction = inputs => {
  const sensitivity=read(inputs.sensitivity), r=read(inputs.impedance), power=read(inputs.power);
  const fail=(message:string)=>({primary:{label:'Оценка уровня SPL',value:'—'},secondary:[{label:'Проверьте данные',value:message,accent:'red' as const}]});
  if (!finite(sensitivity,r,power)) return fail(INPUT);
  if (!(r>0)) return fail('Импеданс должен быть больше нуля');
  if (!(power>0)) return fail('Подводимая мощность должна быть больше нуля');
  const gain=10*Math.log10(power), spl=evaluated(add(exact(sensitivity),exact(gain)));
  const voltage=sqrtRatio(times(exact(power),exact(r)),exact(1000));
  const current=sqrtRatio(times(exact(power),exact(1000)),exact(r));
  if (!finite(spl,gain) || !positive(voltage,current)) return fail(RANGE);
  return {primary:{label:'Оценка уровня SPL',value:`${measure(spl)} дБ`},secondary:[
    {label:'Прибавка от мощности',value:`${measure(gain)} дБ`},{label:'Напряжение на выходе',value:`${measure(voltage)} В`},
    {label:'Ток',value:`${measure(current)} мА`},{label:'Импеданс',value:`${measure(r)} Ом`},
  ]};
};
