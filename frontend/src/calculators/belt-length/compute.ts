import type { CalcFunction } from '../../lib/types';
import { read, valid, dim, exact, add, times, scale, negative, number as rounded, ratio, INPUT, RANGE } from '../../lib/platform/geometryNumericInput';

// Open, uncrossed two-pulley path: second-order length approximation, not a belt selection.
export const compute: CalcFunction = (inputs) => {
  const fail = (message: string) => ({primary:{label:'Длина ремня',value:'—'},secondary:[{label:'Проверьте данные',value:message,accent:'red' as const}]});
  const C=read(inputs.center), d1=read(inputs.d1), d2=read(inputs.d2);
  if (![C,d1,d2].every(Number.isFinite)) return fail(INPUT);
  if (!valid(C,d1,d2)) return fail('Расстояние и оба диаметра должны быть больше нуля');
  // Nonoverlapping pulleys require C > (D1+D2)/2; tangent existence only requires C > |D1-D2|/2.
  if (add(times(exact(2),exact(C)),negative(add(exact(d1),exact(d2)))).coefficient<=0n) return fail('Шкивы пересекаются: оси не могут быть ближе суммы радиусов');
  const small=Math.min(d1,d2), large=Math.max(d1,d2), delta=add(exact(large),negative(exact(small)));
  const correction=ratio(times(delta,delta),times(exact(4),exact(C)));
  const length=rounded(add(times(exact(2),exact(C)),scale(times(exact(Math.PI),add(exact(d1),exact(d2))),-1),exact(correction)));
  if(!valid(length))return fail(RANGE);
  const sinAngle=ratio(delta,times(exact(2),exact(C)));
  const wrap=180-2*Math.asin(sinAngle)*180/Math.PI, transmission=ratio(exact(large),exact(small)), metres=ratio(exact(length),exact(1000));
  if (!valid(length,wrap,transmission,metres)) return fail(RANGE);
  return {primary:{label:'Длина ремня',value:dim(length)+' мм'},secondary:[
    {label:'В метрах',value:dim(metres)+' м'}, {label:'Угол обхвата малого шкива',value:dim(wrap)+' °'},
    {label:'Передаточное отношение',value:dim(transmission)}, {label:'Межосевое расстояние',value:dim(C)+' мм'}]};
};
