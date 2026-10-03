import type { CalcFunction } from '../../lib/types';
import { read, finite, positive, exact, times, add, negative, evaluated, measure, fixed, INPUT, RANGE } from '../../lib/platform/electronicsNumericInput';
// Positive-load energy balance at the explicitly supplied efficiency and terminal voltage.
export const compute: CalcFunction = inputs => {
  const output=read(inputs.outputPower), efficiency=read(inputs.efficiency), voltage=read(inputs.batteryVoltage);
  const fail=(message:string)=>({primary:{label:'Потребляемая мощность',value:'—'},secondary:[{label:'Проверьте данные',value:message,accent:'red' as const}]});
  if (!finite(output,efficiency,voltage)) return fail(INPUT);
  if (!(output>0)) return fail('Выходная мощность должна быть больше нуля');
  if (!(efficiency>0)) return fail('КПД должен быть больше нуля');
  if (efficiency>100) return fail('КПД не может превышать сто процентов');
  if (!(voltage>0)) return fail('Напряжение батареи должно быть больше нуля');
  const input=evaluated(times(exact(output),exact(100)),exact(efficiency));
  const current=evaluated(times(exact(output),exact(100)),times(exact(efficiency),exact(voltage)));
  const loss=evaluated(times(exact(output),add(exact(100),negative(exact(efficiency)))),exact(efficiency));
  if (!positive(input,current) || !finite(loss) || loss<0) return fail(RANGE);
  return {primary:{label:'Потребляемая мощность',value:`${fixed(input,1)} Вт`},secondary:[
    {label:'Ток от батареи',value:`${fixed(current,2)} А`},{label:'Потери',value:`${fixed(loss,1)} Вт`},
    {label:'Полезная мощность',value:`${fixed(output,1)} Вт`},
  ]};
};
