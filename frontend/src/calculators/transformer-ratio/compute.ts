import type { CalcFunction } from '../../lib/types';
import { read, finite, positive, exact, times, add, negative, evaluated, measure, integer, mode as selectMode, MODE, INPUT, RANGE } from '../../lib/platform/electronicsNumericInput';
export const compute: CalcFunction = inputs => {
  const mode=selectMode(inputs.mode,'secondaryVoltage',['secondaryVoltage','turnsRatio']);
  const v1=read(inputs.v1), i1=read(inputs.i1);
  const label=mode==='turnsRatio'?'Отношение витков':'Вторичное напряжение';
  const fail=(message:string)=>({primary:{label,value:'—'},secondary:[{label:'Проверьте данные',value:message,accent:'red' as const}]});
  if (!mode) return fail(MODE);
  if (!finite(v1,i1)) return fail(INPUT);
  if (!(v1>0)) return fail('Первичное напряжение должно быть больше нуля');
  if (i1<0) return fail('Первичный ток не может быть отрицательным');
  let numerator, denominator, voltage:number;
  if (mode==='turnsRatio') {
    voltage=read(inputs.v2);
    if (!finite(voltage)) return fail(INPUT);
    if (!(voltage>0)) return fail('Вторичное напряжение должно быть больше нуля');
    numerator=exact(voltage);denominator=exact(v1);
  } else {
    const n1=integer(inputs.n1), n2=integer(inputs.n2);
    if (!Number.isSafeInteger(n1) || n1<=0 || !Number.isSafeInteger(n2) || n2<=0) return fail('Число витков должно быть положительным безопасным целым');
    numerator=exact(n2);denominator=exact(n1);
    voltage=evaluated(times(exact(v1),numerator),denominator);
  }
  const ratio=evaluated(numerator,denominator), current=evaluated(times(exact(i1),denominator),numerator);
  const power=evaluated(times(exact(v1),exact(i1)));
  if (!positive(ratio,voltage) || !finite(current,power) || current<0 || power<0) return fail(RANGE);
  return {primary:{label,value:mode==='turnsRatio'?measure(ratio):`${measure(voltage)} В`},secondary:[
    {label:'Отношение витков',value:measure(ratio)},{label:'Вторичный ток',value:`${measure(current)} А`},
    {label:'Мощность',value:`${measure(power)} Вт`},{label:'Тип',value:ratio>1?'повышающий':ratio<1?'понижающий':'1:1'},
  ]};
};
