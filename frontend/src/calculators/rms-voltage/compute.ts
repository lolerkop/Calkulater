import type { CalcFunction } from '../../lib/types';
import { read, finite, positive, exact, times, add, negative, evaluated, measure, mode as selectMode, MODE, INPUT, RANGE } from '../../lib/platform/electronicsNumericInput';
const CREST:Record<string,number>={sine:Math.SQRT2,square:1,triangle:Math.sqrt(3)};
const MEAN:Record<string,number>={sine:2/Math.PI,square:1,triangle:.5};
export const compute: CalcFunction = inputs => {
  const mode=selectMode(inputs.mode,'peak',['peak','pp','rms']), wave=selectMode(inputs.wave,'sine',['sine','square','triangle']),value=read(inputs.value);
  const fail=(message:string)=>({primary:{label:'Действующее напряжение',value:'—'},secondary:[{label:'Проверьте данные',value:message,accent:'red' as const}]});
  if (!mode) return fail('Выберите, что задано, из списка');
  if (!wave) return fail('Выберите форму сигнала из списка');
  if (!finite(value)) return fail(INPUT);
  if (!(value>0)) return fail('Значение напряжения должно быть больше нуля');
  const crest=exact(CREST[wave]);
  const peakExact=mode==='rms'?times(exact(value),crest):exact(value);
  const denominator=exact(mode==='pp'?2:1);
  const peak=evaluated(peakExact,denominator), rms=mode==='rms'?value:evaluated(peakExact,times(denominator,crest));
  const pp=evaluated(times(peakExact,exact(2)),denominator), mean=evaluated(times(peakExact,exact(MEAN[wave])),denominator);
  if (!positive(peak,rms,pp,mean)) return fail(RANGE);
  return {primary:{label:'Действующее напряжение',value:`${measure(rms)} В`},secondary:[
    {label:'Амплитудное значение',value:`${measure(peak)} В`},{label:'Размах',value:`${measure(pp)} В`},
    {label:'Коэффициент амплитуды',value:measure(CREST[wave])},{label:'Среднее по модулю',value:`${measure(mean)} В`},
  ]};
};
