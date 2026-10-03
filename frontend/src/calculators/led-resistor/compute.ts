import type { CalcFunction } from '../../lib/types';
import { read, finite, positive, exact, times, add, negative, evaluated, measure, mode, MODE, INPUT, RANGE } from '../../lib/platform/electronicsNumericInput';
import { fmtInt } from '../../lib/format';
const sig=(value:number)=>{const n=Number(value.toPrecision(4));return Number.isInteger(n)?Math.abs(n)>=10000?fmtInt(n):String(n):String(n).replace('.',',');};
export const compute: CalcFunction = inputs => {
  const supply=read(inputs.supplyVoltage), forward=read(inputs.forwardVoltage), rawCurrent=read(inputs.current);
  const unit=mode(inputs.currentUnit,'ma',['ma','a']);
  const fail=(message:string)=>({primary:{label:'Сопротивление',value:'—'},secondary:[{label:'Проверьте данные',value:message,accent:'red' as const}]});
  if (!unit) return fail('Выберите миллиамперы или амперы');
  if (!finite(supply,forward,rawCurrent)) return fail(INPUT);
  if (!(supply>0)) return fail('Напряжение питания должно быть больше нуля');
  if (!(forward>0)) return fail('Прямое напряжение должно быть больше нуля');
  if (forward>=supply) return fail('Прямое напряжение должно быть меньше напряжения питания');
  if (!(rawCurrent>0)) return fail('Ток должен быть больше нуля');
  const divisor=exact(unit==='ma'?1000:1), difference=add(exact(supply),negative(exact(forward)));
  const drop=evaluated(difference), currentMilli=evaluated(times(exact(rawCurrent),exact(1000)),divisor);
  const resistance=evaluated(times(difference,divisor),exact(rawCurrent));
  const resistorPower=evaluated(times(difference,exact(rawCurrent)),divisor);
  const ledPower=evaluated(times(exact(forward),exact(rawCurrent)),divisor);
  if (!positive(drop,currentMilli,resistance,resistorPower,ledPower)) return fail(RANGE);
  return {primary:{label:'Сопротивление',value:`${sig(resistance)} Ом`},secondary:[
    {label:'Падение на резисторе',value:`${sig(drop)} В`},{label:'Мощность на резисторе',value:`${sig(resistorPower)} Вт`},
    {label:'Мощность на светодиоде',value:`${sig(ledPower)} Вт`},{label:'Рабочий ток',value:`${sig(currentMilli)} мА`},
  ]};
};
